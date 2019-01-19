import { DatabaseHelper } from "Database";
import ldap from "ldapjs";

export class Scraper {
    private db: DatabaseHelper;
    private ldapClient: ldap.Client;

    constructor() {
        this.ldapClient = ldap.createClient({ url: "directory.srv.ualberta.ca" });

    }

    public Start() {
        this.ldapClient.bind("", "", this.ScrapeTerms);
    }

    public ScrapeTerms() {
    }

}