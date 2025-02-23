import { NextRequest, NextResponse } from "next/server";
import { Comment } from "@/app/types/comments"
import { getAllComments } from "@/database/db"
import { createComment } from "@/database/db";
import { validateComment } from "@/app/types/comments";
import { error } from "console";

export async function GET(req: NextRequest) {
    try {
        const comments: Comment[] = await getAllComments();
        return NextResponse.json(comments);
    } catch (error: unknown) {
        console.error("Error details:", error);
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const comment: Comment = await req.json();
        if (!validateComment(comment)) {
            throw new Error("Creating a comment failed.");
        }
        createComment(comment);
        return NextResponse.json(comment, { status: 201 });
    } catch (error: unknown) {
        console.error("Error details:", error);
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}

