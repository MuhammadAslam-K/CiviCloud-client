import { CreateEmployeePopup } from "@components/popups";
import { Table } from "@components/ui";
import { useState } from "react";

function Employees() {
    const [search, setSearch] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [page, setPage] = useState(1);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [data, setData] = useState([
        { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
        { id: 3, name: "Michael Johnson", email: "michael@example.com", role: "Editor" },
        { id: 4, name: "Alice Brown", email: "alice@example.com", role: "User" },
        { id: 5, name: "Robert Wilson", email: "robert@example.com", role: "Moderator" },
    ]);

    const handleDelete = (id) => {
        setData((prev) => prev.filter((employee) => employee.id !== id));
    };

    const columns = [
        {
            Header: "ID",
            accessor: "id",
        },
        {
            Header: "Name",
            accessor: "name",
        },
        {
            Header: "Email",
            accessor: "email",
        },
        {
            Header: "Role",
            accessor: "role",
        },
        {
            Header: "Actions",
            Cell: ({ row }) => (
                <button
                    onClick={() => handleDelete(row.original.id)}
                    className="p-2 px-3 mr-1 text-white bg-red-500 rounded-xl hover:bg-red-600 cursor-pointer"
                >
                    Delete
                </button>
            ),
        },
    ];

    const pagination = {
        prevPage: 1,
        currentPage: 2,
        nextPage: 3,
    };

    const handleSaveEmployee = (newEmployee) => {
        setEmployees([...employees, { id: employees.length + 1, ...newEmployee }]);
    };

    return (
        <div className="p-6">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Employees</h1>
                <button
                    onClick={() => setIsPopupOpen(true)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                    + Create Employee
                </button>
            </div>

            {/* Search Input */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search employees..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Employees Table */}
            <Table
                columns={columns}
                data={data}
                pagination={pagination}
                handlePageChange={(value) => setPage(value)}
            />

            <CreateEmployeePopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                onSave={handleSaveEmployee}
            />
        </div>
    );
}

export default Employees;
