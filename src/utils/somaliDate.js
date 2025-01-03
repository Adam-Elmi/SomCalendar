import { somaliMonths, somaliDays, days } from "./data.js";
import fiftyDaysCycle from "./fiftyDaysCycle.js";
import fullYearCycle from "./fullYearCycle.js";
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
  getFiftyDays() {
    return fiftyDaysCycle(days[this.currentDay()]);
  }
}

const somaliDate = new SomaliDate();

console.log(somaliDate.getFiftyDays());