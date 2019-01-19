"use strict";
exports.__esModule = true;
var fs = require("fs");
var sqlite = require("sqlite3");
var Database = /** @class */ (function () {
    function Database() {
        this.database = new sqlite.Database("./beartracks.db");
    }
    Database.prototype.bootstrap = function () {
        this.database.serialize(function () {
            var createDatabase = fs.readFileSync("./createDatabase.sql").toString();
            var processBearTracks = fs.readFileSync("./processBeartracks.sql").toString();
            this.database.run(createDatabase);
            this.database.run(processBearTracks);
        });
    };
    Database.prototype.printDatabase = function (tableName) {
        var sql = "SELECT * FROM " + tableName;
        this.database.all(sql, [], function (err, rows) {
            if (err) {
                throw err;
            }
            rows.forEach(function (row) {
                console.log(row.name);
            });
        });
    };
    return Database;
}());
var db = new Database();
db.bootstrap();
