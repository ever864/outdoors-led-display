import { Header } from "@/components/ui/header";
import { HeroSection } from "@/components/ui/hero-section";
import { LEDSignText } from "@/components/ui/led-sign-text";
import { ProblemSolution } from "@/components/ui/problem-solution";
import { ProjectsGallery } from "@/components/ui/projects-gallery";
import { BenefitsSection } from "@/components/ui/benefits-section";
import { ProductsSection } from "@/components/ui/products-section";
import { ProcessSection } from "@/components/ui/process-section";
import { CTASection } from "@/components/ui/cta-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <div id="problem-solution">
        <ProblemSolution />
      </div>
      <div id="projects">
        <ProjectsGallery />
      </div>
      <div id="benefits">
        <BenefitsSection />
      </div>
      <div id="products">
        <ProductsSection />
      </div>
      <ProcessSection />
      <div id="contact">
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
