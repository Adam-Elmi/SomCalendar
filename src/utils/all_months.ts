const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let m: object[] = [];

function getAllMonths() {
    const date = new Date();
    for (let i = 0; i < months.length; i++) {
        m.push({
            [months[i]]: new Date(date.getFullYear(), i + 1, 0).getDate()
        });
    }
    return m;
};
console.log(getAllMonths());