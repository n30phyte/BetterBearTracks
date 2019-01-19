class CourseClass extends BaseModel {
    public component: string; // LEC
    public section: string; // B1
    public location: string;
    public day: string; // MWF, TR
    public startTime: string;
    public endTime: string;
    public class: number; // 87582
    public courseID: number; // 001344
    public term: number; // 16660
    public capacity: number; // 255
    public classStatus: string; // A
    public enrollStatus: string; // O
    public startDate: string; // YYYY-MM-DD
    public endDate: Date;
    public examDate: Date;
    public examStartTime: Date;
    public examEndTime: Date;
    public examLocation: string;
    public examStatus: string;
    public campus: string;
    public classNotes: string; // Restricted to Engineering students. Closed to web
    public classType: string; // E
    public consent: string;
    public gradingBasis: string;
    public instructionMode: string; // In Person
    public instructorID: string; // wjaeger
    public session: string; // Regular academic session
    public units: number; // 3.0

    public toString() {
        return "";
    }
}
