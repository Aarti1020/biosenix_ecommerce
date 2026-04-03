"use client"
import { DatabaseBackup, Monitor, Zap } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
const BFR = () => {
  const features = [
    {
      icon: <Zap/>,
      title: "High-Speed Connectivity",
      description: "Redundant internet lines ensure uptime.",
    },
    {
      icon:<DatabaseBackup/>,
      title: "Data Backups",
      description: "Secure, encrypted backups prevent data loss.",
    },
    {
      icon: <Monitor/>,
      title: "Dedicated Hardware",
      description: "Modern workstations optimized for efficiency.",
    },
  ];

  const clients = [
    "Fortune 500 Companies",
    "Healthcare Providers",
    "Legal Firms",
    "Universities & Students",
    "E-commerce Owners",
  ];

  return (
    <section className="w-full py-16 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">

        {/* Features Row */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#362F4F] mb-4 text-center sm:text-left">
            Built for Reliability
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-3 bg-[#E0E7FF] rounded-xl p-4 shadow hover:shadow-md transition-all duration-200 flex-1"
                initial={{opacity:0, x:-30}}
                whileInView={{opacity:1, x:2}}
                transition={{delay:idx*0.15, duration:0.6, ease:'backOut'}}
              >
                <div className="text-3xl sm:text-4xl">{feature.icon}</div>
                <div>
                  <h2 className="text-[#362F4F] font-bold text-sm sm:text-base">{feature.title}</h2>
                  <p className="text-[#362F4F] text-xs sm:text-sm mt-1">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Clients Inline */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-[#362F4F] mb-2 text-center sm:text-left">
            Who We Serve
          </h2>
          <motion.div
           initial={{opacity:0, y:40}}
           whileInView={{opacity:1, y:2}}
           transition={{duration:1, ease:"easeOut"}}
         
          
          className="flex  flex-wrap-reverse sm:flex-row justify-center sm:justify-start gap-2">
            {clients.map((client, idx) => (
              <motion.span
              whileTap={{ scale:0.9}}
                key={idx}
                className="bg-[#D1D5DB] text-[#362F4F] px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
              >
                {client}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Guarantee Banner */}
        <motion.div
        
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  whileHover={{ y: -5, scale: 1.03 }}
  whileTap={{y:-5, scale:0.75}}
  transition={{ type: "spring", stiffness: 100, damping: 10 }}
 
        className="bg-[#362F4F] text-white rounded-xl p-6 shadow-lg flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-center w-full sm:w-[90%] mx-auto">
          <h2 className="text-lg sm:text-xl font-bold text-center sm:text-left flex-1">
            Our 100% Satisfaction Guarantee
          </h2>
          <p className="text-xs sm:text-sm mt-2 sm:mt-0 flex-1 text-center sm:text-left">
            We stand behind our work. If errors exceed our agreed accuracy threshold, we will rework the file immediately at no extra cost. Your satisfaction is our requirement for closure.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default BFR;
