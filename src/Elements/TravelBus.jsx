import { motion } from "framer-motion";

const TravelBus = () => {
    return (
        <motion.div
            className="relative"
            animate={{ rotate: [0, 1.5, -1.5, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
            {/* BUS BODY */}
            <div className="relative w-72 h-28 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl shadow-2xl">

                {/* FRONT GLASS */}
                <div className="absolute left-2 top-4 w-14 h-10 bg-sky-300 rounded-lg border border-white/40" />

                {/* WINDOWS */}
                <div className="absolute left-20 top-4 flex gap-2">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="w-12 h-8 bg-sky-300 rounded-md border border-white/40"
                        />
                    ))}
                </div>

                {/* DOOR */}
                <div className="absolute right-14 top-4 w-6 h-16 bg-sky-200 rounded-sm border border-white/40" />

                {/* HEADLIGHT */}
                <div className="absolute left-1 bottom-4 w-3 h-3 bg-white rounded-full shadow" />

                {/* SIDE STRIPE */}
                <div className="absolute bottom-3 left-0 w-full h-2 bg-orange-500 opacity-80" />

                {/* WHEELS */}
                <div className="absolute -bottom-5 left-14 w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-400 rounded-full" />
                </div>
                <div className="absolute -bottom-5 right-16 w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-400 rounded-full" />
                </div>
            </div>
        </motion.div>
    );
};

export default TravelBus;
