import ImageSection from '@/Ui/ImageSection'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div>
        <ImageSection title={"Industry Specialist"}/>
       <div className="bg-gray-50 text-gray-800 px-6 sm:px-12 md:px-24 py-16 space-y-16">

      {/* ================== HERO / JOB INTRO ================== */}
      <section className=" bg-gray-600 text-center max-w-4xl mx-auto space-y-4 py-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-300">
          Industry Specialist
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Leverage your domain knowledge in specialized data processing roles.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4 text-sm sm:text-base text-gray-300 font-medium">
          <span>📌 Niche Sectors</span>
          <span>💰 High Value Projects</span>
          <span>⭐ Premium Rates</span>
        </div>
      </section>

      {/* ================== ABOUT THE JOB ROLE ================== */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          About the Job Role
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Hire in Global recognizes that some data requires more than just typing speed—it requires understanding. We are recruiting Industry Specialists who possess background knowledge in specific sectors such as Legal, Medical, E-Commerce, Real Estate, or Finance. In this role, you will handle complex data entry and processing tasks where familiarity with industry terminology is essential.
        </p>
        <p className="text-gray-700 leading-relaxed">
          As an Industry Specialist, you will be responsible for managing, verifying, and entering data that demands a higher level of cognitive engagement. You won't just be transcribing characters; you will be interpreting information. For example, a Medical Data Specialist must differentiate between similar-sounding drug names, while an E-Commerce Specialist must understand product categorization hierarchies.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This is a premium tier within our remote workforce. It offers higher compensation rates reflecting the specialized nature of the work and the expertise you bring to the table.
        </p>
      </section>

      {/* ================== SPECIALIZED TRACKS ================== */}
      <section className="max-w-5xl mx-auto space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Specialized Tracks
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>E-Commerce Specialist:</strong> Upload products to platforms like Shopify/Amazon. Write product descriptions, categorize SKUs, and manage inventory spreadsheets. Requires attention to product specs.
          </li>
          <li>
            <strong>Legal Data Processor:</strong> Digitize court records, contracts, and affidavits. Format legal briefs according to strict citations. Requires familiarity with legal terminology.
          </li>
          <li>
            <strong>Medical Records Clerk:</strong> Update patient records, process insurance claim forms, and transcribe clinical notes. HIPAA compliance and knowledge of medical coding is a plus.
          </li>
          <li>
            <strong>Real Estate Data Entry:</strong> Manage property listings, update CRM databases with lead information, and extract data from deed records. Accuracy in numbers and addresses is critical.
          </li>
        </ul>
      </section>

      {/* ================== KEY RESPONSIBILITIES ================== */}
      <section className="max-w-5xl mx-auto space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Key Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Data Interpretation:</strong> Analyze source documents to understand context before entering data, ensuring logical consistency.</li>
          <li><strong>Terminology Check:</strong> Correctly spell and format industry-specific terms (e.g., medical diagnoses, legal statutes, technical specs).</li>
          <li><strong>Categorization:</strong> Accurately sort and tag data based on complex category trees or filing systems.</li>
          <li><strong>Quality Assurance:</strong> Perform self-audits to ensure data meets strict regulatory or operational standards.</li>
          <li><strong>Research:</strong> Occasionally research missing information to complete a record.</li>
          <li><strong>Format Standardization:</strong> Convert raw data into standardized formats required by specific industry software (e.g., CSV for bulk uploads, XML for medical records).</li>
        </ul>
      </section>

      {/* ================== QUALIFICATIONS & REQUIREMENTS ================== */}
      <section className="max-w-5xl mx-auto space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Qualifications & Requirements</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Domain Knowledge:</strong> Candidates must demonstrate prior experience or educational background in their chosen track. A portfolio or work history proving familiarity is required.</li>
          <li><strong>Experience:</strong> Minimum 1 year in a relevant field (paralegal, medical receptionist, e-commerce admin).</li>
          <li><strong>Education:</strong> Bachelor's degree preferred, or relevant certification (e.g., Medical Coding Certificate).</li>
          <li><strong>Technical Skills:</strong> Proficiency in Excel (VLOOKUP, Pivot Tables) and familiarity with industry-specific tools (CRM, CMS, EHR systems).</li>
          <li><strong>Attention to Detail:</strong> Ability to spot nuances and errors that a general typist might miss.</li>
          <li><strong>Data Privacy:</strong> Understanding of data privacy laws (GDPR, HIPAA, etc.).</li>
          <li><strong>Communication:</strong> Strong written English to generate reports or communicate discrepancies clearly.</li>
        </ul>
      </section>

      {/* ================== WHY JOIN AS SPECIALIST ================== */}
      <section className="max-w-5xl mx-auto space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Join as a Specialist?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Higher Pay Rates:</strong> Earn significantly more per project compared to general typing tasks due to specialized skill set.</li>
          <li><strong>Professional Growth:</strong> Stay sharp in your field while working remotely. Perfect for professionals on a career break or students in specialized courses.</li>
          <li><strong>Exclusive Projects:</strong> Access to long-term, higher-volume contracts from premium clients who value quality over speed.</li>
          <li><strong>Networking:</strong> Work with like-minded professionals and gain exposure to international business standards.</li>
        </ul>
      </section>

      {/* ================== CTA / APPLY ================== */}
      <section className="relative w-full py-20 overflow-hidden rounded-3xl shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-10">
          <Image
            src="/data-entry.jpg" // Replace with your image path
            alt="Industry Specialist Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-12 text-center max-w-3xl mx-auto space-y-6 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold">Apply for a Specialized Role</h3>
          <p className="text-sm sm:text-base">
            Use your expertise to earn more. Tell us which industry track you are applying for.
          </p>
          <button className="px-8 py-4 bg-indigo-600 rounded-2xl font-semibold shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300">
            Apply Now via Email
          </button>
          <p className="text-xs text-gray-200">
            Clicking above will open your email app. Please specify your industry track.
          </p>
        </div>
      </section>

    </div>
    </div>
  )
}

export default page
