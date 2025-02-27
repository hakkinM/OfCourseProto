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
  {
    userID: 4,
    email: "kayttis1@example.com",
    username: "kayttis1",
    password: "kayttis1",
  },
  {
    userID: 5,
    email: "kayttis2@example.com",
    username: "kayttis2",
    password: "kayttis2",
  },
  {
    userID: 6,
    email: "kayttis3@example.com",
    username: "kayttis3",
    password: "kayttis3",
  },
  {
    userID: 7,
    email: "kayttis4@example.com",
    username: "kayttis4",
    password: "kayttis4",
  },
  {
    userID: 8,
    email: "kayttis5@example.com",
    username: "kayttis5",
    password: "kayttis5",
  },
  {
    userID: 9,
    email: "kayttis6@example.com",
    username: "kayttis6",
    password: "kayttis6",
  },
  {
    userID: 10,
    email: "kayttis7@example.com",
    username: "kayttis7",
    password: "kayttis7",
  },
  {
    userID: 11,
    email: "kayttis8@example.com",
    username: "kayttis8",
    password: "kayttis8",
  },
  {
    userID: 12,
    email: "kayttis9@example.com",
    username: "kayttis9",
    password: "kayttis9",
  },
  {
    userID: 13,
    email: "kayttis10@example.com",
    username: "kayttis10",
    password: "kayttis10",
  },
  {
    userID: 14,
    email: "kayttis11@example.com",
    username: "kayttis11",
    password: "kayttis11",
  },
  {
    userID: 15,
    email: "kayttis12@example.com",
    username: "kayttis12",
    password: "kayttis12",
  },
  {
    userID: 16,
    email: "kayttis13@example.com",
    username: "kayttis13",
    password: "kayttis13",
  },
  {
    userID: 17,
    email: "kayttis14@example.com",
    username: "kayttis14",
    password: "kayttis14",
  },
  {
    userID: 18,
    email: "kayttis15@example.com",
    username: "kayttis15",
    password: "kayttis15",
  },
  {
    userID: 19,
    email: "kayttis16@example.com",
    username: "kayttis16",
    password: "kayttis16",
  },
  {
    userID: 20,
    email: "kayttis17@example.com",
    username: "kayttis17",
    password: "kayttis17",
  },
  {
    userID: 21,
    email: "kayttis18@example.com",
    username: "kayttis18",
    password: "kayttis18",
  },
  {
    userID: 22,
    email: "kayttis19@example.com",
    username: "kayttis19",
    password: "kayttis19",
  },
  {
    userID: 23,
    email: "kayttis20@example.com",
    username: "kayttis20",
    password: "kayttis20",
  }
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

// CHECK IF USER HAS ALREADY CREATED TEST DATA!!
// If test data is created twice, the console will be ridden with mystical errors.

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
