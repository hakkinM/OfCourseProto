'use client';

import MajorSelector from '../components/test';
import { Header, Footer } from '../components/headerAndfooter/headerfooter';

const FindPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-black">
      {/* Header */}
      <Header/>
      {/* Selector */}
      <MajorSelector/>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default FindPage;