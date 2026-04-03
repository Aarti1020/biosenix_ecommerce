import ImageSection from '@/Ui/ImageSection'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className=' w-full overflow-hidden'>
        <ImageSection title={"Transcriptionist"}/>
    <div className="bg-gray-50 text-gray-800 px-6 sm:px-12 md:px-24 py-16 space-y-16">

      {/* ================== HERO / JOB INTRO ================== */}
      <section className=" bg-gray-700  text-white text-center max-w-4xl mx-auto space-y-4n  py-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Transcriptionist
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Turn voice into value. We are looking for keen listeners to join our transcription team.
        </p>

        <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4 text-sm sm:text-base text-gray-400 font-medium">
          <span>🎧 Audio-to-Text</span>
          <span>💻 Work from Anywhere</span>
          <span>⏱ Flexible Deadlines</span>
        </div>
      </section>

      {/* ================== ABOUT THE JOB ROLE ================== */}
      <section className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          About the Job Role
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Hire in Global is expanding its team of professional Transcriptionists. In this role, you will act as the bridge between spoken words and written records. You will listen to audio recordings or watch video footage and convert the speech into accurate, formatted text documents.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Unlike standard data entry, this role requires active listening and critical thinking. You must be able to differentiate between speakers, understand various accents, and capture dialogue with high fidelity. Whether it’s a medical dictation, a legal proceeding, a business meeting, or a podcast interview, your work ensures that important conversations are preserved and accessible.
        </p>
        <p className="text-gray-700 leading-relaxed">
          This is a performance-driven role perfect for individuals with strong language skills and the ability to focus for extended periods. If you have a good ear and fast fingers, we have a steady stream of projects waiting for you.
        </p>
      </section>

      {/* ================== TYPES OF TRANSCRIPTION PROJECTS ================== */}
      <section className="max-w-5xl mx-auto space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Types of Transcription Projects</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Medical Transcription:</strong> Converting voice reports by physicians into text format. Requires knowledge of medical terminology.</li>
          <li><strong>Legal Transcription:</strong> Transcribing court hearings, interrogations, and legal dictations. Strict adherence to verbatim formatting.</li>
          <li><strong>General / Business:</strong> Meeting minutes, conference calls, interviews, and seminars. Focus on clean read (removing "umms" and "ahhs").</li>
          <li><strong>Media & Captioning:</strong> Creating subtitles for YouTube videos, movies, and TV shows with precise time-coding.</li>
        </ul>
      </section>

      {/* ================== KEY RESPONSIBILITIES ================== */}
      <section className="max-w-5xl mx-auto space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Key Responsibilities</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Audio Processing:</strong> Listen to recorded dictations or other audio files and interpret them into written text using transcription software.</li>
          <li><strong>Review & Edit:</strong> Review drafts for spelling, grammar, and formatting errors. Ensure the text captures the meaning of the speaker accurately.</li>
          <li><strong>Speaker Identification:</strong> Correctly label different speakers in a multi-person conversation (e.g., Interviewer vs. Respondent).</li>
          <li><strong>Time Coding:</strong> Insert timestamps at specific intervals or upon request to allow clients to locate specific parts of the audio.</li>
          <li><strong>Research:</strong> Use Google and other tools to verify the spelling of specific names, technical terms, or locations mentioned in the audio.</li>
          <li><strong>Confidentiality:</strong> Adhere to strict privacy guidelines, especially when handling legal or medical data.</li>
          <li><strong>Formatting:</strong> Apply client-specific formatting rules (Verbatim vs. Clean Read) to the final document.</li>
        </ul>
      </section>

      {/* ================== QUALIFICATIONS & REQUIREMENTS ================== */}
      <section className="max-w-5xl mx-auto space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Qualifications & Requirements</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Critical Skill:</strong> Listening Accuracy — Candidates must possess excellent auditory skills to decipher audio with background noise, overlapping speech, or difficult accents. Minimum typing speed: 45-60 WPM.</li>
          <li><strong>Language Proficiency:</strong> Exceptional command of English grammar, punctuation, and spelling. Knowledge of additional languages is a bonus.</li>
          <li><strong>Typing Speed:</strong> Fast and accurate touch typing skills to keep up with the audio flow.</li>
          <li><strong>Technical Equipment:</strong> High-quality headset (noise-canceling preferred) and reliable computer. Foot pedal optional.</li>
          <li><strong>Software Knowledge:</strong> Familiarity with transcription tools like Express Scribe, FTW Transcriber, or willingness to learn.</li>
          <li><strong>Attention to Detail:</strong> Spot inconsistencies and ensure transcript matches audio 100%.</li>
          <li><strong>Research Skills:</strong> Resourcefulness in finding correct spelling of unfamiliar terms or proper nouns.</li>
          <li><strong>Education:</strong> High school diploma or GED required. Certification in Medical/Legal transcription valued.</li>
        </ul>
      </section>

      {/* ================== WHY JOIN US ================== */}
      <section className="max-w-5xl mx-auto space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Become a Transcriptionist with Us?</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Autonomy:</strong> Choose projects that interest you and work on your own timeline.</li>
          <li><strong>Skill Enhancement:</strong> Improve your typing speed, listening skills, and general knowledge across industries.</li>
          <li><strong>Competitive Rates:</strong> Paid per audio minute. Experienced transcriptionists earn higher rates for complex audio.</li>
          <li><strong>Steady Work:</strong> Continuous queue of files, minimizing downtime.</li>
          <li><strong>Supportive Team:</strong> QA team provides feedback to help you improve and qualify for higher-paying tiers.</li>
        </ul>
      </section>

      {/* ================== CTA WITH BACKGROUND IMAGE ================== */}
      <section className="relative w-full py-20 overflow-hidden rounded-3xl shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-10">
          <Image
            src="/data-entry.jpg" // Replace with your image path
            alt="Transcription Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-12 text-center max-w-3xl mx-auto space-y-6 text-white">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Have a Good Ear? Join Us!
          </h3>
          <p className="text-sm sm:text-base">
            If you are ready to turn your listening skills into a career, send us your application today.
          </p>
          <button className="px-8 py-4 bg-indigo-600 rounded-2xl font-semibold shadow-lg hover:bg-indigo-700 hover:scale-105 transition-all duration-300">
            Apply Now via Email
          </button>
          <p className="text-xs text-gray-200">
            Clicking above will open your email app with a pre-filled template.
          </p>
        </div>
      </section>

    </div>
    </div>
  )
}

export default page
