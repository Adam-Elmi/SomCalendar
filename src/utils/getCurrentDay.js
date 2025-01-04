function getMonths(currentYear, currentMonth, months) {
    for (let i = 1; i <= 12; i++) {
        const lastDayOfMonth = new Date(currentYear, currentMonth + i, 0);
        let daysIn = lastDayOfMonth.getDate();
        if (currentYear % 4 === 0) {
            if (currentYear % 100 === 0) {
                if (currentYear % 400 === 0) {
                    daysIn + 1;
                }
            } else {
                daysIn + 1;
            }
        }

        months.push(daysIn);
    }
}



function getCurrentDay() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const months = [];
    const previousYearMonths = [];
    let sumOfDays = 0;

    getMonths(currentYear, currentMonth, months);
    
    for (let i = 0; i < months.length; i++) {
        if (i === currentMonth + 1) {
            break;
        } else {
            const previousYear = currentYear - 1;
            getMonths(previousYear, i, previousYearMonths);
            const monthsAfterJuly = previousYearMonths.slice(7);
            const sumOfMonthsAfterJuly = monthsAfterJuly.reduce((initialValue, currentValue) => {
                return initialValue + currentValue;
            }, 0);

            const previousMonths = months.slice(0, currentMonth);
            const sumOfPreviousMonths = previousMonths.reduce((initialValue, currentValue) => {
                return initialValue + currentValue;
            }, 0);

            sumOfDays = sumOfMonthsAfterJuly + sumOfPreviousMonths + currentDate.getDate();
        }
    }
    console.log(sumOfDays);
}

getCurrentDay();