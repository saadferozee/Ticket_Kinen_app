import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useSearchParams } from 'react-router';
import { useEffect } from 'react';

const PaymentSuccess = () => {

    const axiosSecure = useAxiosSecure();
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');

    useEffect(() => {
        axiosSecure.post(`/success-payment?session_id=${sessionId}`)
            .then(res => {
				console.log(res.data);
			})
}, [axiosSecure, sessionId])

    return (
        <div>
            this is payment Success.
        </div>
    );
};

export default PaymentSuccess;