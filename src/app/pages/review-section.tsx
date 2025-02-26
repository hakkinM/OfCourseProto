"use client";

import { ArrowUp, ArrowDown } from "lucide-react";
import { Review, User } from "../types/types";
import { useState, useEffect } from "react";
import { getUserByID } from "@/database/db";

const ReviewEntry = ({ review, username }: { review: Review, username: String }) => {

  const [votes, setLikes] = useState(review.likes);

  const handleLike = async (likes: number) => {

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reviewID: review.reviewID, likes: likes })
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setLikes(votes + likes);
    } catch (error) {
      console.error("Error liking review:", error);
    }
  }

  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white flex flex-col gap-2">
      <p className="font-semibold text-sm text-gray-700">{username}</p>
      <p className="text-gray-900 break-words overflow-hidden">{review.comment}</p>
      <div className="flex items-center gap-3">
        <button className="text-green-500 hover:text-green-700" onClick={() => handleLike(1)}>
          <ArrowUp size={18} />
        </button>
        <span className="text-gray-700 font-medium">{votes}</span>
        <button className="text-red-500 hover:text-red-700" onClick={() => handleLike(-1)}>
          <ArrowDown size={18} />
        </button>
      </div>
    </div>
  );
};

const ReviewList = ({ reviews }: { reviews: Review[] }) => {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => { handleUsers(); }, []);

  const handleUsers = async () => {
    try {
      const response = await fetch("/api/users", {
        method: "GET"
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const usersList: User[] = await response.json();
      setUsers(usersList);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  }

  function getUsername(userID: number): String {
    const names = users.find(user => user.userID === userID)
    let username: string = "Unknown";
    if (names !== undefined) {
      username = names.username.toString();
    }
    return username;
  }

  return (
    <div className="space-y-4 overflow-y-auto max-h-80 p-2">
      {reviews.map(review => (
        <ReviewEntry key={review.reviewID} review={review} username={getUsername(review.authorID)} />
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
