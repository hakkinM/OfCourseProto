import { NextRequest, NextResponse } from "next/server";
import { Review } from "@/app/types/types"
import { getAllReviews, getAllReviewsByLikes, voteReview } from "@/database/db"

export async function GET(req: NextRequest) {
    try {
        const reviews: Review[] = await getAllReviewsByLikes();
        return NextResponse.json(reviews);
    } catch (error: unknown) {
        console.error("Error details:", error);
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
      // Parse request body
      const { reviewID, likes } = await req.json();
      if (!reviewID || !likes) {
        return NextResponse.json({ message: "Missing reviewID or likes" }, { status: 400 });
      }
  
      //Like review
      await voteReview(reviewID,likes);
      
      return NextResponse.json({ message: "Review liked successfully" }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ message: "Database error", error }, { status: 500 });
    }
}