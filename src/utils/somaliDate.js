class SomaliDate extends Date {
    constructor() {
        super();
    }
}
// Test
const currentYear = new SomaliDate().getFullYear();
console.log(currentYear);
