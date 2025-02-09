import { useState } from "react";
import { FaBars, FaHome, FaUser, FaCog, FaTimes } from "react-icons/fa";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col">
            {/* Mobile Navbar (Fixing Hamburger Alignment) */}
            <div className="relative flex items-center justify-between w-full p-4 bg-white shadow md:hidden">
                <button
                    className="p-2 text-white bg-gray-800 rounded"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FaBars className="text-2xl" />
                </button>
                <h2 className="text-xl font-bold text-gray-900">Welcome</h2>
            </div>

            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 h-full bg-slate-900 text-white w-64 p-5 transition-transform ${isOpen ? "translate-x-0" : "-translate-x-64"
                    } md:translate-x-0 md:w-72`}
            >
                <div className="flex items-center justify-between mb-5">
                    <h1 className="text-xl font-bold">Dashboard</h1>
                    <FaTimes
                        className="text-2xl text-white cursor-pointer md:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                </div>
                <ul className="space-y-4">
                    <li className="flex items-center p-2 space-x-3 rounded hover:bg-gray-700">
                        <FaHome />
                        <span>Home</span>
                    </li>
                    <li className="flex items-center p-2 space-x-3 rounded hover:bg-gray-700">
                        <FaUser />
                        <span>Profile</span>
                    </li>
                    <li className="flex items-center p-2 space-x-3 rounded hover:bg-gray-700">
                        <FaCog />
                        <span>Settings</span>
                    </li>
                </ul>
            </div>


        </div>
    );
};

export default Sidebar;