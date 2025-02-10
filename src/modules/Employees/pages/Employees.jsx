import { useState } from "react";
import { CreateEmployeePopup } from "@components/popups";
import { Table, InputField, Buttons } from "@components/ui";


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
                <Buttons text={"Delete"} variant={"cancel"}
                    onClick={() => handleDelete(row.original.id)}
                />
            ),
        },
    ];

    const pagination = {
        prevPage: 1,
        currentPage: 2,
        nextPage: 3,
    };

    const handleSaveEmployee = (newEmployee) => {
        setData([...data, { id: data.length + 1, ...newEmployee }]);
    };

    return (
        <div className="p-3 md:p-6">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">Employees</h1>
                <button
                    onClick={() => setIsPopupOpen(true)}
                    className="p-2 text-base font-semibold text-white rounded-lg shadow-md cursor-pointer w-fit md:px-6 md:py-3 md:text-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 sm:w-auto"
                >
                    + Create Employee
                </button>

            </div>

            {/* Search Input */}
            <div className="mb-4">
                <InputField
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={"Search Employees"}
                    type={"text"}
                    value={search}
                />
            </div>

            {/* Employees Table */}
            <Table
                columns={columns}
                data={data}
                pageNation={pagination}
                handlePageNation={(value) => setPage(value)}
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
