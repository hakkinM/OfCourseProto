import type { NextApiRequest, NextApiResponse } from "next";
import { Review, User } from "@/app/types/types"
import { getAllReviews, getAllUsers } from "../database/db"
import { createReview, createUser } from "../database/db"
import { deleteReview, deleteUser, clearTable } from "../database/db"

//Testing database related functions.
//Note that running test will clear all tested tables.
//Also all tests are async functions. Only run one async function at a time to ensure that tests are executed sequentally.

function printReview(review: Review) {
    console.log("Review: ", review.reviewID, ", ", review.authorID, ", ", review.courseID, ", ", review.overall, ", ", review.methods, ", ", review.workload, ", ", review.difficulty, ", ", review.comment, ", ", review.likes);
}

function printUser(user: User) {
    console.log("User: ", user.userID, ", ", user.email, ", ", user.username, ", ", user.password);
}


function printReviewList(reviews: Review[]) {
    if (reviews.length > 0) {
        for (var review of reviews) {
            printReview(review);
        }
    } else {
        console.log("No reviews found");
    }
}

function printUserList(users: User[]) {
    if (users.length > 0) {
        for (var user of users) {
            printUser(user);
        }
    } else {
        console.log("No users found");
    }
}

async function userTest() {
    await clearTable("Users");
    await clearTable("Reviews");

    console.log("Running user database test");
    const testUser = {userID: 0, email: "test@email", username: "Testusername", password: "testpassword"}

    var userList: User[] = [];
    userList = await getAllUsers();
    console.log("User list length: ", userList.length, ", should be 0");

    console.log("Creating an user");
    await createUser(testUser);
    userList = await getAllUsers();
    console.log("User list length: ", userList.length, ", should be: 1");
    console.log("Users:")
    printUserList(userList);

    console.log("Deleting an user")
    await deleteUser(1);
    userList = await getAllUsers();
    console.log("User list length: ", userList.length, ", should be 0");
    await clearTable("Users");
}

async function reviewTest() {
    await clearTable("Users");
    await clearTable("Reviews");

    console.log("Running review database test");

    const testUser = {
        userID: 1,
        email: "alice@example.com",
        username: "alice123",
        password: "securepass1",
    }

    const testReview = {
        reviewID: 1,
        courseID: 101,
        authorID: 1,
        overall: 5,
        methods: 4,
        workload: 3,
        difficulty: 2,
        comment: "Great course with engaging lectures!",
        likes: 0,
    }

    var reviewList: Review[] = [];
    reviewList = await getAllReviews();
    console.log("Review list length: ", reviewList.length, ", should be 0");

    
    console.log("Creating an user");
    await createUser(testUser);
    const userList = await getAllUsers();
    console.log("User list length: ", userList.length, ", should be: 1");
    console.log("Users:")
    printUserList(userList);
 
    console.log("Creating a review");
    await createReview(testReview);
    reviewList = await getAllReviews();
    console.log("Review list length: ", reviewList.length, ", should be: 1");
    console.log("Reviews:")
    printReviewList(reviewList);

    console.log("Deleting a review")
    await deleteReview(1);
    reviewList = await getAllReviews();
    console.log("Review list length: ", reviewList.length, ", should be 0");

    await clearTable("Users");
    await clearTable("Reviews");
}

async function testAll() {
    console.log("Running database tests");

    await userTest();
    await reviewTest();

    console.log("Tests finished")
}

async function users() {
    const userList = await getAllUsers();
    console.log("Users:")
    printUserList(userList);
}


testAll();