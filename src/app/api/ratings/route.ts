import { NextResponse } from "next/server";
import { getAllReviews } from "@/database/db";
import { Ratings } from "@/app/types/types";

export async function GET() {
  try {
    const reviews = await getAllReviews();
    const ratings: Ratings = {
      overallRatings: reviews.map((review) => review.overall),
      difficultyRatings: reviews.map((review) => review.difficulty),
      methodsRatings: reviews.map((review) => review.methods),
      workloadRatings: reviews.map((review) => review.workload),
    };

    return NextResponse.json(ratings);
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}