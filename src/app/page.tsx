import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";

export const metadata = {
  robots: {
    index: true,
    follow: true,
    noimageindex: true,
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div id="about">
        <AboutMeSection />
      </div>
      <SkillsSection />
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
