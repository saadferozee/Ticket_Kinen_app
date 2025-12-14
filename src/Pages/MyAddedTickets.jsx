import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../Contexts/AuthContext';
import Swal from 'sweetalert2';
import useAxios from '../Hooks/useAxios';
import { useEffect } from 'react';
import Loading from '../Components/Loading';
import { Link } from 'react-router';

const MyAddedTickets = () => {
    const { user } = useContext(AuthContext);
    const axiosInstance = useAxios();
    const [loading, setLoading] = useState(true);
    const [myTickets, setMyTickets] = useState([]);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            // if (result.isConfirmed) {
            //     axiosInstance.delete(`https://adoptyco.vercel.app/listings/delete/${id}`)
            //         .then(response => {
            //             if (response.data.deletedCount == 1) {
            //                 const filteredListings = myListings.filter(product => product?._id !== id);
            //                 setMyListings(filteredListings);
            //                 Swal.fire({
            //                     title: "Deleted!",
            //                     text: "Your product has been deleted.",
            //                     icon: "success"
            //                 });
            //             }
            //         })

            //}
        });

    }

    useEffect(() => {
        axiosInstance.get(`tickets/my-tickets/${user?.email}`)
            .then(response => {
                setMyTickets(response.data);
                setLoading(false);
            })
    }, [user, axiosInstance]);

    return (
       ''
    );
};

export default MyAddedTickets;