// import { useState } from "react";
// import { DropdownField, Buttons, InputField, } from "@components/ui";


// export default function AddEmployeesTransactionPopup({ isOpen, onClose, onSave, works }) {
//     const [formData, setFormData] = useState({
//         date: new Date().toISOString().split("T")[0],
//         amount: "",
//         type: "debit",
//         reason: '',
//         reason_detail: "",
//     });

//     const handleChange = (field, value) => {
//         setFormData({
//             ...formData,
//             [field]: value,
//         });
//     };

//     const handleSave = () => {
//         onSave(formData);
//         onClose();
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px]">
//             <div className="p-6 bg-white rounded-lg shadow-lg w-80">
//                 <h2 className="mb-4 text-lg font-semibold">Add New Transaction</h2>

//                 {/* Date Field */}
//                 <InputField
//                     type="date"
//                     value={formData.date}
//                     onChange={(value) => handleChange("date", value)}
//                 />

//                 {/* Amount Field */}
//                 <InputField
//                     type="number"
//                     placeholder="Enter Amount"
//                     value={formData.amount}
//                     onChange={(value) => handleChange("amount", value)}
//                 />

//                 {/* Debit/Credit Dropdown */}
//                 <DropdownField
//                     value={formData.type}
//                     onChange={(value) => handleChange("type", value)}
//                     options={[
//                         { value: "debit", label: "Debit" },
//                         { value: "credit", label: "Credit" },
//                     ]}
//                 />

//                 {/* Works Dropdown */}
//                 <DropdownField
//                     value={formData.work}
//                     onChange={(value) => handleChange("work", value)}
//                     options={works.map((work) => ({ value: work.id, label: work.name }))}
//                 />

//                 <div className="flex justify-end mt-4">
//                     <Buttons onClick={onClose} variant="cancel" text="Cancel" />
//                     <Buttons onClick={handleSave} variant="submit" text="Save" />
//                 </div>
//             </div>
//         </div>
//     );
// }



import { useState } from "react";
import { DropdownField, Buttons, InputField } from "@components/ui";

export default function AddEmployeesTransactionPopup({ isOpen, onClose, onSave, works }) {
    const [formData, setFormData] = useState({
        date: new Date().toISOString().split("T")[0],
        amount: "",
        type: "debit",
        reason: "salary",
        reason_detail: "",
        work: "",
    });

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px]">
            <div className="p-6 bg-white rounded-lg shadow-lg w-80">
                <h2 className="mb-4 text-lg font-semibold">Add New Transaction</h2>

                {/* Date Field */}
                <InputField
                    type="date"
                    value={formData.date}
                    onChange={(value) => handleChange("date", value)}
                />

                {/* Amount Field */}
                <InputField
                    type="number"
                    placeholder="Enter Amount"
                    value={formData.amount}
                    onChange={(value) => handleChange("amount", value)}
                />

                {/* Debit/Credit Dropdown */}
                <DropdownField
                    value={formData.type}
                    onChange={(value) => handleChange("type", value)}
                    options={[
                        { value: "debit", label: "Debit" },
                        { value: "credit", label: "Credit" },
                    ]}
                />

                {/* Reason Dropdown */}
                <DropdownField
                    value={formData.reason}
                    onChange={(value) => handleChange("reason", value)}
                    options={[
                        { value: "salary", label: "Salary" },
                        { value: "other", label: "Other" },
                    ]}
                />

                {/* Conditional Work Dropdown (Only when "Salary" is selected) */}
                {formData.reason === "salary" && (
                    <DropdownField
                        value={formData.work}
                        onChange={(value) => handleChange("work", value)}
                        options={works.map((work) => ({ value: work.id, label: work.name }))}
                    />
                )}

                {/* Conditional Input Field (Only when "Other" is selected) */}
                {formData.reason === "other" && (
                    <InputField
                        type="text"
                        placeholder="Enter reason details"
                        value={formData.reason_detail}
                        onChange={(value) => handleChange("reason_detail", value)}
                    />
                )}

                <div className="flex justify-end mt-4">
                    <Buttons onClick={onClose} variant="cancel" text="Cancel" />
                    <Buttons onClick={handleSave} variant="submit" text="Save" />
                </div>
            </div>
        </div>
    );
}
