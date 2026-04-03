"use client";

export const dynamic = "force-dynamic"; // Must be first!

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return;

    // Example: fetch search results from an API
    async function fetchResults() {
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setResults(data.results);
      } catch (err) {
        console.error(err);
      }
    }

    fetchResults();
  }, [query]);

  return (
    <div>
      <h1>Search Results</h1>
      {query ? (
        <>
          <p>You searched for: <strong>{query}</strong></p>
          <ul>
            {results.length > 0 ? (
              results.map((item) => <li key={item.id}>{item.name}</li>)
            ) : (
              <li>No results found</li>
            )}
          </ul>
        </>
      ) : (
        <p>Type a search query in the URL, e.g., <code>?q=apple</code></p>
      )}
    </div>
  );
}