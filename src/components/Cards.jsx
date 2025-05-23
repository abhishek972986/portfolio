import React from 'react';
import { FaCommentDots } from 'react-icons/fa';

const Cards = ({ card }) => {
  return (
    <div className="card-container group w-[400px] h-[220px] border border-gray-300 shadow-lg rounded-2xl bg-white flex items-center p-4 transition-all duration-300 hover:shadow-2xl relative cursor-pointer">
      <FaCommentDots className="absolute z-2 -right-4 top-[20%] text-red-700 text-3xl" />

      <div className="w-1/2 flex justify-center">
        <div className="w-full h-full flex justify-center relative">
          <img 
            src={card} 
            alt="Profile" 
            className="w-[80%] h-full object-cover rounded-2xl transform transition-transform duration-300 group-hover:-translate-y-2 z-10"
          />
        </div>
      </div>

      <div className="w-1/2 flex flex-col items-center justify-around space-y-2 text-center px-3">
        <p className="text-gray-600 text-sm leading-relaxed">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        </p>
        <div>
          <div className="text-xl text-blue-700 font-bold">Elisa Grant</div>
          <div className="text-sm text-blue-500">Legacy Solutions Engineer</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
