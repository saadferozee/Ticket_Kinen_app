import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../Contexts/AuthContext';
import Swal from 'sweetalert2';
import useAxios from '../Hooks/useAxios';
import { useEffect } from 'react';
import Loading from '../Components/Loading';
import { Link } from 'react-router';
import { TbClockExclamation } from 'react-icons/tb';
import { FaCheckCircle } from 'react-icons/fa';

const ManageTickets = () => {
    const { user } = useContext(AuthContext);
    const axiosInstance = useAxios();
    const [loading, setLoading] = useState(true);
    const [tickets, setTickets] = useState([]);

    const handleAccept = id => {
        console.log('accept', id)
    }
    const handleReject = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            // if (result.isConfirmed) {
            //     axiosInstance.delete(`https://adoptyco.vercel.app/listings/delete/${id}`)
            //         .then(response => {
            //             if (response.data.deletedCount == 1) {
            //                 const filteredListings = myListings.filter(product => product?._id !== id);
            //                 setMyListings(filteredListings);
            //                 Swal.fire({
            //                     title: "Deleted!",
            //                     text: "Your product has been deleted.",
            //                     icon: "success"
            //                 });
            //             }
            //         })

            //}
        });

    }

    useEffect(() => {
        axiosInstance.get(`tickets`)
            .then(response => {
                setTickets(response.data);
                setLoading(false);
            })
    }, [user, axiosInstance]);

    return (
        <div className='max-w-[1200px] min-h-[65vh] mx-auto pt-[50px]'>
            <h1 className="mb-3 ml-2 lg:ml-0 flex items-center gap-3 text-2xl lg:text-4xl font-semibold text-[#0A2F23]">
                <span className="w-3 h-10 bg-[#0A2F23] rounded-full"></span>
                <span className="px-8 py-2 bg-[#f7f3e9e5] border-4 border-[#556B2F] rounded-full shadow flex flex-col">
                    <span className='text-xl'>All Tickets</span>
                </span>
            </h1>
            <title>Ticket Kinen | My Tickets</title>
            <div className='mb-[50px] mx-2 lg:mx-0 w-auto p-3 lg:p-5 bg-[#0A2F23] border-2 border-[#D9C296c0] rounded-2xl shadow-2xl shadow-[#0A2F2390] text-[#D9C296]'>
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
                                        <th>Vendor's Name</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        tickets.map(ticket => (
                                            <tr key={ticket?._id} className=''>
                                                {/* <td></td> */}
                                                <td>
                                                    <div className="font-bold w-full">
                                                        {
                                                            ticket?.status === 'pending' ? (
                                                                <span><TbClockExclamation className='text-[22px]' /></span>
                                                            ) : ticket?.status === 'approved' ? (
                                                                <span><FaCheckCircle className='text-[22px]' /></span>
                                                            ) : ticket?.status === 'rejected' && (
                                                                <span><TbXboxXFilled className='text-[22px]' /></span>
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
                                                        <div className="text-sm opacity-65">{ticket?.category}</div>
                                                        <div className="font-bold"><span className='text-xs font-light'>From</span> <span>{ticket?.from}</span> <span className='text-xs font-light'>to</span> <span>{ticket?.to}</span></div>
                                                    </div>
                                                </td>
                                                <td className='w-[100px'><p className='flex gap-1'>{ticket.availableSits} <span>left</span></p></td>
                                                <td>
                                                    <p>{ticket?.price == 0 ? "Free" : `${ticket?.price}tk.`}</p>
                                                </td>
                                                <td><p>{ticket.time}</p></td>
                                                <td><p>{ticket.date}</p></td>
                                                <td className='font-bold'><p>{ticket.vendorName}</p></td>
                                                <th className='flex justify-end gap-2.5'>
                                                    {/* <Link to={`/update-listing/${ticket?._id}`} className="px-4 pt-1.5 pb-1.75 rounded-full bg-[#F7F3E9] font-extralight text-[#556B2F] cursor-pointer">Edit</Link> */}
                                                    <button type='button' onClick={() => handleAccept(ticket?._id)} className="px-4 pt-1.5 pb-1.75 rounded-full bg-[#F7F3E9] font-extralight text-[#0A2F23] cursor-pointer">Approve</button>
                                                    <button type='button' onClick={() => handleReject(ticket?._id)} className="px-4 pt-1.5 pb-1.75 rounded-full bg-[#F7F3E9] font-extralight text-[#ff0000] cursor-pointer">Reject</button>
                                                </th>
                                            </tr>
                                        ))
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