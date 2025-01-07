function previousMonth(currentYear, currentMonth) {
    const prevMonth = new Date(currentYear, currentMonth, 0);
    return prevMonth.getDate();
};

export default previousMonth;
