"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function RefundPolicy() {
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
          Refund Policy
        </h1>

        <div className="bg-white shadow-sm rounded-2xl p-6 sm:p-8 space-y-8 border border-slate-100">

          {/* INTRO */}
          <section>
            <p className="text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Introduction</strong><br />
              Ebrain Software & Solutions is committed to maintaining transparent and fair
              business practices. This Refund Policy explains the conditions
              under which users may request refunds.
            </p>

            <p className="text-slate-600 mt-3">
              All fees apply strictly to onboarding, training, workflow access,
              and support services. These do not represent employment or guaranteed income.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              1. Refund Eligibility
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Request within 48 hours of payment</li>
              <li>Onboarding not completed</li>
              <li>No workflow access activated</li>
              <li>No services delivered</li>
            </ul>

            <div className="mt-4 bg-green-50 border border-green-200 text-green-700 text-sm p-3 rounded-lg">
              Eligible users will receive a full refund.
            </div>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              2. Non-Refundable Conditions
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>After onboarding completion</li>
              <li>After training is provided</li>
              <li>After workflow access is granted</li>
              <li>QC failures or inaccurate work</li>
              <li>Change of mind after activation</li>
            </ul>

            <div className="mt-4 bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
              Once onboarding is complete, the fee becomes non-refundable.
            </div>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              3. Refund Request Process
            </h2>

            <ol className="list-decimal pl-5 text-slate-600 space-y-1">
              <li>
                Email request to{" "}
                <a
                  href="mailto:contact@ebrainsoftwareandsolutions.com"
                  className="text-blue-600 font-medium hover:underline"
                >
                  contact@ebrainsoftwareandsolutions.com
                </a>
              </li>
              <li>Provide required details</li>
            </ol>

            <ul className="list-disc pl-5 text-slate-600 space-y-1 mt-2">
              <li>Full Name</li>
              <li>Registered Email</li>
              <li>Phone Number</li>
              <li>Transaction ID</li>
              <li>Reason for request</li>
            </ul>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              4. Refund Timelines
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Processed within 7–10 working days</li>
              <li>Refunded via original payment method</li>
              <li>Processing depends on bank/UPI provider</li>
              <li>Email confirmation provided</li>
            </ul>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              5. Fee Adjustment Policy
            </h2>
            <p className="text-slate-600">
              In some programs, onboarding fees may be adjusted against the first payout,
              subject to QC approval and performance conditions.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              6. Payment Safety Advisory
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Only pay to official company accounts</li>
              <li>Avoid personal-name accounts</li>
              <li>Report suspicious activity immediately</li>
            </ul>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              7. Contact for Refund Queries
            </h2>

            <p className="text-slate-600">
              For any refund-related queries, contact:
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

export default RefundPolicy;