"use client"
import React from 'react';
import { motion } from 'framer-motion';
const HeroSection = () => {
  const services = [
    {
      title: "Document Conversion Services",
      description:
        "Unlock the value of your static documents. We convert non-editable files into fully formatted, editable digital assets.",
    },
    {
      title: "PDF to Word & Excel Conversion",
      description:
        "We convert PDF files into editable Word documents (.doc, .docx) or Excel spreadsheets (.xls, .csv). Our human typists preserve formatting, fonts, tables, and headers perfectly.",
    },
    {
      title: "Image to Text Data Entry",
      description:
        "Extract text from scanned images (JPEG, PNG, TIFF) into digital text formats. Ideal for archiving, book digitization, and preserving historical documents.",
    },
    {
      title: "Handwritten to Digital Typing",
      description:
        "Decipher handwriting from doctor’s notes, student manuscripts, old letters, or meeting minutes into clean, legible digital text with high accuracy.",
    },
    {
      title: "Data Entry & Management",
      description:
        "Accurate data entry to fuel your business decisions, allowing your team to focus on analysis rather than manual input.",
    },
    {
      title: "Bulk Excel Data Entry",
      description:
        "Handle large-scale Excel projects efficiently, ensuring proper sorting, categorization, and formula application.",
    },
    {
      title: "Online Form Filling & Processing",
      description:
        "Digitize manual forms from insurance claims, medical forms, or market surveys, following your exact guidelines.",
    },
    {
      title: "Copy Paste & Data Migration",
      description:
        "Migrate content from one CRM or CMS to another with precision, ensuring no data loss or corruption.",
    },
    {
      title: "Transcription Services",
      description:
        "Convert audio and video content into searchable, readable text for interviews, podcasts, webinars, and business meetings.",
    },
    {
      title: "Audio Transcription",
      description:
        "High-quality transcription with optional time-stamping. Our team handles various accents and background noise for clean transcripts.",
    },
  ];

  return (
    <section className="w-full py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        
        {/* Hero Header */}
        <div className="md:w-full flex flex-col justify-center gap-4 text-center md:text-left">
        <motion.h1
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="text-4xl md:text-5xl font-extrabold mb-4 "
>
  Our Services
</motion.h1>


      <motion.p
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }} 
        className="text-sm md:text-base text-gray-600 text-balance"
      >
        Comprehensive Data Entry & Document Digitization Services. From high-volume data processing to complex audio transcription, Hire in Global provides accurate, fast, and secure outsourcing solutions tailored to your business needs.
      </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              initial={{opacity:0, x:-40}}
              whileInView={{opacity:1,x:0}}
              transition={{delay:idx*0.15, duration:0.70}}
              key={idx}
              className=" border  bg-white/10  rounded-xl p-4 shadow-sm  transition-all hover:scale-110 hover:shadow-md   duration-200"
            >
              <h3 className="text-black font-bold text-lg mb-1">{service.title}</h3>
              <p className="text-gray-900 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
