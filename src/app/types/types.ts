export interface Review {
    reviewID: number,
    courseID: number,
    authorID: number,
    overall: number,
    methods: number,
    workload: number,
    difficulty: number,
    comment: String,
    likes: number,
}

export interface User {
    userID: number,
    email: String,
    username: String,
    password: String,
}

export interface Ratings {
    overallRatings: number[];
    difficultyRatings: number[];
    methodsRatings: number[];
    workloadRatings: number[];
  }
