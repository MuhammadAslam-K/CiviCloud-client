import Button from "@components/ui/Buttons";
import { useState } from "react";

export default function EmployeeTransactions({ module }) {
    const initialTransactions = [
        { id: 1, createdDate: "2025-02-12", type: "credit", reason: "salary", reasonDetail: "Project A" },
        { id: 2, createdDate: "2025-02-14", type: "debit", reason: "other", reasonDetail: "Equipment Purchase" },
        { id: 3, createdDate: "2025-02-15", type: "credit", reason: "salary", reasonDetail: "Project B" },
        { id: 4, createdDate: "2025-02-16", type: "debit", reason: "other", reasonDetail: "Office Rent" },
    ];

    const [transactions, setTransactions] = useState(initialTransactions);
    const [selectedTransactions, setSelectedTransactions] = useState(new Set());
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const handleDelete = (id) => {
        setTransactions(transactions.filter((t) => t.id !== id));
        setSelectedTransactions((prevSelected) => {
            const updatedSelection = new Set(prevSelected);
            updatedSelection.delete(id);
            return updatedSelection;
        });
    };

    const handleToggleSelection = (id) => {
        setSelectedTransactions((prevSelected) => {
            const updatedSelection = new Set(prevSelected);
            if (updatedSelection.has(id)) {
                updatedSelection.delete(id);
            } else {
                updatedSelection.add(id);
            }
            return updatedSelection;
        });
    };

    return (
        <div className="max-w-2xl p-4 mx-auto bg-white rounded-lg shadow-sm">
            {/* Heading and Create PDF Button */}
            <div className="flex flex-col mb-4 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-semibold text-gray-800 sm:text-2xl">{module} Transactions</h2>
                <Button onClick={"#"} text={"Create PDF"} variant={"submit"} />
            </div>

            {/* Date Filters */}
            <div className="flex flex-col gap-3 mb-4 sm:flex-row">
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="p-2 border rounded-md"
                    placeholder="Start Date"
                />
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="p-2 border rounded-md"
                    placeholder="End Date"
                />
            </div>

            {/* Transactions List */}
            <div className="space-y-3">
                {transactions.length > 0 ? (
                    transactions.map((transaction) => {
                        const isSelected = selectedTransactions.has(transaction.id);
                        return (
                            <div
                                key={transaction.id}
                                onClick={() => handleToggleSelection(transaction.id)}
                                className={`p-3 transition-all border rounded-md shadow-sm cursor-pointer hover:shadow-md ${isSelected ? "bg-blue-100 border-blue-500" : "bg-gray-50"
                                    }`}
                            >
                                <div className="flex flex-col gap-1">
                                    <p className="text-xs text-gray-500 sm:text-sm">{transaction.createdDate}</p>
                                    <div className="flex items-center gap-1">
                                        <span
                                            className={`text-xs font-semibold ${transaction.type === "credit" ? "text-green-500" : "text-red-500"
                                                } sm:text-sm`}
                                        >
                                            {transaction.type.toUpperCase()}
                                        </span>
                                        <p className="w-full text-sm text-gray-800 truncate sm:text-base" title={transaction.reasonDetail}>
                                            : {transaction.reasonDetail}
                                        </p>
                                    </div>
                                    <p className="text-xs text-gray-600 sm:text-sm">{transaction.reason}</p>
                                </div>
                                <div className="flex justify-between gap-2 mt-2">
                                    <button className="px-3 py-1 text-xs text-white transition-all bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600 sm:px-4 sm:py-2 sm:text-sm">
                                        Edit
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDelete(transaction.id);
                                        }}
                                        className="px-3 py-1 text-xs text-white transition-all bg-red-500 rounded-md cursor-pointer hover:bg-red-600 sm:px-4 sm:py-2 sm:text-sm"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-center text-gray-500 sm:text-lg">No transactions found</p>
                )}
            </div>
        </div>
    );
}
