import { useState } from "react";
import { Buttons, InputField } from "@components/ui";

export default function CreateProjectPopup({ isOpen, onClose, onSave }) {
    const [formData, setFormData] = useState({
        name: "",
        projectId: "",
    });


    const generateProjectId = (name) => {
        return name
            .toLowerCase()
            .replace(/\s+/g, "_") // Replace spaces with underscores
            .replace(/[^a-z0-9_]/g, ""); // Remove special characters
    };

    const handleChange = (key, value) => {
        setFormData((prevData) => {
            let updatedData = { ...prevData, [key]: value };

            if (key === "name") {
                updatedData.projectId = generateProjectId(value);
            }
            if (key === 'projectId') {
                updatedData.projectId = generateProjectId(value)
            }

            return updatedData;
        });
    };


    if (!isOpen) return null;

    const handleSave = () => {
        onSave({ ...formData });
        onClose();
    };

    const fields = [
        { key: "name", label: "Name", type: "text", onChange: handleChange },
        { key: "projectId", label: "ProjectId", type: "text", onChange: handleChange },
    ];

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px]">
            <div className="p-6 bg-white rounded-lg shadow-lg w-80">
                <h2 className="mb-4 primary-text">Create Project</h2>
                {fields.map((field) => (
                    <InputField
                        key={field.key}
                        onChange={(value) => field.onChange(field.key, value)}
                        placeholder={field.label}
                        value={formData[field.key]}
                        type={field.type}
                    />
                ))}

                <div className="flex justify-end mt-4 space-x-2">
                    <Buttons onClick={onClose} variant="cancel" text="Cancel" />
                    <Buttons onClick={handleSave} variant="submit" text="Save" />
                </div>
            </div>
        </div>
    );
}