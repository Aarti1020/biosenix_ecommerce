"use client";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const testimonials = [
  {
    name: "Nandini Gupta",
    role: "Work-from-Home User",
    initials: "U1",
    color: "bg-blue-500",
    stars: 5,
    message:
      "I was genuinely impressed with Earn From Tasks. Their website is simple, well-structured, and easy to use. The service was quick, professional, and everything was delivered on time.",
  },
  {
    name: "Nilesh Kumar",
    role: "Housewife",
    initials: "U2",
    color: "bg-pink-500",
    stars: 5,
    message:
      "This job idea is perfect for those planning to work from home. It increases willpower and provides real opportunities. Very supportive and flexible for housewives.",
  },
  {
    name: "Triveni Gollapati",
    role: "Freelancer",
    initials: "U3",
    color: "bg-violet-500",
    stars: 4,
    message:
      "I appreciated the transparency and timely communication. The work opportunities provided were genuine, flexible, and suitable for part-time or work-from-home options.",
  },
  {
    name: "Vanita Shenkar",
    role: "Student",
    initials: "U4",
    color: "bg-emerald-500",
    stars: 5,
    message:
      "It is very user-friendly. The experience was smooth, and the team members were very supportive and caring. Thank you for the wonderful support.",
  },
  {
    name: "Komal Mahto",
    role: "Immigration Client",
    initials: "U5",
    color: "bg-orange-500",
    stars: 5,
    message:
      "The team guided me through every step of my visa process with clarity and patience. They answered all my doubts and completed the process faster than I expected.",
  },
  {
    name: "Shubhashree H M",
    role: "Professional User",
    initials: "U6",
    color: "bg-sky-500",
    stars: 4,
    message:
      "Provide excellent service with smooth and professional communication. The company was very supportive, responsive, and handled everything efficiently with good coordination.",
  },
  {
    name: "Shaikh Muskan",
    role: "Student",
    initials: "U7",
    color: "bg-rose-500",
    stars: 5,
    message:
      "The work is flexible and friendly. Payments are clear and timely, which gives confidence and trust. Perfect for students, housewives, or people seeking financial support.",
  },
  {
    name: "Rucha Vidhate",
    role: "Freelancer",
    initials: "U8",
    color: "bg-amber-500",
    stars: 5,
    message:
      "The service was fast, professional, and consistently high quality. Everything was delivered ahead of schedule with zero unnecessary communication. Truly hassle-free.",
  },
  {
    name: "Krishna Sharma",
    role: "Work-from-Home Enthusiast",
    initials: "U9",
    color: "bg-teal-500",
    stars: 5,
    message:
      "The process felt effortless from start to finish. I've already recommended them to friends who are equally impressed. Highly reliable and professional service.",
  },
  {
    name: "Anubha Prajapati",
    role: "Professional User",
    initials: "U10",
    color: "bg-indigo-500",
    stars: 4,
    message:
      "While advanced tools could be added in the future, the service is excellent and dependable. Truly a hassle-free solution for anyone looking for flexible, reliable work.",
  },
];

const CARDS_PER_VIEW = 3;

const StarRating = ({ count }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-3.5 h-3.5 ${
          i < count
            ? "fill-amber-400 text-amber-400"
            : "fill-slate-200 text-slate-200"
        }`}
      />
    ))}
  </div>
);

const TestimonialCard = ({ t }) => (
  <div className="bg-white rounded-2xl p-6 flex flex-col gap-4 border border-slate-100 shadow-sm h-full">
    {/* Top: quote icon + stars */}
    <div className="flex items-center justify-between">
      <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
        <Quote className="w-4 h-4 text-blue-500" />
      </div>
      <StarRating count={t.stars} />
    </div>

    {/* Message */}
    <p className="text-sm text-slate-600 leading-relaxed flex-1">
      {t.message}
    </p>

    {/* Divider */}
    <div className="h-px bg-slate-100" />

    {/* User info */}
    <div className="flex items-center gap-3">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 ${t.color}`}
      >
        {t.initials}
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-800">{t.name}</p>
        <p className="text-xs text-slate-400">{t.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const maxIndex = total - CARDS_PER_VIEW;

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-14 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Quote className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">
                Testimonials
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1">
              What Our Users Say
            </h2>
            <p className="text-slate-500 text-sm max-w-xl">
              Hear from real users who experienced smooth, professional, and flexible support.
            </p>
          </div>

          {/* Arrow buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={index === 0}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center shadow-sm hover:bg-blue-50 hover:border-blue-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <button
              onClick={next}
              disabled={index >= maxIndex}
              className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center shadow-sm hover:bg-blue-50 hover:border-blue-300 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * (100 / CARDS_PER_VIEW)}%)` }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="min-w-full sm:min-w-[50%] lg:min-w-[33.33%] px-2.5"
              >
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 mt-7">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(Math.min(i, maxIndex))}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-blue-600 w-6" : "bg-slate-300 w-2"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;