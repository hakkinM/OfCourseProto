'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import MajorSelector from '../components/test';
import { Header, Footer } from '../components/headerAndfooter/headerfooter';

export default function HomePage() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-black">
      {/* Header */}
      <Header/>
      <main className="min-h-[60vh] flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-3xl font-bold">Tervetuloa</h1>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => router.push("/find")}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Etsi
          </button>
          <button
            onClick={() => router.push("/Courses")}
            className="w-full bg-gray-100 text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Selaa kokonaisuuksia
          </button>
          <button
            onClick={() => router.push("/Courses")}
            className="w-full bg-gray-100 text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Selaa kursseja
          </button>
        </div>
      </div>
    </main>
      {/* Footer */}
      <Footer/>
    </div>
  );
}