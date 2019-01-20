"use strict";
exports.__esModule = true;
var ldap = require("ldapjs");
var Database_1 = require("./Database");
var Scraper = /** @class */ (function () {
    function Scraper() {
        this.db = new Database_1.DatabaseHelper();
        this.ldapClient = ldap.createClient({ url: "ldap://directory.srv.ualberta.ca" });
        this.db.bootstrap();
    }
    Scraper.prototype.Start = function () {
        this.ScrapeTerms();
        this.ScrapeCourses(1660);
    };
    Scraper.prototype.ScrapeCourses = function (termID) {
        var _this = this;
        var opts = {
            filter: "objectClass=uOfACourse",
            scope: "one",
            sizeLimit: 0
        };
        this.ldapClient.search("term=" + termID + ", ou=calendar, dc=ualberta, dc=ca", opts, function (err, res) {
            res.on("searchEntry", function (entry) {
                var sql = "INSERT INTO Course (asString, courseSubject, courseCatalog, courseTitle) VALUES ('" +
                    entry.object.asString + "', '" + entry.object.subject + "', " + entry.object.catalog + ", '" +
                    entry.object.courseTitle + "')";
                console.log(sql);
                _this.db.insert(sql, "courses");
            });
            res.on("searchReference", function (referral) {
                // console.log("Referral", referral);
            });
            res.on("error", function (err) {
                // throw err;
                // console.log("Error is", err);
            });
            res.on("end", function (result) {
                // console.log("Result is", result);
            });
        });
    };
    Scraper.prototype.ScrapeTerms = function () {
        var _this = this;
        var opts = {
            filter: "objectClass=uOfATerm",
            scope: "one",
            sizeLimit: 0
        };
        this.ldapClient.search("ou=calendar, dc=ualberta, dc=ca", opts, function (err, res) {
            res.on("searchEntry", function (entry) {
                var sql = "INSERT INTO Term VALUES (" + entry.object.term + ", '" +
                    entry.object.termTitle + "', '" + entry.object.startDate + "', '" + entry.object.endDate + "')";
                _this.db.insert(sql, "term");
                // console.log(JSON.stringify(entry.object));
            });
            res.on("searchReference", function (referral) {
                // console.log("Referral", referral);
            });
            res.on("error", function (err) {
                // throw err;
                // console.log("Error is", err);
            });
            res.on("end", function (result) {
                // console.log("Result is", result);
            });
        });
    };
    Scraper.prototype.debug = function (param) {
        // this.db.printDatabase("Term");
        this.db.printDatabase(param);
    };
    return Scraper;
}());
exports.Scraper = Scraper;
var scraper = new Scraper();
// scraper.Start();
scraper.debug("Course");
