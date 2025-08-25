import Hero from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services-section";
import PortfolioSection from "@/components/sections/portfolio-section";
import Testimonials from "@/components/sections/testimonials";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <Testimonials />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
