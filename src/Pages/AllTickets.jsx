import React from 'react';
import { useEffect } from 'react';
import useAxios from '../Hooks/useAxios';
import { useState } from 'react';
import TicketCard from '../Components/TicketCard';

const AllTickets = () => {

    const axiosInstance = useAxios();
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        axiosInstance.get('/tickets/approved-tickets')
            .then(res => {
                setTickets(res.data);
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='my-[50px] max-w-[1200px] mx-auto'>
            <h1 className="mb-3 ml-2 lg:ml-0 flex items-center gap-3 text-2xl lg:text-4xl font-semibold text-[#0A2F23]">
                <span className="w-3 h-10 bg-[#0A2F23] rounded-full"></span>
                <span className="px-8 py-2 bg-[#f7f3e9e5] border-4 border-[#0A2F23] rounded-full shadow flex flex-col">
                    <span className='text-xl'>All Tickets</span>
                </span>
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    tickets.map(ticket => (
                        <TicketCard ticket={ticket}></TicketCard>
                    ))
                }
            </div>
        </div>
    );
};

export default AllTickets;