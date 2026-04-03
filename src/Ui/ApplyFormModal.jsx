"use client";
import React from "react";

const ApplyFormModal = ({ job, onClose }) => {
  if (!job) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
        

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      education: e.target.education.value,
      year: e.target.year.value,
      jobTitle: job.title, // ✅ FIXED
    };
console.log("Form Data:", formData);

    await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    alert("Application Sent ✅");
    onClose(); // ✅ FIXED
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-xl">
        <h2 className="text-xl font-bold text-slate-800 mb-4">
          Apply for {job.title}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm mb-1 font-medium">First Name</label>
              <input
                name="firstName"  // ✅ IMPORTANT
                placeholder="John"
                className="border p-2 rounded-md"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm mb-1 font-medium">
                Last Name
              </label>
              <input
                name="lastName"  // ✅ IMPORTANT
                placeholder="Doe"
                className="border p-2 rounded-md"
              />
            </div>
          </div>

          <input
            name="email"  // ✅ IMPORTANT
            placeholder="john@example.com"
            className="border p-2 rounded-md w-full"
            required
          />

          <input
            name="phone"  // ✅ IMPORTANT
            placeholder="Phone number"
            className="border p-2 rounded-md w-full"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <select name="education" className="border p-2 rounded-md">
              <option>B.Tech</option>
              <option>BCA</option>
              <option>MCA</option>
            </select>

            <select name="year" className="border p-2 rounded-md">
              <option>2023</option>
              <option>2024</option>
              <option>2025</option>
            </select>
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Submit Application
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-3 w-full text-sm text-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ApplyFormModal;