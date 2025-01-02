import { somaliMonths, somaliDays } from "./data.js";

class SomaliDate extends Date {
    constructor() {
        super();
    }
    currentMonth() {
        if(!somaliMonths) {
           throw new ReferenceError("somaliMonths is not found.");
        }
        return somaliMonths[this.getMonth()];
    }
    currentDay() {
        if(!somaliDays) {
            throw new ReferenceError("somaliDays is not found.");
         }
        return somaliDays[this.getDay()];
    }
};

const somaliDate = new SomaliDate();



