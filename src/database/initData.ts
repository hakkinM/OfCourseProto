import { createReview, createUser, clearTable } from "./db";
import { Review, User } from "@/app/types/types";

/**
 * This file can be ran to create test data.
 */

const testUsers: User[] = [
  {
    userID: 1,
    email: "alice@example.com",
    username: "alice123",
    password: "securepass1",
  },
  {
    userID: 2,
    email: "bob@example.com",
    username: "bob_the_builder",
    password: "strongpassword",
  },
  {
    userID: 3,
    email: "charlie@example.com",
    username: "charlie_dev",
    password: "mypassword123",
  },
];

export const testReviews: Review[] = [
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
    comment: "Good balance of theory and practice.",
    likes: 8,
  },
];

async function create() {
  console.log("Creating test data");
  clearTable("Users");
  clearTable("Reviews");
  for (var user of testUsers) {
    await createUser(user);
  }
  for (var review of testReviews) {
    await createReview(review);
  }
  console.log("Test data created.");
}

create();


/**
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
