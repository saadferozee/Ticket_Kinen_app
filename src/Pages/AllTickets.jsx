import React from 'react';
import { useEffect } from 'react';
import useAxios from '../Hooks/useAxios';
import { useState } from 'react';
import TicketCard from '../Components/TicketCard';
import Loading from '../Components/Loading';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaSearch, FaSearchMinus } from "react-icons/fa";

const AllTickets = () => {

    const axiosInstance = useAxios();
    const [loading, setLoading] = useState(true);
    const [tickets, setTickets] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [districts, setDistricts] = useState([]);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    const handleNext = () => {
        if (currentPage < totalPages.length) {
            setCurrentPage(currentPage +1);
        }
    }
    const handleSearching = () => {
        setIsSearching(!isSearching);
        setFrom('');
        setTo('');
    }

    useEffect(() => {
        if (from === '' && to === '' || !isSearching) {
            axiosInstance.get(`/tickets/approved-tickets?page=${currentPage}`)
                .then(res => {
                    setTickets(res.data.data);
                    setTotalPages([...Array(Math.ceil(res.data.totalTickets / 9)).keys()].map(e => e + 1));
                    setLoading(false);
                })
                .catch(error => console.warn(error))
        } else if (from === '' || to === '') {
            return
        } else {
            axiosInstance.get(`/tickets/approved-tickets/search?page=${currentPage}&from=${from}&to=${to}`)
                .then(res => {
                    setTickets(res.data.data);
                    setTotalPages([...Array(Math.ceil(res.data.totalTickets / 9)).keys()].map(e => e + 1));
                    setLoading(false);
                })
                .catch(error => console.warn(error))
        }
    }, [axiosInstance, currentPage, from, to, isSearching])
    useEffect(() => {
        fetch('/district.json').then(res => res.json()).then(res => setDistricts(res.districts.map(district => district.name)));
    }, [])

    return (
        <div className='my-12.5 max-w-300 mx-auto'>
            <h1 className="mb-3 ml-2 lg:ml-0 flex items-center gap-3 text-2xl lg:text-4xl font-semibold text-[#0A2F23]">
                <span className="w-3 h-10 bg-[#0A2F23] rounded-full"></span>
                <span className="px-8 py-2 bg-[#f7f3e9e5] border-4 border-[#0A2F23] rounded-full shadow flex flex-col">
                    <span className='text-xl'>All Tickets</span>
                </span>
            </h1>
            <div className='mb-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div></div>
                <div></div>
                <div className='flex justify-end'>
                    <form className={`${isSearching ? 'w-full py-1.5 pl-2 pr-3.5 ' : 'w-fit p-2.5'} border-2 border-[#D9C296c0] bg-[#0A2F23] rounded-full flex gap-2`}>
                        {
                            isSearching && (
                                <>
                                    <select type="text" name='from' defaultValue='From' onChange={(e) => setFrom(e.target.value)} className="select px-6 w-full border border-[#D9C296] rounded-full " >
                                        <option disabled={true}>From</option>
                                        {
                                            districts.map((district, index) => <option key={index} value={district} >{district}</option>)
                                        }
                                    </select>
                                    <select type="text" name='to' defaultValue='To' onChange={(e) => setTo(e.target.value)} className="select px-6 w-full border border-[#D9C296] rounded-full ">
                                        <option disabled={true}>To</option>
                                        {
                                            districts.map((district, index) => <option key={index} value={district} >{district}</option>)
                                        }
                                    </select>
                                </>
                            )
                        }
                        <button type='button' onClick={handleSearching} className={`text-2xl text-[#D9C296] cursor-pointer transition-transform duration-300 ${isSearching ? "ml-2 rotate-360 scale-110" : "rotate-0 scale-100"}`}>
                            {
                                isSearching ? <FaSearchMinus /> : <FaSearch />
                            }
                        </button>
                    </form>
                </div>
            </div>
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
                                className={`join-item px-8 pt-1.25 pb-1.5 border  text-[#D9C296] ${currentPage === page ? 'font-bold border-[#D9C296] bg-[#094f39]' : 'border-[#D9C296] bg-[#0A2F23]'}`}
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