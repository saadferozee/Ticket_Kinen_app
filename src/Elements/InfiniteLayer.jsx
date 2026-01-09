import React from "react";

const InfiniteLayer = ({ children, speed = 60 }) => {
    return (
        <div className="absolute bottom-0 w-full overflow-hidden">
            <div
                className="flex animate-scroll"
                style={{ animationDuration: `${speed}s` }}
            >
                {children}
                {children} {/* একই লেয়ার আবার */}
            </div>

            <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          width: 200%; /* দুই কপি রাখার জন্য */
          animation: scroll linear infinite;
        }
      `}</style>
        </div>
    );
};

export default InfiniteLayer;
