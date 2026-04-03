"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const HeroSection = () => {
    const cards = [
        {
          title: "Accuracy",
          color: "text-blue-700",
          description: "Two-Tier review ensures 99.9% precision",
        },
        {
          title: "Security",
          color: "text-blue-400",
          description: "Encrypted and confidential processing",
        },
        {
          title: "Scalability",
          color: "text-blue-600",
          description: "Handle large volumes instantly",
        },
        {
          title: "Cost-Effective",
          color: "text-blue-300",
          description: "Pay only for what’s delivered",
        },
        {
          title: "Human Advantage",
          color: "text-blue-900",
          description: "Experts handle handwritten & tricky data",
        },
        {
          title: "24/7 Workflow",
          color: "text-blue-300",
          description: "Global team works while you sleep",
        },
      ];

  return (
    <div className="w-full  py-12">
      <div className=" flex flex-col md:flex-row gap-10 px-6">
        {/* Hero Intro */}
        <motion.div
         initial={{ opacity:0, x:-50}}
         animate={{opacity:1, x:1}}
         transition={{duration:0.50}}
        className="md:w-1/2 flex flex-col justify-center gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#362F4F]">
            Why Us
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Hire in Global combines human intelligence with technology to deliver fast, accurate, and secure data processing.
          </p>
          <p className=" text-sm md:text-base text-gray-600 ">
            At Hire in Global, we believe that data is the lifeblood of modern business. One wrong digit in a financial report or one misspelled name in a legal contract can have serious consequences.

Unlike software that relies on "best guesses," our approach combines advanced technology with human intelligence. We don't just type what we see; we understand context, format, and nuance. When you choose us, you are choosing a team dedicated to 99.9% accuracy.

Unmatched Accuracy
We utilize a Two-Tier Review process to catch errors that automated OCR tools miss.

Step 1: Data entered by a specialist.
Step 2: Senior QA editor reviews against source.
Result: 99.9% Verified Precision.
Data Security
We understand you are handing over sensitive information. Security is our priority.

NDAs: Available for any project.
Encryption: Secure 256-bit file transfer channels.
Privacy: Data deleted upon project completion.

          </p>
        </motion.div>

        {/* Zig-Zag Compact Cards */}
       <div className="md:w-1/2 flex flex-col place-self-center gap-3">
  {cards.map((card, idx) => (
    <motion.div
      animate={{ y: [0, -20, 0] }} // move up and down
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      key={idx}
      className={`flex flex-col md:flex-row items-center gap-2
        ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
    >
      {/* Card Content */}
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-sm p-3 hover:scale-105 transition-transform duration-200">
        <h2 className={`text-sm font-bold mb-1 ${card.color}`}>{card.title}</h2>
        <p className="text-xs text-gray-600">{card.description}</p>
      </div>

      {/* Spacer for Zig-Zag (only on desktop) */}
      <div className="hidden md:block md:w-1/2"></div>
    </motion.div>
  ))}
</div>
        {/* <div
        className="relative w-full h-[500px]  flex items-center justify-center"
        >
        <Image
         src='/whyUs.svg'
          fill
          alt="hii"
          className=" object-contain"
        />
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
