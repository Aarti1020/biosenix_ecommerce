"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, Briefcase } from "lucide-react";
import Link from "next/link";
import LogoCarosel from "@/components/LogoCarosel";

const slides = [
  {
    image: "/carosel1.jpeg",
    mobileImage: "/mobile_view_carosel.jpeg",
    badge: "Trusted Platform",
    heading: "Access Real Projects &",
    highlight: "Remote Work",
    headingEnd: "Opportunities",
    highlightColor: "text-orange-400",
    description:
      "Join our platform to work on live projects, gain experience, and build a stable remote working career with continuous project opportunities.",
    primaryBtn: { label: "View Opportunities", href: "/internships" },
    secondaryBtn: { label: "Apply Now", href: "/internships" },
    primaryColor: "bg-orange-400 hover:bg-orange-300 text-white shadow-orange-500/30",
  },
  {
    image: "/carosel2.jpeg",
    mobileImage: "/carosel2-mobile-view.jpeg",
    badge: "Trusted Platform",
    heading: "Learn In-Demand Digital Skills with",
    highlight: "Practical Training",
    headingEnd: "Programs",
    highlightColor: "text-orange-400",
    description:
      "Our structured training and certification programs help individuals build practical skills, gain real project experience, and prepare for remote work opportunities.",
    primaryBtn: { label: "View Courses", href: "/courses" },
    secondaryBtn: { label: "Start Learning", href: "/careers" },
    primaryColor: "bg-orange-400 hover:bg-orange-300 text-white shadow-orange-500/30",
  },
  {
    image: "/carosel3.jpeg",
    mobileImage: "/carosel3-mobile-view.jpeg",
    badge: "Trusted Platform",
    heading: "Powerful Software Platforms for",
    highlight: "Digital Operations",
    headingEnd: "& Workforce Management",
    highlightColor: "text-cyan-400",
    description:
      "We develop secure and scalable software solutions that help businesses manage digital processes, teams, and project workflows efficiently.",
    primaryBtn: { label: "Our Software", href: "/services" },
    secondaryBtn: { label: "Request Demo", href: "/careers" },
    primaryColor: "bg-cyan-400 hover:bg-cyan-300 text-blue-950 shadow-cyan-500/30",
  },
  {
    image: "/carosel5.jpeg",
    mobileImage: "/carosel5-mobile-view.jpeg",
    badge: "Trusted Platform",
    heading: "Empowering Digital Work with",
    highlight: "Smart Software & Scalable",
    headingEnd: "Solutions",
    highlightColor: "text-orange-400",
    description:
      "We develop secure and scalable software solutions that help businesses manage digital processes, teams, and project workflows efficiently.",
    primaryBtn: { label: "Get Started", href: "/services" },
    secondaryBtn: { label: "Explore Solutions", href: "/careers" },
    primaryColor: "bg-orange-400 hover:bg-orange-300 text-white shadow-orange-500/30",
  },
  {
    image: "/carosel6.jpeg",
    mobileImage: "/carsole7_mobile_view.jpeg",
    badge: "Trusted Platform",
    heading: "Start Working on",
    highlight: "Remote Digital",
    headingEnd: "Projects",
    highlightColor: "text-cyan-400",
    description:
      "Access project-based work in data processing, document conversion, and online form processing through our secure platform.",
    primaryBtn: { label: "View Projects", href: "/services" },
    secondaryBtn: { label: "Register Now", href: "/careers" },
    primaryColor: "bg-cyan-400 hover:bg-cyan-300 text-blue-950 shadow-cyan-500/30",
  },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

export default function HeroSection() {
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const [current, setCurrent] = useState(1);
  const [transition, setTransition] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
      setTransition(true);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (current === extendedSlides.length - 1) {
      setTimeout(() => { setTransition(false); setCurrent(1); }, 700);
    }
    if (current === 0) {
      setTimeout(() => { setTransition(false); setCurrent(extendedSlides.length - 2); }, 700);
    }
  }, [current, extendedSlides.length]);

  const prevSlide = () => { setCurrent((prev) => prev - 1); setTransition(true); };
  const nextSlide = () => { setCurrent((prev) => prev + 1); setTransition(true); };

  const realIndex =
    current === 0 ? slides.length - 1
    : current === extendedSlides.length - 1 ? 0
    : current - 1;

  const slide = slides[realIndex] ?? slides[0];

  return (
    <>
      <div className="relative w-full h-[420px] sm:h-[520px] md:h-[600px] lg:h-[550px] overflow-hidden">

        {/* Slides */}
        <div
          className="flex h-full"
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: transition ? "transform 0.7s ease-in-out" : "none",
          }}
        >
          {extendedSlides.map((s, index) => (
            <div key={index} className="min-w-full h-full relative flex-shrink-0">
              <Image
                src={isMobile && s.mobileImage ? s.mobileImage : s.image}
                alt="carousel image"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
                className="object-cover object-center"
                priority={index <= 2}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/70 to-blue-950/40 sm:from-blue-950/85 sm:via-blue-950/50 sm:to-transparent" />
            </div>
          ))}
        </div>

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center px-5 sm:px-14 md:px-20 pointer-events-none">
          <div className="flex flex-col gap-3 sm:gap-5 w-full max-w-xs sm:max-w-lg md:max-w-xl pointer-events-auto">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-cyan-300 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full w-fit">
              <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              {slide.badge}
            </span>

            {/* Heading */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              {slide.heading}{" "}
              <span className={slide.highlightColor}>{slide.highlight}</span>{" "}
              {slide.headingEnd}
            </h1>

            {/* Description */}
            <p className="hidden xs:block sm:block text-blue-100/80 text-sm leading-relaxed max-w-md line-clamp-3 sm:line-clamp-none">
              {slide.description}
            </p>

            {/* Buttons */}
            {/* <div className="flex flex-row gap-2 sm:gap-3 mt-1 flex-wrap">
              <Link href={slide.primaryBtn.href}>
                <button className={`inline-flex items-center justify-center gap-1.5 ${slide.primaryColor} font-bold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 shadow-lg active:scale-95`}>
                  {slide.primaryBtn.label}
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>

              <Link href={slide.secondaryBtn.href}>
                <button className="inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-200 backdrop-blur-sm">
                  {slide.secondaryBtn.label}
                </button>
              </Link>
            </div> */}

          </div>
        </div>

        {/* Prev button */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full transition"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 w-full flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i + 1)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                realIndex === i ? "bg-cyan-400 w-5 sm:w-6" : "bg-white/40 w-1.5 sm:w-2"
              }`}
            />
          ))}
        </div>

      </div>

      {/* Logo Carousel */}
      <div >
        <LogoCarosel />
      </div>
    </>
  );
}