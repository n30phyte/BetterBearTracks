import * as fs from "fs";
import * as sqlite from "sqlite3";

export class DatabaseHelper {
    private database: sqlite.Database;

    constructor() {
        this.database = new sqlite.Database("beartracks");
    }
    private boostrap() {
        this.database.serialize(function () {
            const createDatabase = fs.readFileSync("./createDatabase.sql").toString();
            const processBearTracks = fs.readFileSync("./processBeartracks.sql").toString();
            this.database.run(createDatabase); // TODO: Courses
            this.database.run(processBearTracks);
        });
    }
}

