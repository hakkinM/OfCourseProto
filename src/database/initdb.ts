import { openDb } from "./db";
import fs from "fs";
import path from "path";

//File used to initiate the local database. Run from console with command: npx ts-node ./src/database/init.db

async function initDb() {
    const dbPath = path.resolve("./src/database/OfcDatabase.sqlite");

    if (fs.existsSync(dbPath)) {
        console.log("Database already exists, returning...");
        return;
    }

    const db = await openDb();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS Users (
            userID INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL,
            username TEXT NOT NULL,
            password TEXT NOT NULL
        );


        CREATE TABLE IF NOT EXISTS Reviews (
            reviewID INTEGER PRIMARY KEY AUTOINCREMENT,
            userID INTEGER NOT NULL,
            courseID INTEGER NOT NULL,
            overall INTEGER NOT NULL,
            methods INTEGER NOT NULL,
            workload INTEGER NOT NULL,
            difficulty INTEGER NOT NULL,
            comment TEXT,
            likes INTEGER NOT NULL DEFAULT 0,
            FOREIGN KEY (userID) REFERENCES Users(userID)
            ON DELETE CASCADE ON UPDATE CASCADE
        );
    `);

    console.log("Database initialized successfully");

    return;
}

initDb().catch((error) => console.error("Database initialization failed: ", error));