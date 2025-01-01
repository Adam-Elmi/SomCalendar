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

export default fullYearCycle;