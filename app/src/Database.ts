import * as fs from "fs";
import * as sqlite from "sqlite3";

export class DatabaseHelper {
    private database: sqlite.Database;

    constructor() {
        this.database = new sqlite.Database("../Beartracks.db");
    }

    public bootstrap(): void {
        let sql: string = fs.readFileSync("../createDatabase.sql").toString();
        this.database.run(sql);
    }

    public insert(sql: string): void {
        this.database.run(sql);
    }

    public printDatabase(tableName: string): void {
        let sql = "SELECT * FROM " + tableName;
        this.database.all(sql, [], (err, rows) => {
            if (err) {
                throw err;
            }
            rows.forEach((row) => {
                console.log(row);
            });
        });
    }
}
