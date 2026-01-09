import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const RevenueChart = ({ data }) => {
    return (
        <div className="bg-[#0A2F23] border-2 border-[#D9C296c0] p-6 rounded-2xl shadow-sm text-[#D9C296]">
            <h3 className="font-semibold mb-4">Revenue Trend</h3>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line
                        color="#D9C296"
                        type="monotone"
                        dataKey="revenue"
                        strokeWidth={2}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RevenueChart;
