import Hero from "@/components/Hero";
import HowCanWeHelp from "@/components/HowCanWeHelp";
//import Team from "@/components/Team";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center px-4 overflow-x-hidden">
      <Hero />
      {/* <Team/> */}
      <HowCanWeHelp />
    </div>
  );
}
