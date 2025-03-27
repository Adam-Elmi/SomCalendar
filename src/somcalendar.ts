/* 
    Method-kan getDay() wuxu kaso bilaaba maalimaha maalinta axada.
    Sidan ayuu u shaqeeya:
    0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday,
    4 = Thursday, 5 = Friday, 6 = Saturday.
    Sidaas darteed ayaan maalinta sabtida halka hoose u galiyey, 
    taas oo ino fudaydinaysa inu method-kan u shaqeeyo sidii aynu rabnay.
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
  "Xays", // December
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
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

interface Months_Info {
  total_days: number;
  _m: object[];
  _d: Array<number>;
}

let info: Months_Info = {
  total_days: 0,
  _m: [],
  _d: [],
};
/*
    Helper function: get_all_months
*/
function get_all_months() {
  // resetting
  info = {
    total_days: 0,
    _m: [],
    _d: [],
  };
  const date = new Date();
  for (let i = 0; i < _months.length; i++) {
    info._m.push({
      [_months[i]]: new Date(date.getFullYear(), i + 1, 0).getDate(),
    });
  }
  info.total_days = info._m
    .map((v) => Object.values(v).join(""))
    .map((v) => {
      info._d.push(parseInt(v, 10));
      return parseInt(v, 10);
    })
    .reduce((i, c) => {
      return i + c;
    }, 0);
  return info;
}
/*
    Helper function: destructure
*/
function destructure(): Array<number> {
  const days_in_month = get_all_months()._d;
  const destructure_arr = new Array(12).fill(0);
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
const cs_month = (_i: number) => {
  return [6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5][_i];
};


/* Helper function: isLeapYear */
function isLeapYear(year: number = new Date().getFullYear()) {
  const february_lastDay = new Date(year, 2, 0).getDate();
  if (february_lastDay === 29) {
    return true;
  } else {
    return false;
  }
}

function _g_and_s(y?: number) {
  const leap_output = isLeapYear(y);

  const _s_days = Array.from(
    { length: leap_output ? 366 : 365 },
    (_, i) => i + 1
  );
  const target_index = _s_days.findIndex(
    (v) => v === (leap_output ? 202 : 201)
  );
  const _g_days = _s_days
    .slice(target_index)
    .concat(_s_days.slice(0, target_index));
  return {
    _g_days,
    _s_days,
  };
}

function convert_to_s(d: number = 1, y?: number) {
    const _days = _g_and_s(y)
    const _s_index = _days._s_days.findIndex(v => v === d);
    return _days._g_days[_s_index]
}

/* Helper function: getDays*/
function getDays() {
  const storeDays = new Array(12).fill(0);
  for(let i = 0; i < storeDays.length; i++) {
    const lastDay = new Date(new Date().getFullYear(), i + 1, 0).getDate();
    storeDays[i] = lastDay;
  }
  return storeDays;
}
const days_of_months = getDays();

/* Helper function: sum_of_days*/
function sum_of_days() {
  const current_month_index = days_of_months.findIndex((_, i) => i === new Date().getMonth());
  const adjusted_days = days_of_months.slice(0, current_month_index + 1);
  return adjusted_days.reduce((prev, cur) => {
    return prev + cur
  })
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

type _Date = {
  _month: number;
  _day: number;
};

class SomCalendar extends SomaliDate {
  constructor() {
    super();
  }

  getToday(): { day: number; name: string } {
    if (!somaliDays) throw new Error("somaliDays is not found!");
    return {
      day: this.withoutRemainedDays(),
      name: somaliDays[this.getDay()],
    };
  }

  getCurrentMonth(): string {
    return somaliMonths[this.getMonth()];
  }

  withoutRemainedDays() {
    const remainedDays = (new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate() - this.getDate())
    return convert_to_s(sum_of_days() -  remainedDays)
  }
  newYear(): { isNewYear: boolean; remainedDays: number; name: string } {
    return {
      isNewYear: this.getToday().day >= 365 ? true : false,
      remainedDays: get_all_months().total_days - this.getToday().day,
      name: somaliFestival,
    };
  }

  convertToSomali(
    m?: number,
    d?: number
  ): { year: number; month: number; day: number } {
    const _date: _Date = {
      _month: 0,
      _day: 0,
    };
    let _G: number = cs_month(m || m === 0 ? m : this.getMonth());
    _date._month = _G;
    _date._day = convert_to_s(d) ?? this.getToday().day;
    return {
      year: this.getFullYear(),
      month: _date._month,
      day: _date._day,
    };
  }
}