"use client";
import { useState } from "react";

const SubscribeForm = ({ software }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    plan: "Basic",
  });

  const [status, setStatus] = useState("idle");

  const plans = {
    Basic: "3999",
    Pro: "₹6,999",
    Premium: "₹9,999",
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.firstName || !form.email || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    setStatus("loading");

    try {
      // 👉 You can connect Razorpay / Stripe later here
      console.log("Subscription Data:", {
        ...form,
        software: software.title,
        price: plans[form.plan],
      });

      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full lg:w-96 bg-white text-black rounded-xl p-6 shadow-xl border border-purple-300">

      <h3 className="text-lg font-semibold mb-2">Subscribe Plan</h3>

      <p className="text-xs text-indigo-600 mb-4 bg-indigo-50 px-3 py-1 rounded-full inline-block">
        {software.title}
      </p>

      {/* Status */}
      {status === "success" && (
        <p className="text-green-600 text-sm mb-3">
          ✅ Subscription successful!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm mb-3">
          ❌ Something went wrong
        </p>
      )}

      {/* Name */}
      <div className="grid grid-cols-2 gap-3">
        <input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          className="border p-2 rounded-md text-sm"
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          className="border p-2 rounded-md text-sm"
        />
      </div>

      {/* Email */}
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="border p-2 rounded-md w-full mt-3 text-sm"
      />

      {/* Phone */}
      <input
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        className="border p-2 rounded-md w-full mt-3 text-sm"
      />

      {/* Plan Selection */}
      <div className="mt-4">
        <label className="text-sm font-medium mb-1 block">
          Choose Plan
        </label>

        <div className="space-y-2">
          {Object.keys(plans).map((plan) => (
            <label
              key={plan}
              className={`flex justify-between items-center border rounded-md p-2 cursor-pointer ${
                form.plan === plan ? "border-blue-500 bg-blue-50" : ""
              }`}
            >
              <span>{plan}</span>
              <span className="font-semibold">{plans[plan]}</span>

              <input
                type="radio"
                name="plan"
                value={plan}
                checked={form.plan === plan}
                onChange={handleChange}
                className="hidden"
              />
            </label>
          ))}
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={handleSubmit}
        disabled={status === "loading"}
        className="w-full bg-blue-600 text-white py-2.5 rounded-md mt-5 hover:bg-blue-700 transition"
      >
        {status === "loading" ? "Processing..." : "Subscribe Now"}
      </button>

      <p className="text-xs text-gray-500 mt-3 text-center">
        Secure payment • Instant access • 24/7 support
      </p>
    </div>
  );
};

export default SubscribeForm;