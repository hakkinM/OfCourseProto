'use client';

import { useState } from 'react';

const AddReviewPage = () => {
  const [generalRating, setGeneralRating] = useState(0);
  const [methodsRating, setMethodsRating] = useState(0);
  const [workloadRating, setWorkloadRating] = useState(0);
  const [difficultyRating, setDifficultyRating] = useState(0);
  const [major, setMajor] = useState('');
  const [grade, setGrade] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    // TODO: submit logic
    console.log({
      generalRating,
      methodsRating,
      workloadRating,
      difficultyRating,
      major,
      grade,
      comment,
    });
  };

  const renderStars = (rating: number, setRating: (val: number) => void) => (
    <div className="flex gap-1 cursor-pointer">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          onClick={() => setRating(i + 1)}
          className={`text-xl ${i < rating ? 'text-yellow-500' : 'text-gray-400'}`}
        >
          ★
        </span>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen p-6 space-y-6 bg-gradient-to-b from-blue-100 to-blue-200 text-black">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Arvostele kurssi MS-A0204 Differentiaali- ja integraalilaskenta 2</h1>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 border rounded bg-white hover:bg-gray-100"
        >
          Tallenna Arvostelu
        </button>
      </div>

      {/* Ratings & Inputs */}
      <div className="bg-blue-100 p-4 rounded space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p>Yleisarvosana kurssille</p>
            {renderStars(generalRating, setGeneralRating)}
          </div>
          <div>
            <p>Toimintatavat*</p>
            {renderStars(methodsRating, setMethodsRating)}
          </div>
          <div>
            <p>Kurssin työmäärä**</p>
            {renderStars(workloadRating, setWorkloadRating)}
          </div>
          <div>
            <p>Vaikeustaso***</p>
            {renderStars(difficultyRating, setDifficultyRating)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p>Kuuluuko kurssi pääaineeseen?</p>
            <select
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              className="w-full border rounded px-2 py-1"
            >
              <option>En kerro</option>
              <option>Kyllä</option>
              <option>Ei</option>
            </select>
          </div>
          <div>
            <p>Minkä arvosanan sait?</p>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full border rounded px-2 py-1"
            >
              <option>En kerro / en tiedä vielä</option>
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
              <option>0 / hylätty</option>
            </select>
          </div>
        </div>

        <p className="text-xs mt-4">
          * Kuinka hyvin kurssin toimintatavat tukivat oppimistasi<br />
          ** 3/5 tähteä = 27 h/op<br />
          *** 1/5 = helppo, 3/5 = keskitaso, 5/5 = vaikea
        </p>
      </div>

      {/* Comment */}
      <div className="bg-blue-100 p-4 rounded">
        <p className="text-lg font-semibold mb-2">Kommentti</p>
        <textarea
          placeholder="Olen sitä mieltä, että..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full h-32 p-2 rounded border bg-white text-black"
        />
      </div>
    </div>
  );
}

export default AddReviewPage;