"use client";

import { signIn } from "next-auth/react";
import { Mail, MessageCircle, MessageCircleMore } from "lucide-react";
import Image from "next/image";

export default function LoginBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-700 to-blue-500 py-10 px-6 md:px-16 ">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* LEFT TEXT */}
        <h1 className="text-white text-2xl md:text-3xl font-bold max-w-lg">
          Empower your career with Ebrain Solution today
        </h1>

        {/* RIGHT BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4">
          
          {/* Google Button */}
          <a
              href="https://forms.gle/REvXLg54gmGTgSAy7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white text-gray-800 px-5 py-3 rounded-md shadow hover:scale-105 transition-transform duration-200"
          >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                width={20}
                height={20}
                className="mt-1"
              />
            Google Form
          </a>

        <button
            type="button"
            onClick={() =>
            window.open(
            "https://wa.me/918485073188",
            "_blank",
            "noopener,noreferrer"
            )
            }
            className="flex items-center gap-3 bg-blue-800 text-white px-5 py-3 rounded-md shadow hover:scale-105 transition-transform duration-200"
          >
  <MessageCircleMore size={18} />
  Chat Support
</button>

        </div>
      </div>

    

    </div>
  );
}