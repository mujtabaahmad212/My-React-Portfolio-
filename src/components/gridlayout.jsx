import React from 'react';
import gridimg1 from '../assets/images/J5dpLRlnKtuKciNQQrOC3kqXw.png'
const DeviceGrid = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      {/* "Book Call" Button */}
      <button className="mb-8 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition duration-300">
        Book Call →
      </button>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-6 max-w-4xl w-full">
        {/* Card 1: Foldable Phone (Vertical, Side by Side) */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src={gridimg1}
            alt="Foldable Phone"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 2: Laptop (Angled, Open) */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src={gridimg1}
            alt="Laptop Angled"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 3: Phone (Standing on Fuzzy Surface) */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src={gridimg1}
            alt="Phone Standing"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 4: Laptop (On Surface, Closed) */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <img
         src={gridimg1}
            alt="Laptop Closed"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 5: Laptop (With Red Light Effects, Angled) */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <img
           src={gridimg1}
            alt="Laptop with Red Light"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Card 6: Laptop (With Red Light Effects, Different Angle) */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <img
           src={gridimg1}
            alt="Laptop with Red Light 2"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default DeviceGrid;