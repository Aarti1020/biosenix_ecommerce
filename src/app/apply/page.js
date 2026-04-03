import Link from "next/link";
import React from "react";

const page = () => {
  const positions = [
    {
      title: "E-book Typing Jobs",
      herf:'typing-project',
      description:
        "Simple typing work: type content from book page images directly into Notepad. No complex software required.",
      tasks: ["Type in Notepad", "Simple Image to Text", "Flexible Work Timing"],
    },
    {
      title: "Data Entry Specialist",
       herf:'data-entry',
      description:
        "Input alpha-numeric data into corporate systems. Update CRM records and manage spreadsheets with precision.",
      tasks: ["Excel & database management", "Online form processing", "Data verification protocols"],
    },
    {
      title: "Document Control",
       herf:'document',
      description:
        "Restore and digitize non-editable files. Correct OCR errors and manually re-type content from PDF/image sources.",
      tasks: ["PDF to Word conversion", "Image-to-text transcription", "Layout reconstruction"],
    },
    {
      title: "Audio Transcriptionist",
       herf:'audio',
      description:
        "Convert spoken audio into written text. Accurately transcribe interviews, meetings, and dictations.",
      tasks: ["Audio/Video transcription", "Time-stamping services", "Subtitling assistance"],
    },
    {
      title: "Sector Specialist",
       herf:'Industry',
      description:
        "Specialized data roles needing familiarity with medical, legal, or retail terminology.",
      tasks: ["Medical/Legal data entry", "E-commerce product logs", "Technical formatting"],
    },
  ];

  return (
    <section className="w-full py-24 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#362F4F] mb-4">
            Available Remote Positions
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse our current openings. All roles are location-independent and managed via our centralized cloud platform.
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {positions.map((job, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#362F4F]/20 p-6 shadow hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              {/* Job Info */}
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-bold text-[#362F4F]">{job.title}</h2>
                <p className="text-gray-600 text-sm">{job.description}</p>
                <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1 mt-2">
                  {job.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>

              {/* Apply Button */}
              <Link href={job?.herf}>
              <button  className="mt-4 bg-[#362F4F] text-white rounded-lg py-2 px-4 hover:bg-[#2c263f] transition-colors duration-200 font-semibold">
                View Details & Apply
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
