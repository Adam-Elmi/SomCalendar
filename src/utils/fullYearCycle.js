import fiftyDaysCycle from "./fiftyDaysCycle.js";

function fullYearCycle(fiftyDays) {
    try {
        const variableName = {fiftyDays};

        if(!fiftyDays) {
            throw new Error(`${Object.keys(variableName)[0]} is not found.`)
        }
        return (7 * fiftyDays) + 15;
    } catch (error) {
        console.error(`Caught an error: ${error.message}`);
    }
};

const result = fullYearCycle(fiftyDaysCycle(2));
console.log(result);