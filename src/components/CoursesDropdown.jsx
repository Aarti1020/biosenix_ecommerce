"use client"
import Link from "next/link"

const CoursesDropdown = () => {
  const coursesData = [
    {
      title: "Certification Courses",
      items: [
        { name: "Artificial Intelligence and Machine Learning", path: "/courses/artificial-intelligence" },
        { name: "Generative AI", path: "/courses/generative-ai" },
        { name: "Web Development with AI", path: "/courses/web-development" },
        { name: "Digital Marketing with AI", path: "/courses/digital-marketing" },
        { name: "Machine Learning with AI", path: "/courses/fullstack" },
        { name: "Advanced Excel with AI", path: "/courses/fullstack" },
      ],
    },
    {
      title: "Online Placement Courses",
      items: [
         { name: "Captcha Processing Executive Course", path: "/courses/captcha-processing" },
        { name: "Document Conversion Specialist Course", path: "/courses/document-conversion" },
        { name: "Data Segregation Specialist Course", path: "/courses/data-segregation" },
   
        { name: "Full Stack Development Course", path: "/courses/full-stack-development" },
        { name: "Data Science Course", path: "/courses/data-science" },
        
        { name: "Digital Marketing Course", path: "/courses/digital-marketing" },
             ],
    },
     
  ]

  return (
    
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-[1100px] w-full  p-5 mx-auto ">
      {coursesData.map((section, index) => (
        <div key={index} className="flex flex-col gap-2 sm:border-r border-gray-300 ">
          
       <h3 className="font-bold">
          {section.title}
        </h3>

          {section.items.map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className="hover:text-blue-600 transition font-semibold text-gray-700 p-1"
            >
              {item.name}
          {(
              item.name.toLowerCase() === "captcha processing executive course" ||
              item.name.toLowerCase() === "document conversion specialist course" ||
              item.name.toLowerCase() === "data segregation specialist course"
            ) && (
          <span className="absolute bg-orange-500 text-white text-xs px-2 py-1 rounded-lg mx-2">
              Trending
          </span>
          )}
            </Link>
          ))}

         

        </div>
      ))}

    </div>
    
  )
}

export default CoursesDropdown