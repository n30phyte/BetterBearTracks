import * as sqlite from "sqlite3";

export class DatabaseHelper {
    private database: sqlite.Database;

    constructor() {
        this.database = new sqlite.Database("beartracks");
    }
    private boostrap() {
        this.database.serialize(function () {
            this.database.run(`CREATE TABLE Term(
                termID int,
                termTitle varchar[79],
                endDate date,
                startDate date`); // TODO: Courses
            this.database.run(`CREATE TABLE Course(
                `);  // TODO: Components (LEC/SEM/LAB whatever)
            this.database.run(`CREATE TABLE `);
            this.database.run(``)
        });
    }
}

