import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import InvolvementSection from "@/components/InvolvementSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute left-[10%] top-[35%] h-[300px] w-[300px] rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute right-[8%] top-[65%] h-[250px] w-[250px] rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection/>
        <InvolvementSection/>
        <ContactSection />
      </div>
    </main>
  );
}