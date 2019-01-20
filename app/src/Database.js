"use strict";
exports.__esModule = true;
var fs = require("fs");
var sqlite = require("sqlite3");
var DatabaseHelper = /** @class */ (function () {
    function DatabaseHelper() {
        this.database = new sqlite.Database("../Beartracks.db");
    }
    DatabaseHelper.prototype.bootstrap = function () {
        var sql = fs.readFileSync("../createDatabase.sql").toString();
        this.database.run(sql);
    };
    DatabaseHelper.prototype.insert = function (sql) {
        this.database.run(sql);
    };
    DatabaseHelper.prototype.printDatabase = function (tableName) {
        var sql = "SELECT * FROM " + tableName;
        this.database.all(sql, [], function (err, rows) {
            if (err) {
                throw err;
            }
            rows.forEach(function (row) {
                console.log(row);
            });
        });
    };
    return DatabaseHelper;
}());
exports.DatabaseHelper = DatabaseHelper;
