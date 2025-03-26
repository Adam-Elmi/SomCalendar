/* 
    Method getDay() wuxu kaso bilaaba maalinta axada,  sidan ayuu u shaqeeya:
    0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday,
    4 = Thursday, 5 = Friday, 6 = Saturday).
    sidaas darteed ayaan maalinta sabtida halka hoose u galiyey, 
    taas oo ino fudaydinaysa inu method-kan u shaqeeyo sidii aynu rabnay u shaqeeyo.
*/
const somaliDays: Array<string> = [
    "Koobin", // Axad
    "Lammin", // Isniin
    "Lamatoke", // Salaasa
    "Koodaar", // Arbaca
    "Hakisa", // Khamiis
    "Hakisa-Bile", // Jimce
    "Soo Roga", // Sabti
];

/*
    Sidey biluhu ugala horeyaan - Karan (July) wa bisha 1aad, 
    waan halku sannadlku ka bilaabmo
    ---------------
    [Xagaa]
    Karan (31 maalimood)  - July
    Habar-adhi (30 maalimood) - August (31 days)
    Diraac-good (30 maalimood) - September
    ---------------
    [Dayr]
    Dayrweyn (31 maalimood) - October
    Ximir (30 maalimood) - November
    Xays (30 maalimood) - December (31 days)
    ---------------
    [Jiilaal]
    Lixkor (31 maalimood) - January
    Todob (30 maalimood) - February (28 days or 29 days in leap years)
    Aminla (30 maalimood) - March (31 days)
    ---------------
    [Gu’]
    Fushade (31 maalimood) - April (30 days)
    Gu’soore (30 maalimood) - May (31 days)
    Samuulad (31 maalimood) - June (30 days)
    ---------------
*/

const somaliMonths: Array<string> = [
    "Lixkor", // January
    "Todob", // February
    "Aminla", // March
    "Fushade", // April
    "Gu'soore", // May
    "Samuulad", // June
    "Karan", // July
    "Habar-adhi", // August
    "Diraac-good", // September
    "Dayrweyn", // October
    "Ximir", // November
    "Xays" // December
];

/*
 Dabshid wa dabaaldeg ay Soomaalidu qabsan jireen sannadka cusub,
 kaas oo ku beegan bilowga bisha Karan (July),
 waxaana loo badin jiray inay dhacdo 20-ka Karan (July)
 ee taariikhda Gregory (Gregorian calendar) 
*/

const somaliFestival: string = "Dabshid";
/* ----------------------------------------- */
const _months: Array<string> = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];


interface Months_Info {
    total_days: number,
    _m: object[],
    _d: Array<number>
}

let info: Months_Info = {
    total_days: 0,
    _m: [],
    _d: []
}
/*
    Helper function: get_all_months
*/
function get_all_months() {
    // resetting
    info = {
        total_days: 0,
        _m: [],
        _d: []
    }
    const date = new Date();
    for (let i = 0; i < _months.length; i++) {
        info._m.push({
            [_months[i]]: new Date(date.getFullYear(), i + 1, 0).getDate()
        });
    }
    info.total_days = info._m.map((v) => Object.values(v).join("")).map(v => {
        info._d.push(parseInt(v, 10));
        return parseInt(v, 10);
    }).reduce((i, c) => {
        return i + c;
    }, 0);
    return info;
};
/*
    Helper function: destructure
*/
function destructure(): Array<number> {
    const days_in_month = get_all_months()._d;
    const destructure_arr = new Array(12).fill(0);;
    const offset: number = 19;
    // Lixkor - January
    destructure_arr[6] = days_in_month[0];
    // Todob - February
    destructure_arr[7] = days_in_month[1];
    // Aminla - March
    destructure_arr[8] = days_in_month[2];
    // Fushade - April
    destructure_arr[9] = days_in_month[3];
    // Gu'soore - May
    destructure_arr[10] = days_in_month[4];
    // Samuulad - June
    destructure_arr[11] = days_in_month[5] + offset;
    // Karan - July
    destructure_arr[0] = days_in_month[6] - offset;
    // Habar-adhi - August
    destructure_arr[1] = days_in_month[7];
    // Diraac-good - September
    destructure_arr[2] = days_in_month[8];
    // Dayrweyn - October
    destructure_arr[3] = days_in_month[9];
    // Ximir - November
    destructure_arr[4] = days_in_month[10];
    // Xays - December
    destructure_arr[5] = days_in_month[11];
    return destructure_arr;
}
/*
     Helper function: cs_month
        - cs - Current somalian month
        - g - Gregorian
        - i - Month index
 */
 const cs_month = (_i: number) =>  {
    return [6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5][_i]; 
}

/* Helper function: calculateCurrentDay */

function calculate_months(month_index: number): number {
    switch(true) {
        case (month_index > 11):
            throw new Error(`${month_index} is out of the index. The month index must be between 0 and 11.`).message;
    }
    // g - Gregorian
    let g_month: number = cs_month(month_index);
    
    let sum = 0, i = 0;

    while (i <= g_month) {
        sum += destructure()[i++];
    }

    return sum;
}
/*
     SomaliDate Class 
*/
class SomaliDate {
    private date: Date;

    constructor() {
        this.date = new Date();
    }

    protected getDay() {
        return this.date.getDay();
    }

    protected getDate() {
        return this.date.getDate();
    }

    protected getMonth() {
        return this.date.getMonth();
    }

    protected getFullYear() {
        return this.date.getFullYear();
    }
}

/*
    SomCalendar Class
*/

type With = {
    with_full_month: number,
    without_full_month: number
}
type _Date = {
    _month: number,
    _day: number
}

class SomCalendar extends SomaliDate {
    constructor() {
        super();
    }

    getToday(): { day: number, name: string } {
        if (!somaliDays) throw new Error("somaliDays is not found!");
        return {
            day: this.getSumOfMonths().without_full_month,
            name: somaliDays[this.getDay()]
        };
    }

    getCurrentMonth(): string {
        if (!somaliMonths) throw new Error("somaliMonths is not found!");
        return somaliMonths[this.getMonth()];
    }

    
    getSumOfMonths(number_of_months: number = this.getMonth()): With {
        return {
            with_full_month: calculate_months(number_of_months),
            without_full_month: calculate_months(number_of_months) - (get_all_months()._d[this.getMonth()] - this.getDate())
        };
    }

    newYear(): { isNewYear: boolean, remainedDays: number, name: string } {
        if (!somaliFestival) throw new Error("somaliFestival is not found!");
        return {
            isNewYear: this.getToday().day >= 365 ? true : false,
            remainedDays: get_all_months().total_days - this.getToday().day,
            name: somaliFestival
        }
    }

    convertToSomali(m?: number, d?: number): {year: number, month: number, day: number} {
        const _date: _Date = {
            _month: 0,
            _day: 0
        };
        let _G: number = cs_month(m || m === 0 ? m : this.getMonth());
        console.log(_G);
        _date._month = _G;
        _date._day = d ?? this.getToday().day;
        return {
            year: this.getFullYear(),
            month: _date._month,
            day: _date._day
        }
    }

}
console.log(new SomCalendar().convertToSomali(0)); // 6



