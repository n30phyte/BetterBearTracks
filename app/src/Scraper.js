"use strict";
exports.__esModule = true;
var Scraper = /** @class */ (function () {
    function Scraper() {
        this.ldapClient = ldap.createClient({ url: "directory.srv.ualberta.ca" });
    }
    Scraper.prototype.Start = function () {
        this.ldapClient.bind("", "", this.ScrapeTerms);
    };
    Scraper.prototype.ScrapeTerms = function () {
        var opts = {
            filter: "(&(term=1600)(facultyCode=EN)(objectClass=uOfACourse))",
            scope: "sub"
        };
        this.ldapClient.search("ou=calendar,dc=ualberta,dc=ca", opts, function (err, res) {
            res.on("searchEntry", function (entry) {
                console.log("Entry", JSON.stringify(entry.object));
            });
            res.on("searchReference", function (referral) {
                console.log("Referral", referral);
            });
            res.on("error", function (err) {
                console.log("Error is", err);
            });
            res.on("end", function (result) {
                console.log("Result is", result);
            });
        });
    };
    return Scraper;
}());
exports.Scraper = Scraper;
var object = new Scraper();
object.ScrapeTerms();
