"use client"
import React from "react";
import { motion } from "framer-motion";

const RecruitmentProcess = () => {
  const steps = [
    {
      title: "CV Submission & Review",
      description:
        "Submit your resume by emailing join@hireinglobal.com. Our HR team carefully reviews every application to assess experience and background.",
    },
    {
      title: "Candidate Evaluation",
      description:
        "Based on your profile strength, you will follow one of two paths: Direct Interview (for highly qualified candidates) or Skill Assessment (accuracy and competency evaluation).",
    },
    {
      title: "Verification & Onboarding",
      description:
        "Once your identity and skills are verified, you gain access to our secure worker portal and begin receiving legitimate data entry projects.",
    },
  ];

  // Motion variants for each step
  const stepVariants = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="w-full py-24 bg-[#f9fafc]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#362F4F] mb-4">
            Our Recruitment Process
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We maintain high standards for our clients. Our structured
            selection process verifies both your identity and your ability
            to deliver accurate, error-free work.
          </p>
        </motion.div>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden sm:flex absolute left-1/2 top-0 h-full w-[2px] bg-[#362F4F]/20 transform -translate-x-1/2"></div>
          <div className="sm:hidden absolute left-1 top-0 h-full w-[2px] bg-[#362F4F]/20 transform -translate-x-1/2"></div>

          <div className="flex flex-col gap-20">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                variants={stepVariants}
              >

                {/* Step Content */}
                <div className="ml-5 sm:ml-0 md:w-5/12 text-center md:text-left">
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-[#362F4F]/60">
                      Step {index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#362F4F] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Timeline Dot */}
                <motion.div
                  className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#362F4F]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                ></motion.div>

                {/* Mobile Dot */}
                <motion.div
                  className="sm:hidden absolute left-1 transform -translate-x-1/2 w-6 h-6 rounded-full bg-[#362F4F]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                ></motion.div>

              </motion.div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default RecruitmentProcess;
