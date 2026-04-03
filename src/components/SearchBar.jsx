"use client"
import { useState, useEffect, useRef } from "react"
import { Search } from "lucide-react"
import Link from "next/link"
import Fuse from "fuse.js"

const SearchBar = () => {
  const [query, setQuery] = useState("")
  const [debouncedQuery, setDebouncedQuery] = useState("")
  const [results, setResults] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [recent, setRecent] = useState([])
  const [open, setOpen] = useState(false)

  const ref = useRef()

  const data = [
             { name: "Artificial Intelligence and Machine Learning", path: "/courses/web-dev" },
        { name: "Generative AI", path: "/courses/app-dev" },
        { name: "Web Development with AI", path: "/courses/fullstack" },
        { name: "Programming with Python with AI", path: "/courses/fullstack" },
        { name: "Digital Marketing with AI", path: "/courses/fullstack" },
        { name: "Machine Learning with AI", path: "/courses/fullstack" },
        { name: "Advanced Excel with AI", path: "/courses/fullstack" },
  ]

  // 🔥 Fuse setup (fuzzy search)
  const fuse = new Fuse(data, {
    keys: ["name"],
    threshold: 0.4,
  })

  // 🔥 Debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query)
    }, 300)
    return () => clearTimeout(timer)
  }, [query])

  // 🔥 Search logic
  useEffect(() => {
    if (debouncedQuery) {
      const result = fuse.search(debouncedQuery).map(r => r.item)
      setResults(result.slice(0, 5))
      setOpen(true)
    } else {
      setResults([])
      setOpen(false)
    }
  }, [debouncedQuery])

  // 🔥 Outside click close
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  // 🔥 Highlight text
  const highlight = (text) => {
    if (!debouncedQuery) return text
    const regex = new RegExp(`(${debouncedQuery})`, "gi")
    return text.replace(regex, `<span class="text-blue-600 font-semibold">$1</span>`)
  }

  // 🔥 Handle select
  const handleSelect = (item) => {
    setRecent(prev => [item, ...prev.slice(0, 4)])
    setOpen(false)
    setQuery("")
  }

  return (
    <div ref={ref} className="relative w-full sm:w-40">
      
      {/* Input */}
      <div className="flex items-center border rounded-full px-3 py-2 shadow-sm bg-white">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
    <input
      type="text"
      placeholder="Search"
      className="outline-none w-full pl-8 text-sm"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg p-2 z-50 max-h-72 overflow-y-auto">
          
          {/* Results */}
          {results.length > 0 ? (
            results.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                onClick={() => handleSelect(item)}
                className={`block px-3 py-2 rounded cursor-pointer ${
                  index === selectedIndex ? "bg-gray-100" : ""
                }`}
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: highlight(item.name),
                  }}
                />
              </Link>
            ))
          ) : query ? (
            <p className="text-gray-500 px-3 py-2">No results found</p>
          ) : (
            <>
              {/* Recent Searches */}
              {recent.length > 0 && (
                <>
                  <p className="text-xs text-gray-400 px-3 py-1">Recent</p>
                  {recent.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="block px-3 py-2 hover:bg-gray-100 rounded"
                    >
                      {item.name}
                    </Link>
                  ))}
                </>
              )}
            </>
          )}

        </div>
      )}
    </div>
  )
}

export default SearchBar