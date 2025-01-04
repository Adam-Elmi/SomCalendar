import { somaliMonths, somaliDays, days } from "./data.js";
import getCurrentDay from "./getCurrentDay.js";
import fiftyDaysCycle from "./fiftyDaysCycle.js";
import sevenYearsCycle from "./sevenYearsCycle.js";

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
  getFiftyDays() {
    return fiftyDaysCycle(days[this.currentDay()]);
  }
}

const somaliDate = new SomaliDate();

console.log(somaliDate.getFiftyDays());
console.log(somaliDate.getFullYearCycle());