import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { Review, User } from "@/app/types/types";

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
    const reviews = await db.all("SELECT * FROM Reviews");

    db.close();

    return reviews.map(entry => ({
        reviewID: entry.reviewID as number,
        courseID: entry.courseID as number,
        authorID: entry.userID as number,
        overall: entry.overall as number,
        methods: entry.methods as number,
        workload: entry.workload as number,
        difficulty: entry.difficulty as number,
        comment: entry.comment as string,
        likes: entry.likes as number
    }));
}

export async function getAllReviewsByLikes() {
    const reviews = await getAllReviews();
    return reviews.sort((a,b) => b.likes - a.likes);
}

export async function voteReview(reviewID: number, vote: number) {
    const db = await openDb();
    if (vote > 0) {
        await db.run("UPDATE Reviews SET likes = likes + 1 WHERE reviewID = ?",reviewID)
    } else if (vote < 0) {
        await db.run("UPDATE Reviews SET likes = likes - 1 WHERE reviewID = ?",reviewID)
    }
    db.close();
}


export async function getAllUsers(): Promise<User[]> {
    const db = await openDb();
    const users = await db.all("SELECT * FROM Users");

    db.close();

    return users.map(entry => ({
        userID: entry.userID as number,
        email: entry.email as string,
        username: entry.username as string,
        password: entry.password as string
    }));
}

export async function getUserByID(userID: number) {
    const users = await getAllUsers();
    return users.find(user => user.userID == userID);
}


export async function createReview(newReview: Review) {

    const db = await openDb();

    const newEntry = await db.run(
        "INSERT INTO Reviews (userID, courseID, overall, methods, workload, difficulty, comment, likes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
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

export async function createUser(newUser: User) {

    const db = await openDb();

    const newEntry = await db.run(
        "INSERT INTO Users (email, username, password) VALUES (?, ?, ?)",
        [
            newUser.email as string,
            newUser.username as string,
            newUser.password as string
        ]
    );

    db.close();

    if (newEntry.changes == 0) {
        throw new Error("Adding a user failed");
    } else {
        console.log("Added a user");
    }
}

export async function deleteReview(reviewID: number) {

    const db = await openDb();
    const deleteResult = await db.run(
        "DELETE FROM Reviews WHERE reviewID = ?",
        [reviewID]
    );

    db.close();

    if (deleteResult.changes == 0) {
        throw new Error("No entry found with given reviewID");
    } else {
        console.log("Deleted review with id: ", reviewID);
    }
}

export async function deleteUser(userID: number) {

    const db = await openDb();
    const deleteResult = await db.run(
        "DELETE FROM Users WHERE userID = ?",
        [userID]
    );

    db.close();

    if (deleteResult.changes == 0) {
        throw new Error("No entry found with given userID");
    } else {
        console.log("Deleted user with id: ", userID);
    }
}

export async function clearTable(tableName: string) {
    const db = await openDb();
    await db.run(`DELETE FROM ${tableName};`);
    await db.run(`DELETE FROM sqlite_sequence WHERE name='${tableName}';`);
    db.close();
}