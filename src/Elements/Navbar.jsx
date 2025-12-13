import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router';
import AuthContext from '../Contexts/AuthContext';
import { FaCloudMoon } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";
import { HiTicket } from "react-icons/hi2";
import { CgMenuLeft } from "react-icons/cg";
import ReactTooltip from './ReactTooltip';
import ThemeContext from '../Contexts/ThemeContext';
import Swal from 'sweetalert2';


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    useEffect(() => {
        const html = document.documentElement;
        if (darkTheme) {
            html.setAttribute("data-theme", "dark")
        } else {
            html.setAttribute("data-theme", "light")
        }
    }, [darkTheme])

    const handleLogOutbutton = () => {
        Swal.fire({
            title: "Sure?",
            text: "Did you want to Log Out ??",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        Swal.fire({
                            title: "Logged Out!",
                            text: "You are logged out successfully.",
                            icon: 'success'
                        });
                    }).catch(error => console.log(error));
            }
        })
    }

    const links = <div className={`flex ${user ? 'gap-1' : 'gap-3'} font-stretch-125% text-[#D9C296] text-md`}>
        <NavLink className='px-3 pt-1.5 pb-1.75 rounded-full border border-transparent' to={'/'}>Home</NavLink>
        <NavLink className='px-3 pt-1.5 pb-1.75 rounded-full border border-transparent' to={'/all-tickets'}>All Tickets</NavLink>
    </div>
    const linksDrop = <>
        <NavLink className='px-3 pt-1.5 pb-1.75 rounded-full border border-transparent' to={'/'}>Home</NavLink>
        <NavLink className='px-3 pt-1.5 pb-1.75 rounded-full border border-transparent' to={'/all-tickets'}>All Tickets</NavLink>
    </>

    return (
        <div className='sticky top-0 z-50'>
            <div className="bg-[#0A2F23] shadow-lg shadow-[#00000040]">
                <div className='navbar max-w-[1200px] mx-auto'>
                    <div className="navbar-start">
                        <ReactTooltip id={'nav'} content={'Click to Open Menu'} place={'bottom-start'}>
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="mr-4 lg:hidden">
                                    <CgMenuLeft className='text-3xl text-[#D9C296]' />
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg> */}
                                </div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    {
                                        linksDrop
                                    }
                                </ul>
                            </div>
                        </ReactTooltip>
                        <a href='/' className="flex items-center gap-2 pl-0 text-[#D9C296]">
                            {/* <img width={45} height={35} src="/bus.png" alt="cat" /> */}
                            <span><HiTicket className='text-3xl rotate-325' /></span>
                            <span className='title hidden md:block font-light text-2xl'>Ticket Kinen</span>
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <div className="navbar-end flex items-center gap-4">
                        <button className='text-2xl text-[#D9C296] cursor-pointer' title='Click to change theme.' onClick={() => setDarkTheme(!darkTheme)}>{darkTheme ? <FaCloudMoon /> : <FaCloudSun />}</button>
                        {
                            user ? (
                                <div className='flex items-center gap-2'>
                                    <ReactTooltip id='logout' content={'Click to open dashboard'} place={'bottom-end'}>
                                        <Link to={'/dashboard'} className="px-4 pt-1.5 pb-1.75 rounded-full bg-[#D9C296] text-[#0A2F23] cursor-pointer">Dashboard</Link>
                                    </ReactTooltip>
                                    <div className="dropdown dropdown-bottom dropdown-end">
                                        <div tabIndex={0} role="button">
                                            {
                                                user.photoURL ? (
                                                    <img
                                                        title={`click to go Profile of User: ${user.displayName}`}
                                                        className='w-10 h-10 object-cover border-2 border-[#D9C296] p-0.5 rounded-full'
                                                        src={user.photoURL || 'https://img.icons8.com/ink/96/f7f3e9/user-male-circle.png'}
                                                        alt="DP"
                                                        referrerPolicy="no-referrer"
                                                        onError={(e) => {
                                                            e.currentTarget.src = 'https://img.icons8.com/ink/96/f7f3e9/user-male-circle.png';
                                                        }}
                                                    />
                                                ) : (
                                                    <img title={`click to go Profile of User: ${user.displayName}`} width={40} className='rounded-full' src={'https://img.icons8.com/ink/96/f7f3e9/user-male-circle.png'} alt="DP" />
                                                )
                                            }
                                        </div>
                                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                            <li><button type='button' onClick={handleLogOutbutton}>Log Out</button></li>
                                            <li><a href='/dashboard/my-profile'>My Profile</a></li>
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <div className='flex gap-1'>
                                    <ReactTooltip id='login' content={'Click to Login'} place={'bottom-end'}>
                                        <Link to={'/login'} className="px-4 pt-1.5 pb-1.75 rounded-full bg-[#D9C296] text-[#0A2F23] cursor-pointer">Login</Link>
                                    </ReactTooltip>
                                    <ReactTooltip id='login' content={'Click to Register'} place={'bottom-end'}>
                                        <Link to={'/register'} className="px-4 pt-1.5 pb-1.75 rounded-full bg-[#D9C296] text-[#0A2F23] cursor-pointer">Register</Link>
                                    </ReactTooltip>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;