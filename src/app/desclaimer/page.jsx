"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function Disclaimer() {
  const [showTop, setShowTop] = useState(false);

  // 🔥 Scroll button logic
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* 🔥 CONTAINER */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* 🔥 HEADER */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-slate-800 mb-8">
          Website & Earnings Disclaimer
        </h1>

        <div className="bg-white shadow-sm rounded-2xl p-6 sm:p-8 space-y-8 border border-slate-100">

          {/* INTRO */}
          <section>
            <p className="text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Introduction</strong><br />
              Ebrain Software & Solutions operates as a digital services facilitator. The
              information provided on this website explains our services,
              workflows, and participation structure.
            </p>

            <p className="text-slate-600 mt-3">
              This page outlines the scope and limitations of all content on this platform.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              1. Nature of the Platform
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Provides onboarding, training, and workflow access</li>
              <li>Assignments are contractual</li>
              <li>Not an employment platform</li>
              <li>Acts as a facilitator for digital projects</li>
            </ul>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              2. Earnings Clarification
            </h2>

            <p className="text-slate-700 font-semibold">
              No Guaranteed Income
            </p>

            <p className="text-slate-600 mt-2">
              We do not guarantee any fixed income or returns.
            </p>

            <ul className="list-disc pl-5 text-slate-600 space-y-1 mt-2">
              <li>Indicative only</li>
              <li>Based on historical data</li>
              <li>Depends on QC approval</li>
              <li>Depends on performance & availability</li>
            </ul>

            <p className="text-slate-600 mt-3">
              Actual earnings vary between users.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              3. Fees Charged
            </h2>

            <p className="text-slate-600">
              Fees are charged only for:
            </p>

            <ul className="list-disc pl-5 text-slate-600 space-y-1 mt-2">
              <li>Onboarding & account setup</li>
              <li>Workflow access</li>
              <li>Training & documentation</li>
              <li>Support & maintenance</li>
            </ul>

            <p className="text-slate-600 mt-3">This is NOT:</p>

            <ul className="list-disc pl-5 text-slate-600 space-y-1 mt-2">
              <li>Employment fee</li>
              <li>Job guarantee fee</li>
              <li>Investment fee</li>
            </ul>

            <div className="mt-4 bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm p-3 rounded-lg">
              Once onboarding is complete, fees are non-refundable.
            </div>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              4. Liability Limitation
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Lack of user effort</li>
              <li>Internet/device issues</li>
              <li>Third-party downtime</li>
              <li>Inaccurate submissions</li>
              <li>Misunderstanding of program details</li>
            </ul>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              5. Payment Advisory
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>No payments to personal accounts</li>
              <li>Only official company accounts accepted</li>
              <li>
                Report suspicious activity at{" "}
                <a
                  href="mailto:ebrainsoftwareandsolutions@gmail.com"
                  className="text-blue-600 font-medium hover:underline"
                >
                  ebrainsoftwareandsolutions@gmail.com
                </a>
              </li>
            </ul>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              6. Content Purpose
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Explain services</li>
              <li>Describe workflows</li>
              <li>Provide official communication</li>
              <li>Clarify pricing & refunds</li>
            </ul>

            <p className="text-slate-600 mt-3">
              No employer-employee relationship is created.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              7. Governing Law
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Governed by Indian law</li>
              <li>Jurisdiction: Bangalore, Karnataka</li>
            </ul>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              8. Contact for Clarification
            </h2>

            <p className="text-slate-600">
              For any queries regarding services or policies:
            </p>

            <a
              href="mailto:ebrainsoftwareandsolutions@gmail.com"
              className="inline-block mt-2 text-blue-600 font-semibold hover:underline"
            >
              ebrainsoftwareandsolutions@gmail.com
            </a>
          </section>

          {/* FOOTER */}
          <p className="text-xs text-slate-400 text-center pt-4 border-t">
            © {new Date().getFullYear()} Ebrain Software & Solutions. All rights reserved.
          </p>
        </div>
      </div>

      {/* 🔥 SCROLL BUTTON */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}

export default Disclaimer;