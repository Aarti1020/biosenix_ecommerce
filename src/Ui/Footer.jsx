"use client";
import React from "react";
import { Mail, Smartphone, MapPin, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const services = [
    "Document Conversion",
    "Data Entry & Management",
    "Transcription Services",
    "Specialized Solutions",
    "Handwritten Digitization",
    "Quality Assurance",
  ];

  const links = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Desclaimer", href: "/desclaimer" },
  ];

  return (
    <footer className="w-full bg-gray-700 border-t border-white/10">

      {/* 🔥 MAIN GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 
                      grid grid-cols-1 
                      sm:grid-cols-2 
                      lg:grid-cols-3 
                      gap-8 lg:gap-12">

        {/* 🔹 ABOUT */}
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">
              About Us
            </span>
            <h3 className="text-white font-extrabold text-lg mt-1">
              Ebrain Software & Solutions
            </h3>
          </div>

          <p className="text-blue-200/70 text-sm leading-relaxed max-w-md">
            We provide powerful software platforms, professional training programs,
            and project-based opportunities to help individuals and businesses grow
            in the digital ecosystem.
          </p>

          {/* Hours */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs text-blue-200/70 w-fit">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            Mon – Sat | 10 AM – 6 PM IST
          </div>
        </div>

        {/* 🔹 LINKS */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">
              Navigate
            </span>
            <h3 className="text-white font-bold text-lg mt-1">
              Useful Links
            </h3>
          </div>

          <ul className="flex flex-col gap-2">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-2 text-sm text-blue-200/70 hover:text-cyan-400 transition group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400/40 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔹 CONTACT */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">
              Reach Us
            </span>
            <h3 className="text-white font-bold text-lg mt-1">
              Contact
            </h3>
          </div>

          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="mailto:contact@ebrainsoftwareandsolutions.com"
                className="flex items-center gap-3 hover:bg-cyan-400/10 rounded-xl px-3 py-2 text-sm text-white transition"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="break-all">
                  contact@ebrainsoftwareandsolutions.com
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/919974710001"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:bg-cyan-400/10 rounded-xl px-3 py-2 text-sm text-white transition"
              >
                <Smartphone className="w-4 h-4 text-cyan-400 shrink-0" />
                +91 9974710001
              </a>
            </li>

            <li className="flex items-start gap-3 rounded-xl px-3 py-2 text-sm text-white">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
              <span className="leading-relaxed">
                1st Floor, R.M.Nagar Main Road, Doddabanswadi, Bangalore, Karnataka
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* 🔥 DIVIDER */}
      <div className="h-px bg-white/10 mx-4 sm:mx-6" />

      {/* 🔥 BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 
                      flex flex-col sm:flex-row 
                      items-center justify-between gap-2 text-center sm:text-left">
        
        <p className="text-blue-200/40 text-xs">
          © {new Date().getFullYear()} Ebrain Software and Solutions. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;