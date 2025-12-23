import React from 'react';

const AboutSection = () => {
    return (
        <section className="max-w-300 mx-auto px-4 pb-16">
            <h1 className="mt-18 mb-3 ml-2 lg:ml-0 flex items-center gap-3 text-2xl lg:text-4xl font-semibold text-[#0A2F23]">
                <span className="w-2 h-8 bg-[#0A2F23] rounded-full"></span>
                <span className="px-8 py-0 bg-[#D9C296e5] border-4 border-[#0A2F23] rounded-full shadow flex flex-col">
                    <span className='text-xl'>About Us</span>
                </span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
                {/* LEFT: About Company */}
                <div>
                    <h2 className="text-4xl font-bold mt-2 mb-6 leading-tight">
                        Making Travel Simple, Smart & Reliable
                    </h2>

                    <p className="mb-4 leading-relaxed">
                        We are a modern digital travel platform committed to making
                        journeys easier, more transparent, and enjoyable for everyone.
                        From planning your trip to booking the right services, we focus
                        on delivering a smooth and trustworthy experience.
                    </p>

                    <p className="leading-relaxed">
                        Our goal is to connect travelers with the best deals, accurate
                        information, and dependable support — so you can travel with
                        confidence and peace of mind, every time.
                    </p>
                </div>

                {/* RIGHT: Newsletter Form */}
                <div className="bg-linear-to-br from-[#0A2F23] to-[#005c3f] p-8 text-[#D9C296] border-2 border-[#D9C296c0] rounded-2xl shadow-md">
                    <h3 className="text-2xl font-semibold mb-3">
                        Join Our Newsletter
                    </h3>

                    <p className="mb-6">
                        Subscribe to receive exclusive offers, travel tips, and the
                        latest updates directly in your inbox.
                    </p>

                    <form className="flex flex-col md:flex-row grow gap-4 text-sm">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="flex-1 px-4 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#edc478] font-light"
                            required
                        />

                        <button
                            type="submit"
                            className="px-2 py-1 bg-transparent border border-[#edc478] rounded-lg font-light hover:bg-[#D9C29680] transition"
                        >
                            Subscribe
                        </button>
                    </form>

                    <p className="font-light text-xs mt-4">
                        We respect your privacy. <span className='link'>Unsubscribe</span> anytime.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
