"use client"
import { Clock, FolderKanban, Wallet, TrendingUp } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const CareerPart1 = () => {
  const benefits = [
    {
      title: "Flexible Remote Work",
      desc: "Weekend work, night shifts, or full-time — design your own schedule.",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Diverse Project Portfolio",
      desc: "Steady projects from PDF typing to Excel data entry for global B2B clients.",
      icon: <FolderKanban className="w-6 h-6" />,
    },
    {
      title: "Reliable Payments",
      desc: "Transparent payouts with daily (project-based) and weekly transfers.",
      icon: <Wallet className="w-6 h-6" />,
    },
    {
      title: "Growth Opportunities",
      desc: "Start entry-level and grow into advanced Virtual Assistant roles.",
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  // Container variants for staggered animation
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25, // each card animates 0.25s after the previous
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="w-full py-24 bg-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#362F4F] mb-4">
            Why Choose a Career with Us?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stable, flexible, and genuine remote work opportunities designed around your lifestyle.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              className="relative"
              variants={cardVariants} // apply staggered animation
            >

              {/* Large Background Number */}
              <span className="absolute top-7 sm:-top-6 left-0 text-[80px] sm:text-[110px] font-extrabold text-[#362F4F]/5 select-none">
                {`0${i + 1}`}
              </span>

              <div className="relative z-10">
                <div className="text-[#362F4F] mb-4">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-[#362F4F] mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default CareerPart1;
