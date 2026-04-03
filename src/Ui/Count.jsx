"use client";
import React from "react";
import CountUp from "react-countup";

const stats = [
  { number: 18, label: "Years of Experience" },
  { number: 13000, label: "Total Projects", separator: "," },
  { number: 35, label: "Winning Awards" },
  { number: 10000, label: "Happy Clients", separator: "," },
];

const Count = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10 bg-gradient-to-r from-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 flex flex-col items-center justify-center"
            >
              <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-600">
                <CountUp
                  end={stat.number}
                  duration={3}
                  separator={stat.separator || ""}
                />
                {stat.number > 0 ? "+" : ""}
              </h2>
              <p className="mt-2 text-lg sm:text-xl font-semibold text-gray-700">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Count;
