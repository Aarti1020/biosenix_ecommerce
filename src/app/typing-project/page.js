import ImageSection from "@/Ui/ImageSection";
import React from "react";

const Page = () => {
  return (
    <>
    <ImageSection  title={"E-Book Typing Projects"}/>
    <div className="bg-gradient-to-b from-slate-50 to-white text-gray-800">

    

      {/* ================= HERO ================= */}
      <section className="relative py-14 sm:py-16 md:py-20 px-4 sm:px-6 text-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50">

  {/* Decorative Blobs */}
  <div className="absolute -top-20 -left-20 w-60 sm:w-72 h-60 sm:h-72 bg-purple-400/20 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-24 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>

  <div className="relative max-w-4xl mx-auto">

    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-5 bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">
      E-Book Typing Project Recruitment
    </h2>

    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
      A Free Joining Project for Qualified Freelancers. Transform physical
      books into organized digital assets with high payouts.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300">
        Apply Now
      </button>

      <button className="px-6 py-3 bg-white border border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition">
        Learn More
      </button>
    </div>

  </div>
</section>

      {/* ================= REVIEWS ================= */}
      <section className="py-16 px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Google", rating: "4.6/5 (8000+ Reviews)" },
            { name: "Just Dial", rating: "4.8/5 (6000+ Reviews)" },
            { name: "AmbitionBox", rating: "4.6/5 (700+ Reviews)" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-xl rounded-3xl p-8 text-center border border-gray-100 hover:-translate-y-2 transition"
            >
              <h3 className="font-semibold text-gray-700 text-lg">
                {item.name}
              </h3>
              <p className="text-indigo-600 font-bold mt-3">
                {item.rating}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= POLICY ================= */}
    
      {/* ================= SAAS TABLE ================= */}
      <section className="py-20 px-6 bg-white">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Select Your Joining Method
        </h3>

        <div className="max-w-7xl mx-auto overflow-x-auto">
          <div className="min-w-[900px] bg-white rounded-3xl shadow-2xl border border-gray-100">
          <table className="w-full border border-gray-300 border-collapse text-sm md:text-base">

  <thead>
    <tr className="bg-gray-100 text-center border-b border-gray-300">
      <th className="p-6 font-semibold text-gray-600 border-r border-gray-300">
        Features
      </th>

      <th className="p-6 font-semibold border-r border-gray-300">
        Method 1
        <div className="text-xs text-gray-400 font-normal mt-1">
          CV / Certificate
        </div>
      </th>

      <th className="p-6 bg-indigo-50 font-semibold text-indigo-700 border-r border-gray-300">
        Method 2
        <div className="text-xs text-indigo-400 font-normal mt-1">
          Typing Exam
        </div>
      </th>

      <th className="p-6 font-semibold">
        Method 3
        <div className="text-xs text-gray-400 font-normal mt-1">
          Security Deposit
        </div>
      </th>
    </tr>
  </thead>

  <tbody>
    {[
      ["Entry Fee", "No Exam Fee", "₹499", "No Exam Fee"],
      ["Requirement", "Typing Certificate (80%)", "Anyone can give Exam", "Submit ₹1999 Deposit"],
      ["Contract Validity", "11 Months", "11 Months", "11 Months"],
      ["Payout Rate", "₹180 per Page", "₹180 per Page", "₹180 per Page"],
    ].map((row, i) => (
      <tr
        key={i}
        className="text-center border-b border-gray-200 hover:bg-gray-50 transition"
      >
        {row.map((cell, j) => (
          <td
            key={j}
            className={`p-6 border-r border-gray-200 ${
              j === 0
                ? "font-medium text-gray-700 bg-gray-50"
                : ""
            } ${
              j === 2
                ? "bg-indigo-50 text-indigo-700 font-semibold"
                : ""
            }`}
          >
            {cell}
          </td>
        ))}
      </tr>
    ))}
  </tbody>

</table>
          </div>
        </div>
      </section>

      {/* ================= REGISTRATION CARDS ================= */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="bg-white rounded-3xl p-10 shadow-xl border hover:-translate-y-2 transition">
            <h4 className="text-2xl font-bold mb-4">Free Joining</h4>
            <p className="mb-6 text-gray-600">
              For applicants with a valid Typing Course Certificate (80% accuracy).
            </p>
            <p className="text-indigo-600 font-medium">
              Send Resume & Certificate: join@hireinglobal.com
            </p>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-3xl p-10 shadow-2xl scale-105">
            <h4 className="text-2xl font-bold mb-4">
              ₹499 Recruitment Exam
            </h4>
            <p className="mb-6">
              For applicants without certificate. Pass a simple exam to join.
            </p>
            <button className="w-full bg-white text-indigo-700 py-3 rounded-xl font-semibold hover:scale-105 transition">
              Apply for Exam
            </button>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-xl border hover:-translate-y-2 transition">
            <h4 className="text-2xl font-bold mb-4">
              ₹1999 Security Deposit
            </h4>
            <p className="mb-6 text-gray-600">
              Skip exam queue. Direct joining with refundable deposit.
            </p>
            <button className="w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition">
              Join via Deposit
            </button>
          </div>

        </div>
      </section>

      {/* ================= HOW TO WORK ================= */}
      <section className="py-20 px-6 bg-white">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How to Work
        </h3>

        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-10 shadow-lg">
          <ul className="space-y-5 text-lg">
            <li><strong>Download:</strong> Get image files from email.</li>
            <li><strong>Type:</strong> Use Notepad only (.txt per image).</li>
            <li><strong>Format:</strong> Times New Roman, Size 12. No leading spaces/tabs.</li>
            <li><strong>Submit:</strong> Zip folder & email before deadline.</li>
            <li><strong>Get Paid:</strong> Payment within 24 working hours via NEFT/IMPS/UPI.</li>
          </ul>
        </div>
      </section>

      {/* ================= ACCURACY ================= */}
      <section className="py-20 px-6 bg-slate-50">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Accuracy & Deduction Parameters
        </h3>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <table className="w-full border
          ">
            <thead className=" bg-gradient-to-r from-red-600 to-pink-600 text-white">
              <tr>
                <th className="p-6 text-left">Type of Error</th>
                <th className="p-6 text-left">Scope</th>
                <th className="p-6 text-left">Deduction</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="p-6">Punctuation Error</td>
                <td className="p-6">Whole Work</td>
                <td className="p-6 font-semibold text-red-600">0.7%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-6">Spelling / Wrong Word</td>
                <td className="p-6">Whole Work</td>
                <td className="p-6 font-semibold text-red-600">0.9%</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-6">Missing / Extra Enter</td>
                <td className="p-6">Whole Work</td>
                <td className="p-6 font-semibold text-red-600">1.0%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    
    </div>
    </>
  );
};

export default Page;
