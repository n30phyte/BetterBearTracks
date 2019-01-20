$(() => {
    const electron = require('electron')
    console.log("loaded")
    $('#courseSearch')
        .keyup(function() {
            console.log();
            updateList(query);
        })
});

function updateList(query) {

}