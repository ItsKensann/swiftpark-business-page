import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { DriverExperienceSection } from "@/components/driver-experience-section";
import { AiIntelligenceSection } from "@/components/ai-intelligence-section";
import { FacilityTypesSection } from "@/components/facility-types-section";
import { OperatorDashboardSection } from "@/components/operator-dashboard-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { BookMeetingSection } from "@/components/book-meeting-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <DriverExperienceSection />
      <AiIntelligenceSection />
      <FacilityTypesSection />
      <OperatorDashboardSection />
      <HowItWorksSection />
      <BookMeetingSection />
      <Footer />
    </main>
  );
}
