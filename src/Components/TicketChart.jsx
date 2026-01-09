import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const TicketChart = ({ data }) => {
    return (
        <div className="bg-[#0A2F23] border-2 border-[#D9C296c0] p-6 rounded-2xl shadow-sm text-[#D9C296]">
            <h3 className="font-semibold mb-4">Ticket Overview</h3>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#D9C296" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default TicketChart;
