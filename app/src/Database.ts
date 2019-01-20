import * as fs from "fs";
import * as sqlite from "sqlite3";

export class DatabaseHelper {
    private database: sqlite.Database;

    constructor() {
        this.database = new sqlite.Database("./beartracks.db");
    }

    public bootstrap(): void {
        this.database.serialize(function () {
            let createDatabase = fs.readFileSync("./createDatabase.sql").toString();
            let processBearTracks = fs.readFileSync("./processBeartracks.sql").toString();

            this.database.run(createDatabase);
            this.database.run(processBearTracks);
        });
    }

    public printDatabase(tableName: string): void {
        let sql = "SELECT * FROM " + tableName;
        this.database.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                console.log(row.name);
            });
        });
    }
}
