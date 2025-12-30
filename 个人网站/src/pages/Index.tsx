import MouseGlow from "@/components/MouseGlow";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CasesSection from "@/components/CasesSection";
import KnowledgeSection from "@/components/KnowledgeSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MouseGlow />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CasesSection />
        <KnowledgeSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
