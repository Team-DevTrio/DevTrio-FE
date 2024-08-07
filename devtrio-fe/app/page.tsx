"use client"
import Hero from "@/components/Hero";
import HowCanWeHelp from "@/components/HowCanWeHelp";
import ProjectsSection from "@/components/ProjectSection";
import WhyChooseUs from "@/components/WhyChooseUs";
//import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-4 overflow-x-hidden">
      <Hero />
      <HowCanWeHelp />
      <ProjectsSection/>
      <WhyChooseUs/>
      <Team />
    </div>
  );
}
