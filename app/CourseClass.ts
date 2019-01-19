class CourseClass extends BaseModel {
    public component: string;
    public section: string;
    public location: string;
    public day: string;
    public startTime: string;
    public endTime: string;
    public class: number;
    public courseID: number;
    public term: number;
    public capacity: number;
    public classStatus: string;
    public enrollStatus: string;
    public startDate: string;
    public endDate: Date;
    public examDate: Date;
    public examStartTime: Date;
    public examEndTime: Date;
    public examLocation: string;
    public examStatus: string;
    public campus: string;
    public classNotes: string;
    public classType: string;
    public consent: string;
    public gradingBasis: string;
    public instructionMode: string;
    public instructorID: string;
    public session: string;
    public units: number;

    public toString() {
        return 
    }
}
