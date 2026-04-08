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

  // 🔥 Handle location routing
  const handleLocationClick = (name) => {
    if (name.toLowerCase() === "work from home") {
      router.push("/internships/remote");
    } else {
      const state = name.toLowerCase().replace("wfh in ", "");
      router.push(`/internships/${state.replace(/\s+/g, "-")}`);
    }
  };

  // 🔥 NEW: Handle profile routing
  const handleProfileClick = (name) => {
    const slug = slugify(name);
    router.push(`/internships/profile/${slug}`);
  };
  const handleCategoryClick = (name) => {
  const slug = slugify(name);
  router.push(`/internships/category/${slug}`);
};

  // 🔥 Menu Data (UNCHANGED)
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
      { name: "Data Entry Operator" },
      { name: "Computer Operator" },
      { name: "Back Office Executive" },
      { name: "Big Data Specialist" },
      { name: "Software Developer" },
      { name: "Website Developer" },
      { name: "Graphic Designer" },
      { name: "Digital Marketer" },
      { name: "Video Editor" },
      { name: "Typiest" },
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

      {/* LEFT */}
      <div className="flex flex-col gap-3 sm:border-r border-gray-300 sm:pr-5">

        {["locations", "profile", "categories", "courses"].map((menu) => (
          <span
            key={menu}
            onMouseEnter={() => setActiveMenu(menu)}
            onClick={() => setActiveMenu(menu)}
            className={`cursor-pointer ${
              activeMenu === menu
                ? "text-blue-600 font-semibold"
                : "font-semibold text-gray-600"
            }`}
          >
            {menu === "locations"
              ? "Top Locations"
              : menu === "profile"
              ? "Profile"
              : menu === "categories"
              ? "Top Categories"
              : "Online Placement Courses"}
          </span>
        ))}
      </div>

      {/* RIGHT */}
      <div className="flex flex-col gap-2 pl-0 sm:pl-3">
        {menuData[activeMenu]?.map((item, index) => (
          <span
            key={index}
              onClick={() => {
                if (activeMenu === "locations") {
                  handleLocationClick(item.name);
                } else if (activeMenu === "profile") {
                  handleProfileClick(item.name);
                } else if (activeMenu === "categories") {
                  handleCategoryClick(item.name);
                } else {
                  router.push(item.path);
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