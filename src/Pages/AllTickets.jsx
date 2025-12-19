import React from 'react';
import { useEffect } from 'react';
import useAxios from '../Hooks/useAxios';
import { useState } from 'react';
import TicketCard from '../Components/TicketCard';
import Loading from '../Components/Loading';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const AllTickets = () => {

    const axiosInstance = useAxios();
    const [loading, setLoading] = useState(true);
    const [tickets, setTickets] = useState([]);
    const [totalPages, setTotalPages] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage -1);
        }
    }
    const handleNext = () => {
        if (currentPage < totalPages.length) {
            setCurrentPage(currentPage +1);
        }
    }

    useEffect(() => {
        axiosInstance.get(`/tickets/approved-tickets?page=${currentPage}`)
            .then(res => {
                setTickets(res.data.data);
                setTotalPages([...Array(Math.ceil(res.data.totalTickets / 9)).keys()].map(e => e + 1));
                setLoading(false);
            })
            .catch(error => console.warn(error))
    }, [axiosInstance, currentPage])
    // console.log(tickets, totalPages)

    return (
        <div className='my-12.5 max-w-300 mx-auto'>
            <h1 className="mb-3 ml-2 lg:ml-0 flex items-center gap-3 text-2xl lg:text-4xl font-semibold text-[#0A2F23]">
                <span className="w-3 h-10 bg-[#0A2F23] rounded-full"></span>
                <span className="px-8 py-2 bg-[#f7f3e9e5] border-4 border-[#0A2F23] rounded-full shadow flex flex-col">
                    <span className='text-xl'>All Tickets</span>
                </span>
            </h1>
            <div className='w-full flex justify-center'>
                {
                    loading ? (
                        <Loading viewHeight={30} color={'#D9C296'}></Loading>
                    ) : (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {
                                tickets.map(ticket => {

                                    return (
                                        <TicketCard key={ticket?._id} ticket={ticket} />
                                    );

                                })
                            }
                        </div>
                    )
                }
            </div>
            <div className='flex justify-center'>
                <div className="join mt-4 space-x-1">
                    <button onClick={handlePrev} className="join-item px-8 bg-[#0A2F23] border border-[#D9C296] text-[#D9C296] rounded-l-full flex items-center"><FaAngleDoubleLeft /></button>
                    {
                        totalPages.map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`join-item px-8 pt-1.25 pb-1.5 bg-[#0A2F23] text-[#D9C296] ${currentPage === page ? 'border-3 font-bold border-[#D9C296]' : 'border border-[#D9C296]'}`}
                            >
                                {page}
                            </button>
                        ))
                    }
                    <button onClick={handleNext} className="join-item px-8 bg-[#0A2F23] border border-[#D9C296] text-[#D9C296] rounded-r-full flex items-center"><FaAngleDoubleRight /></button>
                </div>
            </div>
        </div>
    );
};

export default AllTickets;