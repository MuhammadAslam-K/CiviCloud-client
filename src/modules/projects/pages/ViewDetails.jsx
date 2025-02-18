import React, { useState } from 'react'
import { OverViewCard, TransactionsDetails } from '@components/cards'
import { Buttons } from '@components/ui';
import AddProjectTransactionPopup from '../components/AddProjectTransactionPopup';
import EmployeeSearchPopup from '../components/EmployeeSearch';
import Employees from '../components/Employees';


function ViewDetails() {
    const [isPopupOpen, setIsPopupOpen] = useState({
        type: '',
        isOpen: false,
        data: {}
    });


    const overviewData = [
        { title: "Total Income", value: 10 },
        { title: "Total Revenue", value: 5 },
        { title: "Total Expense", value: 3 },
        { title: "Total Employees", value: 5 },
    ];

    const worksArray = [
        { id: "1", name: "Plumbing" },
        { id: "2", name: "Electrical" },
        { id: "3", name: "Carpentry" }
    ];

    return (
        <div className='w-full h-full min-h-screen p-4'>
            <div className="flex flex-col items-start justify-between w-full gap-4 sm:flex-row sm:items-center">
                <div className="p-4 rounded-lg shadow-sm bg-gray-50">
                    <h1 className="mt-2 text-lg font-semibold text-gray-800 md:mt-4">Project Name:
                        <span className="font-normal text-gray-600"> John Doe</span>
                    </h1>

                    <h1 className="mt-1 text-lg font-semibold text-gray-800">Project ID:
                        <span className="font-normal text-gray-600"> 1234567890</span>
                    </h1>

                    <h1 className="mt-1 text-lg font-semibold text-gray-800">Duration:
                        <span className="font-normal text-gray-600"> 12/02/2025 - Ongoing</span>
                    </h1>

                    <h1 className="mt-1 text-lg font-semibold text-gray-800">Type:
                        <span className="font-normal text-gray-600"> Own</span>
                    </h1>
                </div>

                <div className="">
                    <Buttons
                        onClick={() => setIsPopupOpen({ isOpen: true, type: 'transaction' })}
                        text={"+ Add Transaction"}
                        variant={"transaction"}
                        className="w-full sm:w-auto"
                    />

                    <Buttons
                        onClick={() => setIsPopupOpen({ isOpen: true, type: 'addEmployee' })}
                        text={"+ Add Employees"}
                        variant={"view"}
                        className="w-full sm:w-auto"
                    />
                </div>
            </div>


            <h1 className="mt-2 primary-text md:mt-8">OverView</h1>
            <div className="grid grid-cols-1 gap-4 mt-2 md:grid-cols-3">
                {overviewData.map((item, index) => (
                    <OverViewCard key={index} title={item.title} value={item.value} />
                ))}
            </div>

            <div className="mt-5">
                <TransactionsDetails module={"Project"} />
            </div>

            {/* POPUPS */}
            <AddProjectTransactionPopup
                isOpen={isPopupOpen.isOpen && isPopupOpen.type === 'transaction'}
                onClose={() => setIsPopupOpen({ isOpen: false, type: '', data: {} })}
                onSave={(data) => console.log(data)}
            />
            <EmployeeSearchPopup
                isOpen={isPopupOpen.isOpen && isPopupOpen.type === 'addEmployee'}
                onClose={() => setIsPopupOpen({ isOpen: false, type: '', data: {} })}
                onSelectEmployee={(data) => console.log(data)}
            />
            <Employees />

        </div>
    )
}

export default ViewDetails