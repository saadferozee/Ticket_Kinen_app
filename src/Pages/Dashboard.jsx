import React from 'react';
import { useContext } from 'react';
import AuthContext from '../Contexts/AuthContext';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const Dashboard = () => {

    const {role} = useContext(AuthContext);
    const navigate = useNavigate();

    const go = () => {
        if (role === 'admin') {
            navigate('/dashboard/manage-tickets')
        } else if (role === 'vendor') {
            navigate('/dashboard/revenue-overview')
        } else {
            navigate('/dashboard/my-booked-tickets')
        }
    }

    useEffect(() => {
        go();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
};

export default Dashboard;