function DropdownField({ options, value, onChange, placeholder }) {
    return (
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-2 mb-2 bg-white border border-gray-300 rounded-md cursor-pointer"
        >
            <option value="" disabled>{placeholder ? placeholder : "Select an option"}</option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default DropdownField;
