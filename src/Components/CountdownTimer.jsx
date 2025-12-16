import React, { useEffect, useState } from "react";

const CountdownTimer = ({ targetDateTime }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const target = new Date(targetDateTime).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const diff = target - now;

            if (diff <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            } else {
                setTimeLeft({
                    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((diff / (1000 * 60)) % 60),
                    seconds: Math.floor((diff / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDateTime]);

    return (
        <div className="grid grid-cols-4 gap-3 text-center auto-cols-max">
            <div className="w-full border-2 flex flex-col px-2 pb-0.5 pt-0.75  bg-[#D9C296] rounded-lg text-[#0A2F23] text-sm">
                <span className="countdown font-mono font-bold flex justify-center"><span style={{ "--value": timeLeft.days }}></span>&nbsp;day</span>
            </div>
            <div className="w-full border-2 flex flex-col px-2 pb-0.5 pt-0.75  bg-[#D9C296] rounded-lg text-[#0A2F23] text-sm">
                <span className="countdown font-mono font-bold flex justify-center"><span style={{ "--value": timeLeft.hours }}></span>&nbsp;hour</span>
            </div>
            <div className="w-full border-2 flex flex-col px-2 pb-0.5 pt-0.75  bg-[#D9C296] rounded-lg text-[#0A2F23] text-sm">
                <span className="countdown font-mono font-bold flex justify-center"><span style={{ "--value": timeLeft.minutes }}></span>&nbsp;min</span>
            </div>
            <div className="w-full border-2 flex flex-col px-2 pb-0.5 pt-0.75  bg-[#D9C296] rounded-lg text-[#0A2F23] text-sm">
                <span className="countdown font-mono font-bold flex justify-center"><span style={{ "--value": timeLeft.seconds }}></span>&nbsp;sec</span>
            </div>
        </div>
    );
};

export default CountdownTimer;
