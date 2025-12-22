import React from 'react';
import { FaBusSimple, FaHelicopter, FaPlane, FaShip } from 'react-icons/fa6';
import { GiHotMeal, GiPoliceOfficerHead } from 'react-icons/gi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { TbBottle, TbCoinTaka } from 'react-icons/tb';
import isTimeUp from '../Functions/IsTimeUp';
import ReactTooltip from '../Elements/ReactTooltip';
import { Link } from 'react-router';

const AdvertisedTicketCard = ({ ticket }) => {
    return (
        <div>
            <div className='w-full box-border bg-[#D9C296] p-3.5 border-2 border-[#D9C296] rounded-lg'>
                <div className='flex justify-between gap-2'>
                    <div className="avatar">
                        <div className="mask mask-squircle h-20 w-20 p-">
                            <img
                                src={ticket?.photoURL}
                                className='object-cover'
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className='flex flex-col items-end justify-around'>
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
                        <h3 className='flex gap-2 text-sm'>
                            <span>
                                <span className='flex items-baseline'>
                                    <span className='text-[12px]'>Time: &nbsp;</span>
                                    <span className='flex items-center'>
                                        <span>{ticket?.time}</span>
                                        {/* &nbsp; */}
                                        {/* <TbCoinTaka className='mb-2 ml-0.5 text-[16px] ' /> */}
                                    </span>
                                </span>
                            </span>
                            <span>
                                <span className='flex items-baseline'>
                                    <span className='text-[12px]'>Date: &nbsp;</span>
                                    <span className='flex items-center'>
                                        <span>{ticket?.date}</span>
                                        {/* &nbsp; */}
                                        {/* <TbCoinTaka className='mb-2 ml-0.5 text-[16px] ' /> */}
                                    </span>
                                </span>
                            </span>
                        </h3>
                        <div>
                            <h3 className="card-title font-semibold text-sm text-right flex items-baseline"><span className='text-xs font-light'>From</span> <span>{ticket?.from}</span> <span className='text-xs font-light'>to</span> <span>{ticket?.to}</span></h3>
                        </div>
                        <hr className='w-full my-1' />
                    </div>
                </div>
                <div className='flex justify-end gap-3'>
                    <div>
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
                    </div>
                    <div>
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
                </div>
                <div className='w-full flex justify-end grow gap-3'>
                    {ticket?.breakfast && <h4 className='flex items-center gap-1 font-light text-[12px]'><IoFastFoodOutline className='text-[15px] text-yellow-900' /> Breakfast</h4>}
                    {ticket?.meal && <h4 className='flex items-center gap-1 font-light text-[12px]'><GiHotMeal className='text-[15px] text-yellow-900' /> Lunch</h4>}
                    {ticket?.water && <h4 className='flex items-center gap-1 font-light text-[12px]'><TbBottle className='text-[15px] text-yellow-900' /> Water</h4>}
                    {ticket?.security && <h4 className='flex items-center gap-1 font-light text-[12px]'><GiPoliceOfficerHead className='text-[15px] text-yellow-900' /> VIP Security</h4>}
                </div>
                <div className="w-full flex">
                    <Link to={`/ticket/${ticket?._id}`} className="w-full mt-2 py-0.5 bg-[#D9C296] shadow-[#F7F3E9] border border-[#0A2F23c0] rounded-full font-light text-center text-sm text-[#0A2F23] disabled:opacity-65 cursor-pointer">
                        {
                            isTimeUp(ticket?.date, ticket?.time) ? (
                                <ReactTooltip id={'ticket-details'} content={'Departure Time Passed'} place={'top-start'}>See Details</ReactTooltip>
                            ) : 'See Details'
                        }

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedTicketCard;