'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CourseListPage = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      {/* Header */}
      <header className="bg-blue-200 p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">
          OfCourse&gt;Kandi&gt;Sivuaine&gt;SCI&gt;Matematiikka
        </h1>
        <div className="space-x-2">
          <button className="bg-gray-300 px-4 py-1 rounded" onClick={() => router.push('/pages/profile')}>Profiili</button>
          <button className="bg-gray-600 text-white px-4 py-1 rounded">Kirjaudu ulos</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 px-4 py-6 gap-6">
        {/* Sidebar */}
        <aside className="w-1/5 space-y-4">
          <button className="text-left text-lg">← Takaisin</button>
          <div className="bg-blue-100 p-4 rounded">
            <h2 className="font-bold mb-2">Tervetuloa!</h2>
            <p className="text-sm">
              Täältä löydät kurssitiedot ja vertaisten palautteet mistä tahansa kurssista vain muutamalla klikkauksella.
            </p>
          </div>
        </aside>

        {/* Course List */}
        <section className="flex-1 space-y-4 overflow-y-auto">
          {/* Search & Filters */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Hae kursseja"
              className="border border-gray-400 px-4 py-2 rounded w-80 bg-white text-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-black text-white px-4 py-2 rounded">Etsi</button>
          </div>
          <div className="flex space-x-2">
            <button className="bg-gray-200 px-4 py-1 rounded">Eniten arvosteluja</button>
            <button className="bg-gray-200 px-4 py-1 rounded">Uusimmat</button>
            <button className="bg-gray-200 px-4 py-1 rounded">Katsotuimmat</button>
          </div>

          {/* Course Cards */}
          {[
            { code: 'MS-A0204', name: 'Differentiaali- ja integraalilaskenta 2', views: 150, reviews: 18 },
            { code: 'MS-A0001', name: 'Matriisilaskenta', views: 130, reviews: 19 },
            { code: 'MS-A0401', name: 'Diskreetin matematiikan perusteet', views: 112, reviews: 11 },
            { code: 'MS-A0304', name: 'Differentiaali- ja integraalilaskenta 3', views: 70, reviews: 13 },
          ].map((course) => (
            <div
              key={course.code}
              className="border rounded p-4 bg-white shadow-sm hover:bg-gray-50 cursor-pointer"
            >
              <h3 className="font-semibold">{course.code} {course.name}</h3>
              <p>Katselukerrat: {course.views}</p>
              <p>Arviointeja: {course.reviews}</p>
            </div>
          ))}
        </section>

        {/* Filter Sidebar */}
        <aside className="w-1/5 space-y-4">
          <div className="border p-4 rounded">
            <h2 className="font-semibold mb-2">Suodata kursseja:</h2>
            <div className="mb-2">
              <label className="block text-sm">Laitos:</label>
              <input className="w-full border rounded px-2 py-1" defaultValue="Matematiikan laitos" />
            </div>
            <div className="mb-2">
              <label className="block text-sm">Periodi:</label>
              <input className="w-full border rounded px-2 py-1" />
            </div>
            <div>
              <label className="block text-sm">Taso:</label>
              <input className="w-full border rounded px-2 py-1" defaultValue="Kandidaatintutkinto" />
            </div>
          </div>
        </aside>
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
          You problem with course? Don't worry, OfCourse!
        </div>
        <div className="text-right">
          <p>mycourses.aalto.fi</p>
          <p>sisu.aalto.fi</p>
        </div>
      </footer>
    </div>
  );
};

export default CourseListPage;
