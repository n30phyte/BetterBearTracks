function startup() {
    console.log("Window Loaded");
    document.getElementById("course-item").addEventListener("click", addCourse);
}

function addCourse() {
    console.log("Course added");
}

window.onload = startup;