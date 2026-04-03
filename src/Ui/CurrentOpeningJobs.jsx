"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  MapPin,
  Wallet,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";
import ApplyFormModal from "./ApplyFormModal";

const jobs = [
  {
    id: 1,
    title: "Data Entry Operator",
    company: "Gann Analyst",
    activelyHiring: true,
    location: "Delhi",
    stipend: "₹15,000 /month",
    duration: "6 Months",
    profile: "Data Conversion",
    tags: ["Back Office", "WFH"],
    postedAgo: "1 day ago",
  },
  {
    id: 2,
    title: "Data Segregation",
    company: "TechCorp India",
    activelyHiring: true,
    location: "Maharashtra",
    stipend: "₹16,000 /month",
    duration: "6 Months",
    profile: "Computer Operator",
    tags: [ "Back Office","WFH"],
    postedAgo: "3 days ago",
  },
  {
    id: 3,
    title: "Captcha Verifier",
    company: "Analytics Hub",
    activelyHiring: false,
    location: "Karnataka",
    stipend: "₹16,000 /month",
    duration: "6 Months",
    profile: "Back Office Executive",
    tags: ["Back Office", "WFH"],
    postedAgo: "1 week ago",
  },
  {
    id: 4,
   title: "Data Entry Operator",
    company: "Gann Analyst",
    activelyHiring: true,
    location: "Delhi",
    stipend: "₹36,000 /month",
    duration: "12 Months",
    profile: "Data Conversion",
    tags: ["Back Office", "WFH"],
    postedAgo: "1 day ago",
  },
  {
    id: 5,
   title: "Data Segregation",
    company: "TechCorp India",
    activelyHiring: true,
    location: "Maharashtra",
    stipend: "₹36,000 /month",
    duration: "12 Months",
    profile: "Computer Operator",
    tags: [ "Back Office","WFH"],
    postedAgo: "3 days ago",
  },
  {
    id: 6,
    title: "Captcha Verifier",
    company: "Analytics Hub",
    activelyHiring: false,
    location: "Karnataka",
    stipend: "₹24,000 /month",
    duration: "1 Months",
    profile: "Back Office Executive",
    tags: ["Back Office", "WFH"],
    postedAgo: "1 week ago",
  },
  {
    id: 7,
    title: "Data Entry Operator",
    company: "Analytics Hub",
    activelyHiring: false,
    location: "Karnataka",
    stipend: "₹50,000 /month",
    duration: "24 Months",
    profile: "Data Conversion",
    tags: ["Back Office", "Full-Time"],
    postedAgo: "1 week ago",
  },
  {
    id: 8,
   title: "Data Segregation",
    company: "TechCorp India",
    activelyHiring: true,
    location: "Maharashtra",
    stipend: "₹49,000 /month",
    duration: "24 Months",
    profile: "Computer Operator",
    tags: [ "Back Office","WFH"],
    postedAgo: "3 days ago",
  },
   {
    id: 9,
    title: "Captcha Verifier",
    company: "Analytics Hub",
    activelyHiring: false,
    location: "Karnataka",
    stipend: "₹48,000 /month",
    duration: "24 Months",
    profile: "Back Office Executive",
    tags: ["Back Office", "WFH"],
    postedAgo: "1 week ago",
  },
];

const avatarColors = [
  "bg-violet-100 text-violet-700",
  "bg-sky-100 text-sky-700",
  "bg-emerald-100 text-emerald-700",
  "bg-amber-100 text-amber-700",
  "bg-rose-100 text-rose-700",
  "bg-indigo-100 text-indigo-700",
];

const tagColors = [
  "bg-violet-50 text-violet-600 ring-violet-200",
  "bg-sky-50 text-sky-600 ring-sky-200",
  "bg-emerald-50 text-emerald-600 ring-emerald-200",
  "bg-amber-50 text-amber-600 ring-amber-200",
  "bg-rose-50 text-rose-600 ring-rose-200",
];

const getInitials = (name) =>
  name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

// ✅ JobCard — clean, no modal state here
const JobCard = ({ job, onApply }) => {
  const avatarColor = avatarColors[job.id % avatarColors.length];

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden min-h-[300px]">

      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500" />

      <div className="flex flex-col flex-1 p-5 gap-4">

        {/* Header */}
        <div className="flex items-start gap-3">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold shrink-0 ${avatarColor}`}>
            {getInitials(job.company)}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-slate-800 truncate leading-snug">
              {job.title}
            </h3>
            <p className="text-sm text-slate-400 font-medium mt-0.5 truncate">
              {job.company}
            </p>
          </div>
          {job.activelyHiring && (
            <span className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Hiring
            </span>
          )}
        </div>

        {/* Meta Info Grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-2">
          <div className="flex items-center gap-1.5 text-sm text-slate-500">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{job.location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-slate-500">
            <Wallet className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate font-medium text-slate-700">{job.stipend}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-slate-500">
            <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{job.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-slate-500">
            <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{job.profile}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed border-slate-100" />

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {job.tags.map((tag, i) => (
            <span
              key={tag}
              className={`text-xs font-medium px-2.5 py-1 rounded-full ring-1 ${tagColors[i % tagColors.length]}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-1">
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>{job.postedAgo}</span>
          </div>
          <button
            onClick={() => onApply(job)}
            className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-150 shadow-sm shadow-blue-200 group-hover:shadow-md group-hover:shadow-blue-200 cursor-pointer">
            Apply Now
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};

// ✅ Modal lives here only
const JobCarousel = ({ jobs }) => {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  };


const handleClose = () => {
    setShowForm(false);
    setSelectedJob(null);
  };

  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else if (w < 1280) setVisibleCount(3);
      else setVisibleCount(4);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, jobs.length - visibleCount);

  const scrollTo = (index) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrentIndex(clamped);
    if (trackRef.current) {
      const cardWidth = trackRef.current.scrollWidth / jobs.length;
      trackRef.current.scrollTo({ left: clamped * cardWidth, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.scrollWidth / jobs.length;
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
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex-shrink-0"
            style={{ width: `calc((100% - ${(visibleCount - 1) * 20}px) / ${visibleCount})` }}
          >
            <JobCard job={job} onApply={handleApply} />
          </div>
        ))}
      </div>

      {/* Next */}
      <button
        onClick={() => scrollTo(currentIndex + 1)}
        disabled={currentIndex >= maxIndex}
        className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
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
            />
          ))}
        </div>
      )}

      {showForm && (
        <ApplyFormModal
          job={selectedJob}
          onClose={handleClose}
          
        />
      )}
    </div>
  );
};

const CurrentOpeningJobs = ({ selectedLocation }) => {
  const normalizeLocation = (loc) => {
    if (!loc) return "All";
    if (loc === "remote") return "Remote";
    if (loc.startsWith("wfh-in-")) loc = loc.replace("wfh-in-", "");
    return loc.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const locationName = normalizeLocation(selectedLocation);
  const filteredJobs =
    locationName === "All"
      ? jobs
      : jobs.filter((job) => job.location.toLowerCase() === locationName.toLowerCase());

  return (
    <section className="bg-slate-50 py-12 px-4">
      <div className="max-w-7xl mx-auto mt-8">
        <div className="mb-10 px-2">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-1">
            Jobs Opportunities
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            What Are You Looking For Today ?
          </h2>
        </div>

        {filteredJobs.length > 0 ? (
          <div className="px-6">
            <JobCarousel jobs={filteredJobs} />
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-400 text-lg">
              No jobs found for{" "}
              <span className="font-semibold text-slate-600">{locationName}</span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CurrentOpeningJobs;