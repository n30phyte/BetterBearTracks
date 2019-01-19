import { DatabaseHelper } from "./Database";
import { Scraper } from "./Scraper";

let isAppReady = false;

enum appStatus {
    Loading,
    Scraping,
    Loaded,
}

function Startup() {

    const database = new DatabaseHelper();
    database.Load();

    isAppReady = database.isReady;

    if (database.isReady) {
        const scrape = new Scraper();
        scrape.Start();
        isAppReady = true;
    }
}
