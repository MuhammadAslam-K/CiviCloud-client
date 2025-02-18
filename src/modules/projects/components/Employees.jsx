import { useState } from "react";
import { ConfirmationPopup } from "@components/popups";
import { Table, InputField, Buttons } from "@components/ui";
import { Link } from "react-router-dom";
import { EMPLOYEES } from "@routers/paths";
import AddEmployeesTransactionPopup from "@modules/Employees/components/AddEmployeesTransactionPopup";


export default function Employees() {
    const [search, setSearch] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [page, setPage] = useState(1);
    const [isPopupOpen, setIsPopupOpen] = useState({
        type: '',
        isOpen: false,
        data: {}
    });
    const [data, setData] = useState([
        { id: 1, name: "John Doe", userId: "john@example.com", phone: "Admin" },
        { id: 2, name: "Jane Smith", userId: "jane@example.com", phone: "User" },
        { id: 3, name: "Michael Johnson", userId: "michael@example.com", phone: "Editor" },
        { id: 4, name: "Alice Brown", userId: "alice@example.com", phone: "User" },
        { id: 5, name: "Robert Wilson", userId: "robert@example.com", phone: "Moderator" },
    ]);

    const worksArray = [
        { id: "1", name: "Plumbing" },
        { id: "2", name: "Electrical" },
        { id: "3", name: "Carpentry" }
    ];

    const handleDelete = (id) => {
        console.log('Deleting employee with id:', id);
        setData((prev) => prev.filter((employee) => employee.id !== id.id));
        setIsPopupOpen({ isOpen: false, type: '', data: {} })
    };

    const columns = [
        {
            Header: 'No',
            accessor: (row, rowIndex) => rowIndex + 1,
            id: 'no'
        },
        {
            Header: "Name",
            accessor: "name",
        },
        {
            Header: "UserId",
            accessor: "userId",
        },
        {
            Header: "Phone",
            accessor: "phone",
        },
        {
            Header: "Transaction",
            Cell: ({ row }) => (
                <Buttons text={"Add"} variant={"transaction"}
                    onClick={() => setIsPopupOpen({ isOpen: true, type: 'transaction', data: row.original })}
                />
            ),
        },
        {
            Header: "Actions",
            Cell: ({ row }) => (
                <>
                    <Buttons text={"Remove"} variant={"cancel"}
                        onClick={() => setIsPopupOpen({ isOpen: true, type: 'remove', data: { id: row.original } })}
                    />
                    <Link to={EMPLOYEES.employees_details}>
                        <Buttons text={"View"} variant={"view"} />
                    </Link>
                </>
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

            <ConfirmationPopup
                isOpen={isPopupOpen.isOpen && isPopupOpen.type === 'remove'}
                onClose={() => setIsPopupOpen({ isOpen: false, type: '', data: {} })}
                title={"Remove Employee"}
                message={`Are you sure you want to remove ${isPopupOpen.isOpen && isPopupOpen.type === 'remove' && isPopupOpen.data.id.name} from this project ?`}
                onConfirm={() => handleDelete(isPopupOpen.data.id)}
            />


            <AddEmployeesTransactionPopup
                isOpen={isPopupOpen.isOpen && isPopupOpen.type === 'transaction'}
                onClose={() => setIsPopupOpen({ isOpen: false, type: '' })}
                onSave={(formData) => console.log(formData)}
                works={worksArray}
            />
        </div>
    );
}