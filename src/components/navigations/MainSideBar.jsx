import { useState } from "react";
import { Link } from "react-router-dom";
import {
    FaBars, FaTimes, FaAngleDown, FaAngleUp,
    FaHome, FaUser, FaCog
} from "react-icons/fa";
import { EMPLOYEES, OVERVIEW } from "@routers/paths";

const menuItems = [
    {
        title: "Home",
        icon: <FaHome />,
        children: [
            { name: "Overview", path: OVERVIEW.overView },
        ],
    },
    {
        title: "Employees",
        icon: <FaUser />,
        children: [
            { name: "Employees", path: EMPLOYEES.employees },
        ],
    },
    {
        title: "Settings",
        icon: <FaCog />,
        children: [
            { name: "General", path: "" },
            { name: "Security", path: "" },
            { name: "Notifications", path: "" }
        ],
    },
];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (title) => {
        setActiveDropdown((prev) => (prev === title ? null : title));
    };

    return (
        <div className="flex flex-col">
            {/* Mobile Navbar */}
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
                    <h1 className="text-white primary-text">Dashboard</h1>
                    <FaTimes
                        className="text-2xl text-white cursor-pointer md:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                </div>

                {/* Dynamic Menu */}
                <ul className="space-y-4">
                    {menuItems.map((item) => (
                        <li key={item.title} className="flex flex-col">
                            <div
                                className="flex items-center justify-between p-2 space-x-3 rounded cursor-pointer hover:bg-gray-700"
                                onClick={() => toggleDropdown(item.title)}
                            >
                                <div className="flex items-center space-x-3">
                                    {item.icon}
                                    <span>{item.title}</span>
                                </div>
                                {item.children && (
                                    activeDropdown === item.title ? <FaAngleUp /> : <FaAngleDown />
                                )}
                            </div>

                            {/* Dropdown Items with Links */}
                            {item.children && (
                                <ul
                                    className={`ml-8 mt-2 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${activeDropdown === item.title ? "max-h-40" : "max-h-0"
                                        }`}
                                >
                                    {item.children.map((child) => (
                                        <li key={child.name} className="p-2 rounded cursor-pointer hover:bg-gray-600">
                                            <Link to={child.path} className="block w-full h-full">
                                                {child.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
