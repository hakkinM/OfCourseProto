import { NextRequest, NextResponse } from "next/server";
import { Review } from "@/app/types/review"
import { getAllReviews } from "@/database/db"
import { createReview } from "@/database/db";
import { validateComment } from "@/app/types/review";
import { error } from "console";

export async function GET(req: NextRequest) {
    try {
        const comments: Review[] = await getAllReviews();
        return NextResponse.json(comments);
    } catch (error: unknown) {
        console.error("Error details:", error);
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const comment: Review = await req.json();
        if (!validateComment(comment)) {
            throw new Error("Creating a comment failed.");
        }
        createReview(comment);
        return NextResponse.json(comment, { status: 201 });
    } catch (error: unknown) {
        console.error("Error details:", error);
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}

