import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../Contexts/AuthContext';
import { useEffect } from 'react';
import Loading from '../Components/Loading';
import { Link } from 'react-router';
import VendorTicketCard from '../Components/VendorTicketCard';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const MyAddedTickets = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(true);
    const [myTickets, setMyTickets] = useState([]);

    useEffect(() => {
        axiosSecure.get(`tickets/my-tickets/${user?.email}`)
            .then(response => {
                setMyTickets(response.data);
                setLoading(false);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <div className='max-w-300 mx-auto'>
            {
                loading ? <Loading viewHeight="70" color={'#D9C296'}></Loading> : (
                    <div>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                            {
                                myTickets.map(ticket => <VendorTicketCard key={ticket?._id} ticket={ticket}></VendorTicketCard>)
                            }
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default MyAddedTickets;