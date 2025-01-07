import { somaliMonths, somaliDays } from "./data/data.js";
import getCurrentDay from "./methods/getCurrentDay.js";
import getYearStart from "./methods/getYearStart.js";

class SomaliDate extends Date {
  constructor() {
    super();
  }
  currentMonth() {
    if (!somaliMonths) {
      throw new ReferenceError("somaliMonths is not found.");
    }
    return somaliMonths[this.getMonth()];
  }
  currentDay() {
    if (!somaliDays) {
      throw new ReferenceError("somaliDays is not found.");
    }
    return somaliDays[this.getDay()];
  }
  getToday() {
    return getCurrentDay(this, this.getFullYear(), this.getMonth());
  }
  getYearName() {
    return getYearStart(this.getFullYear());
  }
}

const somaliDate = new SomaliDate();

console.log(somaliDate.getYearName());
