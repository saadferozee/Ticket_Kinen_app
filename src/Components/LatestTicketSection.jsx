import React from 'react';
import useAxios from '../Hooks/useAxios';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from './Loading';
import TicketCard from './TicketCard';

const LatestTicketSection = () => {

    const axiosInstance = useAxios();
    const [latestTickets, setLatestTickets] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get('/tickets/approved-tickets/latest')
            .then(res => {
                setLatestTickets(res.data)
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [axiosInstance])

    return (
        <div className='max-w-300 mx-auto'>
            <h1 className="mb-2.5 ml-2 lg:ml-0 flex items-center gap-3 text-2xl lg:text-4xl font-semibold text-[#0A2F23]">
                <span className="w-2 h-8 bg-[#0A2F23] rounded-full"></span>
                <span className="px-8 py-0 bg-[#D9C296e5] border-4 border-[#0A2F23] rounded-full shadow flex flex-col">
                    <span className='text-xl'>Latest Tickets</span>
                </span>
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
                {
                    loading ? <Loading viewHeight={30} color={'#0A2F23'}></Loading> :
                        latestTickets.map(ticket =>
                            <TicketCard key={ticket?._id} ticket={ticket}></TicketCard>
                        )
                }
            </div>
        </div>
    );
};

export default LatestTicketSection;