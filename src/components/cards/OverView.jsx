import React from "react";

const OverviewCard = ({ title, value }) => {
    return (
        <div className="p-5 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
            <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
        </div>
    );
};

export default OverviewCard;
