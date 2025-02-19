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

export default SomaliDate;
