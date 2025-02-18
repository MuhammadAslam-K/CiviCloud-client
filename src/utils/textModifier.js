export function capitalize(value) {
    if (value === undefined || value === null) return null;

    const capitalizeWord = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

    if (Array.isArray(value)) {
        if (value.length === 0) return null;

        return value
            .map(val =>
                val
                    .toString()
                    .split(/[_-]/)
                    .map(capitalizeWord)
                    .join(' ')
            ).join(', ');
    }

    return value
        .toString()
        .split(/[_-]/)
        .map(capitalizeWord)
        .join(' ');
}