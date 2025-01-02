function fiftyDaysCycle(currentWeek) {
    try {
        if (typeof currentWeek !== "number") {
            throw new TypeError("currentWeek is not a number.");
        }

        if (currentWeek <= 0) {
            throw new Error("currentWeek must be greater than 0.");
        }
        else if (currentWeek > 7) {
            throw new Error("currentWeek must be less than 7.");
        }
        return (currentWeek * 7) + 1;
    } catch (error) {
        console.error("Caught an error:", error.message);
    }
};

export default fiftyDaysCycle;

