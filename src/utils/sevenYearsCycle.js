function sevenYearsCycle(fullYear) {
    try {
        switch (true) {
            case !fullYear:
                throw new Error("fullYear is not found.");
            case typeof fullYear === "number":
                return (fullYear * 7);
            default:
                throw new Error("fullYear is not a number.");
        }
    } catch (error) {
        console.error("Caught an error: ", error.message);
    }
};

export default sevenYearsCycle;