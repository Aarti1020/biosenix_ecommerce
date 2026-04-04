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
    <div className="px-3 sm:px-6 md:px-16 py-4 sm:py-6 relative bg-white">

      {/* Heading */}
      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 ms-2 sm:ms-6 md:ms-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
          Trending now
        </h2>
        <div className="bg-blue-500 text-white p-1.5 sm:p-2 rounded-full">
          <TrendingUp size={16} className="sm:hidden" />
          <TrendingUp size={18} className="hidden sm:block" />
        </div>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden ms-1 sm:ms-3 md:ms-4">

        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="min-w-full md:min-w-[90%] xl:min-w-[33.33%] p-1.5 sm:p-2"
            >
              {/* Image Card */}
              <div
                className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-cover bg-center
                  h-44 xs:h-52 sm:h-64 md:h-72 lg:h-80
                  hover:scale-105 transition duration-300"
                style={{ backgroundImage: `url(${card.bgImage})` }}
              />
            </div>
          ))}
        </div>

        {/* Prev Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-1.5 sm:p-2 rounded-full shadow hover:scale-110 transition z-10"
        >
          <ChevronLeft size={18} className="sm:hidden" />
          <ChevronLeft size={22} className="hidden sm:block" />
        </button>

        {/* Next Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-1.5 sm:p-2 rounded-full shadow hover:scale-110 transition z-10"
        >
          <ChevronRight size={18} className="sm:hidden" />
          <ChevronRight size={22} className="hidden sm:block" />
        </button>

      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all duration-300 ${
              index === i
                ? "bg-blue-500 w-4 sm:w-5 h-1.5 sm:h-2"
                : "bg-slate-300 w-1.5 sm:w-2 h-1.5 sm:h-2"
            }`}
          />
        ))}
      </div>

    </div>
  );
}