export class LocalDate extends Date {
    constructor(date?: Date | string | number) {
        const parsedDate = LocalDate.parseDateInput(date);
        super(parsedDate);
    }

    toCustomFormat(): string {
        const year = this.getFullYear();
        const month = String(this.getMonth() + 1).padStart(2, '0');
        const day = String(this.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    toLocale(): string {
        // Customize the format as needed
        const year = this.getFullYear();
        const month = String(this.getMonth() + 1).padStart(2, '0');
        const day = String(this.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    static parseDateInput(input?: Date | string | number): Date {
        if (!input) {
            return new Date();
        }

        if (input instanceof Date) {
            return input;
        }

        return new Date(input);
    }

    getDay(): number {
        return this.getDate();
    }

    getMonthName(): string {
        const monthNames = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ];
        return monthNames[this.getMonth()];
    }
}
