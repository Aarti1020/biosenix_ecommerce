"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const InternshipDropdown = () => {
  const [activeMenu, setActiveMenu] = useState("locations");
  const router = useRouter();

  // 🔥 Convert name → slug
  const slugify = (text) =>
    text.toLowerCase().replace(/\s+/g, "-");

  // 🔥 Handle click for location routing
const handleLocationClick = (name) => {
  if (name.toLowerCase() === "work from home") {
    router.push("/internships/remote");
  } else {
    const state = name.toLowerCase().replace("wfh in ", "");
    router.push(`/internships/${state.replace(/\s+/g, "-")}`);
  }
};

  // 🔥 Dynamic Menu Data (UNCHANGED UI)
  const menuData = {
    locations: [
      { name: "Work From Home", path: "/internships/wfh" },
      { name: "WFH in Delhi", path: "/internships/delhi" },
      { name: "WFH in Maharashtra", path: "/internships/maharashtra" },
      { name: "WFH in Karnataka", path: "/internships/karnataka" },
      { name: "WFH in Tamil Nadu", path: "/internships/tamil-nadu" },
      { name: "WFH in Telangana", path: "/internships/telangana" },
      { name: "WFH in Andhra Pradesh", path: "/internships/andhra-pradesh" },
      { name: "WFH in Gujarat", path: "/internships/gujrat" },
      { name: "WFH in Madhya Pradesh", path: "/internships/madhya-pradesh" },
      { name: "WFH in Rajasthan", path: "/internships/rajasthan" },
      { name: "WFH in Haryana", path: "/internships/haryana" },
      { name: "WFH in Uttar Pradesh", path: "/internships/uttar-pradesh" },
      { name: "WFH in Bihar", path: "/internships/bihar" },
      { name: "WFH in Jharkhand", path: "/internships/jharkhand" },
      
    ],
    profile: [
      { name: "Data Entry Operator", path: "/internships/web-dev" },
      { name: "Computer Operator", path: "/internships/android" },
      { name: "Back Office Executive", path: "/internships/data-science" },
      { name: "Big Data Specialist", path: "/internships/data-science" },
      { name: "Software Developer", path: "/internships/data-science" },
      { name: "Website Developer", path: "/internships/data-science" },
      { name: "Graphic Designer", path: "/internships/data-science" },
      { name: "Digital Marketer", path: "/internships/data-science" },
      { name: "Video Editor", path: "/internships/data-science" },
      { name: "Typiest", path: "/internships/data-science" },
    ],
    categories: [
      { name: "Advertsing & Branding ", path: "/internships/finance" },
      { name: "Information Technology", path: "/internships/marketing" },
      { name: "Back Office", path: "/internships/engineering" },
      { name: "Marketing", path: "/internships/finance" },
      { name: "Part Time WFH", path: "/internships/finance" },
      { name: "Full Time WFH", path: "/internships/finance" },
       
    ],
    courses: [
      { name: "Captcha Processing Executive Course", path: "/courses/captcha-processing" },
      { name: "Document Conversion Specialist Course", path: "/courses/document-conversion" },
      { name: "Data Segregation Specialist Course", path: "/courses/data-segregation" },
      { name: "Full Stack Development Course", path: "/courses/full-stack-development" },
      { name: "Data Science Course", path: "/courses/data-science" },
      { name: "Digital Marketing Course", path: "/courses/digital-marketing" },
    ],
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[500px] w-full m-1 p-2">
      
      {/* 🔹 LEFT COLUMN */}
      <div className="flex flex-col gap-3 sm:border-r border-gray-300 sm:pr-5">
        
        <span
          onMouseEnter={() => setActiveMenu("locations")}
          onClick={() => setActiveMenu("locations")}
          className={`cursor-pointer ${
            activeMenu === "locations"
              ? "text-blue-600 font-semibold"
              : "font-semibold text-gray-600"
          }`}
        >
          Top Locations
        </span>

        <span
          onMouseEnter={() => setActiveMenu("profile")}
          onClick={() => setActiveMenu("profile")}
          className={`cursor-pointer ${
            activeMenu === "profile"
              ? "text-blue-600 font-semibold"
              : "font-semibold text-gray-600"
          }`}
        >
          Profile
        </span>

        <span
          onMouseEnter={() => setActiveMenu("categories")}
          onClick={() => setActiveMenu("categories")}
          className={`cursor-pointer ${
            activeMenu === "categories"
              ? "text-blue-600 font-semibold"
              : "font-semibold text-gray-600"
          }`}
        >
          Top Categories
        </span>

        <span
          onMouseEnter={() => setActiveMenu("courses")}
          onClick={() => setActiveMenu("courses")}
          className={`cursor-pointer ${
            activeMenu === "courses"
              ? "text-blue-600 font-semibold"
              : "font-semibold text-gray-600"
          }`}
        >
          Online Placement Courses
        </span>
      </div>

      {/* 🔹 RIGHT COLUMN */}
      <div className="flex flex-col gap-2 pl-0 sm:pl-3">
        {menuData[activeMenu]?.map((item, index) => (
          <span
            key={index}
            onClick={() => {
              if (activeMenu === "locations") {
                handleLocationClick(item.name); // 🔥 only locations use routing
              }
            }}
            className="cursor-pointer hover:text-blue-600 transition font-semibold text-gray-600"
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default InternshipDropdown;