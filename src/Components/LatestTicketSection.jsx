import React from 'react';
import useAxios from '../Hooks/useAxios';
import { useState } from 'react';
import { useEffect } from 'react';

const LatestTicketSection = () => {

    const axiosInstance = useAxios();
    const [latestTickets, setLatestTickets] = useState([]);

    useEffect(() => {
        axiosInstance.get('')
    }, [axiosInstance])

    return (
        <div>
            This is latest tickets.
        </div>
    );
};

export default LatestTicketSection;