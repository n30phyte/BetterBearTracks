import Vue from "vue";

const v = new Vue({
    data: {
            test: "lol",
        },
    el: "#ycourse",
});

//   function updateList(query) {
//     const courses = ["ECE 202", "ECE 210", "ECE 212"];

//     const output = [];

//     courses.forEach((course) => {
//         if (course.includes(query.target.value)) {
//             output.push(course);
//         }
//     });

//     printList(output);
// }

// function printList(courses) {
//     $("#searchResult").empty();
//     courses.forEach((course) => {
//         $("#searchResult")
//         .append("<a href=\"#\" class=\"course-item list-group-item list-group-item-action\">" + course + "</a>");
//     });
// }
