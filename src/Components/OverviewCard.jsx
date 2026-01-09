const OverviewCards = ({ data }) => {
    const cards = [
        {
            title: "Total Revenue",
            value: `৳ ${data.totalRevenue}`,
        },
        {
            title: "Tickets Sold",
            value: data.ticketsSold,
        },
        {
            title: "Tickets Added",
            value: data.ticketsAdded,
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="bg-[#0A2F23] border-2 border-[#D9C296c0] p-6 rounded-2xl shadow-sm text-[#D9C296]"
                    >
                        <p className="text-sm text-[">{card.title}</p>
                        <h3 className="text-2xl font-bold mt-2">{card.value}</h3>
                    </div>
                ))
            }
        </div>
    );
};

export default OverviewCards;
