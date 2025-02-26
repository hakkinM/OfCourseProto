"use client";

import { ArrowUp, ArrowDown } from "lucide-react";
import { Review } from "../types/types";
import { useState, useEffect } from "react";

const ReviewEntry = ({ review }: { review: Review }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white flex flex-col gap-2">
      <p className="font-semibold text-sm text-gray-700">Matti Meikäläinen</p>
      <p className="text-gray-900 break-words overflow-hidden">{review.comment}</p>
      <div className="flex items-center gap-3">
        <button className="text-green-500 hover:text-green-700">
          <ArrowUp size={18} />
        </button>
        <span className="text-gray-700 font-medium">{review.likes}</span>
        <button className="text-red-500 hover:text-red-700">
          <ArrowDown size={18} />
        </button>
      </div>
    </div>
  );
};

const ReviewList = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="space-y-4 overflow-y-auto max-h-80 p-2">
      {reviews.map(review => (
        <ReviewEntry key={review.reviewID} review={review} />
      ))}
    </div>
  );
};

const ReviewWindow = () => {

  const [reviews, setReviews] = useState<Review[]>([]);

  async function fetchReviews() {
    fetch("/api/reviews", { method: "GET" })
        .then((res) => res.json())
        .then((data: Review[]) => setReviews(data))
        .catch((error) => console.error("Error fetching reviews: ", error));
  }

  useEffect(() => { fetchReviews(); }, []);

  const testReviews: Review[] = [
    {
      reviewID: 1,
      courseID: 101,
      authorID: 1,
      overall: 5,
      methods: 4,
      workload: 3,
      difficulty: 2,
      comment: "Great course with engaging lectures!",
      likes: 10,
    },
    {
      reviewID: 2,
      courseID: 102,
      authorID: 2,
      overall: 3,
      methods: 3,
      workload: 5,
      difficulty: 4,
      comment: "Very challenging, but learned a lot.",
      likes: 5,
    },
    {
      reviewID: 3,
      courseID: 101,
      authorID: 3,
      overall: 4,
      methods: 5,
      workload: 2,
      difficulty: 3,
      comment: "Good balance of theory and practice.cddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
      likes: 8,
    },
  ];
  
  return (
    <div className="max-w-lg mx-auto mt-6">
      <h1 className="text-xl font-bold mb-4">Reviews</h1>
      <div className="border rounded-lg p-4 shadow-md bg-gray-50 max-h-96 overflow-hidden">
        <ReviewList reviews={reviews} />
      </div>
    </div>
  );
};

export default ReviewWindow;
