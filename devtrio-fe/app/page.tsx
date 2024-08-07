"use client";
import Hero from "@/components/Hero";
import HowCanWeHelp from "@/components/HowCanWeHelp";
import ProjectsSection from "@/components/ProjectSection";
import SayHi from "@/components/SayHi";
import Team from "@/components/Team";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center bg-[rgb(248, 253, 251)]  ">
      <Hero />
      <HowCanWeHelp />
      <div className="">

      <ProjectsSection />
      </div>
      <div className="mt-32 mb-14">
        <Team />
      </div>
      <SayHi/>
    </div>
  );
}
