"use client";
import React from "react";
import {
  Building2,
  MapPin,
  Wallet,
  Calendar,
  FileText,
  Clock,
  UserSquare,
  Briefcase,
  ArrowRight,
} from "lucide-react";

// 🔥 Jobs Data (UNCHANGED)
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

const JobCard = ({ job }) => {
  return (
    <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      
      {/* Top accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-5 flex flex-col gap-4">

        {/* Header Row */}
        <div className="flex items-start justify-between gap-3">
          {/* Company Logo */}
          <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
            <Building2 className="w-6 h-6 text-blue-500" />
          </div>

          <div className="flex-1 flex flex-col gap-0.5">
            <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-200">
              {job.title}
            </h3>
            <span className="text-sm text-slate-500 font-medium">{job.company}</span>
          </div>

          {job.activelyHiring ? (
            <span className="shrink-0 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
              🟢 Actively Hiring
            </span>
          ) : (
            <span className="shrink-0 text-xs font-semibold text-slate-400 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
              Closed
            </span>
          )}
        </div>

        {/* Divider */}
        <div className="h-px bg-slate-100" />

        {/* Meta Info Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-2 gap-x-3">
          {[
            { icon: <MapPin className="w-3.5 h-3.5" />, label: job.location },
            { icon: <Wallet className="w-3.5 h-3.5" />, label: job.stipend },
            { icon: <Calendar className="w-3.5 h-3.5" />, label: job.duration },
            { icon: <UserSquare className="w-3.5 h-3.5" />, label: job.profile || "—" },
          ].map(({ icon, label }, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
              <span className="text-blue-400">{icon}</span>
              <span className="truncate">{label}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="flex items-start gap-2 bg-slate-50 rounded-xl px-3 py-2.5">
          <FileText className="w-3.5 h-3.5 mt-0.5 shrink-0 text-slate-400" />
          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{job.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
            <Clock className="w-3.5 h-3.5" />
            <span>{job.postedAgo}</span>
          </div>

          <button className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm shadow-blue-200 group-hover:shadow-md group-hover:shadow-blue-300">
            Apply Now
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};

// 🔥 Main Component (ONLY LOGIC UPDATED)
const CurrentOpenings = ({ selectedLocation }) => {

  // 🔥 Normalize slug → readable name
  const normalizeLocation = (loc) => {
    if (!loc) return "All";
    if (loc === "remote") return "Remote";
    if (loc.startsWith("wfh-in-")) {
      loc = loc.replace("wfh-in-", "");
    }
    return loc
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const locationName = normalizeLocation(selectedLocation);

  // 🔥 Filtering Logic (UNCHANGED)
  const filteredJobs =
    locationName === "All"
      ? jobs
      : jobs.filter(
          (job) => job.location.toLowerCase() === locationName.toLowerCase()
        );

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50/30 py-14 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">

        {/* Section Header */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full">
            <Briefcase className="w-3.5 h-3.5" />
            Live Openings
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 text-center">
            Current Openings
            <span className="text-blue-600"> — {locationName}</span>
          </h2>
          <p className="text-sm text-slate-500 text-center max-w-md">
            Browse verified job listings and apply directly to get started from home.
          </p>
        </div>

        {/* Jobs Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 py-20 text-center">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-slate-300" />
            </div>
            <p className="text-slate-500 font-medium">No jobs found for <span className="text-blue-600">{locationName}</span></p>
            <p className="text-xs text-slate-400">Try selecting a different location</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default CurrentOpenings;