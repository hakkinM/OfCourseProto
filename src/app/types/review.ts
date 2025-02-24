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

/**
export function validateComment(comment: Review): Boolean {
    if (comment.authorID.length == 0) {
        console.log("Invalid comment: AuthorID cannot be empty.");
        return false;
    }
    if (comment.courseID.length == 0) {
        console.log("Invalid comment: AuthorID cannot be empty.");
        return false;
    }
    if (comment.content.length == 0) {
        console.log("Invalid comment: Comment content cannot be empty.");
        return false;
    }
    return true;
}
*/
