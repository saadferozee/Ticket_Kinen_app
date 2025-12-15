import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../Contexts/AuthContext';
import Swal from 'sweetalert2';
import useAxios from '../Hooks/useAxios';
import { useEffect } from 'react';
import Loading from '../Components/Loading';
import { Link } from 'react-router';
import VendorTicketCard from '../Components/VendorTicketCard';

const MyAddedTickets = () => {
    const { user } = useContext(AuthContext);
    const axiosInstance = useAxios();
    const [loading, setLoading] = useState(true);
    const [myTickets, setMyTickets] = useState([]);

    useEffect(() => {
        axiosInstance.get(`tickets/my-tickets/${user?.email}`)
            .then(response => {
                setMyTickets(response.data);
                setLoading(false);
            })
    }, [user, axiosInstance]);

    return (
        <div>
            {
                loading ? <Loading viewHeight="70" color={'#D9C296'}></Loading> : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {
                            myTickets.map(ticket => <VendorTicketCard ticket={ticket}></VendorTicketCard>)
                        }
                    </div>
                )
            }
        </div>
    );
};

export default MyAddedTickets;