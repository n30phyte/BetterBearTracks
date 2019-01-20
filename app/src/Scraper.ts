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

    public Start(): void {
        this.ScrapeTerms();
        this.ScrapeCourses(1660);
    }

    public ScrapeCourses(termID: number): void {
        const opts: object = {
            filter: "objectClass=uOfACourse",
            scope: "one",
            sizeLimit: 0,
        };
        this.ldapClient.search("term=" + termID + ", ou=calendar, dc=ualberta, dc=ca", opts, (err, res) => {
            res.on("searchEntry", (entry) => {
                let sql: string = "INSERT INTO Course (courseSubject, courseCatalog, courseTitle) VALUES ('" +
                entry.object.subject + "', " + entry.object.catalog + ", '" + entry.object.courseTitle + "')";
                console.log(sql);
                this.db.insert(sql);
            });
            res.on("error", (err) => {
                throw err;
            });
        });
    }

    public ScrapeTerms(): void {
        const opts: object = {
            filter: "objectClass=uOfATerm",
            scope: "one",
            sizeLimit: 0,
        };
        this.ldapClient.search("ou=calendar, dc=ualberta, dc=ca", opts, (err, res) => {
            res.on("searchEntry", (entry) => {
                let sql: string = "INSERT INTO Term VALUES (" + entry.object.term + ", '" +
                entry.object.termTitle + "', '" + entry.object.startDate + "', '" + entry.object.endDate + "')";
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
                // console.log("Result is", result);
            });
        });
    }

    public debug(param: string): void {
        // this.db.printDatabase("Term");
        this.db.printDatabase(param);
    }

}

let scraper = new Scraper();
// scraper.Start();
scraper.debug("Course");
