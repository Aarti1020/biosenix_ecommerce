import ImageSection from '@/Ui/ImageSection'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <ImageSection title={"Data Entry Specialist"}/>
        <section className="bg-gradient-to-br from-slate-50 via-white to-indigo-50 py-14 sm:py-20 px-4 sm:px-6">

      <div className=" mx-auto">

        {/* ===== JOB HEADER ===== */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-700 to-purple-600 bg-clip-text text-transparent">
            Data Entry Specialist
          </h1>

          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Join our global team and turn raw data into valuable digital assets.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
              Remote / Work from Home
            </span>
            <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              Flexible Hours
            </span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              Performance Based Payout
            </span>
          </div>
        </div>

        {/* ===== ABOUT ROLE ===== */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            About the Job Role
          </h2>

          <div className="space-y-5 text-gray-600 leading-relaxed text-sm sm:text-base">
            <p>
              Wcat Private Limited is seeking a detail-oriented and focused Data Entry
              Specialist to join our remote workforce. Your responsibility is
              the accurate transfer of information from source documents into
              digital databases.
            </p>

            <p>
              This is not just about typing — it is about maintaining the
              integrity of data. You will ensure every entry is precise,
              verified, and formatted correctly.
            </p>

            <p>
              We prioritize accuracy over speed. Precision is a mindset. If you
              take pride in delivering error-free work, this opportunity is
              perfect for you.
            </p>
          </div>
        </div>

        {/* ===== RESPONSIBILITIES ===== */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-5 text-indigo-700">
              Key Responsibilities
            </h3>

            <ul className="space-y-4 text-gray-600 text-sm sm:text-base">
              <li>✔ Data digitization from paper, image, and PDF files</li>
              <li>✔ Accuracy verification before final submission</li>
              <li>✔ Database updates and secure backups</li>
              <li>✔ Quality control & formatting compliance</li>
              <li>✔ Maintain strict confidentiality</li>
              <li>✔ Reporting and document storage</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8">
            <h3 className="text-xl font-bold mb-5 text-purple-700">
              Qualifications & Requirements
            </h3>

            <ul className="space-y-4 text-gray-600 text-sm sm:text-base">
              <li>✔ 98%+ Typing Accuracy required</li>
              <li>✔ Basic knowledge of MS Word & Excel</li>
              <li>✔ Good English comprehension</li>
              <li>✔ Laptop/PC with stable internet</li>
              <li>✔ Strong attention to detail</li>
              <li>✔ Self-discipline & deadline focus</li>
            </ul>
          </div>

        </div>

        {/* ===== WHY WORK WITH US ===== */}
      <div className=" text-black mb-20 ">

  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
    Why Work With Us?
  </h3>

  <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12 text-sm sm:text-base">
    At Wcat Private limited, we believe in building long-term professional relationships.
    We provide a flexible, transparent, and growth-oriented environment where
    your accuracy and dedication are valued.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Flexible Schedule */}
    <div className="">
      <h4 className="text-lg font-semibold mb-3 text-indigo-500">
        Flexible Schedule
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        You decide when and how much you work. This opportunity is ideal for
        students, homemakers, and professionals looking to earn additional income
        without fixed office hours.
      </p>
    </div>

    {/* Unlimited Earnings */}
    <div className="">
      <h4 className="text-lg font-semibold mb-3 text-purple-600">
        Unlimited Earning Potential
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        Our payout structure is performance-based. The more projects you complete
        with high accuracy, the more you earn. There is no earning cap.
      </p>
    </div>

    {/* Skill Development */}
    <div className="">
      <h4 className="text-lg font-semibold mb-3 text-green-600">
        Skill Development
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        Gain real-world experience in sectors such as Medical, Legal,
        and E-Commerce data processing while improving your formatting,
        verification, and database management skills.
      </p>
    </div>

    {/* Support System */}
    <div className="">
      <h4 className="text-lg font-semibold mb-3 text-yellow-600">
        Dedicated Support System
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        Our support team is available via WhatsApp and Email to assist you
        with technical queries, formatting guidelines, and submission processes.
      </p>
    </div>

    {/* Reliable Payments */}
    <div className="">
      <h4 className="text-lg font-semibold mb-3 text-blue-600">
        Reliable & Transparent Payments
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">
        We follow transparent payment cycles with secure transfers via
        Bank Transfer (NEFT/IMPS) or UPI. No hidden deductions.
      </p>
    </div>

  </div>
</div>
        {/* ===== CTA ===== */}
        <div className=" relative w-full py-20 overflow-hidden ">
               <div className="absolute inset-0 z-10 ">
                    <Image
                      src="/data-entry.jpg" // Replace with your image path
                      alt="Why Us Background"
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* Optional overlay for glass/frosted effect */}
                    <div className="absolute inset-0 bg-black/40 "></div>
                  </div>
            
            <div className=' relative z-12 text-white text-center'>
          <h3 className="  text-xl sm:text-4xl font-bold mb-6">
            Ready to Start Your Journey?
          </h3>

          <button className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-semibold shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300">
            Apply Now via Email
          </button>

          <p className="mt-4 text-sm text-gray-300">
            Clicking the button will open your default email client with a pre-filled application format.
          </p>
        </div>
        </div>

      </div>
    </section>
    </div>
  )
}

export default page
