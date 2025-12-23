import React, { useState } from 'react';
import { motion } from 'framer-motion';

const agencies = [
    {
        id: 1,
        name: 'বাজেট ট্রাভেলের বুদ্ধিমান সমাধান',
        tip: 'লোকাল ট্রান্সপোর্ট ব্যবহার করলে খরচ কমে এবং আসল ভ্রমণের স্বাদ পাওয়া যায়।'
    },
    {
        id: 2,
        name: 'স্মার্ট ট্রাভেলারদের প্রথম পছন্দ',
        tip: 'ভ্রমণের আগে ফ্লাইট ও হোটেল একসাথে বুক করলে খরচ কমে এবং সময় বাঁচে।'
    },
    {
        id: 3,
        name: 'দেশের ভেতরে ঝামেলাহীন ট্রিপ',
        tip: 'অফ-পিক সিজনে ভ্রমণ করলে একই জায়গায় কম ভিড় ও ভালো ডিল পাওয়া যায়।'
    },
    {
        id: 4,
        name: 'গ্রুপ ট্রিপ মানেই নিশ্চিন্ত',
        tip: 'গ্রুপ ট্যুরে যাওয়ার আগে ভ্রমণসূচি ভালো করে পড়ে নিলে অপ্রয়োজনীয় ঝামেলা এড়ানো যায়।'
    },
    {
        id: 5,
        name: 'ঘোরার প্ল্যান, একদম নিজের মতো',
        tip: 'নতুন জায়গায় গেলে লোকাল গাইড বা স্থানীয়দের পরামর্শ নিলে লুকানো স্পট খুঁজে পাওয়া যায়।'
    },
    {
        id: 6,
        name: 'আরামদায়ক ভ্রমণের ঠিকানা',
        tip: 'ভ্রমণের সময় হালকা লাগেজ রাখলে চলাফেরা সহজ হয় এবং ট্রিপ বেশি উপভোগ্য হয়।'
    },
    {
        id: 7,
        name: 'দেশ ঘোরার গল্প শুরু এখান থেকেই',
        tip: 'প্রতিটি ট্রিপে জরুরি কাগজপত্র ও ফার্স্ট এইড সঙ্গে রাখার অভ্যাস গড়ে তুলুন।'
    },
    {
        id: 8,
        name: 'দেশটাকেই নতুন করে চিনুন',
        tip: 'ভ্রমণের সময় পরিবেশ পরিষ্কার রাখা ও স্থানীয় সংস্কৃতির প্রতি সম্মান দেখানো একজন ভালো ট্রাভেলারের পরিচয়।'
    }
];

const scatter = [
    { x: -480, y: -40, r: -7 },
    { x: -330, y: 70, r: 6 },
    { x: -160, y: -90, r: -4 },
    { x: 60, y: 80, r: 5 },
    { x: 260, y: -20, r: -6 },
    { x: 430, y: 60, r: 8 },
    { x: 150, y: -110, r: -8 },
    { x: -40, y: 140, r: 4 },
];

const TravelPartnerSection = () => {
    const [active, setActive] = useState(0);

    return (
        <section className="mt-40 max-w-300 mx-auto px-6 md:px-0">
            <h1 className="mt-18 mb-3 lg:-mb-3 ml-2 lg:ml-0 flex items-center gap-3 text-2xl lg:text-4xl font-semibold text-[#0A2F23]">
                <span className="w-2 h-8 bg-[#0A2F23] rounded-full"></span>
                <span className="px-8 py-0 bg-[#D9C296e5] border-4 border-[#0A2F23] rounded-full shadow flex flex-col">
                    <span className='text-xl'>Meet Your New Travel Partner</span>
                </span>
            </h1>
            {/* DESKTOP / TABLET */}
            <div className="relative hidden lg:flex w-full h-150 items-center justify-center">
                {agencies.map((agency, index) => {
                    const isActive = index === active;
                    const pos = scatter[index % scatter.length];

                    return (
                        <motion.div
                            key={agency.id}
                            onClick={() => setActive(index)}
                            className="absolute left-1/3 top-1/4 w-75 h-50 bg-[#0A2F23] rounded-2xl border-2 border-[#D9C296] cursor-pointer"
                            animate={{
                                x: isActive ? 0 : pos.x,
                                y: isActive ? 0 : pos.y,
                                rotate: isActive ? 0 : pos.r,
                                scale: isActive ? 1.2 : 0.92,
                                zIndex: isActive ? 10 : 1,
                                boxShadow: isActive
                                    ? '0 50px 100px rgba(0,0,0,0.25)'
                                    : '0 14px 30px rgba(0,0,0,0.12)',
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 120,
                                damping: 18,
                            }}
                            style={{ transform: 'translate(-50%, -50%)' }}
                            whileHover={{
                                rotate: isActive ? 0 : pos.r + 2,
                                scale: isActive ? 1.25 : 0.97,
                            }}
                        >
                            <Card agency={agency} active={isActive} />
                        </motion.div>
                    );
                })}
            </div>

            {/* MOBILE (FUN STACK) */}
            <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
                {agencies.map((agency, index) => (
                    <motion.div
                        key={agency.id}
                        onClick={() => setActive(index)}
                        className="w-full max-w-90 mx-auto h-50 bg-[#0A2F23] rounded-2xl  border-2 border-[#D9C296]"
                        animate={{
                            scale: active === index ? 1.06 : 1,
                            boxShadow:
                                active === index
                                    ? '0 30px 60px rgba(0,0,0,0.2)'
                                    : '0 12px 24px rgba(0,0,0,0.1)',
                        }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: 'spring', stiffness: 120 }}
                    >
                        <Card agency={agency} active={active === index} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

const Card = ({ agency, active }) => (
    <div className="p-6 h-full flex flex-col justify-between text-[#D9C296]">
        <div>
            <span className="text-xs uppercase tracking-wide">
                Travel Tip
            </span>

            <h3 className="text-xl font-bold mt-2">
                {agency.name}
            </h3>

            <p className="text-sm text-[#D9C296] mt-3 leading-relaxed">
                {agency.tip}
            </p>
        </div>
    </div>
);

export default TravelPartnerSection;