import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProblemSection } from "@/components/problem-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { BookMeetingSection } from "@/components/book-meeting-section";
import { CtaSection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <BookMeetingSection />
      {/* <TractionBar /> */}
      <CtaSection />
      <Footer />
    </main>
  );
}
