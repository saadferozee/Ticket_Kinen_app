import React from 'react';
import { FaBusSimple, FaHelicopter, FaPlane, FaShip } from 'react-icons/fa6';
import { GiHotMeal, GiPoliceOfficerHead } from 'react-icons/gi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { TbBottle, TbCircleCheck, TbClockExclamation, TbCoinTaka, TbXboxX } from 'react-icons/tb';
import { BsCreditCard } from "react-icons/bs";
import CountdownTimer from './CountdownTimer';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const UserTicketCard = ({ ticket, myBookings, setMyBookings }) => {

    const axiosSecure = useAxiosSecure();

    const handleCancelBooking = id => {
        const updateBookings = myBookings.filter(booking => booking._id !== id);
        axiosSecure.delete(`/bookings/delete/${id}`)
            .then(res => {
                Swal.fire({
                    title: "Deleted!!",
                    text: `Booking Deleted Successfully.`,
                    icon: "success"
                });
                setMyBookings(updateBookings);
            })
    }

    return (
        <div>
            <div className="card bg-[#0A2F23] border-2 border-[#D9C296c0] text-[#D9C296] shadow-sm">
                <figure className="px-4 pt-4">
                    <img
                        src={ticket?.photoURL}
                        alt="Shoes"
                        className="rounded-xl w-full h-[200px] object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <div className='w-full flex justify-between'>
                        <h3 className='border rounded-full py-0.5 pl-1 pr-2'>
                            {
                                ticket?.bookingStatus === 'pending' ? (
                                    <span className='flex items-center gap-1 font-light text-[12px]'><TbClockExclamation className='text-[16px] text-yellow-600' /> Pending</span>
                                ) : ticket?.bookingStatus === 'approved' ? (
                                    <span className='flex items-center gap-1 font-light text-[12px]'><TbCircleCheck className='text-[16px] text-green-500' /> Approved</span>
                                ) : ticket?.bookingStatus === 'rejected' && (
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
                    <div className='w-full flex text-lg justify-between'>
                        <h5 className=""><span className='flex items-baseline'>
                            <span className='text-[12px]'>Total Price : &nbsp;</span>
                            <span className='flex items-center'>
                                <span className='font-bold'>{ticket?.totalPrice}</span>
                                {/* &nbsp; */}
                                <TbCoinTaka className='mb-2 ml-0.5 text-[16px] ' />
                            </span>
                        </span></h5>
                        <h5 className=""><span className='flex items-baseline'>
                            <span className='text-[12px]'>Seats Quantity : &nbsp;</span>
                            <span className='flex items-center'>
                                <span className='font-bold'>{ticket?.bookingQuantity}</span>
                                {/* &nbsp; */}
                                {/* <TbCoinTaka className='mb-2 ml-0.5 text-[16px] ' /> */}
                            </span>
                        </span></h5>
                    </div>
                    {
                        ticket?.bookingStatus === 'rejected' || (
                            <div className='w-full flex flex-col space-y-0.5'>
                                <hr />
                                <CountdownTimer targetDateTime={`${ticket?.date}T${ticket?.time}`}></CountdownTimer>
                                <hr />
                            </div>
                        )
                    }
                    {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                    <div className="w-full flex gap-3">
                        {
                            ticket?.bookingStatus === 'approved' ? (
                                ticket?.payment === 'pending' ? (
                                    <button className="w-full py-1 bg-[#F7F3E9] shadow-[#F7F3E9] border-transparent rounded-full font-normal text-[#0A2F23] disabled:opacity-85 disabled:cursor-not-allowed cursor-pointer">Pay Now</button>
                                ) : ticket?.payment === 'paid' && (
                                    <button disabled className="w-full py-1 bg-[#F7F3E9] shadow-[#F7F3E9] border-transparent rounded-full disabled:cursor-not-allowed font-normal text-[#0A2F23] disabled:opacity-85 cursor-pointer">Already Paid</button>
                                )
                            ) : ticket?.bookingStatus === 'pending' ? (
                                <button onClick={() => handleCancelBooking(ticket?._id)} className="w-full py-1 bg-[#F7F3E9] shadow-[#F7F3E9] border-transparent rounded-full disabled:cursor-not-allowed font-normal text-red-500 disabled:opacity-85 cursor-pointer">Cancel</button>
                            ) : ticket?.bookingStatus === 'rejected' && (
                                <button disabled className="w-full py-1 bg-[#F7F3E9] shadow-[#F7F3E9] border-transparent rounded-full disabled:cursor-not-allowed font-normal text-red-500 disabled:opacity-85 cursor-pointer">Rejected</button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserTicketCard;