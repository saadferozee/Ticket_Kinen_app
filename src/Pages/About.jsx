import React from 'react';
import {
    FaInfoCircle,
    FaUsers,
    FaBullseye,
    FaHandshake,
    FaArrowLeft,
    FaTicketAlt
} from 'react-icons/fa';
import { Link } from 'react-router';

const About = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-[#F7F3E9] to-white">
            <title>Ticket Kinen | About Us</title>

            {/* Header */}
            <div className="bg-[#D9C296] text-[#F7F3E9] py-8">
                <div className="max-w-300 mx-auto px-4">
                    <div className="flex items-center gap-4 mb-4">
                        <Link
                            to="/"
                            className="flex items-center gap-2 hover:bg-[#0A2F23] px-3 py-2 rounded-lg transition-colors"
                        >
                            <FaArrowLeft />
                            <span className="hidden md:inline">Back to Home</span>
                        </Link>
                    </div>

                    <div className="text-center text-[#0A2F23]">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <FaInfoCircle className="text-4xl" />
                            <h1 className="text-4xl font-bold font-caveat">
                                About Ticket Kinen
                            </h1>
                        </div>
                        <p className="text-lg opacity-90">
                            Learn more about our mission, vision, and the people behind Ticket Kinen.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-300 mx-auto px-4 py-12">
                <div className="bg-white rounded-2xl shadow-lg border-2 border-[#0A2F23] border-opacity-20 overflow-hidden">

                    {/* Intro Banner */}
                    <div className="bg-[#0A2F23] text-[#F7F3E9] px-8 py-4">
                        <p className="text-center font-semibold">
                            Trusted Ticket Buying Platform in Bangladesh
                        </p>
                    </div>

                    <div className="p-8 space-y-10">

                        {/* Who We Are */}
                        <section>
                            <div className="flex items-center gap-3 mb-4">
                                <FaTicketAlt className="text-2xl text-[#0A2F23]" />
                                <h2 className="text-2xl font-bold font-caveat text-[#0A2F23]">
                                    Who We Are
                                </h2>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                Ticket Kinen is a modern digital ticket booking platform built for people in
                                Bangladesh. Our goal is to make buying tickets simple, secure, and reliable —
                                whether it’s for travel, events, or special journeys. We focus on transparency,
                                user trust, and a smooth booking experience.
                            </p>
                        </section>

                        {/* Mission & Vision */}
                        <section>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-[#F7F3E9] rounded-lg p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <FaBullseye className="text-xl text-[#0A2F23]" />
                                        <h3 className="text-xl font-bold text-[#0A2F23] font-caveat">
                                            Our Mission
                                        </h3>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        To simplify ticket purchasing by providing a fast, secure, and user-friendly
                                        platform that people can rely on every day.
                                    </p>
                                </div>

                                <div className="bg-[#F7F3E9] rounded-lg p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <FaInfoCircle className="text-xl text-[#0A2F23]" />
                                        <h3 className="text-xl font-bold text-[#0A2F23] font-caveat">
                                            Our Vision
                                        </h3>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        To become one of Bangladesh’s most trusted digital ticket platforms,
                                        connecting people with journeys and experiences effortlessly.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* What We Offer */}
                        <section>
                            <h2 className="text-2xl font-bold font-caveat text-[#0A2F23] mb-4">
                                What We Offer
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border-2 border-[#0A2F23] border-opacity-20 rounded-lg p-4">
                                    <h3 className="font-semibold text-[#0A2F23] mb-2">
                                        Easy Booking
                                    </h3>
                                    <p className="text-gray-700 text-sm">
                                        Simple and fast ticket booking with a clean and intuitive interface.
                                    </p>
                                </div>
                                <div className="border-2 border-[#0A2F23] border-opacity-20 rounded-lg p-4">
                                    <h3 className="font-semibold text-[#0A2F23] mb-2">
                                        Secure Payments
                                    </h3>
                                    <p className="text-gray-700 text-sm">
                                        Safe and reliable payment processing with modern security standards.
                                    </p>
                                </div>
                                <div className="border-2 border-[#0A2F23] border-opacity-20 rounded-lg p-4">
                                    <h3 className="font-semibold text-[#0A2F23] mb-2">
                                        Trusted Sellers
                                    </h3>
                                    <p className="text-gray-700 text-sm">
                                        Verified vendors and transparent information to ensure user confidence.
                                    </p>
                                </div>
                                <div className="border-2 border-[#0A2F23] border-opacity-20 rounded-lg p-4">
                                    <h3 className="font-semibold text-[#0A2F23] mb-2">
                                        Local Focus
                                    </h3>
                                    <p className="text-gray-700 text-sm">
                                        Designed specifically for users and travel needs in Bangladesh.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Our Values */}
                        <section>
                            <h2 className="text-2xl font-bold font-caveat text-[#0A2F23] mb-4">
                                Our Core Values
                            </h2>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 p-3 bg-[#F7F3E9] rounded-lg">
                                    <FaHandshake className="text-[#0A2F23] mt-1" />
                                    <p className="text-gray-700">
                                        <strong className="text-[#0A2F23]">Trust:</strong> We prioritize honesty,
                                        transparency, and user safety.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-[#F7F3E9] rounded-lg">
                                    <FaUsers className="text-[#0A2F23] mt-1" />
                                    <p className="text-gray-700">
                                        <strong className="text-[#0A2F23]">User-First:</strong> Every feature is built
                                        with user convenience in mind.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 p-3 bg-[#F7F3E9] rounded-lg">
                                    <FaBullseye className="text-[#0A2F23] mt-1" />
                                    <p className="text-gray-700">
                                        <strong className="text-[#0A2F23]">Reliability:</strong> Consistent performance
                                        and dependable service.
                                    </p>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
