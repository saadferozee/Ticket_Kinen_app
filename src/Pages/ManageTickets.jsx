import React from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import Loading from '../Components/Loading';
import { TbCircleCheck, TbClockExclamation, TbXboxX } from 'react-icons/tb';
import { FaBusSimple, FaHelicopter, FaPlane, FaShip } from 'react-icons/fa6';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const ManageTickets = () => {
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(true);
    const [tickets, setTickets] = useState([]);

    const fetchTickets = () => {
        axiosSecure.get(`tickets`)
            .then(response => {
                setTickets(response.data);
                setLoading(false);
            })
    }
    const handleTicketStatus = (id, status) => {
        axiosSecure.patch(`/tickets/update/status?id=${id}&status=${status}`)
            .then(res => {
                Swal.fire({
                    title: `${status === 'approved' ? 'Approved' : 'Rejected'}!!`,
                    text: `Ticket Status Changed Successfully.`,
                    icon: "success"
                });
                res.data.modifiedCount && fetchTickets();
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchTickets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // It's not an error, it's an warning.

    return (
        <div className='max-w-300 min-h-[65vh] mx-auto pt-12.5'>
            <title>Ticket Kinen | My Tickets</title>
            <h1 className="mb-3 ml-2 lg:ml-0 flex items-center gap-3 text-2xl lg:text-4xl font-semibold text-[#0A2F23]">
                <span className="w-3 h-10 bg-[#0A2F23] rounded-full"></span>
                <span className="px-8 py-2 bg-[#f7f3e9e5] border-4 border-[#556B2F] rounded-full shadow flex flex-col">
                    <span className='text-xl'>All Tickets</span>
                </span>
            </h1>
            <div className='mb-12.5 mx-2 lg:mx-0 w-auto p-3 lg:p-5 bg-[#0A2F23] border-2 border-[#D9C296c0] rounded-2xl shadow-2xl shadow-[#0A2F2390] text-[#D9C296]'>
                {
                    loading ? (
                        <Loading viewHeight={40} color={'#0A2F23'}></Loading>
                    ) : tickets.length < 1 ? (
                        <div className='min-h-[40vh] flex items-center justify-center'>
                            <h1 className='text-2xl'>Nothing to show, No ticket has been added.</h1>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead className='text-[#D9C296]'>
                                    <tr className=''>
                                        <th></th>
                                        <th>Photo</th>
                                        <th>Details</th>
                                        <th>Sits</th>
                                        <th>Price</th>
                                        <th>Time</th>
                                        <th>Date</th>
                                        <th>Vendor</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        tickets.map(ticket =>
                                            ticket?.availableSits > 1 && (
                                                <tr key={ticket?._id} className=''>
                                                    {/* <td></td> */}
                                                    <td>
                                                        <div className="font-bold w-full">
                                                            {
                                                                ticket?.status === 'pending' ? (
                                                                    <span><TbClockExclamation className='text-[22px] text-yellow-600' /></span>
                                                                ) : ticket?.status === 'approved' ? (
                                                                    <span><TbCircleCheck className='text-[22px] text-green-500' /></span>
                                                                ) : ticket?.status === 'rejected' && (
                                                                    <span><TbXboxX className='text-[22px] text-red-500' /></span>
                                                                )
                                                            }
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex items-center gap-3">

                                                            <div className="avatar">
                                                                <div className="mask mask-squircle h-12 w-12">
                                                                    <img
                                                                        src={ticket?.photoURL}
                                                                        alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </td>
                                                    <td className='w-[400px'>
                                                        <div>
                                                            <h3 className="text-sm opacity-85">
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
                                                            <div className="font-bold"><span className='text-sm font-light'>From</span> <span>{ticket?.from}</span> <span className='text-xs font-light'>to</span> <span>{ticket?.to}</span></div>
                                                        </div>
                                                    </td>
                                                    <td className='w-[100px'><p className='flex gap-1'>{ticket.availableSits} <span>left</span></p></td>
                                                    <td>
                                                        <p>{ticket?.price == 0 ? "Free" : `${ticket?.price} tk.`}</p>
                                                    </td>
                                                    <td><p>{ticket.time}</p></td>
                                                    <td><p>{ticket.date}</p></td>
                                                    <td className='font-bold'><p>{ticket.vendorName}</p></td>
                                                    <th className='flex justify-end gap-2.5'>
                                                        {
                                                            ticket?.status === 'pending' ? (
                                                                <>
                                                                    <button type='button' onClick={() => handleTicketStatus(ticket?._id, 'approved')} className="px-4 pt-1.5 pb-1.75 rounded-full bg-[#F7F3E9] font-light text-[#0A2F23] cursor-pointer">Approve</button>
                                                                    <button type='button' onClick={() => handleTicketStatus(ticket?._id, 'rejected')} className="px-4 pt-1.5 pb-1.75 rounded-full bg-[#F7F3E9] font-light text-[#ff0000] cursor-pointer">Reject</button>
                                                                </>
                                                            ) : (
                                                                <div className='w-full h-12 flex justify-between items-center gap-2'>
                                                                        {
                                                                        ticket?.status === 'approved' ? (
                                                                            <h2 className='w-full text-center text-green-500'>Approved</h2>
                                                                        ) : ticket?.status === 'rejected' ? (
                                                                            <h2 className='w-full text-center text-red-500'>Rejected</h2>
                                                                        ) : (
                                                                            <h2 className='w-full text-center'>{ticket?.status}</h2>
                                                                        )
                                                                        }
                                                                </div>
                                                            )
                                                        }
                                                    </th>
                                                </tr>
                                            )
                                        )

                                    }

                                </tbody>
                            </table>
                        </div>
                    )
                }

            </div>
        </div>
    );

};

export default ManageTickets;