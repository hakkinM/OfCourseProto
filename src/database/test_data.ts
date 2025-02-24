import type { NextApiRequest, NextApiResponse } from "next";
import { Review } from "@/app/types/review"
import { getAllReviews } from "../database/db"
import { createReview } from "../database/db"
import { deleteReview } from "../database/db"

//Testing database related functions.

/**
console.log("Hello world");

const testComment: Review = {reviewID: 0, authorID: "asdasd", courseID: "Diffis", content: "Very nice comment", likes: 0};

function printComment(comment: Review) {
    console.log("Comment: ", comment.reviewID, ", ", comment.authorID, ", ", comment.courseID, ", ", comment.content);
}

function printCommentList(comments: Review[]) {
    if (comments.length > 0) {
        for (var comment of comments) {
            printComment(comment);
        }
    } else {
        console.log("No comments found");
    }
}

async function printAll() {
    const data = await getAllReviews();
    printCommentList(data);
}

async function addComment(comment: Review) {
    createReview(comment);
    printAll();
}

async function delComment(commentID: number) {
    deleteReview(commentID);
    printAll();
}

printAll();

//addComment(testComment);

//delComment(6);
*/