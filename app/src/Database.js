"use strict";
exports.__esModule = true;
var fs = require("fs");
var sqlite = require("sqlite3");
var DatabaseHelper = /** @class */ (function () {
    function DatabaseHelper() {
        this.database = new sqlite.Database("../beartracks.db");
    }
    DatabaseHelper.prototype.bootstrap = function () {
        var createDatabase = fs.readFileSync("../createDatabase.sql").toString();
        var processBearTracks = fs.readFileSync("../processBeartracks.sql").toString();
        this.database.run(createDatabase);
        this.database.run(processBearTracks);
    };
    DatabaseHelper.prototype.printDatabase = function (tableName) {
        var sql = "SELECT * FROM " + tableName;
        this.database.all(sql, [], function (err, rows) {
            if (err) {
                throw err;
            }
            rows.forEach(function (row) {
                console.log("termID:", row.termID, "termTitle:", row.termTitle);
            });
        });
    };
    return DatabaseHelper;
}());
exports.DatabaseHelper = DatabaseHelper;
