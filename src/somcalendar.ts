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
    Habar-adhi (30 maalimood) - August
    Diraac-good (30 maalimood) - September
    ---------------
    [Dayr]
    Dayrweyn (31 maalimood) - October
    Ximir (30 maalimood) - November
    Xays (30 maalimood) - December
    ---------------
    [Jiilaal]
    Lixkor (31 maalimood) - January
    Todob (30 maalimood) - February
    Aminla (30 maalimood) - March
    ---------------
    [Gu’]
    Fushade (31 maalimood) - April
    Gu’soore (30 maalimood) - May
    Samuulad (31 maalimood) - June
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

/*
    Helper function: timeDifference
*/

function timeDifference(currentYear: number, currentMonth: number, currentDay: number): number {
    let start = new Date(`${currentYear - 1}-7-20`);
    let end = new Date(`${currentYear}-${currentMonth}-${currentDay}`);

    let diff = end.getTime() - start.getTime();
    let days = diff / (1000 * 60 * 60 * 24);

    return days;
};


/*
    Helper function: get_all_months
*/
const _months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let _m: object[] = [];

function get_all_months() {
    const date = new Date();
    for (let i = 0; i < _months.length; i++) {
        _m.push({
            [_months[i]]: new Date(date.getFullYear(), i + 1, 0).getDate()
        });
    }
    return _m;
};

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