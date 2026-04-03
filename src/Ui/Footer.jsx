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
    { label: "Why Us", href: "/why-us" },
    { label: "Solutions", href: "/solution" },
    { label: "Job / Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
    { label: "Login Now", href: "/login" },
  ];

  return (
    <footer className="w-full bg-gray-700 border-t border-white/10">

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About */}
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">About Us</span>
            <h3 className="text-white font-extrabold text-lg mt-1">Ebrain Software & Solutions</h3>
          </div>
          <p className="text-blue-200/60 text-sm leading-relaxed">
            India's most trusted recruitment and freelance platform, connecting job seekers with genuine data entry and online typing jobs. Based in Nadiad, Gujarat — flexible, zero-investment career paths with daily and weekly payouts.
          </p>
          {/* Hours pill */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-blue-200/70 w-fit mt-1">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            Mon – Sat &nbsp;|&nbsp; 10 AM – 6 PM IST
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">What We Do</span>
            <h3 className="text-white font-bold text-lg mt-1">Our Services</h3>
          </div>
          <ul className="flex flex-col gap-2">
            {services.map((s) => (
              <li key={s} className="flex items-center gap-2 text-sm text-blue-200/60 hover:text-cyan-400 transition-colors duration-200 cursor-pointer group">
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400/40 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">Navigate</span>
            <h3 className="text-white font-bold text-lg mt-1">Useful Links</h3>
          </div>
          <ul className="flex flex-col gap-2">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-2 text-sm text-blue-200/60 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400/40 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">Reach Us</span>
            <h3 className="text-white font-bold text-lg mt-1">Contact</h3>
          </div>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                href="mailto:Contact@hireinglobal.com"
                className="flex items-center gap-3 bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400/20 rounded-xl px-4 py-3 text-sm text-white transition-all duration-200 group"
              >
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                Contact@hireinglobal.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/919974710001"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-white/5 hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400/20 rounded-xl px-4 py-3 text-sm text-white transition-all duration-200 group"
              >
                <Smartphone className="w-4 h-4 text-cyan-400 shrink-0" />
                +91 9974710001
              </a>
            </li>
            <li className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span className="leading-relaxed">Near Gitanjali Chokdi, Pij Road, Nadiad, Gujarat – 387002</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="h-px bg-white/10 mx-6" />

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-blue-200/40 text-xs">
          © {new Date().getFullYear()} Hire in Global. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-xs text-blue-200/40">
          <Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
          <span className="w-px h-3 bg-white/10" />
          <Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Use</Link>
          <span className="w-px h-3 bg-white/10" />
          <Link href="/sitemap" className="hover:text-cyan-400 transition-colors">Sitemap</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;