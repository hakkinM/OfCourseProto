import { openDb } from "./db";
import fs from "fs";
import path from "path";

//File used to initiate the local database. Run from console with command: npx ts-node ./src/database/init.db

async function initDb() {
    const dbPath = path.resolve("./src/database/comments.sqlite");

    if (fs.existsSync(dbPath)) {
        console.log("Database already exists, returning...");
        return;
    }

    const db = await openDb();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS comments (
            commentID INTEGER PRIMARY KEY AUTOINCREMENT,
            userID TEXT NOT NULL,
            courseID TEXT NOT NULL,
            text TEXT NOT NULL,
            likes INTEGER NOT NULL
        );
    `);

    console.log("Database initialized successfully");

    return;
}

initDb().catch((error) => console.error("Database initialization failed: ", error));