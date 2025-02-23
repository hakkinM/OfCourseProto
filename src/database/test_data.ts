import type { NextApiRequest, NextApiResponse } from "next";
import { Comment } from "@/app/types/comments"
import { getAllComments } from "../database/db"
import { createComment } from "../database/db"
import { deleteComments } from "../database/db"

//Testing database related functions.
console.log("Hello world");

const testComment: Comment = {commentID: 0, authorID: "asdasd", courseID: "Diffis", content: "Very nice comment", likes: 0};

function printComment(comment: Comment) {
    console.log("Comment: ", comment.commentID, ", ", comment.authorID, ", ", comment.courseID, ", ", comment.content);
}

function printCommentList(comments: Comment[]) {
    if (comments.length > 0) {
        for (var comment of comments) {
            printComment(comment);
        }
    } else {
        console.log("No comments found");
    }
}

async function printAll() {
    const data = await getAllComments();
    printCommentList(data);
}

async function addComment(comment: Comment) {
    createComment(comment);
    printAll();
}

async function delComment(commentID: number) {
    deleteComments(commentID);
    printAll();
}

printAll();

//addComment(testComment);

//delComment(6);
