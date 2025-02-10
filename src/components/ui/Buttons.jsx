function Button({ onClick, text, variant = "submit" }) {
    const baseStyles = "px-4 py-2 rounded-md transition-colors";

    const variants = {
        submit: "bg-green-600 text-white hover:bg-green-700",
        cancel: "bg-red-500 text-white hover:bg-red-600"
    };

    return (
        <button onClick={onClick} className={`${baseStyles} ${variants[variant]} mx-1 cursor-pointer`}>
            {text}
        </button>
    );
}

export default Button;
