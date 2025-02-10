import OverviewCard from "@components/cards/OverView"
function OverView() {
    const todayData = [
        { title: "Income (profit)", value: 10 },
        { title: "Revenue", value: 5 },
        { title: "Expenses", value: 3 },
    ];

    const overviewData = [
        { title: "Total Income", value: 10 },
        { title: "Total Revenue", value: 5 },
        { title: "Total Expenses", value: 3 },
        { title: "Total Projects", value: 5 },
        { title: "Total Workers", value: 10 },
        { title: "Total Vehicles", value: 3 },
    ];

    return (
        <div className="w-full h-full min-h-screen p-4">
            <h1 className="text-xl font-bold mt-2 md:mt-8">Today</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-2">
                {todayData.map((item, index) => (
                    <OverviewCard key={index} title={item.title} value={item.value} />
                ))}
            </div>

            <h1 className="text-xl font-bold mt-8">Overview</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-2">
                {overviewData.map((item, index) => (
                    <OverviewCard key={index} title={item.title} value={item.value} />
                ))}
            </div>
        </div>
    );
}

export default OverView;
