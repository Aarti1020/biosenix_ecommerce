"use client"
import { useSearchParams } from "next/navigation"

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")

  return (
    <div>
      <h1>Search Results</h1>
      <p>You searched for: {query}</p>
    </div>
  )
}