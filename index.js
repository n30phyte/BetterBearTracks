$(() => {
    const electron = require("electron");
    console.log("loaded");
    $("#courseSearch")
        .keydown(function(event) {
            if (event.which == 13) {
                event.preventDefault();
            }
            updateList(event);
        });
});

function updateList(query) {
    let courses = ["ECE 202", "ECE 210", "ECE 212"];

    let output = [];

    courses.forEach(function(course) {
        if (course.includes(query.target.value)) {
            output.push(course);
        }
    });

    printList(output);
}

function printList(courses) {
    $("#searchResult").empty();
    courses.forEach(function(course) {
        $("#searchResult").append("<a href=\"#\" class=\"course-item list-group-item list-group-item-action\">" + course + "</a>");
    });
}