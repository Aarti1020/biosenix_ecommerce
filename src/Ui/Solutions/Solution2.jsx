import { UserCog, Workflow, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

const Solution2 = () => {
  const features = [
    {
      title: "Dedicated Project Managers",
      description: "Single point of contact for seamless communication.",
      icon: <UserCog className="w-6 h-6" />,
    },
    {
      title: "Custom Workflows",
      description:
        "We adapt our software and entry methods to match your internal systems.",
      icon: <Workflow className="w-6 h-6" />,
    },
    {
      title: "Scalable Staffing",
      description:
        "We can ramp up our team size within 48 hours to meet seasonal spikes.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <section className="relative w-full py-24 overflow-hidden">
      
      {/* ✅ Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/waves.jpg"
          alt="Enterprise Solutions Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* ✅ Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row gap-16">
        
        {/* LEFT SIDE */}
        <div className="lg:w-1/2 flex flex-col gap-6 text-white">
          <div className="w-16 h-1 bg-white"></div>

          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            Enterprise Solutions <br /> (Custom Built)
          </h2>

          <p className="text-gray-200 text-sm sm:text-base max-w-md">
            Processing over 10,000+ documents per month? We provide fully
            dedicated teams structured specifically for enterprise-scale
            operations.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="lg:w-1/2 flex flex-col gap-10 border-l-2 border-white/30 pl-6">

          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4 group">

              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#362F4F] transition-all duration-300">
                {feature.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-200 max-w-sm">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Solution2;
