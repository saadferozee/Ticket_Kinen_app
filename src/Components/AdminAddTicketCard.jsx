import React from 'react';
import { FaBusSimple, FaHelicopter, FaPlane, FaShip } from 'react-icons/fa6';

const AdminAddTicketCard = ({ ticket }) => {

    return (
        <div className='w-full box-border p-3.5 border-2 border-[#D9C296] rounded-lg flex justify-between gap-2'>
            <div className="avatar">
                <div className="mask mask-squircle h-20 w-20">
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
            </div>
        </div>
    );
};

export default AdminAddTicketCard;