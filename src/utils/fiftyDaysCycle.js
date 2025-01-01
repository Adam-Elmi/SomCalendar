function fiftyDaysCycle(currentWeek) {
    try {
        const variableName = { currentWeek };

        if (typeof currentWeek !== "number") {
            throw new TypeError(`${Object.keys(variableName)[0]} is not a number.`);
        }

        if (currentWeek <= 0) {
            throw new Error(`${Object.keys(variableName)[0]} must be greater than 0.`);
        }
        else if (currentWeek > 7) {
            throw new Error(`${Object.keys(variableName)[0]} must be less than 7.`);
        }
        return (currentWeek * 7) + 1;
    } catch (error) {
        console.error("Caught an error:", error.message);
    }
};

export default fiftyDaysCycle;

