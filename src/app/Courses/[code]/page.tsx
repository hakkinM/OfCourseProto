'use client';

import { useParams } from 'next/navigation';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { ReviewInput } from '@/app/components/reviewInput/reviewInput';

const CoursePage = () => {
  const { code } = useParams(); // code = 'MS-A0204' for example

  return (
    <div className="min-h-screen bg-gray-100 text-black p-4 space-y-6">
      {/* Back button */}
      <div className="text-lg mb-4">← Takaisin</div>

      {/* Header section */}
      <div className="bg-blue-100 p-6 rounded flex gap-6 items-start">
        <div className="min-w-[200px] h-[200px] bg-gray-300 rounded-lg"></div>

        <div className="flex-1">
          <h2 className="text-xl font-semibold">{code} Differentiaali- ja integraalilaskenta 2</h2>
          <p className="mt-2 text-sm">
            Kurssilla tutustutaan usean muuttujan differentiaali- ja integraalilaskennan perusteisiin...
          </p>

          <ReviewInput/>
        </div>

        {/* Rating summary */}
        <div className="min-w-[250px] space-y-1 text-sm">
          <p>Yleisarvosana ⭐⭐⭐⭐☆ 340</p>
          <p>Toimintatavat* ⭐⭐⭐⭐☆ 337</p>
          <p>Työmäärä** ⭐⭐☆☆☆ 329</p>
          <p>Vaikeustaso*** ⭐⭐⭐☆☆ 334</p>
          <p className="text-xs mt-2">
            * kuinka hyvin kurssin toimintatavat tukivat oppimistasi<br />
            ** 3/5 = 27 h/op<br />
            *** 3/5 = keskitaso
          </p>
        </div>
      </div>

      {/* Feedback section */}
      <div className="bg-blue-100 p-4 rounded">
        <h3 className="text-md font-semibold mb-3">Avoimet palautteet (12 kpl)</h3>

        <div className="bg-white p-3 rounded flex items-start justify-between mb-2">
          <div className="flex gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
            <div>
              <p className="font-semibold">Matikkavelho22 🏅 🚨 🏆</p>
              <p className="text-sm">
                Kurssi tarjosi syvällistä ymmärrystä laskennan menetelmistä...
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-green-600">
            <ThumbsUp />
            <span className="font-semibold text-black">+34</span>
          </div>
        </div>

        <div className="bg-white p-3 rounded flex items-start justify-between">
          <div className="flex gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
            <div>
              <p className="font-semibold">TrolliUkko ☕💀</p>
              <p className="text-sm">
                Kurssi tuntui enemmän selviytymiskokeelta kuin matematiikalta...
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-red-600">
            <ThumbsDown />
            <span className="font-semibold text-black">-22</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
