function previousMonth(currentYear: number, currentMonth: number): number {
    const prevMonth = new Date(currentYear, currentMonth, 0);
    return prevMonth.getDate();
};

export default previousMonth;
