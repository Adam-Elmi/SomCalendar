import getAllMonths from "./getAllMonths.js";

function getCurrentDay(currentDate, currentYear, currentMonth) {
    const currentYearMonths = [];
    const previousYearMonths = [];
    let sumOfDays = 0;

    getAllMonths(currentYear, currentMonth, currentYearMonths);

    for (let i = 0; i < currentYearMonths.length; i++) {
        if (i === currentMonth + 1) {
            break;
        } else {
            const previousYear = currentYear - 1;
            getAllMonths(previousYear, i, previousYearMonths);
            const monthsAfterJuly = previousYearMonths.slice(7);
            const sumOfMonthsAfterJuly = monthsAfterJuly.reduce(
                (initialValue, currentValue) => {
                    return initialValue + currentValue;
                },
                0
            );

            const previousMonths = currentYearMonths.slice(0, currentMonth);
            const sumOfPreviousMonths = previousMonths.reduce(
                (initialValue, currentValue) => {
                    return initialValue + currentValue;
                },
                0
            );

            sumOfDays = sumOfMonthsAfterJuly + sumOfPreviousMonths + currentDate.getDate() - 1;
        }
    }
    return sumOfDays;
}

export default getCurrentDay;
