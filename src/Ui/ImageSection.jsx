import Image from 'next/image'
import React from 'react'

const ImageSection = ({title}) => {
  return (
 <section className="relative w-full h-[300px]  flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute top-0 left-0 inset-0 z-10">
        <Image
          src="/stefan-stefancik-5p_7M5MP2Iw-unsplash.jpg" // Replace with your image path
          alt="Why Us Background"
          fill
          className=' object-cover  '
          priority
        />
        {/* Optional overlay for glass/frosted effect */}
        <div className="absolute inset-0 bg-black/40 "></div>
      </div>

      {/* Content */}
      <div className="relative z-12 w-full mx-auto  flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-4xl font-bold mb-4 text-balance text-start">{title}</h2>
        <p className="text-lg  text-start text-balance">
          Data Entry Work From Home & Online Typing Jobs | WECAT MANAGEMENT SOLUTIONS PRIVATE LIMITED
        </p>
      </div>
    </section>

  )
}

export default ImageSection
