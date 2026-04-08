"use client"
import CoursesDropdown from '@/components/CoursesDropdown'
import SearchBar from '@/components/SearchBar'
import { Button } from '@/components/ui/button'
import InternshipDropdown from '@/components/ui/InternshipDropdown'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import CurrentOpenings from './Careers/CurrentOpenings'

const Nav = () => {
  const [open, setOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)

  const pathName = usePathname()
  const navRef = useRef()

  // 🔥 Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // 🔥 Close dropdown on route change
  useEffect(() => {
    setActiveMenu(null)
    setOpen(false)
  }, [pathName])

  const linkStyle = (path) =>
    `relative font-semibold transition-colors duration-200 text-lg
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-[3px] after:transition-all after:duration-300
     ${pathName === path 
        ? 'text-blue-600 after:w-full after:bg-blue-600' 
        : 'text-gray-600 after:w-0 after:bg-blue-600 hover:after:w-full'
     }`

  return (
    <div ref={navRef} className='w-full'>
      
      {/* Navbar */}
      <div className='flex items-center justify-between px-20 py-4'>
        <Link href="/" >

        {/* Logo */}
        <Image
          src="/ESS.png"
          alt="logo"
          width={160}
          height={2}
        />
</Link>
        {/* Desktop Links */}
        <div className='hidden sm:flex flex-row items-center gap-8'>

          <Link href="/" className={linkStyle('/')}>Home</Link>

          {/* 🔹 Solutions */}
          <div className="relative">
            <span
              onClick={() =>
                setActiveMenu(activeMenu === "solution" ? null : "solution")
              }
             onMouseEnter={() => setActiveMenu("solution")}
              className={linkStyle('/solution') + " cursor-pointer flex items-center gap-1"}
            >
              Software & Solutions ▼
            </span>

            {activeMenu === "solution" && (
              <div className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-lg p-4 w-60 z-50 border border-gray-200 mt-6">
                <Link href="/solution/captcha-solvex-software" className="block hover:text-blue-600 p-2 font-semibold text-gray-700">Captcha SolveX Software</Link>
                <Link href="/solution/text-flow-software" className="block hover:text-blue-600 p-2 font-semibold text-gray-700">TextFlow Software</Link>
                <Link href="/solution/quickfill-software" className="block hover:text-blue-600 p-2 font-semibold text-gray-700">QuickFill Software</Link>
                <Link href="/solution/other-applications" className="block hover:text-blue-600 p-2 font-semibold text-gray-700">Other Applications</Link>
              </div>
            )}
          </div>

          {/* 🔹 Internships */}
        

<div className="relative">
  
  {/* Trigger */}
  <Link
    href="/internships"
    onMouseEnter={() => setActiveMenu("internship")}
    className={
      linkStyle("/internships") +
      " cursor-pointer flex items-center gap-1"
    }
  >
    Jobs ▼
  </Link>

  {/* Dropdown */}
  {activeMenu === "internship" && (
    <div
      onMouseEnter={() => setActiveMenu("internship")}
      onMouseLeave={() => setActiveMenu(null)}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 bg-white shadow-lg rounded-lg p-3 border border-gray-200 z-50 min-w-[560px]"
    >
      <InternshipDropdown />
    </div>
  )}
</div>

          {/* 🔹 Courses */}
          <div className="relative">
            <span
              onClick={() =>
                setActiveMenu(activeMenu === "courses" ? null : "courses")
              }
              onMouseEnter={() => setActiveMenu("courses")}
              className={linkStyle('/courses') + " cursor-pointer flex items-center gap-1"}
            >
              Courses ▼
            </span>

           {activeMenu === "courses" && (
  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-lg p-1 z-50 min-w-[800px] border border-gray-200 mt-6">
    <CoursesDropdown />
  </div>
)}
          </div>

          <Link href="/contact" className={linkStyle('/contact')}>Contact</Link>

        </div>

        {/* 🔍 Search */}
      <div className="hidden sm:block">
  <SearchBar />
</div>

        {/* Right Buttons */}
       <div className='flex items-center gap-2'>
  
  {/* Hide login on mobile */}
{/* <Button className='hidden sm:flex items-center justify-center w-24 font-bold text-lg h-10 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-600 text-white leading-none'>
  Login
</Button> */}

  {/* Mobile menu */}
  <MenuIcon
    className='block sm:hidden cursor-pointer z-50'
    size={28}
    onClick={() => setOpen(!open)}
  />
</div>
      </div>

      {/* 📱 Mobile Menu */}
    {/* 📱 Mobile Menu */}
{open && (
  <div className="sm:hidden fixed top-0 left-0 w-full h-screen bg-black/40 z-50">
    
    {/* Menu Panel */}
    <div className="w-[75%] h-full bg-white p-6 flex flex-col gap-6 shadow-xl animate-slideIn overflow-y-auto">
      
      {/* Close Button */}
      <div className="flex justify-end">
        <span
          className="text-2xl cursor-pointer"
          onClick={() => setOpen(false)}
        >
          ✕
        </span>
      </div>

      {/* Home */}
      <Link href="/" onClick={() => setOpen(false)}>Home</Link>

      {/* 🔹 Solutions Dropdown */}
      <div>
        <div
          onClick={() =>
            setActiveMenu(activeMenu === "solution" ? null : "solution")
          }
          className="cursor-pointer font-semibold flex justify-between"
        >
          Solutions <span>{activeMenu === "solution" ? "▲" : "▼"}</span>
        </div>

        {activeMenu === "solution" && (
          <div className="flex flex-col gap-2 mt-2 pl-3 text-gray-600">
            <Link href="/solution/captcha-solvex-software" onClick={() => setOpen(false)}>Captcha Solvex Software</Link>
            <Link href="/solution/text-flow-software" onClick={() => setOpen(false)}>TextFlow Software</Link>
            <Link href="/solution/quickfill-software" onClick={() => setOpen(false)}>QuickFill Software</Link>
            <Link href="/solution/other-applications" onClick={() => setOpen(false)}>Other Applications</Link>
          </div>
        )}
      </div>

      {/* 🔹 Internships Dropdown */}
          <div>
  <div className="cursor-pointer font-semibold flex justify-between  ">
    <Link href="/internships" className="flex-1">
      Jobs
    </Link>
    <span
      onClick={() => setActiveMenu(activeMenu === "internship" ? null : "internship")}
      
    >
      {activeMenu === "internship" ? "▲" : "▼"}
    </span>
  </div>

  {activeMenu === "internship" && (
    <div className="mt-2 pl-3">
      <InternshipDropdown />
    </div>
  )}
</div>

      {/* 🔹 Courses Dropdown */}
      <div>
        <div
          onClick={() =>
            setActiveMenu(activeMenu === "courses" ? null : "courses")
          }
          className="cursor-pointer font-semibold flex justify-between"
        >
          Courses <span>{activeMenu === "courses" ? "▲" : "▼"}</span>
        </div>

        {activeMenu === "courses" && (
          <div className="mt-2 pl-3">
            <CoursesDropdown />
          </div>
        )}
      </div>

      {/* Contact */}
      <Link href="/contact" onClick={() => setOpen(false)}className=''>Contact</Link>
 {/* <Button className='text-center w-24 font-bold text-xl h-10 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-600 text-white'>
    Login
  </Button> */}
    </div>

    {/* Click outside */}
    <div className="w-[25%] h-full" onClick={() => setOpen(false)} />
  </div>
)}

    </div>
  )
}

export default Nav