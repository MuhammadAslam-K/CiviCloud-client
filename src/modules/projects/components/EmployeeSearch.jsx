import { Buttons, InputField } from "@components/ui";
import { useState } from "react";

export default function EmployeeSearchPopup({ isOpen, onClose, onSelectEmployee }) {
    const [search, setSearch] = useState("");
    const employees = ["John Doe", "Jane Smith", "Michael Brown", "Sarah Johnson"];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px]">
            <div className="p-6 bg-white rounded-lg shadow-lg w-[400px]"> {/* Increased width */}
                <h2 className="mb-4 text-lg font-semibold">Select Employee</h2>

                {/* Search Bar */}
                <InputField
                    type="text"
                    placeholder="Search Employee"
                    value={search}
                    onChange={(value) => setSearch(value)}
                />

                {/* Employee List */}
                <div className="mt-2 overflow-auto border rounded max-h-40">
                    {employees
                        .filter((emp) => emp.toLowerCase().includes(search.toLowerCase()))
                        .map((emp) => (
                            <div
                                key={emp}
                                className="p-2 cursor-pointer hover:bg-gray-200"
                                onClick={() => onSelectEmployee(emp)}
                            >
                                {emp}
                            </div>
                        ))}
                </div>

                <div className="flex justify-end mt-4">
                    <Buttons onClick={onClose} variant="cancel" text="Close" />
                </div>
            </div>
        </div>
    );
}
