import { somaliMonths, somaliDays } from "./data.js";
import getCurrentDay from "./getCurrentDay.js";

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
}

const somaliDate = new SomaliDate();

console.log(somaliDate.currentMonth());
console.log(somaliDate.currentDay());
console.log(somaliDate.getToday());