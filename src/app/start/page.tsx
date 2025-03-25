'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-black">
      {/* Header */}
      <header className="bg-blue-200 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold">OfCourse</h1>
        <div className="space-x-2">
          <button
            className="bg-gray-300 px-4 py-1 rounded"
            onClick={() => router.push('/profile')}
          >
            Profiili
          </button>
          <button className="bg-gray-600 text-white px-4 py-1 rounded">
            Kirjaudu ulos
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-col items-center px-4 py-8 space-y-6">
        {/* Search */}
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Hae kursseja"
            className="border border-gray-400 px-4 py-2 rounded w-80 bg-white text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-black text-white px-4 py-2 rounded">Etsi</button>
        </div>

        {/* Intro Text */}
        <div className="bg-blue-200 p-4 rounded text-center max-w-xl">
          <p className="mb-2 font-medium">
            Tervetuloa OfCourseen! Täällä pääset näkemään muiden opiskelijoiden arvioita kursseista ja
            kurssikokonaisuuksista.
          </p>
          <p>Aloita valitsemalla sinulle mieluisa kurssikokonaisuus!</p>
        </div>

        {/* Education Level */}
        <div className="bg-blue-200 px-6 py-2 rounded font-medium">Valitse koulutustaso</div>
        <div className="flex gap-12">
          <button className="w-32 h-32 rounded-full bg-blue-200 text-xl font-semibold" onClick={() => router.push('/Courses')}>Kandi</button>
          <button className="w-32 h-32 rounded-full bg-blue-200 text-xl font-semibold">Maisteri</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-200 p-4 flex justify-between items-center text-sm">
        <div>
          <p>OfCourse</p>
          <p>Tietoa</p>
          <p>Käyttöehdot</p>
          <p>Yhteystiedot</p>
        </div>
        <div className="text-center text-xs font-bold border border-black px-4 py-2 rounded-full">
          You problem with course? Don’t worry, OfCourse!
        </div>
        <div className="text-right">
          <p>mycourses.aalto.fi</p>
          <p>sisu.aalto.fi</p>
        </div>
      </footer>
    </div>
  );
}
