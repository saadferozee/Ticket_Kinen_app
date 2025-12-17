import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiTicket } from "react-icons/hi2";
import { LuDot } from "react-icons/lu";


// I can make Footer better than this, but requirement of this footer is sucks.


const Footer = () => {
    return (
        <div className='w-full bg-[#0A2F23] py-1'>
            <footer className="footer max-w-300 mx-auto sm:footer-horizontal bg-[#0A2F23] text-[#D9C296] p-10">
                <aside>
                    <h1><HiTicket className='mb-0 text-5xl rotate-325' /></h1>
                    <p>
                        <span className="title font-light text-2xl">Ticket Kinen</span>
                        <br />
                        <span className='font-light text-sm'>“Book bus, train, launch & flight
                            tickets easily”</span>
                    </p>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://facebook.com/saadferozee'>
                            <FaFacebookSquare className='text-3xl' />
                        </a>
                        <a href='https://instagram.com/saad.ferozee'>
                            <FaInstagramSquare className='text-3xl' />
                        </a>
                        <a href='https://x.com/saadferozee/'>
                            <FaSquareXTwitter className='text-3xl' />
                        </a>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">All Tickets</a>
                    <a className="link link-hover">Dashboard</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contacts Info</h6>
                    <a className="link link-hover">Email</a>
                    <a className="link link-hover">Phone</a>
                    <a className="link link-hover">Facebook Page</a>
                    <a className="link link-hover">About Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Payment Methods</h6>
                    <a className="link link-hover">Bkash</a>
                    <a className="link link-hover">Nagad</a>
                    <a className="link link-hover">Stripe</a>
                </nav>
            </footer>
            <p className='font-extralight text-xs text-center opacity-60'>Copyright © {new Date().getFullYear()} - All right reserved by Saad Ferozee</p>
        </div>
    );
};

export default Footer;