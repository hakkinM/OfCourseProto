import { NextRequest, NextResponse } from "next/server";
import { Review } from "@/app/types/types"
import { getAllReviews, getAllReviewsByLikes } from "@/database/db"

export async function GET(req: NextRequest) {
    try {
        const reviews: Review[] = await getAllReviewsByLikes();
        return NextResponse.json(reviews);
    } catch (error: unknown) {
        console.error("Error details:", error);
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}