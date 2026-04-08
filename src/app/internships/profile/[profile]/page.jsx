"use client";

import CurrentOpenings from "@/Ui/Careers/CurrentOpenings";
import { useParams } from "next/navigation";


export default function ProfileJobsPage() {
  const { profile } = useParams();

  return (
    <CurrentOpenings selectedProfileFromURL={profile} />
  );
}