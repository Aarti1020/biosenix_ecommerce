
import { Suspense } from "react";
import SearchContent from "./SearchContent"; // your actual search component
export const dynamic = "force-dynamic";
export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}