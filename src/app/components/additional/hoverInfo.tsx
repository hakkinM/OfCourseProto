'use client';

const tooltip = `
Toimintatavat (Kuinka hyvin kurssin toimintatavat tukivat oppimistasi esim. luentovideot, luentomoniste):\n
1/5 = huonosti, 3/5 = normaalisti, 5/5 = erittäin hyvin\n
Työmäärä:\n
3/5 tähteä = 27 h/op\n
Vaikeustaso:\n
1/5 tähteä = helppo,  3/5 tähteä = keskitaso,  5/5 tähteä = vaikea\n
`;

const HoverInfo = () => {
    return (
      <div className="relative inline-block group">
        <button
          className="w-5 h-5 rounded-full bg-gray-300 text-xs font-bold flex items-center justify-center"
          title={tooltip}
        >
          ?
        </button>
  
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-56 bg-gray-800 text-white text-xs rounded p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          {tooltip}
        </div>
      </div>
    );
};

export default HoverInfo;
