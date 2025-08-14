import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-led-display.jpg";

export const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-24 md:pt-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Pantalla LED instalada en edificio corporativo"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="text-center">
            <h2 className="font-display text-2xl md:text-5xl font-bold tracking-wider">
              <span className="inline-block text-led-orange animate-neon-blink" style={{ animationDelay: '0.1s' }}>O</span>
              <span className="inline-block text-neon-green animate-neon-blink" style={{ animationDelay: '0.2s' }}>U</span>
              <span className="inline-block text-primary animate-neon-blink" style={{ animationDelay: '0.3s' }}>T</span>
              <span className="inline-block text-electric-cyan animate-neon-blink" style={{ animationDelay: '0.4s' }}>D</span>
              <span className="inline-block text-led-orange animate-neon-blink" style={{ animationDelay: '0.5s' }}>O</span>
              <span className="inline-block text-neon-green animate-neon-blink" style={{ animationDelay: '0.6s' }}>R</span>
              <span className="mx-4 text-foreground">•</span>
              <span className="inline-block text-primary animate-neon-blink" style={{ animationDelay: '0.7s' }}>L</span>
              <span className="inline-block text-electric-cyan animate-neon-blink" style={{ animationDelay: '0.8s' }}>E</span>
              <span className="inline-block text-led-orange animate-neon-blink" style={{ animationDelay: '0.9s' }}>D</span>
              <span className="mx-4 text-foreground">•</span>
              <span className="inline-block text-primary animate-neon-blink" style={{ animationDelay: '1.0s' }}>D</span>
              <span className="inline-block text-electric-cyan animate-neon-blink" style={{ animationDelay: '1.1s' }}>I</span>
              <span className="inline-block text-led-orange animate-neon-blink" style={{ animationDelay: '1.2s' }}>S</span>
              <span className="inline-block text-neon-green animate-neon-blink" style={{ animationDelay: '1.3s' }}>P</span>
              <span className="inline-block text-primary animate-neon-blink" style={{ animationDelay: '1.4s' }}>L</span>
              <span className="inline-block text-electric-cyan animate-neon-blink" style={{ animationDelay: '1.5s' }}>A</span>
              <span className="inline-block text-led-orange animate-neon-blink" style={{ animationDelay: '1.6s' }}>Y</span>
            </h2>
            <p className="text-muted-foreground font-tech text-sm md:text-base mt-4 tracking-widest">
              SOLUCIONES VISUALES DE IMPACTO
            </p>
          </div>
          <h1 className="font-display text-4xl md:text-7xl font-bold mb-8 bg-gradient-electric bg-clip-text text-transparent leading-tight">
            Transforma tu Fachada.<br />
            <span className="text-foreground">Cautiva a tus Clientes.</span>
          </h1>

          <h2 className="font-tech text-xl md:text-2xl mb-10 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Diseñamos y fabricamos pantallas LED y letreros luminosos que elevan tu marca y multiplican tu visibilidad.
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="cta"
              size="hero"
              onClick={() => scrollToSection('contact')}
            >
              Cotiza tu Proyecto Ahora
            </Button>

            <Button
              variant="outline"
              size="hero"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => scrollToSection('projects')}
            >
              Ver Nuestros Proyectos
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 right-20 w-4 h-4 bg-electric-cyan rounded-full animate-float opacity-60 hidden lg:block"></div>
          <div className="absolute bottom-40 left-20 w-6 h-6 bg-led-orange rounded-full animate-float opacity-40 hidden lg:block" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-40 left-1/4 w-3 h-3 bg-neon-green rounded-full animate-float opacity-50 hidden lg:block" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
