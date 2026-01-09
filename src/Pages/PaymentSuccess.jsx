import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { FaCheckCircle, FaHome, FaTicketAlt } from 'react-icons/fa';
import { Link, useSearchParams } from 'react-router';
import { FaClockRotateLeft } from 'react-icons/fa6';

const PaymentSuccess = () => {
    const axiosSecure = useAxiosSecure();
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');

    const [paymentInfo, setPaymentInfo] = useState(null);

    useEffect(() => {
        if (!sessionId) return;

        axiosSecure
            .post(`/success-payment?session_id=${sessionId}`)
            .then(res => {
                setPaymentInfo(res.data);
            });
    }, [axiosSecure, sessionId]);

    return (
        <div className="min-h-[75vh] flex items-center justify-center bg-linear-to-br from-green-50 to-emerald-100 px-4">
            <div className="max-w-150 w-full bg-[#0A2F23] border-2 border-[#D9C296c0] rounded-2xl shadow-xl p-8 text-center">

                {/* Success Icon */}
                <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />

                {/* Title */}
                <h1 className="text-2xl font-bold text-[#D9C296] mb-2">
                    Payment Successful
                </h1>

                <p className="text-[#D9C296] mb-6">
                    Thank you! Your ticket has been successfully booked. Below are your booking details.
                </p>

                {/* Transaction Info */}
                {paymentInfo && (
                    <div className="bg-[#D9C296] rounded-xl p-4 text-left text-sm text-#0A2F23 space-y-2 mb-6">
                        <p>
                            <span className="font-semibold">Amount:</span>{' '}
                            ৳ {paymentInfo.totalAmount}
                        </p>
                        <p>
                            <span className="font-semibold">Payment Method:</span>{' '}
                            {paymentInfo.method || 'Card'}
                        </p>
                        <p>
                            <span className="font-semibold">Status:</span>{' '}
                            <span className="text-green-600 font-semibold">
                                Paid
                            </span>
                        </p>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <Link
                        to="/"
                        className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg transition"
                    >
                        <FaHome />
                        Home
                    </Link>

                    <Link
                        to="/my-booked-tickets"
                        className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
                    >
                        <FaTicketAlt />
                        Tickets
                    </Link>

                    <Link
                        to="/dashboard/transaction-history"
                        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
                    >
                        <FaClockRotateLeft />
                        Transactions
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
