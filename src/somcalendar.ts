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
    Karan - July
    Habar-adhi - August
    Diraac-good - September
    ---------------
    [Dayr]
    Dayrweyn - October
    Ximir - November
    Xays - December
    ---------------
    [Jiilaal]
    Lixkor - January
    Todob - February
    Aminla - March
    ---------------
    [Gu’]
    Fushade - April
    Gu’soore - May
    Samuulad - June
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
  _month: object[];
  _day: Array<number>;
}

let info: Months_Info = {
  total_days: 0,
  _month: [],
  _day: [],
};
/*
    Helper function: get_all_months
*/
function get_all_months() {
  // resetting
  info = {
    total_days: 0,
    _month: [],
    _day: [],
  };
  const date = new Date();
  for (let i = 0; i < _months.length; i++) {
    info._month.push({
      [_months[i]]: new Date(date.getFullYear(), i + 1, 0).getDate(),
    });
  }
  info.total_days = info._month
    .map((value) => Object.values(value).join(""))
    .map((value) => {
      info._day.push(parseInt(value, 10));
      return parseInt(value, 10);
    })
    .reduce((initialValue, currentValue) => {
      return initialValue + currentValue;
    }, 0);
  return info;
}

/*
  get_all_months qiimaha ama natiijada uso celinayo waxa weeye object ka kooban saddex qiimo ama properties
  oo kala ah:
  - total_days: total guud ee maalimaha sannadka.
  - _month: wa array ka kooban dhamaan 12-ka bilood
  - _days: wa array ka kooban maalimaha bil kasta ka kooban tahay
  
*/
/*
     Helper function: cs_month
        - cs - Current somalian month
        - i - Month index
 */
const cs_month = (_i: number) => {
  return [6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5][_i];
};
/*
  cs_month wa function bedelaya bisha calendarka Gregory u bedelaya bisha calendarka Somaalida
*/
/* Helper function: isLeapYear */
function isLeapYear(year: number = new Date().getFullYear()) {
  const february_lastDay = new Date(year, 2, 0).getDate();
  if (february_lastDay === 29) {
    return true;
  };
  return false; 
}
/* Helper function: getYearDays*/
function getYearDays(year?: number) {
  const leap_output = isLeapYear(year);

  const _somali_days = Array.from(
    { length: leap_output ? 366 : 365 },
    (_, i) => i + 1
  );
  const target_index = _somali_days.findIndex(
    (value) => value === (leap_output ? 202 : 201)
  );
  console.log(leap_output)
  const _gregory_days = _somali_days
    .slice(target_index)
    .concat(_somali_days.slice(0, target_index));
  return {
    _gregory_days,
    _somali_days,
  };
}
/*
  - getYearDays wa function so celinaya dhamaan maalimaha sannadka ee labada calendar(Gregory and Somali)
*/
/* Helper function: convert_to_somali*/
function convert_to_somali(day: number = 1, y?: number) {
  const _days = getYearDays(y);
  const _somali_index = _days._somali_days.findIndex((value) => value === day);
  return _days._gregory_days[_somali_index];
}

/* Helper function: getDays*/
function getDays() {
  const storeDays = new Array(12).fill(0);
  for (let i = 0; i < storeDays.length; i++) {
    const lastDay = new Date(new Date().getFullYear(), i + 1, 0).getDate();
    storeDays[i] = lastDay;
  }
  return storeDays;
}
const days_of_months = getDays();

/* Helper function: sum_of_days*/
function sum_of_days() {
  const current_month_index = days_of_months.findIndex(
    (_, i) => i === new Date().getMonth()
  );
  const adjusted_days = days_of_months.slice(0, current_month_index + 1);
  return adjusted_days.reduce((prev, cur) => {
    return prev + cur;
  });
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

type _Date = {
  _month: number;
  _day: number;
};
/*
    SomCalendar Class
*/
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
    const remainedDays =
      new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate() -
      this.getDate();
    return convert_to_somali(sum_of_days() - remainedDays);
  }
  newYear(): { isNewYear: boolean; remainedDays: number; name: string } {
    return {
      isNewYear: this.getToday().day >= 365 ? true : false,
      remainedDays: get_all_months().total_days - this.getToday().day,
      name: somaliFestival,
    };
  }

  convertToSomali(
    d?: number,
    m?: number,
    y: number = this.getFullYear()
  ): { year: number; month: number; day: number } {
    const _date: _Date = {
      _month: 0,
      _day: 0,
    };
    let _G: number = cs_month(m || m === 0 ? m : this.getMonth());
    _date._month = _G;
    _date._day = convert_to_somali(d) ?? this.getToday().day;
    return {
      year: y,
      month: _date._month,
      day: _date._day,
    };
  }
}
const somcalendar = new SomCalendar();
// console.log(somcalendar.convertToSomali(365, 1, 2034));
// console.log(somcalendar.getToday())