import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Elements/Navbar';
import Footer from '../Elements/Footer';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;