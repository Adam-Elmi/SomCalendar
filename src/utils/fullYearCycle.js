function fullYearCycle(fiftyDays) {
    try {
        if (!fiftyDays) {
            throw new Error("fiftyDays is not found.");
        }
        else if (fiftyDays) {
            const yearCycle = (fiftyDays * 7) + 15;

            switch (true) {
                case typeof fiftyDays === "number" && yearCycle <= 365:
                    return yearCycle;
                case typeof fiftyDays !== "number":
                    throw new Error("fiftyDays is not a number.");
                default:
                    throw new Error("fiftyDays must equal to or less than 365.");
            }
        }
    } catch (error) {
        console.error(`Caught an error: ${error.message}`);
    }
};

export default fullYearCycle;