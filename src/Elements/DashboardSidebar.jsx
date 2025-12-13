import React from 'react';
import { Link, NavLink } from 'react-router';
import { useState } from 'react';
import { TbLayoutSidebarRightCollapseFilled, TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { FaHome, FaUser, FaUserCog } from "react-icons/fa";
import { IoTicket } from "react-icons/io5";
import { MdHistory, MdOutlineExitToApp } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import { LuCalendarSearch, LuTicketCheck, LuTicketPlus, LuTickets } from "react-icons/lu";
import { useContext } from 'react';
import AuthContext from '../Contexts/AuthContext';
import DarkThemeToggle from '../Components/DarkThemeToggle';
import { FaFileInvoiceDollar } from 'react-icons/fa6';

const DashboardSidebar = ({ children }) => {

    const { role } = useContext(AuthContext);
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <div>
            <div>
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Navbar */}
                        <nav className="navbar w-full pr-6 flex justify-between bg-[#0a2f23d0] shadow-xl shadow-[#ffffff10] text-[#D9C296]">
                            <div className='flex items-center'>
                                <label onClick={() => setDrawerOpen(!drawerOpen)} htmlFor="my-drawer-4" aria-label="open sidebar" className='cursor-pointer'>
                                    {/* Sidebar toggle icon */}
                                    <span className='text-2xl text-shadow-lg'>{!drawerOpen ? <TbLayoutSidebarRightCollapseFilled /> : <TbLayoutSidebarLeftCollapseFilled />}</span>
                                </label>
                                <h1 className="px-4 font-semibold text-2xl text-shadow-lg">
                                    {role === 'admin' ? 'Admin Dashboard' : role === 'vendor' ? 'Vendor Dashboard' : 'User Dashboard'}
                                </h1>
                            </div>
                            <DarkThemeToggle />
                        </nav>
                        {/* Page content here */}
                        <div className="p-4">
                            {children}
                        </div>
                    </div>

                    <div className="drawer-side is-drawer-close:overflow-visible">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <div className="bg-[#0A2F23] text-[#D9C296] pt-2 pb-6 flex min-h-full flex-col items-start is-drawer-close:w-16 is-drawer-open:w-64">
                            {/* Sidebar content here */}
                            <ul className="menu w-full grow space-y-3 flex flex-col justify-between">
                                {/* List items */}
                                <div className='space-y-3'>
                                    <li>
                                        <NavLink to={'/dashboard/home'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right border border-transparent">
                                            <span><FaHome className='text-[23px]' /></span>
                                            <span className="is-drawer-close:hidden">Homepage</span>
                                        </NavLink>
                                    </li>
                                    {
                                        role === 'admin' ? (
                                            <>
                                                <li>
                                                    <NavLink to={'/dashboard/manage-tickets'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right border border-transparent">
                                                        <span><IoTicket className='text-[23px]' /></span>
                                                        <span className="is-drawer-close:hidden">Manage Tickets</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={'/dashboard/manage-users'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right border border-transparent">
                                                        <span><FaUserCog className='text-[23px]' /></span>
                                                        <span className="is-drawer-close:hidden">Manage Users</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={'/dashboard/advertise-tickets'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right border border-transparent">
                                                        <span><RiAdvertisementFill className='text-[23px]' /></span>
                                                        <span className="is-drawer-close:hidden">Advertise Tickets</span>
                                                    </NavLink>
                                                </li>
                                            </>
                                        ) : role === 'vendor' ? (
                                            <>
                                                <li>
                                                    <NavLink to={'/dashboard/add-ticket'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right border border-transparent">
                                                        <span><LuTicketPlus className='text-[23px] rotate-340' /></span>
                                                        <span className="is-drawer-close:hidden">Add Ticket</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={'/dashboard/my-added-tickets'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right border border-transparent">
                                                        <span><LuTicketCheck className='text-[23px] rotate-340' /></span>
                                                        <span className="is-drawer-close:hidden">My Added Tickets</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={'/dashboard/requested-bookings'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right border border-transparent">
                                                        <span><LuCalendarSearch className='text-[23px]' /></span>
                                                        <span className="is-drawer-close:hidden">Requested Bookings</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={'/dashboard/revenue-overview'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right border border-transparent">
                                                        <span><FaFileInvoiceDollar className='text-[23px]' /></span>
                                                        <span className="is-drawer-close:hidden">Revenue Overview</span>
                                                    </NavLink>
                                                </li>
                                            </>
                                        ) : (
                                            <>
                                                <li>
                                                    <NavLink to={'/dashboard/my-booked-tickets'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right border border-transparent">
                                                        <span><LuTickets className='text-[23px]' /></span>
                                                        <span className="is-drawer-close:hidden">My Booked Tickets</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={'/dashboard/transaction-history'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right border border-transparent">
                                                        <span><MdHistory className='text-[23px]' /></span>
                                                        <span className="is-drawer-close:hidden">Transaction History</span>
                                                    </NavLink>
                                                </li>
                                            </>
                                        )
                                    }

                                </div>
                                <div className='space-y-3'>
                                    <li>
                                        <NavLink to={'/dashboard/my-profile'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right border border-transparent">
                                            <span><FaUser className='text-[23px]' /></span>
                                            <span className="is-drawer-close:hidden">My Profile</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <Link to={'/'} className="is-drawer-close:tooltip is-drawer-close:tooltip-right border border-transparent">
                                            <span><MdOutlineExitToApp className='text-[24px] rotate-180' /></span>
                                            <span className="is-drawer-close:hidden">Exit Dashboard</span>
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;