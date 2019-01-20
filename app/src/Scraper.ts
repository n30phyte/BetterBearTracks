import * as ldap from "ldapjs";
import { DatabaseHelper } from "./Database";

export class Scraper {
    private db: DatabaseHelper;
    private ldapClient: ldap.Client;

    constructor() {
        this.db = new DatabaseHelper()
        this.ldapClient = ldap.createClient({ url: "ldap://directory.srv.ualberta.ca" });
        this.db.bootstrap();
    }

    public Start() {
        this.ScrapeTerms();
    }

    public ScrapeTerms() {
        const opts: object = {
            filter: "objectClass=uOfATerm",
            scope: "one",
            sizeLimit: 0,
        }
        this.ldapClient.search("ou=calendar, dc=ualberta, dc=ca", opts, (err, res) => {
            res.on("searchEntry", (entry) => {
                let sql = "INSERT INTO Bob VALUES (" + entry.object.term + ", " + entry.object.termTitle + ", " +
                entry.object.startDate + ", " + entry.object.endDate + ")";
                this.db.insert(sql);
                // console.log(JSON.stringify(entry.object));
            });
            res.on("searchReference", (referral) => {
                // console.log("Referral", referral);
            });
            res.on("error", (err) => {
                // console.log("Error is", err);
            });
            res.on("end", (result) => {
                console.log("Result is", result);
            });
        });
    }
}

let scraper = new Scraper();
scraper.Start();