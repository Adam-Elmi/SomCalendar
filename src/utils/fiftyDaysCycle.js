
function fiftyDaysCycle(currentWeek) {
    try {
        if(!currentWeek || currentWeek <= 0) {
            const variableName = {currentWeek};
            throw new Error(`${Object.keys(variableName)[0]} must be greater than zero.`);
        }
        return (currentWeek * 7) + 1;
    } catch (error) {
        console.error("Caught an error:", error.message);
    }
};

const result = fiftyDaysCycle(-1);

console.log(result);

  