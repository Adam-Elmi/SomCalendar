import previousMonth from "./previousMonth.js";

function getYearStart(currentYear) {
    const startDay = previousMonth(currentYear, 7) - 11;
    return startDay;
}

export default getYearStart;