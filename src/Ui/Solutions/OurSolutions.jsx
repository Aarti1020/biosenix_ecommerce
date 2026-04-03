"use client"
import {
  HeartPulse,
  Scale,
  ShoppingCart,
  Building2,
  Landmark,
  GraduationCap,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
const OurSolutions = () => {
  const industries = [
    {
      title: "Healthcare & Medical",
      focus: "Accuracy and patient confidentiality",
      icon: <HeartPulse className="w-6 h-6" />,
      services: [
        "Medical Data Entry",
        "Claims Processing",
        "Prescription Digitization",
      ],
      benefit: "Strict privacy protocols for patient data security.",
    },
    {
      title: "Legal & Law Firms",
      focus: "Formatting and retrieving information",
      icon: <Scale className="w-6 h-6" />,
      services: [
        "Case File Digitization",
        "Legal Transcription",
        "Contract Formatting",
      ],
      benefit: "Rapid turnaround times for urgent court deadlines.",
    },
    {
      title: "E-Commerce & Retail",
      focus: "Volume and speed to market",
      icon: <ShoppingCart className="w-6 h-6" />,
      services: [
        "Product Data Entry",
        "Catalog Management",
        "Invoice Processing",
      ],
      benefit: "Scale inventory faster without hiring full-time staff.",
    },
    {
      title: "Real Estate",
      focus: "Database management",
      icon: <Building2 className="w-6 h-6" />,
      services: [
        "Property Listing Entry",
        "CRM Management",
        "Document Conversion",
      ],
      benefit: "Keep listings accurate and up-to-date daily.",
    },
    {
      title: "Corporate & Finance",
      focus: "Big Data and organization",
      icon: <Landmark className="w-6 h-6" />,
      services: [
        "Form Processing",
        "Financial Data Entry",
        "Archive Digitization",
      ],
      benefit: "Turn years of physical data into searchable archives.",
    },
    {
      title: "Academic & Education",
      focus: "Research and formatting",
      icon: <GraduationCap className="w-6 h-6" />,
      services: [
        "Thesis Typing",
        "Research Data Entry",
        "Lecture Transcription",
      ],
      benefit: "Perfect formatting according to university guidelines.",
    },
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-16">

        {/* Section Header */}
        <div className="text-center">
          <motion.h2
             initial={{opacity:0, x:-40}}
            animate={{opacity:1,x:1}}
            transition={{duration:1,delay:0.5}}
          className="text-3xl sm:text-5xl font-extrabold text-[#362F4F] mb-4">
            Industry Workflow Solutions
          </motion.h2>
          <motion.p 
            initial={{opacity:0, x:-40}}
            animate={{opacity:1,x:1}}
            transition={{duration:1, delay:0.70}}
          className="text-gray-600 max-w-2xl mx-auto">
            Tailored data services designed to meet the operational needs of
            different professional industries.
          </motion.p>
        </div>

        {/* Industry Blocks */}
        <div className="flex flex-col gap-12">
          {industries.map((industry, idx) => (
            <motion.div
            initial={{opacity:0, x:-40}}
            whileInView={{opacity:1,x:1}}
            transition={{ delay:idx*0.15,duration:1}}
              key={idx}
              className="border-l-4 border-[#362F4F] pl-6 flex flex-col gap-4"
            >
              {/* Title + Icon */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#362F4F] text-white rounded-full flex items-center justify-center">
                  {industry.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#362F4F]">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Focus on {industry.focus}
                  </p>
                </div>
              </div>

              {/* Services */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                {industry.services.map((service, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#362F4F] rounded-full"></span>
                    {service}
                  </li>
                ))}
              </ul>

              {/* Key Benefit */}
              <div className="bg-[#362F4F]/5 text-[#362F4F] text-sm font-medium px-4 py-2 rounded-lg w-fit">
                Key Benefit: {industry.benefit}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurSolutions;
