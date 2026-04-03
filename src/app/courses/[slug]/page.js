"use client";

import { useParams } from "next/navigation";
import { Star, CheckCircle } from "lucide-react";
import { courseData, defaultCourse } from "@/lib/courseData";
import PlansSection from "@/components/PlanSection";
import { useState } from "react";


export default function CoursePage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const formatTitle = (slug) => {
    if (!slug) return "";
    return slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const courseTitle = formatTitle(slug);
  const course = courseData[slug] ?? defaultCourse;
  // ── Form state ──────────────────────────────────────────────
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    year: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!form.firstName || !form.email || !form.phone) {
      alert("Please fill in First Name, Email and Phone.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/apply-courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, courseTitle }),   // 👈 sends course name too
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ firstName: "", lastName: "", email: "", phone: "", education: "", year: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  

  return (
    <>  {/* 👈 change <section> wrapper to a fragment */}
      <section className="w-full min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white px-6 py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-15 items-start justify-between">

          {/* LEFT SECTION */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">
                {course.badge}
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-2 rounded-lg text-sm font-semibold">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                {course.rating}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-yellow-400">{courseTitle}</span>{" "}
              Placement Course 
            </h1>

            <span className="inline-block bg-white/10 px-4 py-1 rounded-full text-sm">
              Updated in {course.updatedIn}
            </span>

            <div className="space-y-3 mt-4">
              {course.features.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="text-blue-300 w-5 h-5" />
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mt-6 border border-white/20">
              <p className="font-semibold mb-4">
                
                Training + Software + Work + Subscription SaaS Model
                 {/* online course with LIVE sessions */}
              </p>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <p className="text-sm text-gray-200">Course Validity </p>
                  <h3 className="text-xl font-bold">3 Days</h3>
                  <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full mt-2 inline-block">
                    Limited seats
                  </span>
                </div>
                <div className="hidden md:block h-12 w-[1px] bg-white/30"></div>
                <div>
                  <p className="text-sm text-gray-200">Course Fee Start From</p>
                  <h3 className="text-xl font-bold">
                    {course.price}
                    {course.oldPrice && (
                      <span className="line-through text-sm text-gray-300 ml-2">
                        {course.oldPrice}
                      </span>
                    )}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    {course.discount && (
                      <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
                        Save {course.discount}
                      </span>
                    )}
                    <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full">
                      Valid for today
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mt-6">
              <p className="mb-3 text-gray-200">Our learners get placed at</p>
              <div className="flex flex-wrap gap-4 items-center">
                {course.companies.map((item) => (
                  <span key={item} className="bg-white/10 px-4 py-2 rounded-lg text-sm">
                    {item}
                  </span>
                ))}
                <span className="text-gray-300">+250 more hiring partners</span>
              </div>
            </div> */}
          </div>

          {/* RIGHT FORM */}
          <div className="w-94 max-w-md bg-white text-black rounded p-6 shadow-lg m-4 border border-purple-300 ms-10 mt-8">
            <h3 className="text-lg font-semibold mb-1">Interested? Apply Now</h3>

            {/* Shows which course they're applying for */}
            <p className="text-xs text-indigo-600 font-medium mb-4 bg-indigo-50 px-3 py-1 rounded-full inline-block">
              {courseTitle}
            </p>

            {/* Success message */}
            {status === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-lg mb-4">
                ✅ Application submitted! We'll contact you soon.
              </div>
            )}

            {/* Error message */}
            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-4">
                ❌ Something went wrong. Please try again.
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm mb-1 font-medium">First Name</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-1 font-medium">
                  Last Name <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="text-sm mb-1 font-medium block">Email id</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="border border-gray-300 p-2 rounded-md w-full outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mt-4">
              <label className="text-sm mb-1 font-medium block">Phone number</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter 10 digit phone number"
                className="border border-gray-300 p-2 rounded-md w-full outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex flex-col">
                <label className="text-sm mb-1 font-medium">Education</label>
                <select
                  name="education"
                  value={form.education}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select degree</option>
                  {course.degreeOptions.map((deg) => (
                    <option key={deg}>{deg}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm mb-1 font-medium">Graduation Year</label>
                <select
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select year</option>
                  {course.graduationYears.map((yr) => (
                    <option key={yr}>{yr}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full bg-blue-500 text-white py-2 rounded-md mt-5 hover:bg-blue-600 transition font-medium disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Submitting..." : "Apply now"}
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              By continuing to apply, you agree to our{" "}
              <span className="underline cursor-pointer">T&C</span>
            </p>
          </div>

        </div>

        
      </section>

      {/* 👇 Plans section renders here, below the hero — only for 3 trending courses */}
      <PlansSection slug={slug} courseTitle={courseTitle} />
    </>
  );
}