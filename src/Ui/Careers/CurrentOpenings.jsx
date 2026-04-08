"use client";
import React, { useEffect, useState } from "react";
import {
  Building2,
  MapPin,
  Wallet,
  Calendar,
  Clock,
  UserSquare,
  Briefcase,
  ArrowRight,
  SlidersHorizontal,
  X,
} from "lucide-react";
import ApplyFormModal from "../ApplyFormModal";


export const jobs = [
  // 🔹 DELHI
  {
    id: 1,
    title: "Captcha Verifier",
    company: "Gann Analyst",
    activelyHiring: true,
    location: "Delhi",
    stipend: "₹15,000 /month",
    duration: "6 Months",
    profile: "Captcha Verifier",
    tags: ["Back Office", "WFH"],
    postedAgo: "1 day ago",
  },
  {
    id: 2,
    title: "Data Segregation",
    company: "Gann Analyst",
    activelyHiring: true,
    location: "Delhi",
    stipend: "₹15,000 /month",
    duration: "6 Months",
    profile: "Data Segregation",
    tags: ["Back Office", "WFH"],
    postedAgo: "1 day ago",
  },
  {
    id: 3,
    title: "Data Conversion Specialist",
    company: "DataWorks Pvt Ltd",
    activelyHiring: true,
    location: "Delhi",
    stipend: "₹20,000 /month",
    duration: "3 Months",
    profile: "Data Conversion Specialist",
    tags: ["Back Office", "Part Time WFH"],
    postedAgo: "2 days ago",
  },

  // 🔹 MAHARASHTRA
  {
    id: 4,
    title: "Captcha Verifier",
    company: "TechCorp India",
    activelyHiring: true,
    location: "Maharashtra",
    stipend: "₹16,000 /month",
    duration: "6 Months",
    profile: "Captcha Verifier",
    tags: ["Back Office", "WFH"],
    postedAgo: "3 days ago",
  },
  {
    id: 5,
    title: "Data Segregation",
    company: "TechCorp India",
    activelyHiring: true,
    location: "Maharashtra",
    stipend: "₹16,000 /month",
    duration: "6 Months",
    profile: "Data Segregation",
    tags: ["Back Office", "WFH"],
    postedAgo: "3 days ago",
  },
  {
    id: 6,
    title: "Data Conversion Specialist",
    company: "DataMind",
    activelyHiring: true,
    location: "Maharashtra",
    stipend: "₹22,000 /month",
    duration: "4 Months",
    profile: "Data Conversion Specialist",
    tags: ["Back Office", "Full Time WFH"],
    postedAgo: "1 day ago",
  },

  // 🔹 KARNATAKA
  {
    id: 7,
    title: "Captcha Verifier",
    company: "Analytics Hub",
    activelyHiring: false,
    location: "Karnataka",
    stipend: "₹18,000 /month",
    duration: "6 Months",
    profile: "Captcha Verifier",
    tags: ["Back Office", "Full Time WFH"],
    postedAgo: "1 week ago",
  },
  {
    id: 8,
    title: "Data Segregation",
    company: "Analytics Hub",
    activelyHiring: false,
    location: "Karnataka",
    stipend: "₹18,000 /month",
    duration: "6 Months",
    profile: "Data Segregation",
    tags: ["Back Office", "Full Time WFH"],
    postedAgo: "1 week ago",
  },
  {
    id: 9,
    title: "Data Conversion Specialist",
    company: "DataWorks Pvt Ltd",
    activelyHiring: true,
    location: "Karnataka",
    stipend: "₹20,000 /month",
    duration: "3 Months",
    profile: "Data Conversion Specialist",
    tags: ["Back Office", "Part Time WFH"],
    postedAgo: "2 days ago",
  },

  // 🔹 TAMIL NADU
  {
    id: 10,
    title: "Captcha Verifier",
    company: "MarketPro",
    activelyHiring: true,
    location: "Tamil Nadu",
    stipend: "₹22,000 /month",
    duration: "4 Months",
    profile: "Captcha Verifier",
    tags: ["Back Office", "WFH"],
    postedAgo: "1 week ago",
  },
  {
    id: 11,
    title: "Data Segregation",
    company: "MarketPro",
    activelyHiring: true,
    location: "Tamil Nadu",
    stipend: "₹22,000 /month",
    duration: "4 Months",
    profile: "Data Segregation",
    tags: ["Back Office", "WFH"],
    postedAgo: "1 week ago",
  },
  {
    id: 12,
    title: "Data Conversion Specialist",
    company: "InfoTech Solutions",
    activelyHiring: true,
    location: "Tamil Nadu",
    stipend: "₹23,000 /month",
    duration: "4 Months",
    profile: "Data Conversion Specialist",
    tags: ["Back Office", "Part Time WFH"],
    postedAgo: "3 days ago",
  },

  // 🔹 TELANGANA
  {
    id: 13,
    title: "Captcha Verifier",
    company: "Web Solutions",
    activelyHiring: true,
    location: "Telangana",
    stipend: "₹19,000 /month",
    duration: "5 Months",
    profile: "Captcha Verifier",
    tags: ["Back Office", "WFH"],
    postedAgo: "3 days ago",
  },
  {
    id: 14,
    title: "Data Segregation",
    company: "Web Solutions",
    activelyHiring: true,
    location: "Telangana",
    stipend: "₹19,000 /month",
    duration: "5 Months",
    profile: "Data Segregation",
    tags: ["Back Office", "WFH"],
    postedAgo: "3 days ago",
  },
  {
    id: 15,
    title: "Data Conversion Specialist",
    company: "Web Solutions",
    activelyHiring: true,
    location: "Telangana",
    stipend: "₹24,000 /month",
    duration: "5 Months",
    profile: "Data Conversion Specialist",
    tags: ["Back Office", "Full Time WFH"],
    postedAgo: "2 days ago",
  },

  // 🔹 UTTAR PRADESH
  {
    id: 16,
    title: "Captcha Verifier",
    company: "DocuWorks",
    activelyHiring: true,
    location: "Uttar Pradesh",
    stipend: "₹12,000 /month",
    duration: "2 Months",
    profile: "Captcha Verifier",
    tags: ["Back Office", "WFH"],
    postedAgo: "4 days ago",
  },
  {
    id: 17,
    title: "Data Segregation",
    company: "DocuWorks",
    activelyHiring: true,
    location: "Uttar Pradesh",
    stipend: "₹12,000 /month",
    duration: "2 Months",
    profile: "Data Segregation",
    tags: ["Back Office", "WFH"],
    postedAgo: "4 days ago",
  },
  {
    id: 18,
    title: "Data Conversion Specialist",
    company: "DocuWorks",
    activelyHiring: true,
    location: "Uttar Pradesh",
    stipend: "₹14,000 /month",
    duration: "3 Months",
    profile: "Data Conversion Specialist",
    tags: ["Back Office", "Part Time WFH"],
    postedAgo: "3 days ago",
  },

  // 🔹 GUJARAT
  {
    id: 19,
    title: "Captcha Verifier",
    company: "Brandify",
    activelyHiring: true,
    location: "Gujarat",
    stipend: "₹21,000 /month",
    duration: "6 Months",
    profile: "Captcha Verifier",
    tags: ["Back Office", "WFH"],
    postedAgo: "2 days ago",
  },
  {
    id: 20,
    title: "Data Segregation",
    company: "Brandify",
    activelyHiring: true,
    location: "Gujarat",
    stipend: "₹21,000 /month",
    duration: "6 Months",
    profile: "Data Segregation",
    tags: ["Back Office", "WFH"],
    postedAgo: "2 days ago",
  },
  {
    id: 21,
    title: "Data Conversion Specialist",
    company: "Brandify",
    activelyHiring: true,
    location: "Gujarat",
    stipend: "₹23,000 /month",
    duration: "6 Months",
    profile: "Data Conversion Specialist",
    tags: ["Back Office", "Full Time WFH"],
    postedAgo: "2 days ago",
  }
  ,
  {
    id: 22,
    title: "Captcha Verifier",
    company: "MP Data Services",
    activelyHiring: true,
    location: "Madhya Pradesh",
    stipend: "₹17,000 /month",
    duration: "5 Months",
    profile: "Captcha Verifier",
    tags: ["Back Office", "WFH"],
    postedAgo: "2 days ago",
  },
  {
    id: 23,
    title: "Data Segregation",
    company: "MP Data Services",
    activelyHiring: true,
    location: "Madhya Pradesh",
    stipend: "₹17,000 /month",
    duration: "5 Months",
    profile: "Data Segregation",
    tags: ["Back Office", "WFH"],
    postedAgo: "2 days ago",
  },
  {
    id: 24,
    title: "Data Conversion Specialist",
    company: "MP Data Services",
    activelyHiring: true,
    location: "Madhya Pradesh",
    stipend: "₹19,000 /month",
    duration: "4 Months",
    profile: "Data Conversion Specialist",
    tags: ["Back Office", "Part Time WFH"],
    postedAgo: "3 days ago",
  },

  // 🔹 HARYANA
  {
    id: 25,
    title: "Captcha Verifier",
    company: "Haryana Tech Hub",
    activelyHiring: true,
    location: "Haryana",
    stipend: "₹18,000 /month",
    duration: "6 Months",
    profile: "Captcha Verifier",
    tags: ["Back Office", "WFH"],
    postedAgo: "1 day ago",
  },
  {
    id: 26,
    title: "Data Segregation",
    company: "Haryana Tech Hub",
    activelyHiring: true,
    location: "Haryana",
    stipend: "₹18,000 /month",
    duration: "6 Months",
    profile: "Data Segregation",
    tags: ["Back Office", "WFH"],
    postedAgo: "1 day ago",
  },
  {
    id: 27,
    title: "Data Conversion Specialist",
    company: "Haryana Tech Hub",
    activelyHiring: true,
    location: "Haryana",
    stipend: "₹20,000 /month",
    duration: "4 Months",
    profile: "Data Conversion Specialist",
    tags: ["Back Office", "Full Time WFH"],
    postedAgo: "2 days ago",
  },

  // 🔹 RAJASTHAN
  {
    id: 28,
    title: "Captcha Verifier",
    company: "Raj Data Solutions",
    activelyHiring: true,
    location: "Rajasthan",
    stipend: "₹16,500 /month",
    duration: "5 Months",
    profile: "Captcha Verifier",
    tags: ["Back Office", "WFH"],
    postedAgo: "3 days ago",
  },
  {
    id: 29,
    title: "Data Segregation",
    company: "Raj Data Solutions",
    activelyHiring: true,
    location: "Rajasthan",
    stipend: "₹16,500 /month",
    duration: "5 Months",
    profile: "Data Segregation",
    tags: ["Back Office", "WFH"],
    postedAgo: "3 days ago",
  },
  {
    id: 30,
    title: "Data Conversion Specialist",
    company: "Raj Data Solutions",
    activelyHiring: true,
    location: "Rajasthan",
    stipend: "₹19,500 /month",
    duration: "4 Months",
    profile: "Data Conversion Specialist",
    tags: ["Back Office", "Part Time WFH"],
    postedAgo: "2 days ago",
  },

  // 🔹 UTTAR PRADESH (ADDITIONAL SET)
  {
    id: 31,
    title: "Captcha Verifier",
    company: "UP Digital Works",
    activelyHiring: true,
    location: "Uttar Pradesh",
    stipend: "₹13,000 /month",
    duration: "3 Months",
    profile: "Captcha Verifier",
    tags: ["Back Office", "WFH"],
    postedAgo: "2 days ago",
  },
  {
    id: 32,
    title: "Data Segregation",
    company: "UP Digital Works",
    activelyHiring: true,
    location: "Uttar Pradesh",
    stipend: "₹13,000 /month",
    duration: "3 Months",
    profile: "Data Segregation",
    tags: ["Back Office", "WFH"],
    postedAgo: "2 days ago",
  },
  {
    id: 33,
    title: "Data Conversion Specialist",
    company: "UP Digital Works",
    activelyHiring: true,
    location: "Uttar Pradesh",
    stipend: "₹15,000 /month",
    duration: "3 Months",
    profile: "Data Conversion Specialist",
    tags: ["Back Office", "Part Time WFH"],
    postedAgo: "3 days ago",
  },

  // 🔹 BIHAR
  {
    id: 34,
    title: "Captcha Verifier",
    company: "Bihar Data Hub",
    activelyHiring: true,
    location: "Bihar",
    stipend: "₹12,500 /month",
    duration: "3 Months",
    profile: "Captcha Verifier",
    tags: ["Back Office", "WFH"],
    postedAgo: "4 days ago",
  },
  {
    id: 35,
    title: "Data Segregation",
    company: "Bihar Data Hub",
    activelyHiring: true,
    location: "Bihar",
    stipend: "₹12,500 /month",
    duration: "3 Months",
    profile: "Data Segregation",
    tags: ["Back Office", "WFH"],
    postedAgo: "4 days ago",
  },
  {
    id: 36,
    title: "Data Conversion Specialist",
    company: "Bihar Data Hub",
    activelyHiring: true,
    location: "Bihar",
    stipend: "₹14,500 /month",
    duration: "3 Months",
    profile: "Data Conversion Specialist",
    tags: ["Back Office", "Part Time WFH"],
    postedAgo: "3 days ago",
  },

  // 🔹 JHARKHAND
  {
    id: 37,
    title: "Captcha Verifier",
    company: "Jharkhand InfoTech",
    activelyHiring: true,
    location: "Jharkhand",
    stipend: "₹13,500 /month",
    duration: "3 Months",
    profile: "Captcha Verifier",
    tags: ["Back Office", "WFH"],
    postedAgo: "3 days ago",
  },
  {
    id: 38,
    title: "Data Segregation",
    company: "Jharkhand InfoTech",
    activelyHiring: true,
    location: "Jharkhand",
    stipend: "₹13,500 /month",
    duration: "3 Months",
    profile: "Data Segregation",
    tags: ["Back Office", "WFH"],
    postedAgo: "3 days ago",
  },
  {
    id: 39,
    title: "Data Conversion Specialist",
    company: "Jharkhand InfoTech",
    activelyHiring: true,
    location: "Jharkhand",
    stipend: "₹15,500 /month",
    duration: "3 Months",
    profile: "Data Conversion Specialist",
    tags: ["Back Office", "Full Time WFH"],
    postedAgo: "2 days ago",
  },

  {
    id: 40,
    title: "Data Entry Operator",
    company: "Gann Analyst",
    activelyHiring: true,
    location: "Delhi",
    stipend: "₹15,000 /month",
    duration: "6 Months",
    profile: "Data Entry Operator",
    tags: ["Back Office", "WFH"],
    postedAgo: "1 day ago",
  },
  {
    id: 41,
    title: "Data Entry Operator",
    company: "TechCorp India",
    activelyHiring: true,
    location: "Maharashtra",
    stipend: "₹16,000 /month",
    duration: "6 Months",
    profile: "Data Entry Operator",
    tags: ["Back Office", "WFH"],
    postedAgo: "2 days ago",
  },

  // 🔹 COMPUTER OPERATOR
  {
    id: 42,
    title: "Computer Operator",
    company: "Analytics Hub",
    activelyHiring: true,
    location: "Karnataka",
    stipend: "₹18,000 /month",
    duration: "6 Months",
    profile: "Computer Operator",
    tags: ["Back Office", "WFH"],
    postedAgo: "3 days ago",
  },
  {
    id: 43,
    title: "Computer Operator",
    company: "MP Data Services",
    activelyHiring: true,
    location: "Madhya Pradesh",
    stipend: "₹17,000 /month",
    duration: "5 Months",
    profile: "Computer Operator",
    tags: ["Back Office", "WFH"],
    postedAgo: "2 days ago",
  },

  // 🔹 BACK OFFICE EXECUTIVE
  {
    id: 44,
    title: "Back Office Executive",
    company: "Brandify",
    activelyHiring: true,
    location: "Gujarat",
    stipend: "₹21,000 /month",
    duration: "6 Months",
    profile: "Back Office Executive",
    tags: ["Back Office", "WFH"],
    postedAgo: "2 days ago",
  },
  {
    id: 45,
    title: "Back Office Executive",
    company: "UP Digital Works",
    activelyHiring: true,
    location: "Uttar Pradesh",
    stipend: "₹14,000 /month",
    duration: "4 Months",
    profile: "Back Office Executive",
    tags: ["Back Office", "WFH"],
    postedAgo: "3 days ago",
  },

  // 🔹 BIG DATA SPECIALIST
  {
    id: 46,
    title: "Big Data Specialist",
    company: "DataMind",
    activelyHiring: true,
    location: "Maharashtra",
    stipend: "₹50,000 /month",
    duration: "12 Months",
    profile: "Big Data Specialist",
    tags: ["Information Technology", "Full Time WFH"],
    postedAgo: "1 day ago",
  },
  {
    id: 47,
    title: "Big Data Specialist",
    company: "TechNova Solutions",
    activelyHiring: true,
    location: "Karnataka",
    stipend: "₹48,000 /month",
    duration: "12 Months",
    profile: "Big Data Specialist",
    tags: ["Information Technology", "WFH"],
    postedAgo: "2 days ago",
  },

  // 🔹 SOFTWARE DEVELOPER
  {
    id: 48,
    title: "Software Developer",
    company: "CodeTech",
    activelyHiring: true,
    location: "Karnataka",
    stipend: "₹40,000 /month",
    duration: "12 Months",
    profile: "Software Developer",
    tags: ["Information Technology", "WFH"],
    postedAgo: "2 days ago",
  },
  {
    id: 49,
    title: "Software Developer",
    company: "Web Solutions",
    activelyHiring: true,
    location: "Telangana",
    stipend: "₹38,000 /month",
    duration: "10 Months",
    profile: "Software Developer",
    tags: ["Information Technology", "WFH"],
    postedAgo: "3 days ago",
  },

  // 🔹 WEBSITE DEVELOPER
  {
    id: 50,
    title: "Website Developer",
    company: "Web Solutions",
    activelyHiring: true,
    location: "Telangana",
    stipend: "₹35,000 /month",
    duration: "6 Months",
    profile: "Website Developer",
    tags: ["Information Technology", "WFH"],
    postedAgo: "3 days ago",
  },
  {
    id: 51,
    title: "Website Developer",
    company: "Haryana Tech Hub",
    activelyHiring: true,
    location: "Haryana",
    stipend: "₹34,000 /month",
    duration: "6 Months",
    profile: "Website Developer",
    tags: ["Information Technology", "WFH"],
    postedAgo: "2 days ago",
  },

  // 🔹 GRAPHIC DESIGNER
  {
    id: 52,
    title: "Graphic Designer",
    company: "Creative Studio",
    activelyHiring: true,
    location: "Maharashtra",
    stipend: "₹25,000 /month",
    duration: "6 Months",
    profile: "Graphic Designer",
    tags: ["Advertising & Branding", "WFH"],
    postedAgo: "5 days ago",
  },
  {
    id: 53,
    title: "Graphic Designer",
    company: "Media House",
    activelyHiring: true,
    location: "Delhi",
    stipend: "₹24,000 /month",
    duration: "5 Months",
    profile: "Graphic Designer",
    tags: ["Advertising & Branding", "WFH"],
    postedAgo: "4 days ago",
  },

  // 🔹 DIGITAL MARKETER
  {
    id: 54,
    title: "Digital Marketer",
    company: "MarketPro",
    activelyHiring: true,
    location: "Tamil Nadu",
    stipend: "₹22,000 /month",
    duration: "4 Months",
    profile: "Digital Marketer",
    tags: ["Marketing", "WFH"],
    postedAgo: "1 week ago",
  },
  {
    id: 55,
    title: "Digital Marketer",
    company: "Brandify",
    activelyHiring: true,
    location: "Gujarat",
    stipend: "₹21,000 /month",
    duration: "6 Months",
    profile: "Digital Marketer",
    tags: ["Marketing", "WFH"],
    postedAgo: "2 days ago",
  },

  // 🔹 VIDEO EDITOR
  {
    id: 56,
    title: "Video Editor",
    company: "Media House",
    activelyHiring: false,
    location: "Delhi",
    stipend: "₹18,000 /month",
    duration: "3 Months",
    profile: "Video Editor",
    tags: ["Advertising & Branding", "Part Time WFH"],
    postedAgo: "6 days ago",
  },
  {
    id: 57,
    title: "Video Editor",
    company: "Creative Studio",
    activelyHiring: true,
    location: "Rajasthan",
    stipend: "₹19,000 /month",
    duration: "4 Months",
    profile: "Video Editor",
    tags: ["Advertising & Branding", "WFH"],
    postedAgo: "3 days ago",
  },

  // 🔹 TYPIST (fixed typo from "Typiest")
  {
    id: 58,
    title: "Typist",
    company: "DocuWorks",
    activelyHiring: true,
    location: "Uttar Pradesh",
    stipend: "₹12,000 /month",
    duration: "2 Months",
    profile: "Typist",
    tags: ["Back Office", "WFH"],
    postedAgo: "4 days ago",
  },
  {
    id: 59,
    title: "Typist",
    company: "Bihar Data Hub",
    activelyHiring: true,
    location: "Bihar",
    stipend: "₹11,500 /month",
    duration: "2 Months",
    profile: "Typist",
    tags: ["Back Office", "WFH"],
    postedAgo: "3 days ago",
  },
  {
    id: 60,
    title: "Graphic Designer",
    company: "Creative Studio",
    activelyHiring: true,
    location: "Maharashtra",
    stipend: "₹25,000 /month",
    duration: "6 Months",
    profile: "Advertising & Branding",
    tags: ["Advertising & Branding", "WFH"],
    postedAgo: "5 days ago",
  },
];

// ── derive unique profiles from jobs data ──────────────────────────────────
const ALL_PROFILES = ["All Profiles", ...Array.from(new Set(jobs.map((j) => j.profile)))];

// ── JobCard ────────────────────────────────────────────────────────────────
const JobCard = ({ job, onApply }) => (
  <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
    <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

    <div className="p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
          <Building2 className="w-6 h-6 text-blue-500" />
        </div>

        <div className="flex-1 flex flex-col gap-0.5 min-w-0">
          <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-700 transition-colors duration-200 truncate">
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

      <div className="h-px bg-slate-100" />

      {/* Meta */}
      <div className="grid grid-cols-2 gap-y-2 gap-x-3">
        {[
          { icon: <MapPin className="w-3.5 h-3.5" />, label: job.location },
          { icon: <Wallet className="w-3.5 h-3.5" />, label: job.stipend },
          { icon: <Calendar className="w-3.5 h-3.5" />, label: job.duration },
          { icon: <UserSquare className="w-3.5 h-3.5" />, label: job.profile || "—" },
        ].map(({ icon, label }, i) => (
          <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
            <span className="text-blue-400 shrink-0">{icon}</span>
            <span className="truncate">{label}</span>
          </div>
        ))}
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

        <button
          onClick={() => onApply(job)}
          className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm shadow-blue-200 group-hover:shadow-md group-hover:shadow-blue-300"
        >
          Apply Now
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  </div>
);

// ── ProfileFilter ──────────────────────────────────────────────────────────
const ProfileFilter = ({ selectedProfile, onSelect }) => (
  <div className="flex flex-wrap items-center gap-2">
    {/* <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">
      <SlidersHorizontal className="w-3.5 h-3.5" />
      Filter by Profile:
    </div> */}

    {ALL_PROFILES.map((profile) => {
      const isActive = selectedProfile === profile;
      return (
        <button
          key={profile}
          onClick={() => onSelect(profile)}
          className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200
            ${
              isActive
                ? "bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-200"
                : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600"
            }`}
        >
          {profile}
          {/* Show ✕ only on active non-"All" chip so user can clear */}
          {isActive && profile !== "All Profiles" && (
            <X className="w-3 h-3 ml-0.5 opacity-70" />
          )}
        </button>
      );
    })}
  </div>
);

// ── CurrentOpenings ────────────────────────────────────────────────────────



const CurrentOpenings = ({
  selectedLocation,
  selectedProfileFromURL,
  selectedCategoryFromURL,
}) => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // ✅ DEFINE FORMATTERS FIRST
  const formatProfile = (slug) => {
    if (!slug) return "All Profiles";
    return slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const formatText = (slug) => {
    if (!slug) return null;
    return slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  // ✅ STATES
  const [selectedProfile, setSelectedProfile] = useState(
    formatProfile(selectedProfileFromURL)
  );

  const [selectedCategory, setSelectedCategory] = useState(
    formatText(selectedCategoryFromURL)
  );

  const handleApply = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setSelectedJob(null);
  };

  const handleProfileSelect = (profile) => {
    setSelectedProfile((prev) =>
      prev === profile && profile !== "All Profiles"
        ? "All Profiles"
        : profile
    );
  };

  // ✅ Sync Profile with URL
  useEffect(() => {
    setSelectedProfile(formatProfile(selectedProfileFromURL));
  }, [selectedProfileFromURL]);

  // ✅ Sync Category with URL (FIXED RESET CASE)
  useEffect(() => {
    setSelectedCategory(formatText(selectedCategoryFromURL));
  }, [selectedCategoryFromURL]);

  const normalizeLocation = (loc) => {
    if (!loc) return "All";
    if (loc === "remote") return "Remote";
    if (loc.startsWith("wfh-in-")) loc = loc.replace("wfh-in-", "");
    return loc
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const locationName = normalizeLocation(selectedLocation);

  // ✅ FILTER (Location + Profile + Category)
  const filteredJobs = jobs.filter((job) => {
    const matchesLocation =
      locationName === "All" ||
      job.location.toLowerCase() === locationName.toLowerCase();

    const matchesProfile =
      selectedProfile === "All Profiles" ||
      job.profile.toLowerCase() === selectedProfile.toLowerCase();

    const matchesCategory =
      !selectedCategory ||
      job.tags.some(
        (tag) => tag.toLowerCase() === selectedCategory.toLowerCase()
      );

    return matchesLocation && matchesProfile && matchesCategory;
  });

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50/30 py-14 px-4">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">

        {/* Header */}
        <h2 className="text-2xl font-bold text-center">
          Current Openings — {locationName}
        </h2>

        {/* Profile Filter */}
        {/* <ProfileFilter
          selectedProfile={selectedProfile}
          onSelect={handleProfileSelect}
        /> */}

        {/* ✅ Show active category */}
        {selectedCategory && (
          <p className="text-center text-sm text-blue-600">
            Category: {selectedCategory}
          </p>
        )}

        {/* Jobs */}
        {filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} onApply={handleApply} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No jobs found
          </p>
        )}
      </div>

      {showForm && (
        <ApplyFormModal job={selectedJob} onClose={handleClose} />
      )}
    </section>
  );
};
export default CurrentOpenings;