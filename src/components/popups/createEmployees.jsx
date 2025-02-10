import { useState } from "react";


function EmployeePopup({ isOpen, onClose, onSave }) {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");

    if (!isOpen) return null;

    const handleSave = () => {
        if (name && username && phone) {
            onSave({ name, username, phone });
            onClose();
            setName("");
            setUsername("");
            setPhone("");
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-xl font-bold mb-4">Create Employee</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md mb-4"
                />
                <div className="flex justify-end">
                    <button onClick={onClose} className="px-4 py-2 mr-2 bg-gray-400 text-white rounded-md">
                        Cancel
                    </button>
                    <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-md">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EmployeePopup