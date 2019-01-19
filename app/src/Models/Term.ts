class Term {
    termID: number;
    termTitle: string;
    endDate: Date;
    startDate: Date;
    constructor(end_date: string, start_date: string, term_id: number, term_title: string) {
        this.endDate = new Date(end_date);
        this.startDate = new Date(start_date);
        this.termID = term_id;
        this.termTitle = term_title;
    }
}
