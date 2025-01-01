import fullYearCycle from "./fullYearCycle.js";

function sevenYearsCycle(fullYear) {
    try {
        const variableName = {fullYear};
        const varName = Object.keys(fullYear)[0];
        switch(true) {
            case !fullYear:
                throw new Error(`${varName ? varName : "" } is not found.`);
            case typeof fullYear === "number":
                return (fullYear * 7);
            default:
                throw new Error(`${ varName ? varName : "" } is not a number.`);
        }
    } catch (error) {
        console.error("Caught an error2: ", error.message);
    }
};

const result = sevenYearsCycle(fullYearCycle(50));

console.log(result); 