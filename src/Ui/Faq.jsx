"use client";

import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of projects can I submit?",
    answer:
      "You can submit documents, images, PDFs, audio files, or any data entry tasks. Our team will guide you through the proper submission process.",
  },
  {
    question: "How quickly will I get feedback?",
    answer:
      "Feedback is usually provided within 24-48 hours depending on the project size. We prioritize urgent tasks as well.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely! All submissions are protected by NDA and encrypted storage to ensure your data remains private.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We offer multiple payment options including NEFT, IMPS, and UPI. Payments are processed within 24 working hours of task approval.",
  },
];

const Faq = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10 bg-gray-50">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#362F4F] leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-gray-500 text-sm sm:text-base md:text-lg">
          Find answers to the most common questions about our services and processes.
        </p>
      </div>

      {/* ShadCN Accordion */}
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-2xl bg-white shadow-sm hover:shadow-md">
              <AccordionTrigger className="px-6 py-4 text-left text-gray-900 font-semibold text-base sm:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 text-gray-600 text-sm sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
