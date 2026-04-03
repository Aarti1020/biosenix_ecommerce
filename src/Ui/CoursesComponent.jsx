"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";

const cards = [
  { bgImage: "/coursecaptcha1.png" },
  { bgImage: "/documentcoursebanner.png" },
  { bgImage: "/ds.png" },
];

export default function CoursesComponent() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="px-3 md:px-16 py-2 relative  bg-white">
        {/* Heading */} 
        <div className="flex items-center gap-3 mb-5 ms-14"> 
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">Trending now</h2>
           <div className="bg-blue-500 text-white p-2 rounded-full"> 
          <TrendingUp size={18} /> </div> 
          </div>
    
      {/* Carousel */}
      <div className="relative overflow-hidden ms-4">

        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="min-w-full md:min-w-[90%] xl:min-w-[33.33%] p-2"
            >
              {/* ONLY IMAGE CARD */}
              <div
                className="rounded-2xl overflow-hidden shadow-lg bg-cover bg-center h-80 hover:scale-105 transition duration-300"
                style={{ backgroundImage: `url(${card.bgImage})` }}
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-110 transition"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-110 transition"
        >
          <ChevronRight />
        </button>

      </div>
    </div>
  );
}