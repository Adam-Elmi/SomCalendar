import fiftyDaysCycle from "./fiftyDaysCycle.js";

function fullYearCycle(fiftyDays) {
    try {
        const variableName = {fiftyDays};

        if(!fiftyDays) {
            throw new Error(`${Object.keys(variableName)[0]} is not found.`)
        }
        return (fiftyDays * 7) + 15;
    } catch (error) {
        console.error(`Caught an error: ${error.message}`);
    }
};

const result = fullYearCycle(fiftyDaysCycle(1));
console.log(result);