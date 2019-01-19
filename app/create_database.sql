CREATE TABLE Term(
    termID int,
    termTitle varchar[79],
    endDate date,
    startDate date
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
    
)