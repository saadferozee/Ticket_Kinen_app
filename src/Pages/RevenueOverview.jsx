import { useEffect, useState } from "react";
import { useContext } from "react";
import AuthContext from "../Contexts/AuthContext";
import Loading from "../Components/Loading";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import RevenueChart from "../Components/RevenuwCart";
import TicketChart from "../Components/TicketChart";
import OverviewCards from "../Components/OverviewCard";

const RevenueOverview = () => {

    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [overview, setOverview] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosSecure.get(`/revenue-overview?email=${user?.email}`) // backend endpoint
            .then(res => {
                setOverview(res.data);
                setLoading(false);
            });
    }, [user, axiosSecure]);

    return (
        <div className="space-y-8">
            <h1 className="mb-3 ml-2 lg:ml-0 flex items-center gap-3 text-2xl lg:text-4xl font-semibold text-[#0A2F23]">
                <span className="w-3 h-10 bg-[#0A2F23] rounded-full"></span>
                <span className="px-8 py-2 bg-[#f7f3e9e5] border-4 border-[#0A2F23] rounded-full shadow flex flex-col">
                    <span className='text-xl'>Revenue Overview</span>
                </span>
            </h1>
            {
                loading ? <Loading viewHeight={60} color={'#0A2F23'}></Loading> :
                    <>
                        <OverviewCards data={overview} />

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <RevenueChart data={overview.revenueStats} />
                            <TicketChart data={overview.ticketStats} />
                        </div>
                    </>
            }
        </div>
    );
};

export default RevenueOverview;
