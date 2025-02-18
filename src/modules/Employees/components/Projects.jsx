import { useState } from "react";
import { Table, InputField, Buttons, DropdownField } from "@components/ui";
import { capitalize } from "@utils/textModifier";
import { Link } from "react-router-dom";
import { PROJECTS } from "@routers/paths";


export default function Projects() {
    const [search, setSearch] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [page, setPage] = useState(1);
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
            accessor: "status",
        },
        {
            Header: "Actions",
            Cell: ({ row }) => (
                <Link to={PROJECTS.project_details}>
                    <Buttons text={"View"} variant={"view"} />
                </Link>
            ),
        },
    ];

    const pagination = {
        prevPage: 1,
        currentPage: 2,
        nextPage: 3,
    };

    return (
        <div className="p-3 md:p-6">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">Projects</h1>
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

        </div>
    );
}