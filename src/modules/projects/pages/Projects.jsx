import { useState } from "react";
import { AddTransactionPopup, ConfirmationPopup, CreateEmployeePopup } from "@components/popups";
import { Table, InputField, Buttons } from "@components/ui";


function Employees() {
    const [search, setSearch] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [page, setPage] = useState(1);
    const [isPopupOpen, setIsPopupOpen] = useState({
        type: '',
        isOpen: false,
        data: {}
    });
    const [data, setData] = useState([
        { id: 1, name: "John Doe", projectId: "john@example.com", no_of_employees: "Admin", completion: '23' },
        { id: 2, name: "Jane Smith", projectId: "jane@example.com", no_of_employees: "User", completion: '23' },
        { id: 3, name: "Michael Johnson", projectId: "michael@example.com", no_of_employees: "Editor", completion: '23' },
        { id: 4, name: "Alice Brown", projectId: "alice@example.com", no_of_employees: "User", completion: '23' },
        { id: 5, name: "Robert Wilson", projectId: "robert@example.com", no_of_employees: "Moderator", completion: '23' },
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
            Header: "ProjectId",
            accessor: "projectId",
        },
        {
            Header: "No of Employees",
            accessor: "no_of_employees",
        },
        {
            Header: "Completion %",
            accessor: "completion",
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
                    <Buttons text={"Delete"} variant={"cancel"}
                        onClick={() => setIsPopupOpen({ isOpen: true, type: 'delete', data: { id: row.original } })}
                    />
                    <Buttons text={"View"} variant={"view"}
                        onClick={() => setIsPopupOpen({ isOpen: true, type: 'delete', data: { id: row.original } })}
                    />
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
                <h1 className="text-2xl font-bold">Projects</h1>
                <Buttons
                    onClick={() => setIsPopupOpen({ isOpen: true, type: 'create' })}
                    text={"+ Create Project"}
                    variant={"transaction"}
                />

            </div>

            {/* Search Input */}
            <div className="mb-4">
                <InputField
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={"Search Project"}
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
                isOpen={isPopupOpen.isOpen && isPopupOpen.type === 'create'}
                onClose={() => setIsPopupOpen({ isOpen: false, type: '' })}
                onSave={handleSaveEmployee}
            />

            <ConfirmationPopup
                isOpen={isPopupOpen.isOpen && isPopupOpen.type === 'delete'}
                onClose={() => setIsPopupOpen({ isOpen: false, type: '', data: {} })}
                title={"Delete Employee"}
                message={`Are you sure you want to delete ${isPopupOpen.isOpen && isPopupOpen.type === 'delete' && isPopupOpen.data.id.name}?`}
                onConfirm={() => handleDelete(isPopupOpen.data.id)}
            />

            <AddTransactionPopup
                isOpen={isPopupOpen.isOpen && isPopupOpen.type === 'transaction'}
                onClose={() => setIsPopupOpen({ isOpen: false, type: '' })}
                onSave={(formData) => console.log(formData)}
                works={worksArray}
            />
        </div>
    );
}

export default Employees;
