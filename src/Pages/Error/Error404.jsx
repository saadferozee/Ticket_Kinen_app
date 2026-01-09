import React from 'react';
import { Link } from 'react-router';

const Error404 = () => {
    const themeColor = '#0A2F23';
    const textColor = '#D9C296';

    return (
        <div
            className="min-h-[90vh] absolute w-full h-full flex flex-col items-center justify-center text-center p-4"
            style={{ backgroundColor: themeColor, color: textColor }}
        >
            {/* Travel Icon / Compass SVG */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke={textColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-32 h-32 mb-6 animate-pulse"
            >
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
            </svg>

            {/* 404 Heading */}
            <h1 className="text-9xl font-black title-logo tracking-widest opacity-20 select-none">
                404
            </h1>

            {/* Message */}
            <div className="mt-[-2rem] z-10">
                <h2 className="text-3xl title md:text-4xl font-semibold mb-4">
                    গন্তব্য খুঁজে পাওয়া যাচ্ছে না!
                </h2>
                <p className="text-lg md:text-xl max-w-lg mx-auto mb-8 opacity-80">
                    মনে হচ্ছে আপনি ম্যাপের বাইরে চলে এসেছেন। এই রুটটি আমাদের ট্রাভেল গাইডবুক এ নেই।
                </p>

                {/* Home Button */}
                <Link
                    to="/"
                    className="px-8 py-3 rounded-full font-semibold transition-transform transform hover:scale-105 shadow-lg"
                    style={{
                        backgroundColor: textColor,
                        color: themeColor
                    }}
                >
                    হোমপেজে ফিরে যান
                </Link>
            </div>

            {/* Footer Text */}
            <footer className="absolute top-28 title text-sm opacity-50">
                Lost? Don't worry, every journey has a detour.
            </footer>
        </div>
    );
};

export default Error404;