import { somaliMonths, somaliDays } from "./data.js";

class SomaliDate extends Date {
    constructor() {
        super();
    }
    currentMonth() {
        return somaliMonths[this.getMonth()];
    }
    currentDay() {
        return somaliDays[this.getDay()];
    }
};

const somaliDate = new SomaliDate();

console.log(somaliDate.currentMonth());
console.log(somaliDate.currentDay());
