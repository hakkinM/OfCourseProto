"use client";

import { useState } from "react";
import StarRating from "./startRating";

const ReviewInput = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [methods, setMethods] = useState<number>(0);
  const [workload, setWorkload] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<number>(0);
  const [overall, setOverall] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  const resetAllStates = () => {
    setMethods(0);
    setWorkload(0);
    setDifficulty(0);
    setOverall(0);
    setComment("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Give feedback
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-black">
            <h2 className="text-lg font-bold mb-4">Enter information</h2>
            {/* star container */}
            <div className="space-y-2 p-4">
              <div className="flex items-center space-x-3">
                <div className="w-32">
                  <p>Overall</p>
                </div>
                <StarRating selected={overall} setSelected={setOverall} />
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-32">
                  <p>Methodologies</p>
                </div>
                <StarRating selected={methods} setSelected={setMethods} />
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-32">
                  <p>Workload</p>
                </div>
                <StarRating selected={workload} setSelected={setWorkload} />
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-32">
                  <p>Difficulty</p>
                </div>
                <StarRating selected={difficulty} setSelected={setDifficulty} />
              </div>
            </div>
            {/* comment container*/}
            <div className="mt-4">
              <label
                htmlFor="comment"
                className="block text-lg font-medium mb-2"
              >
                Additional Feedback:
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                placeholder="Write your feedback here..."
              />
            </div>
            {/* Cancel and submit container */}
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded"
                onClick={() => {
                  resetAllStates();
                  setIsOpen(false);
                }}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded"
                onClick={() => {
                  resetAllStates();
                  setIsOpen(false);
                  // TODO: IMPLEMENT THE INFORMATION SUBMISSION HERE!
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { ReviewInput };
