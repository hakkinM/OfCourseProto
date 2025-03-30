"use client";

import { useState } from "react";
import StarRating from "./startRating";
import { Review } from "@/app/types/types";
import { createReview } from "@/database/db";
import HoverInfo from "../additional/hoverInfo";

const ReviewCourseInput = ( { pageID }: { pageID: number } ) => {
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
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    const userId = Number(localStorage.getItem("userID"));
    const review: Review = {
      reviewID: Date.now(),
      pageID: pageID,
      authorID: 1,
      overall: overall,
      methods: methods,
      workload: workload,
      difficulty: difficulty,
      comment: comment,
      likes: 0,
    };

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Failed to submit review:", error);
    }

    resetAllStates();
  };

  return (
    <div className="">
      <button
        className="bg-white px-3 py-1.5 border rounded-md hover:bg-gray-50 text-sm"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Arvostele
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-black">
            <h2 className="text-lg font-bold mb-4">Arvostele kurssi</h2>
            {/* star container */}
            <div className="space-y-2 p-4">
              <div className="flex items-center space-x-3">
                <div className="w-32">
                  <p>Yleisarvosana</p>
                </div>
                <StarRating selected={overall} setSelected={setOverall} />
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-32">
                  <p>Toimintatavat</p>
                </div>
                <StarRating selected={methods} setSelected={setMethods} />
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-32">
                  <p>Työmäärä</p>
                </div>
                <StarRating selected={workload} setSelected={setWorkload} />
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-32">
                  <p>Vaikeustaso</p>
                </div>
                <StarRating selected={difficulty} setSelected={setDifficulty} />
                
              </div>
              <HoverInfo/>
            </div>
            <DropDownSelection/>
            {/* comment container*/}
            <div className="mt-4">
              <label
                htmlFor="comment"
                className="block text-lg font-medium mb-2"
              >
                Kommentti:
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
                rows={4}
                placeholder="Olen sitä mieltä, että..."
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
                onClick={() => handleSubmit()}
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

const ReviewModuleInput = ( { pageID }: { pageID: number } ) => {
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
    setIsOpen(false);
  };

  const handleSubmit = async () => {
    console.log("pageID: ", pageID);
    const userId = Number(localStorage.getItem("userID"));
    const review: Review = {
      reviewID: Date.now(),
      pageID: pageID,
      authorID: 1,
      overall: overall,
      methods: methods,
      workload: workload,
      difficulty: difficulty,
      comment: comment,
      likes: 0,
    };

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Failed to submit review:", error);
    }

    resetAllStates();
  };

  return (
    <div className="bg-white px-3 py-1.5 border rounded-md hover:bg-gray-50 text-sm">
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Arvostele
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-black">
            <h2 className="text-lg font-bold mb-4">Arvostele kokonaisuus</h2>
            {/* star container */}
            <div className="space-y-2 p-4">
              <div className="flex items-center space-x-3">
                <div className="w-32">
                  <p>Yleisarvosana</p>
                </div>
                <StarRating selected={overall} setSelected={setOverall} />
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-32">
                  <p>Valinnanvara</p>
                </div>
                <StarRating selected={methods} setSelected={setMethods} />
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-32">
                  <p>Hyödyllisyys</p>
                </div>
                <StarRating selected={workload} setSelected={setWorkload} />
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-32">
                  <p>Mielekkyys</p>
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
                Kommentti:
              </label>
              <textarea
                id="comment"
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
                rows={4}
                placeholder="Olen sitä mieltä, että..."
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
                onClick={() => handleSubmit()}
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


export { ReviewCourseInput, ReviewModuleInput };



const DropDownSelection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <p>Kuuluuko kurssi pääaineeseen?</p>
        <select
          className="w-full border rounded px-2 py-1 bg-white text-black"
        >
          <option>En kerro</option>
          <option>Kyllä</option>
          <option>Ei</option>
        </select>
      </div>
      <div>
        <p>Minkä arvosanan sait?</p>
        <select
          className="w-full border rounded px-2 py-1 bg-white text-black"
        >
          <option>En kerro</option>
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
          <option>0 / hylätty</option>
        </select>
      </div>
    </div>
  );
};

