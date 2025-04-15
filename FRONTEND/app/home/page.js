import About from "@/components/Landing/AboutSection";
import FooterSection from "@/components/Landing/FooterSection";
import HeroSection from "@/components/Landing/HeroSection";
import NavbarSection from "@/components/Landing/NavbarSection";
import NewsLetter from "@/components/Landing/NewsLetterSection";

export default function LandingPage() {
  return (
    <main>
        <NavbarSection />
        <HeroSection />
        <About />
        <NewsLetter />
        <FooterSection />
    </main>
  );
}
