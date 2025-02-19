import SomaliDate from "./utils/somali_date";
import timeDifference from "./utils/time_difference";
import { somaliDays, somaliMonths, somaliFestival } from "./data/data";

class SomaliCalendar extends SomaliDate {
    constructor() {
        super();
    }

    getToday(): { day: number; name: string } {
        return {
            day: timeDifference(this.getFullYear(), this.getMonth(), this.getDate()),
            name: somaliDays[this.getDay()]
        };
    }

    getCurrentMonth(): string {
        return somaliMonths[this.getMonth()];
    }
    
}

console.log(new SomaliCalendar().getToday());