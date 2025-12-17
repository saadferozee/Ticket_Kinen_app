import React from 'react';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useParams } from 'react-router';
import { TbBottle, TbCoinTaka } from 'react-icons/tb';
import Loading from '../Components/Loading';
import { FaBusSimple, FaHelicopter, FaPlane, FaShip } from 'react-icons/fa6';
import CountdownTimer from '../Components/CountdownTimer';
import { IoFastFoodOutline } from 'react-icons/io5';
import { GiHotMeal, GiPoliceOfficerHead } from 'react-icons/gi';
import isTimeUp from '../Functions/IsTimeUp';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import AuthContext from '../Contexts/AuthContext';

const TicketDetails = () => {

    const { id } = useParams()
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [ticket, setTicket] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleBookNowButton = () => {
        const availableSit = ticket?.availableSits;

        Swal.fire({
            title: "<strong class='text-xl font-bold text-[#D9C296]'>Ticket Booking Form</strong>",
            html: `
                <form id="bookingForm" class="w-full px-2">
                <fieldset class="w-full bg-[#0A2F23] border-2 border-[#D9C296c0] shadow-2xl rounded-3xl p-6 space-y-4">

                    <input 
                        type="number" 
                        id="quantity" 
                        name="quantity" 
                        class="px-6 w-full border border-[#D9C296] rounded-full py-2" 
                        placeholder="Enter Quantity" 
                        required
                    />

                    <input 
                        type="text" 
                        id="info" 
                        readonly 
                        class="px-6 w-full border border-[#D9C296] rounded-full py-2 bg-[#0A2F23] text-[#D9C296]"
                    />

                </fieldset>
                </form>
            `,
            showCancelButton: true,
            confirmButtonText: "Confirm Booking",
            cancelButtonText: "Cancel",

            customClass: {
                confirmButton: "custom-confirm-btn",
                cancelButton: "custom-cancel-btn",
                popup: "custom-swal-popup"
            },

            didOpen: () => {
                const qtyInput = document.getElementById("quantity");
                const infoInput = document.getElementById("info");

                // show available seats
                infoInput.value = 'Available Seats :' + availableSit;

                qtyInput.addEventListener("input", () => {
                    let qty = parseInt(qtyInput.value) || 0;

                    // if quantity is greater than available seats
                    if (qty > availableSit) {
                        qtyInput.value = availableSit; // limit the input
                        qty = availableSit;
                    }

                    infoInput.value = "Total Price: " + (ticket.price * qty) + " BDT";
                });
            },
            preConfirm: () => {
                const qty = parseInt(document.getElementById("quantity").value);

                if (!qty || qty < 1) {
                    Swal.showValidationMessage("Please enter a valid quantity");
                    return false;
                }

                return { quantity: qty };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const quantity = result.value.quantity;
                const bookingData = {
                    userEmail: user?.email,
                    userName: user?.displayName,
                    ticketId: ticket?._id,
                    title: ticket?.title,
                    category: ticket?.category,
                    bookingStatus: 'pending',
                    vendorName: ticket?.vendorName,
                    vendorEmail: ticket?.vendorEmail,
                    from: ticket?.from,
                    to: ticket?.to,
                    date: ticket?.date,
                    time: ticket?.time,
                    bookingQuantity: quantity,
                    totalPrice: ticket?.price * quantity,
                    payment: 'pending',
                    photoURL: ticket?.photoURL,
                }
                // Sending data to server.
                axiosSecure.post('/bookings', bookingData)
                    .then(response => {
                        if (response.status == 200) {
                            // sweet alert
                            Swal.fire({
                                title: "Booked!!",
                                text: `Ticket Booked Successfully, Now Wait for Vendors's Confirmation.`,
                                icon: "success"
                            });
                        };
                    })
                    .catch(error => {
                        Swal.fire({
                            title: "Something went wrong!!",
                            text: `Ticket Booking Failed, Try Again. Error: ${error.message}`,
                            icon: "error"
                        });
                    })
            }
        });
    }

    useEffect(() => {
        axiosSecure.get(`/tickets/ticket/${id}`)
            .then(res => {
                setTicket(res.data);
                setLoading(false);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    return (
        <div className='max-w-300 mx-auto'>
            <title>Ticket Kinen | Ticket Details</title>
            <div className=' min-h-[70vh] flex flex-col items-center'>
                <div className='mx-[3%] lg:min-w-175 my-8 lg:my-auto p-[2%] border-2 border-[#D9C29695] rounded-4xl bg-[#0A2F23] text-[#D9C296] flex flex-col lg:flex-row gap-10'>
                    {
                        loading ? <Loading viewHeight={40} color={'#556B2F'}></Loading> : (
                            <>
                                <div className='w-full lg:w-[45%]'>
                                    <img className='rounded-2xl w-full h-full object-cover' src={ticket?.photoURL} alt="" />
                                </div>
                                <div className='w-full lg:w-[55%] flex flex-col justify-end'>
                                    <h3 className="w-fit py-1 px-4 text-sm opacity-85 border-2 border-[#D9C296] rounded-full">
                                        {
                                            ticket?.category === 'Bus' ? (
                                                <span className='flex items-center gap-1 font-light text-[12px]'><FaBusSimple className='text-[14px] text-yellow-600' /> Bus</span>
                                            ) : ticket?.category === 'Launch' ? (
                                                <span className='flex items-center gap-1 font-light text-[12px]'><FaShip className='text-[14px] text-green-500' /> Launch</span>
                                            ) : ticket?.category === 'Helicopter' ? (
                                                <span className='flex items-center gap-1 font-light text-[12px]'><FaHelicopter className='text-[14px] text-green-500' /> Helicopter</span>
                                            ) : ticket?.category === 'Plane' && (
                                                <span className='flex items-center gap-1 font-light text-[12px]'><FaPlane className='text-[14px] text-red-500' /> Plane</span>
                                            )
                                        }
                                    </h3>
                                    <h1 className='my-1 text-4xl text-[#F7F3E9] text-shadow-lg text-shadow-[#556B2F]'>{ticket?.title}</h1>
                                    <div className='w-full text-left'>
                                        <h3 className="card-title font-bold text-2xl flex items-baseline"><span className='text-xs font-light'>From</span> <span>{ticket?.from}</span> <span className='text-xs font-light'>to</span> <span>{ticket?.to}</span></h3>
                                        <h3 className="card-title font-semibold text-xl flex items-baseline"><span className='text-xs font-light'>Time :</span> <span>{ticket?.time}</span> <span className='text-xs font-light'>Date :</span> <span>{ticket?.date}</span></h3>
                                    </div>
                                    <hr className='my-6 opacity-40 border' />
                                    <div className='w-full flex grow gap-3'>
                                        <span>Included :</span>
                                        {ticket?.breakfast && <h4 className='flex items-center gap-1 font-light text-md'><IoFastFoodOutline className='text-[24px] text-yellow-600' /> Breakfast</h4>}
                                        {ticket?.meal && <h4 className='flex items-center gap-1 font-light text-md'><GiHotMeal className='text-[24px] text-yellow-600' /> Lunch</h4>}
                                        {ticket?.water && <h4 className='flex items-center gap-1 font-light text-md'><TbBottle className='text-[24px] text-yellow-600' /> Water</h4>}
                                        {ticket?.security && <h4 className='flex items-center gap-1 font-light text-md'><GiPoliceOfficerHead className='text-[24px] text-yellow-600' /> VIP Security</h4>}
                                    </div>
                                    <hr className='my-6 opacity-40 border' />
                                    <div className='flex justify-around'>
                                        <h2 className='font-black text-3xl'>
                                            {ticket?.price == 0 ? 'Free' : (
                                                <span className='flex items-baseline'>
                                                    <span className='text-[18px]'>Price : &nbsp;</span>
                                                    <span className='flex items-center'>
                                                        <span>{ticket?.price}</span>
                                                        {/* &nbsp; */}
                                                        <TbCoinTaka className='mb-2 ml-0.5 text-[22px] ' />
                                                    </span>
                                                </span>
                                            )}
                                        </h2>
                                        <h5 className="font-black text-3xl">
                                            <span className='flex items-baseline'>
                                                <span className='text-[18px]'>Sits Available : &nbsp;</span>
                                                <span className='flex items-center'>
                                                    <span className='font-bold'>{ticket?.availableSits}</span>
                                                    {/* &nbsp; */}
                                                </span>
                                            </span>
                                        </h5>
                                    </div>
                                    {/* <h2 className='text-lg'>Rating : <span className='font-bold'>{rating}</span> Star</h2> */}
                                    {/* <h4 className='text-lg'>Available Slots : <span className='font-bold'>{slotsAvailable}</span> <span className='text-sm'>(before tomorrow)</span></h4> */}
                                    <hr className='my-6 opacity-40 border' />
                                    <div className='flex justify-center'>
                                        <h5>Time Left: &nbsp;</h5>
                                        <CountdownTimer targetDateTime={`${ticket.date}T${ticket.time}`} />
                                    </div>
                                    <button
                                        onClick={() => handleBookNowButton()}
                                        disabled={isTimeUp(ticket?.date, ticket?.time) || ticket?.availableSits < 1}
                                        className='mt-4 px-8 pt-1.5 pb-1.75 border-2 border-[#D9C29690] rounded-full bg-[#0A2F23] hover:bg-[#0A2F2390] text-center text-[#D9C296] title cursor-pointer disabled:cursor-not-allowed'
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default TicketDetails;