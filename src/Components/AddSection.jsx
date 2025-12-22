import React from 'react';
import useAxios from '../Hooks/useAxios';
import { useEffect } from 'react';
import { useState } from 'react';
import TicketCard from './TicketCard';
import AdminAddTicketCard from './AdminAddTicketCard';
import Loading from './Loading';
import AdvertisedTicketCard from './AdvertisedTicketCard';

const AddSection = () => {

    const axiosInstance = useAxios();
    const [advertisedTickets, setAdvertisedTickets] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance('/tickets/advertised-tickets')
            .then(res => {
                setAdvertisedTickets(res.data);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [axiosInstance])

    return (
        <div className='max-w-300 mx-auto my-8'>
            <h1 className="mb-1.5 ml-2 lg:ml-0 flex items-center gap-3 text-2xl lg:text-4xl font-semibold text-[#0A2F23]">
                <span className="w-2 h-8 bg-[#0A2F23] rounded-full"></span>
                <span className="px-8 py-0 bg-[#D9C296e5] border-4 border-[#0A2F23] rounded-full shadow flex flex-col">
                    <span className='text-xl'># Ad</span>
                </span>
            </h1>
            {
                loading ? <Loading viewHeight={20} color={'#D9C296'}></Loading> :
                    <div className='border-2 border-[#D9C296c0] p-6 rounded-xl bg-[#0A2F23] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3'>
                        {
                            advertisedTickets.map(ticket => (
                                <div className='text-[#0A2F23]'>
                                    <AdvertisedTicketCard key={ticket?._id} ticket={ticket}></AdvertisedTicketCard>
                                </div>
                            ))
                        }
                    </div>
            }
        </div>
    );
};

export default AddSection;