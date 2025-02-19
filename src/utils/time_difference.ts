function timeDifference(currentYear: number, currentMonth: number, currentDay: number): number {
    let start = new Date(`${currentYear - 1}-7-20`);
    let end = new Date(`${currentYear}-${currentMonth}-${currentDay}`);

    let diff = end.getTime() - start.getTime();
    let days = diff / (1000 * 60 * 60 * 24);

    return days;
};
// const d = new Date();
// console.log(timeDifference(d.getFullYear(), d.getMonth(), d.getDate()));
export default timeDifference;
