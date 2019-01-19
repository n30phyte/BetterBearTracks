class CourseClass {
    asString: string;
    component: string;
    section: string; 
    
    location: string;
    day: string;
    startTime : string;
    endTime: string;

    class: number;
    course: number;
    term: number;
    
    capacity: number;
    classStatus: string;
    enrollStatus: string;

    startDate: string;
    endDate: Date;
    
    examDate: Date;
    examStartTime: Date;
    examEndTime: Date;
    examLocation: string;
    examStatus: string;
    
    campus: string;  
    classNotes: string;
    classType: string;
    consent: string;
    gradingBasis: string;
    instructionMode: string;
    instructorID: string;
    session: string; 
    units: number;
}

class Course {
    subject: string; // ECE
    catalog: number; // 202
    courseTitle: string; // Electrical Circuits 1
    asString: string; // ECE 202
    course: number;
    term: number;

    courseDescription: string;
    career: string; // Undergrad
    department: string;
    departmentCode: string;
    faculty: string;
    facultyCode: string;
    subjectTitle: string;
    units: number;
}

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