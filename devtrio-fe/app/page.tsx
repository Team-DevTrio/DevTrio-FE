"use client"
import Hero from "@/components/Hero";
import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="px-10">
        <Team />
      </div>
    </div>
  );
}
