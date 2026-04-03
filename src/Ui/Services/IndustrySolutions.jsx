"use client"
import { BriefcaseMedicalIcon, Scale3d, ShoppingBasket } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const IndustrySolutions = () => {
  const industries = [
    {
      title: "Medical Data Entry",
      description:
        "Digitize patient records, lab reports, and prescriptions while maintaining strict confidentiality.",
      icon: <BriefcaseMedicalIcon className="w-8 h-8 sm:w-10 sm:h-10" />,
    },
    {
      title: "Legal Data Entry",
      description:
        "Type and format legal briefs, court transcripts, and case files with extreme precision and care.",
      icon: <Scale3d className="w-8 h-8 sm:w-10 sm:h-10" />,
    },
    {
      title: "E-Commerce Product Entry",
      description:
        "Manage product catalogs with accurate entry of titles, descriptions, SKUs, and prices.",
      icon: <ShoppingBasket className="w-8 h-8 sm:w-10 sm:h-10" />,
    },
  ];

  return (
    <section className=" relative w-full py-16 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
         <div className="absolute inset-0 -z-10">
                <Image
                  src="/services.jpg" // Replace with your background image
                  alt="Trusted Section Background"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
        {/* Header */}
        <div className="text-center">
          <h2 className="text-xl sm:text-5xl font-extrabold  text-gray-300 mb-4">
            Specialized Industry Solutions
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm text-balance sm:text-base">
            Data services tailored to professional requirements, delivered with precision and care.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-8 sm:gap-6">
          {industries.map((industry, idx) => (
            <motion.div
            initial={{ opacity: 0, y: 20, visibility: "hidden" }}
            whileInView={{ opacity: 1, y: 0, visibility: "visible" }}
            viewport={{ once: true }} // animate only first time in view
            transition={{ delay: idx * 0.15, duration: 0.8, ease: "easeOut" }}
              key={idx}
              className="relative flex flex-col items-center sm:items-start bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-transform duration-300 flex-1"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 sm:w-16 sm:h-16 bg-[#362F4F] text-white rounded-full flex items-center justify-center text-2xl sm:text-3xl -mt-12 sm:-mt-12 shadow-md">
                {industry.icon}
              </div>

              {/* Content */}
              <div className="mt-6 text-center sm:text-left">
                <h3 className="text-[#362F4F] font-bold text-xl sm:text-2xl mb-2">{industry.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{industry.description}</p>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-6 right-6 w-12 h-12 bg-[#362F4F] opacity-10 rounded-full hidden sm:block"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
