"use client";
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function PrivacyPolicy() {
  const [showTop, setShowTop] = useState(false);

  // 🔥 Scroll To Top Button Logic
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
          Privacy Policy
        </h1>

        <div className="bg-white shadow-sm rounded-2xl p-6 sm:p-8 space-y-8 border border-slate-100">

          {/* INTRO */}
          <section>
            <p className="text-slate-600 leading-relaxed">
              <strong className="text-slate-800">Introduction</strong><br />
              Ebrain Software & Solutions is committed to protecting the privacy and personal
              information of all visitors and participants using our platform.
              This Privacy Policy explains how we collect, use, store, and
              safeguard user data in accordance with applicable Indian laws and
              global best practices.
            </p>

            <p className="text-slate-600 mt-3">
              By accessing or using this website, you agree to the practices
              described in this policy.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              1. Information We Collect
            </h2>

            <h3 className="font-semibold text-slate-700">Personal Information</h3>
            <ul className="list-disc pl-5 text-slate-600 space-y-1 mt-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Location details (city and state)</li>
              <li>Program preferences</li>
            </ul>

            <h3 className="font-semibold text-slate-700 mt-4">Technical Information</h3>
            <ul className="list-disc pl-5 text-slate-600 space-y-1 mt-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Cookies and usage analytics</li>
            </ul>

            <p className="text-slate-600 mt-3">
              This data is collected solely to enable service delivery and improve user experience.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              2. How We Use Your Information
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Account creation and verification</li>
              <li>Onboarding and enablement services</li>
              <li>Providing workflow access</li>
              <li>Responding to user inquiries</li>
              <li>Quality Control and performance tracking</li>
              <li>Sending service-related communications</li>
              <li>Website improvement and analytics</li>
            </ul>

            <div className="mt-4 bg-blue-50 border border-blue-200 text-blue-700 text-sm p-3 rounded-lg">
              We do not sell your personal information to third parties.
            </div>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              3. Data Protection & Security
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Secure account access</li>
              <li>Internal monitoring systems</li>
              <li>Safe payment handling</li>
            </ul>

            <p className="text-slate-600 mt-3">
              All communications remain confidential and secure.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              4. Cookies Policy
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Analyze website traffic</li>
              <li>Remember preferences</li>
              <li>Improve functionality</li>
              <li>Secure login sessions</li>
            </ul>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              5. Third-Party Services
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Payment gateways</li>
              <li>Analytics tools</li>
              <li>Email services</li>
            </ul>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              6. User Rights
            </h2>

            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Access your data</li>
              <li>Request corrections</li>
              <li>Request deletion</li>
              <li>Withdraw consent</li>
            </ul>

            <p className="mt-3 text-slate-600">
              Contact:{" "}
              <a
                href="mailto:ebrainsoftwareandsolutions@gmail.com"
                className="text-blue-600 font-medium hover:underline"
              >
                ebrainsoftwareandsolutions@gmail.com
              </a>
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              7. Data Retention
            </h2>
            <p className="text-slate-600">
              Data is retained only as necessary for service and compliance.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              8. Children’s Privacy
            </h2>
            <p className="text-slate-600">
              We do not knowingly collect data from minors.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              9. Changes to Policy
            </h2>
            <p className="text-slate-600">
              Policy may be updated anytime. Please review periodically.
            </p>
          </section>

          {/* SECTION */}
          <section>
            <h2 className="text-xl font-bold text-slate-800 mb-3">
              10. Jurisdiction
            </h2>
            <p className="text-slate-600">
              Governed by Indian laws. Jurisdiction: Bangalore, Karnataka.
            </p>
          </section>

          {/* FOOTER */}
          <p className="text-xs text-slate-400 text-center pt-4 border-t">
            © {new Date().getFullYear()} Ebrain Software & Solutions. All rights reserved.
          </p>
        </div>
      </div>

      {/* 🔥 SCROLL TO TOP BUTTON */}
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

export default PrivacyPolicy;