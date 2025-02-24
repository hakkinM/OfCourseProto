import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { Review } from "@/app/types/review";

/**
 * This file contains all the functions used to work with the database.
 */

export async function openDb() {
    return open({
        filename: "./src/database/OfcDatabase.sqlite",
        driver: sqlite3.Database
    })
}

export async function getAllReviews(): Promise<Review[]> {
    const db = await openDb();
    const reviews = await db.all("SELECT * FROM Review");

    db.close();

    return reviews.map(entry => ({
        reviewID: entry.reviewID as number,
        courseID: entry.courseID as number,
        authorID: entry.userID as number,
        overall: entry.overall as number,
        methods: entry.methods as number,
        workload: entry.workload as number,
        difficulty: entry.difficulty as number,
        comment: entry.comment as String,
        likes: entry.likes as number
    }));
}


export async function createReview(newReview: Review) {
    
    if (!(newReview.comment.length > 0)) {
        throw new Error("Invalid comment input.");
    }
    
    const db = await openDb();

    const newEntry = await db.run(
        "INSERT INTO Review (userID, courseID, overall, methods, workload, difficulty, comment, likes) VALUES (?, ?, ?, ?)",
        [
            newReview.authorID,
            newReview.courseID,
            newReview.overall,
            newReview.methods,
            newReview.workload,
            newReview.difficulty,
            newReview.comment,
            newReview.likes
        ]
    );

    db.close();

    if (newEntry.changes == 0) {
        throw new Error("Adding a review failed");
    } else {
        console.log("Added a review");
    }
}

export async function deleteReview(reviewID: number) {
    
    const db = await openDb();
    const deleteResult = await db.run(
        "DELETE FROM comments WHERE commentID = ?",
        [reviewID]
    );

    db.close();

    if (deleteResult.changes == 0) {
        throw new Error("No entry found with given reviewID");
    } else {
        console.log("Deleted review with id: ", reviewID);
    }
}