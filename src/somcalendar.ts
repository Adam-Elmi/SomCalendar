import SomaliDate from "./utils/somali_date";
import timeDifference from "./utils/time_difference";
import { somaliDays, somaliMonths, somaliFestival } from "./data/data";

class SomCalendar extends SomaliDate {
    constructor() {
        super();
    }

    getToday(): { day: number, name: string } {
        if (!somaliDays) throw new Error("somaliDays is not found!");
        return {
            day: timeDifference(this.getFullYear(), this.getMonth(), this.getDate()),
            name: somaliDays[this.getDay()]
        };
    }

    getCurrentMonth(): string {
        if (!somaliMonths) throw new Error("somaliMonths is not found!");
        return somaliMonths[this.getMonth()];
    }

    newYear(): { isNewYear: boolean, remainedDays: number, name: string } {
        if (!somaliFestival) throw new Error("somaliFestival is not found!");
        return { 
            isNewYear: this.getToday().day >= 365 ? true : false, 
            remainedDays: 365 - this.getToday().day,
            name: somaliFestival 
        }
    }

}

console.log(new SomCalendar().newYear().name);