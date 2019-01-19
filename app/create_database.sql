CREATE TABLE Term(
    termID int,
    termTitle varchar[79],
    endDate text,
    startDate text
)

CREATE TABLE Course(
    courseSubject varchar[10],
    courseCatalog int,
    courseTitle varchar[80],
    asString varchar[80],
    course int,
    term int,
    courseDescription varchar[300],
    career varchar[80],
    department varchar[80],
    faculty varchar[80],
    facultyCode varchar[10],
    subjectTitle varchar[80],
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