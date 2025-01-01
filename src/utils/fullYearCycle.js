function fullYearCycle(fiftyDays, leapYear = 0) {
    try {
        const variableName = {fiftyDays};

        if(!fiftyDays) {
            throw new Error(`${Object.keys(variableName)[0]} is not found.`)
        }
        else if(fiftyDays) {
            const yearCycle = (fiftyDays * 7) + 15;
            switch(true) {
                case yearCycle <= 365 + leapYear:
                    return yearCycle;
                default:
                    throw new Error(`${Object.keys(variableName)[0]} must equal to or less than 365 + leap year.`);
            }
        }
    } catch (error) {
        console.error(`Caught an error: ${error.message}`);
    }
};

export default fullYearCycle;