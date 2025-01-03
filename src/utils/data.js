/* 
    Method getDay() wuxu kaso bilaaba maalinta axada,  sidan ayuu u shaqeeya:
    0 = Sunday, 1 = Monday, 2 = Tuesday, 3 = Wednesday,
    4 = Thursday, 5 = Friday, 6 = Saturday).
    sidaas darteed ayaan maalinta sabtida halka hoose u galiyey, 
    taas oo ino fudaydinaysa inu method-kan u shaqeeyo sidii aynu rabnay u shaqeeyo.
*/
const somaliDays = [
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
    [Jillaal]
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


const somaliMonths = [
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
const somaliFestival = "Dabshid";

const days = {
    "Soo Roga": 1,
    Koobin: 2,
    Lammin: 3,
    Lamatoke: 4,
    Koodaar: 5,
    Hakisa: 6,
    "Hakisa-Bile": 7,
  };

export {somaliDays, somaliMonths, somaliFestival, days};
