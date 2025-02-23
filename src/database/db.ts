import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { Comment } from "@/app/types/comments";

/**
 * This file contains all the functions used to work with the database.
 */

export async function openDb() {
    return open({
        filename: "./src/database/comments.sqlite",
        driver: sqlite3.Database
    })
}

export async function getAllComments(): Promise<Comment[]> {
    const db = await openDb();
    const comments = await db.all("SELECT * FROM comments");

    db.close();

    return comments.map(entry => ({
        commentID: entry.commentID as number,
        courseID: entry.courseID as String,
        authorID: entry.userID as String,
        content: entry.text as String,
        likes: entry.likes as number
    }));
}

export async function createComment(newComment: Comment) {
    
    if (!(newComment.content.length > 0)) {
        throw new Error("Invalid comment input.");
    }
    
    const db = await openDb();

    const newEntry = await db.run(
        "INSERT INTO comments (userID, courseID, text, likes) VALUES (?, ?, ?, ?)",
        [newComment.authorID,newComment.courseID,newComment.content,newComment.likes]
    );

    db.close();

    if (newEntry.changes == 0) {
        throw new Error("Adding a comment failed");
    } else {
        console.log("Added a comment");
    }
}

export async function deleteComments(commentID: number) {
    
    const db = await openDb();
    const deleteResult = await db.run(
        "DELETE FROM comments WHERE commentID = ?",
        [commentID]
    );

    db.close();

    if (deleteResult.changes == 0) {
        throw new Error("No entry found with given commentID");
    } else {
        console.log("Deleted comment with id: ", commentID);
    }
}

