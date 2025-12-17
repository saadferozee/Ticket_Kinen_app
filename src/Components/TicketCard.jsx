import React from 'react';
import { FaBusSimple, FaHelicopter, FaPlane, FaShip } from 'react-icons/fa6';
import { GiHotMeal, GiPoliceOfficerHead } from 'react-icons/gi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { TbBottle, TbCircleCheck, TbClockExclamation, TbCoinTaka, TbXboxX } from 'react-icons/tb';
import { Link } from 'react-router';

const TicketCard = ({ ticket }) => {
    return (
        <div className='flex flex-col justify-between'>
            <div className="card bg-[#0A2F23] rounded-3xl text-[#D9C296] shadow-sm">
                <figure className="px-4 pt-4">
                    <img
                        src={ticket?.photoURL}
                        alt="Shoes"
                        className="rounded-xl w-full h-50 object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                    <div className='w-full flex justify-end'>
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
                        <h3 className="card-title font-semibold text-md flex items-baseline"><span className='text-xs font-light'>Time :</span> <span className='font-mono font-medium'>{ticket?.time}</span> <span className='text-xs font-light'>Date :</span> <span className='font-mono font-medium'>{ticket?.date}</span></h3>
                    </div>
                    <div className='w-full flex grow gap-3'>
                        {ticket?.breakfast && <h4 className='flex items-center gap-1 font-light text-[12px]'><IoFastFoodOutline className='text-[15px] text-yellow-600' /> Breakfast</h4>}
                        {ticket?.meal && <h4 className='flex items-center gap-1 font-light text-[12px]'><GiHotMeal className='text-[15px] text-yellow-600' /> Lunch</h4>}
                        {ticket?.water && <h4 className='flex items-center gap-1 font-light text-[12px]'><TbBottle className='text-[15px] text-yellow-600' /> Water</h4>}
                        {ticket?.security && <h4 className='flex items-center gap-1 font-light text-[12px]'><GiPoliceOfficerHead className='text-[15px] text-yellow-600' /> VIP Security</h4>}
                    </div>
                    <div className='w-full flex justify-between'>
                        <h5 className="">
                            <span className='flex items-baseline'>
                                <span className='text-[12px]'>Price : &nbsp;</span>
                                <span className='flex items-center'>
                                    <span className='font-bold'>{ticket?.price}</span>
                                    {/* &nbsp; */}
                                    <TbCoinTaka className='mb-2 ml-0.5 text-[16px] ' />
                                </span>
                            </span>
                        </h5>
                        <h5 className="">
                            <span className='flex items-baseline'>
                                <span className='text-[12px]'>Sits Available : &nbsp;</span>
                                <span className='flex items-center'>
                                    <span className='font-bold'>{ticket?.availableSits}</span>
                                    {/* &nbsp; */}
                                    {/* <TbCoinTaka className='mb-2 ml-0.5 text-[16px] ' /> */}
                                </span>
                            </span>
                        </h5>
                    </div>
                    {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
                    <div className="w-full flex">
                        <Link to={`/ticket/${ticket?._id}`} className="w-full py-1 bg-[#F7F3E9] shadow-[#F7F3E9] border-transparent rounded-full font-light text-[#0A2F23] disabled:opacity-65 cursor-pointer">See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketCard;