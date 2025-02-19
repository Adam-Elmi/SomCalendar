import { somaliMonths, somaliDays } from "./data/data.js";
import getCurrentDay from "./methods/getCurrentDay.js";
import getYearStart from "./methods/getYearStart.js";

class SomaliCalendar extends Date {
  constructor() {
    super();
  }
  currentMonth() {
    if (!somaliMonths) {
      throw new ReferenceError("somaliMonths is not found.");
    }
    return somaliMonths[this.getMonth()];
  }
  dayName() {
    if (!somaliDays) {
      throw new ReferenceError("somaliDays is not found.");
    }
    return somaliDays[this.getDay()];
  }
  currentDay() {
    return getCurrentDay(this, this.getFullYear(), this.getMonth());
  }
  getYearName() {
    return getYearStart(this.getFullYear()); // Remainder: Should return day name
  }
}

const somaliDate = new SomaliCalendar();

console.log(somaliDate.currentDay());
