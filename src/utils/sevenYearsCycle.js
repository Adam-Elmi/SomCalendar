function sevenYearsCycle(fullYear) {
    try {
        const variableName = {fullYear};
        const varName = Object.keys(variableName)[0];
        switch(true) {
            case !fullYear:
                throw new Error(`${ varName } is not found.`);
            case typeof fullYear === "number":
                return (fullYear * 7);
            default:
                throw new Error(`${ varName } is not a number.`);
        }
    } catch (error) {
        console.error("Caught an error: ", error.message);
    }
};

export default sevenYearsCycle;