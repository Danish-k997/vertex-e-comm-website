import CaseStudies from "@/components/home/CaseStudies";
import ComparisonSection from "@/components/home/ComparisonSection";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import Hero from "@/components/home/Hero";
import MetricsSection from "@/components/home/MetricsSection";
import PlatformBar from "@/components/home/PlatformBar";
import PricingSection from "@/components/home/PricingSection";
import ProblemSection from "@/components/home/ProblemSection";
import ProcessSection from "@/components/home/ProcessSection";
import SalesEngine from "@/components/home/SalesEngine";
import ServicesSection from "@/components/home/ServicesSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import Testimonials from "@/components/home/Testimonials";
import WhyVertex from "@/components/home/WhyVertex";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <PlatformBar />
      <ProblemSection />
      <SalesEngine />
      <ServicesSection />
      <SolutionsSection />
      <PricingSection />
      <ProcessSection />
      <CaseStudies />
      <WhyVertex />
      <ComparisonSection />
      <MetricsSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
