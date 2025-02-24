"use client";

import { Review } from "@/app/types/review";
import { useState, useEffect } from "react";


/**

const CommentSection = ({ user, course }: { user: string, course: string }) => {

    const [comments, setComments] = useState<Comment[]>([]);
    const [newComment, setNewComment] = useState<string>('');


    async function fetchComments() {
        fetch("/api/comments", { method: "GET" })
            .then((res) => res.json())
            .then((data: Comment[]) => setComments(data))
            .catch((error) => console.error("Error fetching comments: ", error));
    }

    useEffect(() => { fetchComments(); }, []);

    const handleCommentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!newComment.trim()) {
            return;
        }

        const newCommentData: Comment = {
            commentID: 0,
            authorID: user,
            courseID: course,
            content: newComment,
            likes: 0
        }

        try {
            const res = await fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCommentData),
            });
    
            if (res.ok) {
                const addedComment = await res.json();  // Parse the JSON response from the server
                setNewComment('');  // Clear the input field after successful submission
                fetchComments();
            } else {
                console.error('Failed to add comment');  // Log an error if the response is not okay
            }
        } catch (error) {
            console.error('Error submitting comment: ', error);  // Log any network or fetch errors
        }
    }

    return (
        <div className="bg-gray-200 p-2 rounded-sm h-3/4 w-96">
            <div className="text-left text-black">
                <h1 className="font-bold">
                    Comments:
                </h1>
                <div>
                    <form onSubmit={handleCommentSubmit} className="flex flex-col w-80 p-4 border rounded" >
                        <input 
                            type="text" 
                            className="border p-2 mb-3 text-black"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Comment here"
                        />
                        <button type="submit" className="bg-blue-500 text-white py-2 rounded">
                            Submit
                        </button>
                    </form>
                </div>
                { CommentList(comments) }
            </div>
        </div>
    );
}

export default CommentSection;


const CommentList = (comments: Comment[]) => {
    return (
        <div className="max-w-md h-96 overflow-y-auto border rounded p-2">
            { comments.map(entry => CommentEntry(entry)) }
        </div>
    );
}


const CommentEntry = (entry: Comment) => {
    return (
        <div key = {entry.commentID} className="border-b py-2 bg-white">
            <p className="font-bold m-1">{entry.authorID}</p>
            <p className="mt-1 m-1 break-words whitespace-pre-wrap">{entry.content}</p>
        </div>
    );
}
*/