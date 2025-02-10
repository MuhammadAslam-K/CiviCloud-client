import { OverViewCard } from "@components/cards";

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
        { title: "Total Employees", value: 10 },
        { title: "Total Vehicles", value: 3 },
    ];

    return (
        <div className="w-full h-full min-h-screen p-4">
            <h1 className="mt-2 primary-text md:mt-8">Today</h1>
            <div className="grid grid-cols-1 gap-4 mt-2 md:grid-cols-3">
                {todayData.map((item, index) => (
                    <OverViewCard key={index} title={item.title} value={item.value} />
                ))}
            </div>

            <h1 className="mt-8 primary-text">Overview</h1>
            <div className="grid grid-cols-1 gap-4 mt-2 md:grid-cols-3">
                {overviewData.map((item, index) => (
                    <OverViewCard key={index} title={item.title} value={item.value} />
                ))}
            </div>
        </div>
    );
}

export default OverView;
