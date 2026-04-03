import Image from "next/image";
import React from "react";

const QualityProcess = () => {
  const steps = [
    {
      number: "1",
      title: "Entry",
      description:
        "A dedicated specialist completes the initial data entry or typing work.",
    },
    {
      number: "2",
      title: "Review",
      description:
        "A separate Quality Assurance (QA) editor reviews the work against the original source file.",
    },
    {
      number: "3",
      title: "Validation",
      description:
        "For numerical data, we use validation tools to ensure logical consistency.",
    },
    {
      number: "4",
      title: "Delivery",
      description:
        "The final file is securely delivered to you only after passing our quality check.",
    },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/service2.jpg"
          alt="Quality Assurance Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0  bg-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col gap-12">
        
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-black mb-3">
            Our Quality Assurance Process
          </h2>
        </div>

        {/* Steps Timeline */}
        <div className="relative border-l-2 border-black pl-10 flex flex-col gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col sm:flex-row gap-4 items-center">
              
              {/* Step Number */}
              <div className="w-12 h-12 bg-white text-[#362F4F] font-bold rounded-full flex items-center justify-center text-lg shadow-md">
                {step.number}
              </div>

              {/* Step Content */}
              <div>
                <h3 className="text-xl font-bold text-black mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityProcess;
