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

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    education: "",
    year: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.firstName || !form.email || !form.phone) {
      alert("Please fill in First Name, Email and Phone.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/apply-courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, courseTitle }),
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
    <>
      <section className="w-full min-h-screen bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white px-4 sm:px-6 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-15 items-start justify-between">

          {/* LEFT SECTION */}
          <div className="flex-1 space-y-5 sm:space-y-6 w-full">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="bg-white/10 px-4 py-2 rounded-lg text-sm font-medium">
                {course.badge}
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-2 rounded-lg text-sm font-semibold">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                {course.rating}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-yellow-400">{courseTitle}</span>{" "}
              Placement Course
            </h1>

            <span className="inline-block bg-white/10 px-4 py-1 rounded-full text-sm">
              Updated in {course.updatedIn}
            </span>

            <div className="space-y-3 mt-4">
              {course.features.map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-blue-300 w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 mt-6 border border-white/20">
              <p className="font-semibold mb-4 text-sm sm:text-base">
                Training + Software + Work + Subscription SaaS Model
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
                <div>
                  <p className="text-sm text-gray-200">Course Validity</p>
                  <h3 className="text-xl font-bold">3 Days</h3>
                  <span className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full mt-2 inline-block">
                    Limited seats
                  </span>
                </div>
                <div className="hidden sm:block h-12 w-[1px] bg-white/30"></div>
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
                  <div className="flex items-center gap-2 mt-2 flex-wrap">
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
          </div>

          {/* RIGHT FORM */}
          <div className="w-full lg:w-auto lg:min-w-[380px] lg:max-w-md bg-white text-black rounded-xl p-5 sm:p-6 shadow-lg border border-purple-300 lg:ms-10 lg:mt-8">
            <h3 className="text-lg font-semibold mb-1">Interested? Apply Now</h3>

            <p className="text-xs text-indigo-600 font-medium mb-4 bg-indigo-50 px-3 py-1 rounded-full inline-block">
              {courseTitle}
            </p>

            {status === "success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-lg mb-4">
                ✅ Application submitted! We'll contact you soon.
              </div>
            )}

            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-4">
                ❌ Something went wrong. Please try again.
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="flex flex-col">
                <label className="text-sm mb-1 font-medium">First Name</label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs sm:text-sm mb-1 font-medium">
                  Last Name <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                />
              </div>
            </div>

            <div className="mt-3 sm:mt-4">
              <label className="text-sm mb-1 font-medium block">Email id</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="border border-gray-300 p-2 rounded-md w-full outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </div>

            <div className="mt-3 sm:mt-4">
              <label className="text-sm mb-1 font-medium block">Phone number</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter 10 digit phone number"
                className="border border-gray-300 p-2 rounded-md w-full outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div className="flex flex-col">
                <label className="text-sm mb-1 font-medium">Education</label>
                <select
                  name="education"
                  value={form.education}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-sm"
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
                  className="border border-gray-300 p-2 rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-sm"
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
              className="w-full bg-blue-500 text-white py-2.5 rounded-md mt-5 hover:bg-blue-600 transition font-medium disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base"
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

      <PlansSection slug={slug} courseTitle={courseTitle} />
    </>
  );
}