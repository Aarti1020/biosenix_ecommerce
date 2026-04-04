"use client";

import Image from "next/image";

const logos = [
  "/logos/amazon.png",
  "/logos/amazon-pay.png",
  "/logos/deloitte.png",
  "/logos/phonepe.png",
  "/logos/prialto-logo.png",
  "/logos/Genpact_LogoBlack.png",
];

const stats = [
  { value: "500+", label: "Openings daily" },
];

export default function LogoCarosel() {
  return (
    <div className="w-full bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 border-t border-white/10 py-3 sm:py-4 px-4 sm:px-6 md:px-12 flex flex-row items-center gap-3 sm:gap-6 overflow-hidden">

      {/* LEFT STATS — stays in a row on all screen sizes */}
      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        {stats.map(({ value, label }, i) => (
          <div key={label} className="flex items-center gap-2 sm:gap-4">
            <div className="text-center">
              <p className="text-white text-base sm:text-xl font-extrabold leading-none drop-shadow-sm">{value}</p>
              <p className="text-orange-100/80 text-[10px] sm:text-xs mt-0.5 whitespace-nowrap">{label}</p>
            </div>
            {i < stats.length - 1 && (
              <div className="w-px h-6 sm:h-8 bg-white/20" />
            )}
          </div>
        ))}

        {/* Divider between stats and logos */}
        <div className="w-px h-6 sm:h-10 bg-white/20" />
      </div>

      {/* RIGHT CAROUSEL */}
      <div className="relative flex-1 overflow-hidden min-w-0">
        {/* Fade masks */}
        {/* <div className="absolute left-0 top-0 h-full w-6 sm:w-12 bg-gradient-to-r from-orange-500 to-transparent z-10 pointer-events-none" /> */}
        {/* <div className="absolute right-0 top-0 h-full w-6 sm:w-12 bg-gradient-to-l from-orange-600 to-transparent z-10 pointer-events-none" /> */}

        <div className="flex w-max animate-scroll gap-5 sm:gap-10 items-center">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="min-w-[70px] sm:min-w-[110px] h-7 sm:h-10 flex items-center justify-center opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105"
            >
              <Image
                src={logo}
                alt="company logo"
                width={110}
                height={40}
                className="object-contain brightness-0 invert w-[70px] sm:w-[110px] h-auto"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}