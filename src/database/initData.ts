import { createReview } from "./db";
import { Review } from "@/app/types/types";

interface Comment {
  userID: number;
  postID: number;
  commentHeader: string;
  userEmail: string;
  comment: string;
}

export async function InitData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/comments')
  const comments: Comment[] = await response.json()

  const createScore = () => {
    return Math.floor(Math.random() * 5) + 1;
  };

  return (
    comments.forEach(comment =>
      createReview({
        reviewID: comment.postID,
        courseID: 1,
        authorID: comment.userID,
        overall: createScore(),
        methods: createScore(),
        workload: createScore(),
        difficulty: createScore(),
        comment: comment.comment,
        likes: 0
      })
    )
  )


}

/*
    reviewID: comment.postID
    courseID: 1
    authorID: comment.userID
    overall: createScore()
    methods: createScore()
    workload: createScore()
    difficulty: createScore()
    comment: comment.comment
    likes: 0
*/