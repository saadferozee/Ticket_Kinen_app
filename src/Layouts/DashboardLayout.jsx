import React from 'react';
import DashboardSidebar from '../Elements/DashboardSidebar';
import { Outlet } from 'react-router';

const DashboardLayout = () => {

    return (
        <DashboardSidebar>
            <Outlet />
        </DashboardSidebar>
    );
};

export default DashboardLayout;