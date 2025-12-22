import React, { useState } from 'react';
import { motion } from 'framer-motion';

const agencies = [
    { id: 1, name: 'GoZayaan', desc: 'দেশীয় ভ্রমণের জন্য জনপ্রিয় ডিজিটাল ট্রাভেল প্ল্যাটফর্ম।' },
    { id: 2, name: 'ShareTrip Domestic', desc: 'বাংলাদেশের অভ্যন্তরীণ ভ্রমণে স্মার্ট সমাধান।' },
    { id: 3, name: 'Travel Mate BD', desc: 'দেশীয় গ্রুপ ও কাস্টমাইজড ট্যুরে অভিজ্ঞ।' },
    { id: 4, name: 'Obokash', desc: 'বাংলাদেশের ট্যুরিস্ট স্পট ভিত্তিক সার্ভিস।' },
    { id: 5, name: 'Vromon Bilash', desc: 'পরিকল্পিত ও আরামদায়ক দেশীয় ভ্রমণ।' },
    { id: 6, name: 'Trip Zip BD', desc: 'লোকাল ও বাজেট ট্রাভেলে পরিচিত নাম।' },
    { id: 7, name: 'Ghure Ashi', desc: 'বাংলাদেশ ঘোরার নির্ভরযোগ্য পার্টনার।' },
    { id: 8, name: 'Desh Travels', desc: 'শুধু দেশেই, দেশকে নিয়েই ভ্রমণ।' },
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
const scatterOffsets = [
    { x: -480, y: -40 },
    { x: -320, y: 60 },
    { x: -160, y: -90 },
    { x: 60, y: 80 },
    { x: 260, y: -20 },
    { x: 430, y: 50 },
    { x: 150, y: -110 },
];

// Removed an accidental incomplete JSX <motion.div> block that was placed outside
// the component and left unclosed, which caused parsing errors.

const TravelPartnerSection = () => {
    const [active, setActive] = useState(0);

    return (
        <section className="mt-40 max-w-300 mx-auto min-h-10 px-6 md:px-0">
            {/* DESKTOP / TABLET */}
            <h1 className="mt-18 -mb-3 ml-2 lg:ml-0 flex items-center gap-3 text-2xl lg:text-4xl font-semibold text-[#0A2F23]">
                <span className="w-2 h-8 bg-[#0A2F23] rounded-full"></span>
                <span className="px-8 py-0 bg-[#D9C296e5] border-4 border-[#0A2F23] rounded-full shadow flex flex-col">
                    <span className='text-xl'>Meet Your New Travel Partner</span>
                </span>
            </h1>
            <div className="relative w-full h-150 flex items-center justify-center">
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
            <div className="md:hidden px-4 space-y-6">
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
                Domestic Only
            </span>

            <h3 className="text-2xl font-bold mt-2">
                {agency.name}
            </h3>

            <p className="text-sm text-[#D9C296] mt-3 leading-relaxed">
                {agency.desc}
            </p>
        </div>

        {active && (
            <motion.p
                className="text-xs text-[#D9C296] mt-4"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                ★ Selected Partner
            </motion.p>
        )}
    </div>
);

export default TravelPartnerSection;

