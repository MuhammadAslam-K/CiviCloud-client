import { useState } from "react";
import { DropdownField, Buttons, InputField } from "@components/ui";
import { debitAndCredit } from "@constants/data";

export default function AddProjectTransactionPopup({ isOpen, onClose, onSave }) {
    const [formData, setFormData] = useState({
        date: new Date().toISOString().split("T")[0],
        amount: "",
        type: "debit",
        reason: "",
        reason_detail: "",
    });

    const [isEmployeePopupOpen, setIsEmployeePopupOpen] = useState(false);

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [field]: value,
        }));

        if (field === "reason" && value === "to_employee") {
            setIsEmployeePopupOpen(true);
        }
    };

    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    if (!isOpen) return null;

    const dropdownOptions = [
        { value: "to_employee", label: "To Employee" },
        { value: "other", label: "Other" },
    ];

    const inputFields = [
        { inputType: "input", type: "date", key: "date", isVisible: true, placeholder: "" },
        { inputType: "input", type: "number", key: "amount", isVisible: true, placeholder: "Enter Amount" },
        { inputType: "dropDown", options: debitAndCredit, key: "type", isVisible: true },
        { inputType: "dropDown", options: dropdownOptions, key: "reason", isVisible: true },
    ];

    return (
        <>
            {/* Main Popup */}
            <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px]">
                <div className="p-6 bg-white rounded-lg shadow-lg w-[400px]"> {/* Increased width */}
                    <h2 className="mb-4 text-lg font-semibold">Add New Transaction</h2>

                    {/* Dynamic Fields Rendering */}
                    {inputFields.map((field) =>
                        field.isVisible ? (
                            field.inputType === "input" ? (
                                <InputField
                                    key={field.key}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    value={formData[field.key]}
                                    onChange={(value) => handleChange(field.key, value)}
                                />
                            ) : (
                                <DropdownField
                                    key={field.key}
                                    value={formData[field.key]}
                                    onChange={(value) => handleChange(field.key, value)}
                                    options={field.options}
                                />
                            )
                        ) : null
                    )}

                    {/* Extra Input Field if "other" is selected */}
                    {formData.reason === "other" && (
                        <InputField
                            type="text"
                            placeholder="Enter Reason Details"
                            value={formData.reason_detail}
                            onChange={(value) => handleChange("reason_detail", value)}
                        />
                    )}

                    {/* Show Selected Employee if "To Employee" is selected */}
                    {formData.reason === "to_employee" && formData.reason_detail && (
                        <div className="flex items-center justify-between p-2 mt-2 text-sm bg-gray-100 border rounded">
                            <span>Selected Employee: <strong>{formData.reason_detail}</strong></span>
                            <button
                                onClick={() => {
                                    handleChange("reason_detail", "")
                                    setIsEmployeePopupOpen(true)
                                }}
                                className="px-2 py-1 ml-2 text-red-600 bg-gray-200 rounded cursor-pointer hover:bg-gray-300"
                            >
                                ✖
                            </button>
                        </div>
                    )}


                    <div className="flex justify-end mt-4 space-x-2">
                        <Buttons onClick={onClose} variant="cancel" text="Cancel" />
                        <Buttons onClick={handleSave} variant="submit" text="Save" />
                    </div>
                </div>
            </div>

            {/* Employee Popup */}
            {isEmployeePopupOpen && (
                <EmployeeSearchPopup
                    isOpen={isEmployeePopupOpen}
                    onClose={() => setIsEmployeePopupOpen(false)}
                    onSelectEmployee={(employee) => {
                        setFormData((prevData) => ({
                            ...prevData,
                            reason_detail: employee,
                        }));
                        setIsEmployeePopupOpen(false);
                    }}
                />
            )}
        </>
    );
}

// Employee Search Popup Component
function EmployeeSearchPopup({ isOpen, onClose, onSelectEmployee }) {
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
