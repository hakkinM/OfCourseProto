import { openDb } from "./db.js";
import fs from "fs";
import path from "path";

async function initDb() {
    const dbPath = path.resolve("./src/database/comments.sqlite");

    if (fs.existsSync(dbPath)) {
        console.log("Database already exists, returning...");
        return;
    }

    const db = await openDb();

    await db.exec(`
        CREATE TABLE IF NOT EXISTS comments (
            commentID INTEGER PRIMARY KEY,
            userID TEXT NOT NULL,
            courseID TEXT NOT NULL,
            text TEXT NOT NULL
        );
    `);

    console.log("Database initialized successfully");

    return;
}

initDb().catch((error) => console.error("Database initialization failed: ", error));