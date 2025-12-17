import React from 'react';
import { FaBusSimple, FaHelicopter, FaPlane, FaShip } from 'react-icons/fa6';
import { TbBottle, TbCircleCheck, TbClockExclamation, TbCoinTaka, TbXboxX } from 'react-icons/tb';
import { GiHotMeal, GiPoliceOfficerHead } from "react-icons/gi";
import { IoFastFoodOutline } from 'react-icons/io5';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const VendorTicketCard = ({ ticket, fetchMyTickets }) => {

    const axiosSecure = useAxiosSecure();

    const handleUpdateButton = (id) => {
        Swal.fire({
            title: "<h2 class='text-2xl font-bold text-[#D9C296] pl-2'>Update Tickets Info</h2>",
            html: `
                <form id="ticketForm" class="w-full px-2">
                <fieldset class="w-full bg-[#0A2F23] border-2 border-[#D9C296c0] shadow-2xl shadow-[#00000070] rounded-3xl p-6 sm:p-10 space-y-4">

                    <input type="text" id="title" placeholder="Ticket Title" value='${ticket?.title}'
                    class="px-6 w-full border border-[#D9C296] rounded-full py-2 bg-transparent text-white" />

                    <div class="flex gap-2">
                    <input type="text" id="from" placeholder="From" value='${ticket?.from}'
                        class="px-6 w-full border border-[#D9C296] rounded-full py-2 bg-transparent text-white" />
                    <input type="text" id="to" placeholder="To" value='${ticket?.to}'
                        class="px-6 w-full border border-[#D9C296] rounded-full py-2 bg-transparent text-white" />
                    </div>

                    <select 
                        id="category"
                        default='${ticket.category}'
                        class="w-full border border-[#D9C296] px-6 rounded-full py-2 bg-[#0A2F23] text-[#D9C296]"
                    >
                        <option disabled selected>Select Transport Type</option>
                        <option value="Bus">Bus</option>
                        <option value="Launch">Launch</option>
                        <option value="Plane">Plane</option>
                        <option value="Helicopter">Helicopter</option>
                    </select>

                    <input type="number" id="price" placeholder="Price (Per Unit)" value='${ticket?.price}'
                    class="px-6 w-full border border-[#D9C296] rounded-full py-2 bg-transparent text-white" />

                    <input type="text" id="availableSits" placeholder="Available Sits" value='${ticket?.availableSits}'
                    class="px-6 w-full border border-[#D9C296] rounded-full py-2 bg-transparent text-white" />

                    <div class="flex gap-2">
                    <input type="date" id="date" value='${ticket?.date}'
                        class="px-6 w-full border border-[#D9C296] rounded-full py-2 bg-transparent text-white" />
                    <input type="time" id="time" value='${ticket?.time}'
                        class="px-6 w-full border border-[#D9C296] rounded-full py-2 bg-transparent text-white" />
                    </div>

                    <div class="w-full grid grid-cols-2 gap-2 text-[#D9C296]">
                        <label class="flex gap-2 items-center">
                            <input type="checkbox" id="Breakfast" ${ticket?.breakfast && 'checked'}
                            class="checkbox border-2 border-[#D9C296] bg-[#0A2F23] checked:bg-[#D9C296]" />
                            Breakfast
                        </label>

                        <label class="flex gap-2 items-center">
                            <input type="checkbox" id="Meal" ${ticket?.meal && 'checked'}
                            class="checkbox border-2 border-[#D9C296] bg-[#0A2F23] checked:bg-[#D9C296]" />
                            Meal
                        </label>

                        <label class="flex gap-2 items-center">
                            <input type="checkbox" id="Water" ${ticket?.water && 'checked'}
                            class="checkbox border-2 border-[#D9C296] bg-[#0A2F23] checked:bg-[#D9C296]" />
                            Drinking Water
                        </label>

                        <label class="flex gap-2 items-center">
                            <input type="checkbox" id="Security" ${ticket?.security && 'checked'}
                            class="checkbox border-2 border-[#D9C296] bg-[#0A2F23] checked:bg-[#D9C296]" />
                            VIP Security
                        </label>
                    </div>

                </fieldset>
                </form>
            `,
            showCancelButton: true,
            confirmButtonText: "Confirm Update",
            cancelButtonText: "Cancel",

            customClass: {
                popup: "custom-swal-popup-update",
                confirmButton: "custom-confirm-btn-update",
                cancelButton: "custom-cancel-btn-update"
            },
            didOpen: () => {
                document.getElementById("category").value = ticket?.category;
            },

            preConfirm: () => {
                return {
                    title: document.getElementById("title").value,
                    from: document.getElementById("from").value,
                    to: document.getElementById("to").value,
                    category: document.getElementById("category").value,
                    price: document.getElementById("price").value,
                    availableSits: document.getElementById("availableSits").value,
                    date: document.getElementById("date").value,
                    time: document.getElementById("time").value,
                    breakfast: document.getElementById("Breakfast").checked,
                    meal: document.getElementById("Meal").checked,
                    water: document.getElementById("Water").checked,
                    security: document.getElementById("Security").checked,
                };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(result.value);
                // update to backend
                axiosSecure.patch(`/tickets/ticket/update/${id}`, result.value)
                    .then(res => {
                        if (res.data.modifiedCount) {
                            fetchMyTickets();
                            Swal.fire({
                                title: "Updated!!",
                                text: `Ticket Information Updated Successfully.`,
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
                    });
            }
        })
    }
    const handleDeleteButton = (id) => {
        axiosSecure.delete(`/tickets/delete/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    Swal.fire({
                        title: "Deleted!!",
                        text: `Booking Deleted Successfully.`,
                        icon: "success"
                    });
                    fetchMyTickets();
                }
            })
    }

    return (
        <div>
            <div className="h-full flex flex-col justify-between rounded-3xl bg-[#0A2F23] text-[#D9C296] shadow-sm">
                <figure className="px-4 pt-4">
                    <img
                        src={ticket?.photoURL}
                        alt="Shoes"
                        className="rounded-xl w-full h-50 object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <div className='w-full flex justify-between'>
                        <h3 className='border rounded-full py-0.5 pl-1 pr-2'>
                            {
                                ticket?.status === 'pending' ? (
                                    <span className='flex items-center gap-1 font-light text-[12px]'><TbClockExclamation className='text-[16px] text-yellow-600' /> Pending</span>
                                ) : ticket?.status === 'approved' ? (
                                    <span className='flex items-center gap-1 font-light text-[12px]'><TbCircleCheck className='text-[16px] text-green-500' /> Approved</span>
                                ) : ticket?.status === 'rejected' && (
                                    <span className='flex items-center gap-1 font-light text-[12px]'><TbXboxX className='text-[16px] text-red-500' /> Rejected</span>
                                )
                            }
                        </h3>
                        <h3 className='border rounded-full py-0.5 px-2'>
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
                    </div>
                    <div className='w-full text-left'>
                        <h2 className="font-light text-xs title">{ticket?.title}</h2>
                        <h3 className="card-title font-bold flex items-baseline"><span className='text-xs font-light'>From</span> <span>{ticket?.from}</span> <span className='text-xs font-light'>to</span> <span>{ticket?.to}</span></h3>
                        <h3 className="card-title font-semibold font-mono flex items-baseline"><span className='text-xs font-light'>Time:</span> <span>{ticket?.time}</span> <span className='text-xs font-light'>Date:</span> <span>{ticket?.date}</span></h3>
                    </div>
                    <div className='w-full flex grow gap-3'>
                        {ticket?.breakfast && <h4 className='flex items-center gap-1 font-light text-[12px]'><IoFastFoodOutline className='text-[15px] text-yellow-600' /> Breakfast</h4>}
                        {ticket?.meal && <h4 className='flex items-center gap-1 font-light text-[12px]'><GiHotMeal className='text-[15px] text-yellow-600' /> Lunch</h4>}
                        {ticket?.water && <h4 className='flex items-center gap-1 font-light text-[12px]'><TbBottle className='text-[15px] text-yellow-600' /> Water</h4>}
                        {ticket?.security && <h4 className='flex items-center gap-1 font-light text-[12px]'><GiPoliceOfficerHead className='text-[15px] text-yellow-600' /> VIP Security</h4>}
                    </div>
                    <div className='w-full text-lg flex justify-between'>
                        <h5 className=""><span className='flex items-baseline'>
                            <span className='text-[12px]'>Price : &nbsp;</span>
                            <span className='flex items-center'>
                                <span className='font-bold'>{ticket?.price}</span>
                                {/* &nbsp; */}
                                <TbCoinTaka className='mb-2 ml-0.5 text-[16px] ' />
                            </span>
                        </span></h5>
                        <h5 className=""><span className='flex items-baseline'>
                            <span className='text-[12px]'>Sits Available : &nbsp;</span>
                            <span className='flex items-center'>
                                <span className='font-bold'>{ticket?.availableSits}</span>
                                {/* &nbsp; */}
                                {/* <TbCoinTaka className='mb-2 ml-0.5 text-[16px] ' /> */}
                            </span>
                        </span></h5>
                    </div>
                    {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                    <div className="w-full flex gap-3">
                        <button onClick={() => handleUpdateButton(ticket?._id)} disabled={ticket?.status === 'rejected'} className="w-full py-1 bg-[#F7F3E9] shadow-[#F7F3E9] border-transparent rounded-full disabled:cursor-not-allowed font-light text-[#0A2F23] disabled:opacity-65 cursor-pointer">Update</button>
                        <button onClick={() => handleDeleteButton(ticket?._id)} disabled={ticket?.status === 'rejected'} className="w-full py-1 bg-[#F7F3E9] shadow-[#F7F3E9] border-transparent rounded-full disabled:cursor-not-allowed font-light text-red-500 disabled:opacity-65 cursor-pointer">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorTicketCard;