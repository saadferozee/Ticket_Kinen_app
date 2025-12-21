import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useEffect, useContext, useState } from 'react';
import AuthContext from '../Contexts/AuthContext';
import Loading from '../Components/Loading';
import { TbCircleCheck, TbClockExclamation, TbXboxX } from 'react-icons/tb';

const TransactionHistory = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [payments, setPayments] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosSecure.get(`/payments?email=${user.email}`)
            .then(res => {
                setPayments(res.data);
                setLoading(false);
                console.log(res.data);
            })
    }, [user, axiosSecure])

    return (
        <div className='max-w-300 min-h-[65vh] mx-auto pt-12.5'>
            <h1 className="mb-3 ml-2 lg:ml-0 flex items-center gap-3 text-2xl lg:text-4xl font-semibold text-[#0A2F23]">
                <span className="w-3 h-10 bg-[#0A2F23] rounded-full"></span>
                <span className="px-8 py-2 bg-[#f7f3e9e5] border-4 border-[#556B2F] rounded-full shadow flex flex-col">
                    <span className='text-xl'>All Transactions</span>
                </span>
            </h1>
            <title>Ticket Kinen | My Tickets</title>
            <div className='mb-12.5 mx-2 lg:mx-0 w-auto p-3 lg:p-5 bg-[#0A2F23] border-2 border-[#D9C296c0] rounded-2xl shadow-2xl shadow-[#0A2F2390] text-[#D9C296]'>
                {
                    loading ? (
                        <Loading viewHeight={40} color={'#0A2F23'}></Loading>
                    ) : payments.length < 1 ? (
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
                                        <th>Details</th>
                                        <th>Seats</th>
                                        <th>Price</th>
                                        <th>Payment Date</th>
                                        <th>Transaction Id</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        payments.map(payment => (
                                            <tr key={payment?._id} className=''>
                                                <td></td>
                                                
                                                <td className='w-[400px'>
                                                    <div>
                                                        <div className="font-bold">{payment?.productName}</div>
                                                        
                                                    </div>
                                                </td>
                                                <td className='w-[100px'><p className='flex gap-1'>{payment.buyingQuantity}</p></td>
                                                <td>
                                                    <p>{payment?.price == 0 ? "Free" : `${payment?.amount} tk.`}</p>
                                                </td>
                                                {/* <td><p>{payment.time}</p></td> */}
                                                <td><p>{payment.paidAt.split('T')[0]}</p></td>
                                                <td>
                                                    <div className="font-light text-xs">{payment?.transactionId}</div>
                                                </td>
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

export default TransactionHistory;