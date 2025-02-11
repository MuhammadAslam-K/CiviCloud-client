import { useState } from "react";
import { Buttons, InputField } from "../ui";


function EmployeePopup({ isOpen, onClose, onSave }) {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        phone: "",
    });

    const handleChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value,
        });
    };


    if (!isOpen) return null;

    const handleSave = () => {
        onSave({ ...formData });
        onClose();

    };

    const fields = [
        { key: 'name', label: 'Name', type: 'text', },
        { key: 'username', label: 'Username', type: 'text', },
        { key: 'phone', label: 'Phone Number', type: 'number', },
    ]

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px]">
            <div className="p-6 bg-white rounded-lg shadow-lg w-80">
                <h2 className="mb-4 primary-text">Create Employee</h2>
                {fields.map((field) => (
                    <InputField
                        onChange={(value) => handleChange(field.key, value)}
                        placeholder={field.label}
                        value={formData[field.key]}
                        type={field.type}
                    />
                ))}

                <div className="flex justify-end">
                    <Buttons
                        onClick={onClose}
                        variant={"cancel"}
                        text={'Cancel'}
                    />
                    <Buttons
                        onClick={handleSave}
                        variant={"submit"}
                        text={'Save'}
                    />
                </div>
            </div>
        </div>
    );
}

export default EmployeePopup