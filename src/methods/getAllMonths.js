function getAllMonths(currentYear, currentMonth, months) {
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
};

export default getAllMonths;