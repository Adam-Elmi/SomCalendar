function getCurrentDay() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const months = [];
    let sumOfDays = 0;

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

    for (let i = 0; i < months.length; i++) {
        if (i === currentMonth + 1) {
            break;
        } else {
            const previousMonths = months.slice(0, currentMonth);
            const sumOfPreviousMonths = previousMonths.reduce((initialValue, currentValue) => {
                return initialValue + currentValue;
            }, 0);         
            sumOfDays = sumOfPreviousMonths + currentDate.getDate();
        }
    }
    console.log(sumOfDays);
}

getCurrentDay();
