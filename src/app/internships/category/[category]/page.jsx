"use client";

import CurrentOpenings from "@/Ui/Careers/CurrentOpenings";
import { useParams } from "next/navigation";


export default function CategoryPage() {
  const { category } = useParams();

  return (
    <CurrentOpenings selectedCategoryFromURL={category} />
  );
}