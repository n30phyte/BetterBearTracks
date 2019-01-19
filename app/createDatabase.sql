CREATE TABLE Term(
    termID int,
    termTitle text,
    startDate text
    endDate text,
)

CREATE TABLE Course(
    courseSubject text,
    courseCatalog int,
    courseTitle text,
    asString text,
    course int,
    term int,
    courseDescription text,
    career text,
    department text,
    faculty text,
    facultyCode text,
    subjectTitle text,
    units float
)

CREATE TABLE CourseClass(
    component text,
    section text,
    classLocation text,
    classDay text,
    startTime text,
    endTime text,
    class int,
    courseID, int,
    term int,
    capacity int,
    classStatus text,
    enrollStatus text,
    startDate text,
    endDate text,
    examDate text,
    examStartTime text,
    examEndTime text,
    examLocation text,
    examStatus text,
    campus text,
    classNotes text,
    classType text,
    consent text,
    gradingBasis text,
    instructionMode text,
    instructorID text,
    courseSession text,
    units float   
)