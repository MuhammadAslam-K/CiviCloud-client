import React from "react";
import { Buttons } from "../ui"; // Ensure you have a Buttons component

function Confirmation({ isOpen, onClose, onConfirm, message }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px]">
            <div className="p-6 bg-white rounded-lg shadow-lg w-80">
                <h2 className="mb-4 text-lg font-semibold text-gray-800">Confirmation</h2>
                <p className="mb-4 text-gray-600">{message || "Are you sure you want to proceed?"}</p>
                <div className="flex justify-end gap-3">
                    <Buttons onClick={onClose} variant="cancel" text="Cancel" />
                    <Buttons onClick={onConfirm} variant="submit" text="Confirm" />
                </div>
            </div>
        </div>
    );
}

export default Confirmation;
