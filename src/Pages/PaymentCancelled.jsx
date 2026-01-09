import React from 'react';
import { FaTimesCircle, FaHome, FaRedoAlt, FaTicketAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const PaymentCancelled = () => {
    return (
        <div className="min-h-[75vh] flex items-center justify-center bg-linear-to-br from-rose-300 to-red-700 px-4">
            <div className="max-w-150 w-full bg-[#0A2F23] border-2 border-[#D9C296c0] rounded-2xl shadow-xl p-8 text-center">

                {/* Cancel Icon */}
                <FaTimesCircle className="text-red-500 text-6xl mx-auto mb-4" />

                {/* Title */}
                <h1 className="text-2xl font-bold text-[#D9C296] text-shadow-2xs text-shadow-red-700 mb-2">
                    Payment Not Completed
                </h1>

                <p className="text-[#D9C296] mb-6">
                    Your payment was cancelled or could not be completed.
                    Don't worry—no money has been charged.
                </p>

                {/* Info Box */}
                <div className="bg-[#D9C296] rounded-xl p-4 text-sm text-[#0A2F23] mb-6">
                    If you faced any issues during the payment process,
                    you can try again or choose a different payment method.
                </div>

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
                        to="/dashboard/my-tickets"
                        className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
                    >
                        <FaTicketAlt />
                        Tickets
                    </Link>

                    <Link
                        to="/dashboard/my-booked-tickets"
                        className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition"
                    >
                        <FaRedoAlt />
                        Retry
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentCancelled;
