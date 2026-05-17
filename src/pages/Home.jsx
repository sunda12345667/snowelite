import Navbar from "@/components/sections/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BeforeAfter from "@/components/sections/BeforeAfter";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import DashboardMockup from "@/components/sections/DashboardMockup";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TeamSection from "@/components/sections/TeamSection";
import QuoteSection from "@/components/sections/QuoteSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <BeforeAfter />
      <IndustriesSection />
      <WhyChooseUs />
      <DashboardMockup />
      <TestimonialsSection />
      <TeamSection />
      <QuoteSection />
      <ContactSection />
      <Footer />
    </div>
  );
}