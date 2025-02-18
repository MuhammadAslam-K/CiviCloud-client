import React, { useState } from 'react'
import { OverViewCard } from '@components/cards'
import { Buttons } from '@components/ui';
import AddEmployeesTransactionPopup from '../components/AddEmployeesTransactionPopup';
import EmployeeTransactions from '../components/TransactionDetails';


function ViewDetails() {
    const [isPopupOpen, setIsPopupOpen] = useState({
        type: '',
        isOpen: false,
        data: {}
    });


    const overviewData = [
        { title: "Total Salary", value: 10 },
        { title: "Total Projects", value: 5 },
        { title: "Total Working Days", value: 3 },
        { title: "Pending Salary", value: 5 },
    ];

    const worksArray = [
        { id: "1", name: "Plumbing" },
        { id: "2", name: "Electrical" },
        { id: "3", name: "Carpentry" }
    ];

    return (
        <div className='w-full h-full min-h-screen p-4'>
            <div className="flex flex-col items-start justify-between w-full gap-4 sm:flex-row sm:items-center">
                <div>
                    <h1 className="mt-2 text-lg primary-text md:mt-4">Name: John Doe</h1>
                    <h1 className="mt-1 text-lg primary-text">Phone: 1234567890</h1>
                </div>

                <Buttons
                    onClick={() => setIsPopupOpen({ isOpen: true, type: 'transaction' })}
                    text={"+ Add Transaction"}
                    variant={"transaction"}
                    className="w-full sm:w-auto"
                />
            </div>


            <h1 className="mt-2 primary-text md:mt-8">OverView</h1>
            <div className="grid grid-cols-1 gap-4 mt-2 md:grid-cols-3">
                {overviewData.map((item, index) => (
                    <OverViewCard key={index} title={item.title} value={item.value} />
                ))}
            </div>

            <div className="mt-5">
                <EmployeeTransactions />
            </div>

            {/* POPUPS */}
            <AddEmployeesTransactionPopup
                isOpen={isPopupOpen.isOpen && isPopupOpen.type === 'transaction'}
                onClose={() => setIsPopupOpen({ isOpen: false, type: '' })}
                onSave={(formData) => console.log(formData)}
                works={worksArray}
            />
        </div>
    )
}

export default ViewDetails