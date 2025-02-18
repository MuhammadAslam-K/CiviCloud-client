import { useState } from "react";
import { ConfirmationPopup, } from "@components/popups";
import { Table, InputField, Buttons, DropdownField } from "@components/ui";
import { capitalize } from "@utils/textModifier";
import CreateProjectPopup from "../components/CreateProjectPopup";
import AddProjectTransactionPopup from "../components/AddProjectTransactionPopup";
import { Link } from "react-router-dom";
import { PROJECTS } from "@routers/paths";


export default function Projects() {
    const [search, setSearch] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [page, setPage] = useState(1);
    const [activeTab, setActiveTab] = useState('ongoing');
    const [isPopupOpen, setIsPopupOpen] = useState({
        type: '',
        isOpen: false,
        data: {}
    });
    const [data, setData] = useState([
        { id: 1, name: "John Doe", projectId: "john@example.com", no_of_employees: "Admin", status: '23' },
        { id: 2, name: "Jane Smith", projectId: "jane@example.com", no_of_employees: "User", status: '23' },
        { id: 3, name: "Michael Johnson", projectId: "michael@example.com", no_of_employees: "Editor", status: '23' },
        { id: 4, name: "Alice Brown", projectId: "alice@example.com", no_of_employees: "User", status: '23' },
        { id: 5, name: "Robert Wilson", projectId: "robert@example.com", no_of_employees: "Moderator", status: '23' },
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
            Header: "Status",
            Cell: ({ row }) => (
                <div className="w-28 md:w-32">
                    <DropdownField
                        onChange={(value) => console.log('value', value)}
                        options={worksArray.map((work) => ({ value: work.id, label: work.name }))}
                        value={'1'}
                    />
                </div>
            ),
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
                    <Link to={PROJECTS.project_details}>
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

            <div className="mb-4">
                <div className="flex space-x-4 border-b border-gray-300">
                    {['ongoing', 'completed', 'not_started'].map((status) => (

                        <button
                            className={`px-4 cursor-pointer py-2 font-medium rounded-t-md transition ${activeTab === status ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                                }`}
                            onClick={() => setActiveTab(status)}
                        >
                            {capitalize(status)}
                        </button>
                    ))}
                </div>
            </div>


            {/* Employees Table */}
            <Table
                columns={columns}
                data={data}
                pageNation={pagination}
                handlePageNation={(value) => setPage(value)}
            />

            <ConfirmationPopup
                isOpen={isPopupOpen.isOpen && isPopupOpen.type === 'delete'}
                onClose={() => setIsPopupOpen({ isOpen: false, type: '', data: {} })}
                title={"Delete Employee"}
                message={`Are you sure you want to delete ${isPopupOpen.isOpen && isPopupOpen.type === 'delete' && isPopupOpen.data.id.name}?`}
                onConfirm={() => handleDelete(isPopupOpen.data.id)}
            />

            <CreateProjectPopup
                isOpen={isPopupOpen.isOpen && isPopupOpen.type === 'create'}
                onClose={() => setIsPopupOpen({ isOpen: false, type: '' })}
                onSave={handleSaveEmployee}
            />

            <AddProjectTransactionPopup
                isOpen={isPopupOpen.isOpen && isPopupOpen.type === 'transaction'}
                onClose={() => setIsPopupOpen({ isOpen: false, type: '' })}
                onSave={(formData) => console.log(formData)}
            />
        </div>
    );
}