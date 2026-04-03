"use client";

import { useParams } from "next/navigation";
import { CheckCircle, Clock, CalendarDays, BadgeIndianRupee, Users, Zap } from "lucide-react";

const softwaresData = {
  "captcha-solvex-software": {
    title: "Captcha SolveX Software",
    tagline: "Cloud-Based Bank Captcha Verification System",
    description:
      "Captcha SolveX is a cloud-based bank captcha verification software that helps organizations manage captcha entry work with secure login, real-time captcha display, performance tracking, accuracy reports, and admin dashboard. The system supports multi-user access and subscription-based access for businesses and teams.",
    duration: "6 months",
    batchDate: "1st Apr",
    price: "₹4,699",
    oldPrice: "₹45,000",
    saving: "₹10,001",
    seats: "Limited seats",
    features: [
      "Real-time Captcha Display",
      "Accuracy Tracking",
      "User Performance Reports",
      "Cloud-Based System",
      "Multi User Support",
    ],
    footer: "Start using Captcha SolveX today to manage captcha verification work efficiently and securely.",
    techStack: ["Cloud Platform", "Secure Login", "Admin Dashboard", "REST API"],
  },

  "text-flow-software": {
    title: "TextFlow Software",
    tagline: "Professional Data Typing & Document Conversion Tool",
    description:
      "TextFlow is a cloud-based data typing and document conversion software designed for fast, accurate, and efficient text entry work. The software provides a simple and user-friendly notepad-style interface where users can type text from images, scanned files, PDFs, or handwritten documents and save the content securely in the cloud.",
    duration: "6 months",
    price: "₹4,999",
    oldPrice: "₹40,000",
    saving: "₹10,001",
    seats: "Limited seats",
    features: [
      "Notepad Typing Interface",
      "Word Count & Character Count",
      "Project Assignment System",
      "Cloud Storage",
    ],
    footer: "Start using TextFlow today for fast, secure, and professional data typing and document conversion work. Manage your typing projects, track productivity, and store documents securely in the cloud",
    techStack: ["Cloud Storage", "Multi-format Engine", "Speed Analytics", "Auto Save"],
  },

  "quickfill-software": {
    title: "QuickFill Software",
    tagline: "Automated Online Form Filling Solution",
    description:
      "QuickFill is a cloud-based form filling automation software designed to help users fill online forms quickly and efficiently using a structured copy-paste data panel system. The software is ideal for organizations and teams that handle bulk form filling, data submission, registration entries, survey forms, and database entry work",
    duration: "6 months",
    batchDate: "1st May",
    price: "₹5,999",
    oldPrice: "₹35,000",
    saving: "₹10,001",
    seats: "Limited seats",
    features: [
      "Copy Paste Data Panel",
      "Multi Form Filling Support",
      "Data Templates",
      "User Management System",
      "Cloud Storage",
    ],
    footer: "",
    techStack: ["Browser Extension", "Template Engine", "Tab Manager", "Error Detection"],
  },

  "other-applications": {
    title: "Other Applications",
    tagline: "Custom Workflow & Integration Solutions",
    description:
      "Our Other Applications suite provides custom workflow automation, API integrations, and multi-user admin tools for businesses looking to streamline their operations. Fully subscription-based with enterprise-level support.",
    duration: "6 months",
    batchDate: "Coming Soon",
    price: "₹34,999",
    oldPrice: "₹45,000",
    saving: "₹10,001",
    seats: "Limited seats",
    features: [
      "Custom Workflows",
      "API Integration",
      "Admin Dashboard",
      "Multi User Access",
      "Subscription Management",
    ],
    techStack: ["REST API", "Webhook Support", "Role-based Access", "Analytics Dashboard"],
  },
};

export default function Page() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const software = softwaresData[slug];

  if (!software) {
    return (
      <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white px-4">
        <p className="text-xl text-center">Software not found for: <span className="text-yellow-400 font-bold">{slug}</span></p>
      </section>
    );
  }

  return (
    <section className="w-full min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white px-4 sm:px-6 py-10 sm:py-17">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-12 items-start justify-between">

        {/* LEFT SECTION */}
        <div className="flex-1 space-y-5 sm:space-y-6 w-full">

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-yellow-400">{software.title}</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
            {software.description}
          </p>

          {/* Features */}
          <div>
            <h2 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" /> Key Features
            </h2>
            <div className="space-y-2">
              {software.features.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-blue-300 w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Course Info Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20">
            <p className="font-semibold mb-4 flex items-center gap-2 text-sm sm:text-base">
              <Clock className="w-4 h-4 text-yellow-400 shrink-0" />
              Subscription Pricing Plan
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">

              <div>
                <p className="text-sm text-gray-200 flex items-center gap-1">
                  <CalendarDays className="w-4 h-4 shrink-0" /> Subscription Validity
                </p>
                <h3 className="text-xl font-bold mt-1">1 Year</h3>
              </div>

              <div className="hidden sm:block h-12 w-[1px] bg-white/30" />

              <div>
                <p className="text-sm text-gray-200 flex items-center gap-1">
                  <BadgeIndianRupee className="w-4 h-4 shrink-0" /> Software Fee
                </p>
                <h3 className="text-xl font-bold mt-1">
                  {software.price}
                </h3>
              </div>

            </div>
          </div>

          {/* Bottom CTA text */}
          {software.footer ? (
            <p className="text-gray-300 font-medium text-sm sm:text-base">
              <span className="text-white font-semibold">{software.footer}</span>
            </p>
          ) : null}

        </div>

        {/* RIGHT FORM */}
        <div className="w-full lg:w-96 lg:max-w-md bg-white text-black rounded-xl p-5 sm:p-6 shadow-xl border border-purple-300 shrink-0 lg:mt-10">
          <h3 className="text-lg font-semibold mb-5">Interested? Apply Now</h3>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="flex flex-col">
              <label className="text-sm mb-1 font-medium">First Name</label>
              <input
                placeholder="John"
                className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs sm:text-sm mb-1 font-medium">
                Last Name <span className="text-gray-400 text-xs">(Optional)</span>
              </label>
              <input
                placeholder="Doe"
                className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </div>
          </div>

          <div className="mt-3 sm:mt-4">
            <label className="text-sm mb-1 font-medium block">Email id</label>
            <input
              placeholder="john@example.com"
              className="border border-gray-300 p-2 rounded-md w-full outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </div>

          <div className="mt-3 sm:mt-4">
            <label className="text-sm mb-1 font-medium block">Phone number</label>
            <input
              placeholder="Enter 10 digit phone number"
              className="border border-gray-300 p-2 rounded-md w-full outline-none focus:ring-2 focus:ring-blue-400 text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
            <div className="flex flex-col">
              <label className="text-sm mb-1 font-medium">Education</label>
              <select className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-sm">
                <option>Select degree</option>
                <option>B.Tech</option>
                <option>BCA</option>
                <option>MCA</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm mb-1 font-medium">Graduation Year</label>
              <select className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-sm">
                <option>Select year</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </select>
            </div>
          </div>

          <button className="w-full bg-blue-500 text-white py-2.5 rounded-md mt-5 hover:bg-blue-600 transition font-medium cursor-pointer text-sm sm:text-base">
            Apply now
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            By continuing to apply, you agree to our{" "}
            <span className="underline cursor-pointer">T&C</span>
          </p>
        </div>

      </div>
    </section>
  );
}