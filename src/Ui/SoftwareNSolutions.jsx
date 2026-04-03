"use client";

import { Cpu, FileText, ClipboardList } from "lucide-react";

const cards = [
  {
    icon: Cpu,
    title: "Captcha Solvex Software",
    desc: "Our Bank Captcha Verification Software helps users quickly and accurately solve captcha verification tasks through a secure and user-friendly interface.",
    btn: "Buy Now",
    bg: "from-teal-500 to-green-400",
  },
  {
    icon: FileText,
    title: "TextFlow Software",
    desc: "Our Data Typing Software is designed for text typing and document conversion work.",
    btn: "Buy Now",
    bg: "from-blue-600 to-blue-800",
  },
  {
    icon: ClipboardList,
    title: "QuickFill Software",
    desc: "Our Form Filling Software helps users fill online forms quickly using copy-paste data automation tools.",
    btn: "Buy Now",
    bg: "from-purple-900 via-blue-900 to-green-500",
  },
];

export default function SoftwareNSolutions() {
  return (
    <div className="px-6 md:px-16 py-10 ms-12">

      {/* Heading */}
      <div className="mb-8 ms-2">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
          Software & Solutions
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className={`relative rounded-2xl p-6 text-white overflow-hidden shadow-lg bg-gradient-to-r ${card.bg}`}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mt-4 leading-snug">
                {card.title}
              </h3>

              <p className="text-sm mt-2 opacity-90">{card.desc}</p>

              {/* Button */}
              <button className="mt-5 bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors">
                {card.btn}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}