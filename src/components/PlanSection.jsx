import { CheckCircle } from "lucide-react";

const plansData = {
  "captcha-processing": [
    {
      name: "Starter",
      price: "₹1,999",
      color: "from-blue-500 to-blue-700",
      badge: null,
      features: [
        "Basic Captcha Training",
        "5 Practice Sessions",
        "Email Support",
        "Certificate of Completion",
        "1 Month Access",
      ],
    },
    {
      name: "Pro",
      price: "₹2,999",
      color: "from-purple-600 to-indigo-700",
      badge: "Most Popular",
      features: [
        "Advanced Captcha Techniques",
        "Unlimited Practice Sessions",
        "Priority Support",
        "Job Referrals",
        "3 Months Access",
        "Live Doubt Sessions",
      ],
    },
    {
      name: "Elite",
      price: "₹3,999",
      color: "from-orange-500 to-pink-600",
      badge: "Best Value",
      features: [
        "Everything in Pro",
        "1-on-1 Mentorship",
        "Guaranteed Placement Support",
        "Lifetime Access",
        "Daily Payout Setup Guide",
        "Resume + LinkedIn Review",
      ],
    },
  ],

  "document-conversion": [
    {
      name: "Basic",
      price: "₹1,999",
      color: "from-teal-500 to-cyan-700",
      badge: null,
      features: [
        "PDF to Word Conversion",
        "5 Projects",
        "Email Support",
        "Certificate",
        "1 Month Access",
      ],
    },
    {
      name: "Standard",
      price: "₹2,999",
      color: "from-purple-600 to-indigo-700",
      badge: "Most Popular",
      features: [
        "PDF, Word, Excel & PPT",
        "20 Projects",
        "Chat + Email Support",
        "Freelance Setup Guide",
        "3 Months Access",
        "Live Sessions",
      ],
    },
    {
      name: "Premium",
      price: "₹3,999",
      color: "from-orange-500 to-rose-600",
      badge: "Best Value",
      features: [
        "Everything in Standard",
        "Unlimited Projects",
        "1-on-1 Mentorship",
        "Fiverr Profile Setup",
        "Lifetime Access",
        "Placement Assistance",
      ],
    },
  ],

  "data-segregation": [
    {
      name: "Starter",
      price: "₹1,999",
      color: "from-green-500 to-emerald-700",
      badge: null,
      features: [
        "Excel Basics & Sorting",
        "5 Real Datasets",
        "Email Support",
        "Certificate",
        "1 Month Access",
      ],
    },
    {
      name: "Growth",
      price: "₹2,999",
      color: "from-purple-600 to-indigo-700",
      badge: "Most Popular",
      features: [
        "Advanced Excel + Google Sheets",
        "25 Real Datasets",
        "Priority Support",
        "Freelance Project Guide",
        "3 Months Access",
        "Weekly Live Sessions",
      ],
    },
    {
      name: "Pro",
      price: "₹3,999",
      color: "from-orange-500 to-red-600",
      badge: "Best Value",
      features: [
        "Everything in Growth",
        "SQL Basics Included",
        "1-on-1 Mentorship",
        "Lifetime Access",
        "Job Placement Support",
        "Portfolio Building",
      ],
    },
  ],
};

// Slugs that should show plans
const PLAN_SLUGS = ["captcha-processing", "document-conversion", "data-segregation"];

export default function PlansSection({ slug, courseTitle }) {
  // Don't render anything for other courses
  if (!PLAN_SLUGS.includes(slug)) return null;

  const plans = plansData[slug];

  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
            Choose Your Plan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {courseTitle} — Pricing Plans
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            Pick the plan that fits your goals. Upgrade anytime.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden shadow-lg flex flex-col ${
                plan.badge === "Most Popular"
                  ? "ring-2 ring-purple-500 "
                  : ""
              }`}
            >
              {/* Card Header */}
             {/* Card Header */}
<div className={`bg-gradient-to-br ${plan.color} text-white p-6`}>
  {/* Always render badge row to keep header height equal */}
  <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${
    plan.badge ? "bg-white/20 text-white" : "invisible"
  }`}>
    ⚡ {plan.badge || "placeholder"}
  </span>
  
  <h3 className="text-xl font-bold">{plan.name}</h3>
  <p className="text-4xl font-extrabold mt-2">{plan.price}</p>
  <p className="text-white/70 text-sm mt-1">one-time payment</p>
</div>

              {/* Features */}
              <div className="bg-white flex-1 p-6 flex flex-col gap-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                    {feature}
                  </div>
                ))}

                <button
                  className={`mt-auto w-full py-2.5 rounded-lg font-semibold text-sm text-white transition bg-gradient-to-r ${plan.color} hover:opacity-90`}
                >
                  Get {plan.name} Plan
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}