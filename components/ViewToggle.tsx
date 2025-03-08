"use client"

import type React from "react"

interface ViewToggleProps {
    forEmployers: boolean;
    setForEmployers: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ forEmployers, setForEmployers }) => {
    return (
        <div className="flex items-center space-x-2 overflow-hidden">
            <span className={`text-sm ${forEmployers ? "text-gray-400" : "text-white-400"}`}>Client Site</span>
            <button
                onClick={() => setForEmployers((prev: boolean) => !prev)}
                className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors "
                style={{ backgroundColor: forEmployers ? "#1a202c" : "#1a202c" }}
            >
                <span
                    className={`inline-block w-4 h-4 transform transition-transform bg-white rounded-full ${
                        forEmployers ? "translate-x-6" : "translate-x-1"
                    }`}
                />
            </button>
            <span className={`text-sm ${!forEmployers ? "text-gray-400" : "text-white-400"}`}>Employer Site</span>
        </div>
    )
}

export default ViewToggle

