import { Monitor, Shield, Smartphone, Headphones } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Monitor className="w-12 h-12 text-electric-cyan" />,
      title: "Calidad de Imagen Insuperable",
      description: "Colores vibrantes y brillo excepcional, incluso a plena luz del día. Tecnología de última generación.",
      features: ["Resolución 4K Ultra HD", "Brillo hasta 8000cd/m²", "Contraste superior"]
    },
    {
      icon: <Shield className="w-12 h-12 text-neon-green" />,
      title: "Durabilidad y Resistencia",
      description: "Fabricados para resistir las condiciones más exigentes. Garantía extendida respaldada por calidad.",
      features: ["Resistencia IP65", "Garantía 5 años", "Mantenimiento mínimo"]
    },
    {
      icon: <Smartphone className="w-12 h-12 text-led-orange" />,
      title: "Tecnología de Vanguardia",
      description: "Controla tu contenido de forma remota y sencilla desde cualquier dispositivo, en tiempo real.",
      features: ["Control remoto total", "Gestión de contenido CMS", "Programación automática"]
    },
    {
      icon: <Headphones className="w-12 h-12 text-tech-blue" />,
      title: "Asesoramiento Personalizado",
      description: "Te acompañamos desde la idea inicial hasta la instalación y post-venta. Soporte técnico 24/7.",
      features: ["Consultoría gratuita", "Instalación profesional", "Soporte continuo"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            ¿Por Qué Elegir Nuestras 
            <span className="bg-gradient-electric bg-clip-text text-transparent"> Soluciones Visuales?</span>
          </h2>
          <p className="font-tech text-xl text-muted-foreground max-w-3xl mx-auto">
            Más de 10 años de experiencia creando instalaciones que superan expectativas y generan resultados medibles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-glow-blue transition-all duration-500 animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground font-tech mb-6 leading-relaxed">
                {benefit.description}
              </p>

              <div className="space-y-2">
                {benefit.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-center text-sm text-muted-foreground font-tech">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};