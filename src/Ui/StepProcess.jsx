"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  BookOpen,
  Code2,
  BarChart2,
  Megaphone,
  FileText,
  Database,
  Cpu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

const courses = [
  {
    name: "Captcha Processing Executive Course",
    path: "/courses/captcha-processing",
    icon: Cpu,
    badge: "Entry Level",
    badgeClass: "bg-emerald-100 text-emerald-700",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    btnHover: "hover:bg-blue-500 hover:text-white",
    borderHover: "hover:border-t-blue-500",
    desc: "Master captcha solving techniques and earn from home with verified task platforms.",
    duration: "3 Weeks",
    level: "Beginner",
  },
  {
    name: "Document Conversion Specialist Course",
    path: "/courses/document-conversion",
    icon: FileText,
    badge: "Work From Home",
    badgeClass: "bg-sky-100 text-sky-700",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-500",
    btnHover: "hover:bg-sky-500 hover:text-white",
    borderHover: "hover:border-t-sky-500",
    desc: "Learn to convert, format, and manage documents across PDF, Word, Excel and more.",
    duration: "4 Weeks",
    level: "Beginner",
  },
  {
    name: "Data Segregation Specialist Course",
    path: "/courses/data-segregation",
    icon: Database,
    badge: "In Demand",
    badgeClass: "bg-violet-100 text-violet-700",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-500",
    btnHover: "hover:bg-violet-500 hover:text-white",
    borderHover: "hover:border-t-violet-500",
    desc: "Organize and classify large datasets with precision using industry-standard tools.",
    duration: "5 Weeks",
    level: "Intermediate",
  },
  {
    name: "Full Stack Development Course",
    path: "/courses/full-stack-development",
    icon: Code2,
    badge: "Top Pick",
    badgeClass: "bg-orange-100 text-orange-700",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    btnHover: "hover:bg-orange-500 hover:text-white",
    borderHover: "hover:border-t-orange-500",
    desc: "Build complete web applications from frontend to backend with modern frameworks.",
    duration: "16 Weeks",
    level: "Intermediate",
  },
  {
    name: "Data Science Course",
    path: "/courses/data-science",
    icon: BarChart2,
    badge: "High Salary",
    badgeClass: "bg-rose-100 text-rose-700",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    btnHover: "hover:bg-rose-500 hover:text-white",
    borderHover: "hover:border-t-rose-500",
    desc: "Dive into Python, ML models, and data visualization to become a data professional.",
    duration: "12 Weeks",
    level: "Advanced",
  },
  {
    name: "Digital Marketing Course",
    path: "/courses/digital-marketing",
    icon: Megaphone,
    badge: "Fast Growing",
    badgeClass: "bg-amber-100 text-amber-700",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
    btnHover: "hover:bg-amber-500 hover:text-white",
    borderHover: "hover:border-t-amber-500",
    desc: "Master SEO, social media, paid ads, and analytics to drive business growth online.",
    duration: "8 Weeks",
    level: "Beginner",
  },
];

const CourseCard = ({ course }) => {
  const Icon = course.icon;
  const router = useRouter(); // ✅ ADD

  return (
    <div
      className={`bg-white rounded-2xl p-6 flex flex-col justify-between gap-4 cursor-pointer border-t-4 border-t-transparent ${course.borderHover} border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${course.iconBg}`}>
            <Icon className={`w-5 h-5 ${course.iconColor}`} />
          </div>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${course.badgeClass}`}>
            {course.badge}
          </span>
        </div>

        <div>
          <h3 className="text-sm font-bold text-slate-800 leading-snug mb-1">
            {course.name}
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
            {course.desc}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
            ⏱ {course.duration}
          </span>
          <span className="text-xs text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
            📶 {course.level}
          </span>
        </div>
      </div>

         <button
        onClick={() => router.push(course.path)} // ✅ ADD THIS
        className={`w-full py-2.5 rounded-xl text-sm font-semibold cursor-pointer flex items-center justify-center gap-2 bg-slate-100 text-slate-600 ${course.btnHover}`}
      >
        Enroll Now
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const CourseCarousel = ({ courses }) => {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, courses.length - visibleCount);

  const scrollTo = (index) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clamped);
    if (trackRef.current) {
      const cardWidth = trackRef.current.scrollWidth / courses.length;
      trackRef.current.scrollTo({ left: clamped * cardWidth, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.scrollWidth / courses.length;
    const newIndex = Math.round(trackRef.current.scrollLeft / cardWidth);
    setCurrentIndex(Math.max(0, Math.min(newIndex, maxIndex)));
  };

  const totalDots = maxIndex + 1;

  return (
    <div className="relative">
      {/* Prev */}
      <button
        onClick={() => scrollTo(currentIndex - 1)}
        disabled={currentIndex === 0}
        className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {courses.map((course) => (
          <div
            key={course.path}
            className="flex-shrink-0"
            style={{
              width: `calc((100% - ${(visibleCount - 1) * 20}px) / ${visibleCount})`,
            }}
          >
            <CourseCard course={course} />
          </div>
        ))}
      </div>

      {/* Next */}
      <button
        onClick={() => scrollTo(currentIndex + 1)}
        disabled={currentIndex >= maxIndex}
        className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      {totalDots > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-6 h-2 bg-blue-600"
                  : "w-2 h-2 bg-slate-200 hover:bg-blue-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const StepProcess = () => {
  return (
    <section className=" py-14 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">
              Online Placement Courses
            </span> 
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Online Placement Courses
          </h2>
        </div>

        {/* Carousel */}
        <div className="px-6">
          <CourseCarousel courses={courses} />
        </div>

      </div>
    </section>
  );
};

export default StepProcess;