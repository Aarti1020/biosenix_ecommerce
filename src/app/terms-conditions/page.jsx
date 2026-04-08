"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function TandC() {
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
          Terms & Conditions
        </h1>

        <div className="bg-white shadow-sm rounded-2xl p-6 sm:p-8 space-y-8 border border-slate-100">

          {/* INTRO */}
          <section>
            <p className="text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Introduction</strong><br />
              Welcome to Ebrain Software & Solutions. These Terms and Conditions govern your
              access to and use of our website and services. By registering or
              purchasing any plan, you agree to comply with the policies below.
            </p>

            <p className="text-slate-600 mt-3">
              Ebrain Software & Solutions operates as a service facilitator. All assignments
              are contractual and do not constitute employment.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              1. Nature of Services
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Onboarding and account enablement</li>
              <li>Access to workflow infrastructure</li>
              <li>Training and documentation</li>
              <li>Technical support</li>
              <li>Quality review and feedback</li>
            </ul>

            <p className="text-slate-600 mt-3">
              Fees are strictly for service enablement. No employment or income guarantee is provided.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              2. Eligibility
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Minimum age: 18 years</li>
              <li>Basic computer knowledge</li>
              <li>Typing and accuracy skills</li>
              <li>Valid registration details</li>
              <li>Access to desktop/laptop</li>
            </ul>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              3. Freelancer Responsibilities
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Follow all instructions</li>
              <li>Maintain confidentiality</li>
              <li>Meet deadlines</li>
              <li>Ensure accuracy</li>
              <li>Cooperate with QC team</li>
            </ul>

            <div className="mt-4 bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
              Failure may result in account suspension.
            </div>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              4. Work Submission & QC Policy
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Tasks must be completed on time</li>
              <li>Accuracy checked via sampling</li>
              <li>Rework allowed in limited cases</li>
              <li>QC approval required for payout</li>
            </ul>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              5. Payments & Payout Cycle
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>No guaranteed earnings</li>
              <li>Performance-based payouts</li>
              <li>7–10 working days after QC</li>
              <li>NEFT / UPI only</li>
            </ul>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              6. Payment Safety
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Pay only to official accounts</li>
              <li>No personal accounts accepted</li>
              <li>Report suspicious activity</li>
            </ul>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              7. Refund Policy
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Request within 48 hours</li>
              <li>Only before onboarding</li>
              <li>Processed in 7–10 days</li>
              <li>No refund after activation</li>
            </ul>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              8. Account Termination
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Policy violation</li>
              <li>Fake information</li>
              <li>Confidentiality breach</li>
              <li>Poor performance</li>
            </ul>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              9. Limitation of Liability
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Internet issues</li>
              <li>Third-party downtime</li>
              <li>User negligence</li>
              <li>Income expectations</li>
            </ul>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              10. Intellectual Property
            </h2>
            <p className="text-slate-600">
              All content belongs to Ebrain Software & Solutions and cannot be reused without permission.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              11. Jurisdiction
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Governed by Indian law</li>
              <li>Bangalore jurisdiction</li>
            </ul>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              12. Changes to Terms
            </h2>
            <p className="text-slate-600">
              Terms may change anytime. Continued use means acceptance.
            </p>
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

export default TandC;