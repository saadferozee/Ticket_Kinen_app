import React from 'react';
import { useState } from 'react';
import Loading from '../Components/Loading';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useContext } from 'react';
import AuthContext from '../Contexts/AuthContext';
import { useEffect } from 'react';
import { TbCircleCheck, TbClock, TbClockExclamation, TbXboxX } from 'react-icons/tb';
import { FaBusSimple, FaHelicopter, FaPlane, FaShip } from 'react-icons/fa6';
import isTimeUp from '../Functions/IsTimeUp';

const RequestedBookings = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(true);
    const [bookings, setBookings] = useState([]);

    const fetchBookings = () => {
        axiosSecure.get(`/bookings/booking-request/${user?.email}`)
            .then(res => {
                setBookings(res.data);
                setLoading(false);
            }).catch(error => {
                console.log(error);
            })
    }
    const handleBookingStatus = (id, bookingStatus) => {
        axiosSecure.patch(`/bookings/update/booking-status?id=${id}&bookingStatus=${bookingStatus}`)
        .then(response => {
            if (response.status == 200) {
                fetchBookings();
            };
        });
    }

    useEffect(() => {
        if (!user) return;
        fetchBookings();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return (
        <div className='max-w-[1200px] min-h-[65vh] mx-auto pt-[50px]'>
            <title>Ticket Kinen | Manage Bookings</title>
            <h1 className="mb-3 ml-2 lg:ml-0 flex items-center gap-3 text-2xl lg:text-4xl font-semibold text-[#0A2F23]">
                <span className="w-3 h-10 bg-[#0A2F23] rounded-full"></span>
                <span className="px-8 py-2 bg-[#f7f3e9e5] border-4 border-[#556B2F] rounded-full shadow flex flex-col">
                    <span className='text-xl'>Manage Ticket Bookings</span>
                </span>
            </h1>
            <div className='mb-[50px] mx-2 lg:mx-0 w-auto p-3 lg:p-5 bg-[#0A2F23] border-2 border-[#D9C296c0] rounded-2xl shadow-2xl shadow-[#0A2F2390] text-[#D9C296]'>
                {
                    loading ? (
                        <Loading viewHeight={40} color={'#0A2F23'}></Loading>
                    ) : bookings.length < 1 ? (
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
                                        <th>Name & Email</th>
                                        <th>Seats</th>
                                        <th>Price</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* rows */}
                                    {
                                        bookings.map(booking => !isTimeUp(`${booking?.date}T${booking?.time}`) && (
                                                <tr key={booking?._id} className=''>
                                                    {/* <td></td> */}
                                                    <td>
                                                        <div className="font-bold w-full">
                                                            {
                                                                booking?.payment === 'paid' ? (
                                                                    <span><TbCircleCheck className='text-[22px] text-green-600' /></span>
                                                                ) : booking?.bookingStatus === 'pending' ? (
                                                                    <span><TbClockExclamation className='text-[22px] text-yellow-600' /></span>
                                                                ) : booking?.bookingStatus === 'approved' ? (
                                                                    <span><TbClock className='text-[22px] text-green-500' /></span>
                                                                ) : booking?.bookingStatus === 'rejected' && (
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
                                                                        src={booking?.photoURL}
                                                                        alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <h3 className="text-sm opacity-85">
                                                                {
                                                                    booking?.category === 'Bus' ? (
                                                                        <span className='flex items-center gap-1 font-light text-[12px]'><FaBusSimple className='text-[14px] text-yellow-600' /> Bus</span>
                                                                    ) : booking?.category === 'Launch' ? (
                                                                        <span className='flex items-center gap-1 font-light text-[12px]'><FaShip className='text-[14px] text-green-500' /> Launch</span>
                                                                    ) : booking?.category === 'Helicopter' ? (
                                                                        <span className='flex items-center gap-1 font-light text-[12px]'><FaHelicopter className='text-[14px] text-green-500' /> Helicopter</span>
                                                                    ) : booking?.category === 'Plane' && (
                                                                        <span className='flex items-center gap-1 font-light text-[12px]'><FaPlane className='text-[14px] text-red-500' /> Plane</span>
                                                                    )
                                                                }
                                                            </h3>
                                                            <div className="font-bold"><span className='text-sm font-light'>From</span> <span>{booking?.from}</span> <span className='text-xs font-light'>to</span> <span>{booking?.to}</span></div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div>
                                                            <div className="font-bold">{booking?.userName}</div>
                                                            <h3 className='font-light text-sm'>{booking?.userEmail}</h3>
                                                        </div>
                                                    </td>
                                                    <td><p className='flex gap-1'>{booking.bookingQuantity}</p></td>
                                                    <td>
                                                        <p>{booking?.price == 0 ? "Free" : `${booking?.totalPrice} tk.`}</p>
                                                    </td>
                                                    <th className='flex justify-end gap-2.5'>
                                                        {
                                                            booking?.bookingStatus === 'pending' ? (
                                                                <>
                                                                    <button type='button' onClick={() => handleBookingStatus(booking?._id, 'approved')} className="px-4 pt-1.5 pb-1.75 rounded-full bg-[#F7F3E9] font-light text-[#0A2F23] cursor-pointer">Approve</button>
                                                                    <button type='button' onClick={() => handleBookingStatus(booking?._id, 'rejected')} className="px-4 pt-1.5 pb-1.75 rounded-full bg-[#F7F3E9] font-light text-[#ff0000] cursor-pointer">Reject</button>
                                                                </>
                                                            ) : (
                                                                <div className='w-full h-12 flex justify-between items-center gap-2'>
                                                                    {
                                                                        booking?.payment === 'paid' ? (
                                                                            <h2 className='w-full text-center text-green-500'>Paid</h2>
                                                                        ) : booking?.bookingStatus === 'approved' ? (
                                                                            <h2 className='w-full text-center text-green-500'>Approved</h2>
                                                                        ) : booking?.bookingStatus === 'rejected' ? (
                                                                            <h2 className='w-full text-center text-red-500'>Rejected</h2>
                                                                        ) : (
                                                                            <h2 className='w-full text-center'>{booking?.status}</h2>
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

export default RequestedBookings;