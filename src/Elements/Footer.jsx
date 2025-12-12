import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiTicket } from "react-icons/hi2";
import { LuDot } from "react-icons/lu";

const Footer = () => {
    return (
        <div className='bg-[#0A2F23] text-[#D9C296] py-1'>
            <footer className="footer footer-horizontal footer-center p-4">
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
                    <div className="flex items-center gap-2 text-sm font-light">
                        <a href='/'>About</a>
                        <span><LuDot /></span>
                        <a href='/'>Privacy Policy</a>
                        <span><LuDot /></span>
                        <a href='/'>Terms and Conditions</a>
                    </div>
                </nav>
                <p className='font-extralight text-xs opacity-60'>Copyright © {new Date().getFullYear()} - All right reserved by Saad Ferozee</p>
            </footer>
        </div>
    );
};

export default Footer;