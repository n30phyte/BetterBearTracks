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
                var sql = "INSERT INTO Bob VALUES (" + entry.object.term + ", " + entry.object.termTitle + ", " +
                    entry.object.startDate + ", " + entry.object.endDate + ")";
                _this.db.insert(sql);
                // console.log(JSON.stringify(entry.object));
            });
            res.on("searchReference", function (referral) {
                // console.log("Referral", referral);
            });
            res.on("error", function (err) {
                // console.log("Error is", err);
            });
            res.on("end", function (result) {
                console.log("Result is", result);
            });
        });
    };
    return Scraper;
}());
exports.Scraper = Scraper;
var scraper = new Scraper();
scraper.Start();
