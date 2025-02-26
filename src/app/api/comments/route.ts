import { NextRequest, NextResponse } from "next/server";
import { Review } from "@/app/types/types"
import { createReview, getAllReviews } from "@/database/db";

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
        createReview(comment);
        return NextResponse.json({ status: 201 });
    } catch (error: unknown) {
        console.error("Error details:", error);
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}