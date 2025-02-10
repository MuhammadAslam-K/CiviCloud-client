function InputField({ type, placeholder, value, onChange }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-2 mb-2 border border-gray-300 rounded-md"
        />
    );
}

export default InputField;
