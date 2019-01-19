import * as sqlite from "sqlite3";

class Database {
    private database: sqlite.Database;

    constructor() {
        this.database = new sqlite.Database("beartracks");
    }
    private boostrap() {
        this.database.serialize(function () {
            this.database.run("CREATE TABLE Courses()"); // TODO: Courses
            this.database.run("CREATE TABLE ");  // TODO: Components (LEC/SEM/LAB whatever)
            this.database.run("CREATE TABLE ");
        });
    }
}
