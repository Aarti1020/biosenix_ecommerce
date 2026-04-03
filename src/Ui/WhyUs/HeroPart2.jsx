"use client"
import React from 'react'
import { motion } from 'framer-motion'

const HeroPart2 = () => {
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
     <div className="md:w-1/2 flex flex-col  place-self-center gap-3">
          {cards.map((card, idx) => (
            <motion.div
              animate={{ y: [0, -20, 0] }} // move up and down
      transition={{
        duration: 2,
        repeat: Infinity,      // repeat forever
        repeatType: "loop",    // loop the animation
        ease:"easeInOut",
      }}
              key={idx}
              className={`flex flex-col md:flex-row items-center ${
                idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } gap-2`}
            >
              <div className="md:w-1/2 bg-white rounded-lg shadow-sm p-3 hover:scale-105 transition-transform duration-200">
                <h2 className={`text-sm font-bold mb-1 ${card.color}`}>
                  {card.title}
                </h2>
                <p className="text-xs text-gray-600">{card.description}</p>
              </div>
              <div className="md:w-1/2 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
  )
}

export default HeroPart2
