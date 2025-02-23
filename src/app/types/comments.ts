export interface Comment {
    commentID: number;
    courseID: String;
    authorID: String;
    content: String;
    likes: number;
}

export function validateComment(comment: Comment): Boolean {
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

