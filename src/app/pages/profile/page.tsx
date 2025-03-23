'use client';

import { ThumbsUp } from 'lucide-react';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Top bar */}
      <div className="bg-blue-200 p-2 flex items-center">
        <button className="text-lg px-2">← Takaisin</button>
      </div>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 border-r p-4 space-y-4">
          <div className="flex items-center space-x-2 bg-blue-100 p-2 rounded">
            <div className="w-10 h-10 rounded-full bg-gray-300" />
            <div>
              <p className="font-semibold">Matikkavelho22</p>
              <p>🏅 🐌 🏆</p>
            </div>
          </div>
          <button className="w-full border px-4 py-2 rounded bg-black text-white">Käyttäjätiedot</button>
          <button className="w-full border px-4 py-2 rounded">Profiilin asetukset</button>
          <button className="w-full border px-4 py-2 rounded">Kirjanmerkit</button>
          <button className="w-full border px-4 py-2 rounded">Omat kommentit</button>
          <button className="w-full border px-4 py-2 rounded">Ilmoitukset</button>
          <button className="w-full border px-4 py-2 rounded border-red-500 text-red-500">Kirjaudu ulos</button>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 space-y-6">
          {/* Action buttons */}
          <div className="flex space-x-4">
            <button className="border px-4 py-2 rounded">Muokkaa profiilia</button>
            <button className="border px-4 py-2 rounded">Saavutukset</button>
            <button className="border px-4 py-2 rounded">Omat arvostelut</button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Summary */}
            <div className="space-y-4">
              <div className="bg-blue-100 p-4 rounded">
                <p><strong>Karma:</strong> 4000</p>
                <p><strong>Kirjoitettuja arvosteluja:</strong> 30</p>
                <p><strong>Lukijoita kommenteilla yhteensä:</strong> 1000</p>
              </div>
              <div className="bg-blue-100 p-4 rounded">
                <p className="font-semibold">Pokaalit</p>
                <p>🏅 Yhteisöllisyyspokaaleja: 2</p>
                <p>🐌 Koulumestaripokaaleja: 4</p>
                <p>🏆 Trollauspokaaleja: 0</p>
              </div>
            </div>

            {/* Most liked comment */}
            <div className="bg-blue-100 p-4 rounded space-y-2">
              <div className="flex items-center space-x-2 bg-blue-200 p-2 rounded">
                <div className="w-8 h-8 rounded-full bg-gray-300" />
                <div>
                  <p className="font-semibold">Matikkavelho22</p>
                  <p>🏅 🚨 🏆</p>
                </div>
              </div>
              <p>
                Kurssi tarjosi syvällistä ymmärrystä laskennan menetelmistä ja niiden sovelluksista. Opetus oli selkeää,
                mutta haastavat aiheet vaativat runsaasti itsenäistä harjoittelua. Harjoitustehtävät tukivat hyvin oppimista,
                vaikka joidenkin tehtävien ratkaisut voisivat olla yksityiskohtaisempia. Kokonaisuudessaan kurssi oli vaativa
                mutta hyödyllinen tulevien kurssien kannalta. Ehdottomasti kannattaa käydä!
              </p>
              <div className="flex items-center space-x-2">
                <ThumbsUp className="text-green-600" />
                <span className="text-lg font-semibold">+34</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
