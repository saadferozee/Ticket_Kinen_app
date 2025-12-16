import React from 'react';
import { useContext } from 'react';
import AuthContext from '../Contexts/AuthContext';
import { useState } from 'react';
import Loading from '../Components/Loading';
import { useEffect } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import UserTicketCard from '../Components/UserTicketCard';

const MyBookedTickets = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(true);
    const [myBookings, setMyBookings] = useState([])

    useEffect(() => {
        if (!user) return;

        axiosSecure.get(`/bookings/my-bookings/${user?.email}`)
            .then(res => {
                setMyBookings(res.data);
                setLoading(false);
            })
    }, [user, axiosSecure])

    return (
        <div className='max-w-[1200px] mx-auto'>
            {
                loading ? <Loading viewHeight="70" color={'#D9C296'}></Loading> : (
                    <div>
                        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                            {
                                myBookings.map(ticket => <UserTicketCard key={ticket?._id} ticket={ticket}></UserTicketCard>)
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyBookedTickets;