import { Button } from "@/components/ui/button";
import { Monitor, Lightbulb, Building, Calendar } from "lucide-react";

export const ProductsSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const products = [
    {
      icon: <Monitor className="w-12 h-12 text-electric-cyan" />,
      title: "Pantallas LED Exteriores",
      description: "Pantallas de alta resolución para fachadas, vallas publicitarias y espacios exteriores con máxima visibilidad.",
      features: [
        "Resolución desde P2.5 hasta P10",
        "Brillo hasta 8000cd/m²",
        "Resistencia IP65/IP67",
        "Control remoto total"
      ],
      applications: ["Fachadas comerciales", "Vallas publicitarias", "Estadios", "Centros comerciales"]
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-led-orange" />,
      title: "Letreros Luminosos",
      description: "Señalización LED personalizada para identificación de marca, menús digitales y comunicación efectiva.",
      features: [
        "Diseño completamente personalizable",
        "LED de última generación",
        "Gestión de contenido CMS",
        "Instalación profesional"
      ],
      applications: ["Restaurantes", "Tiendas retail", "Oficinas corporativas", "Centros médicos"]
    },
    {
      icon: <Building className="w-12 h-12 text-neon-green" />,
      title: "Fachadas LED Arquitectónicas",
      description: "Soluciones LED integradas arquitectónicamente que transforman edificios en obras de arte digital.",
      features: [
        "Integración arquitectónica",
        "Pixeles transparentes disponibles",
        "Control de iluminación avanzado",
        "Diseño sustentable"
      ],
      applications: ["Torres corporativas", "Hoteles de lujo", "Centros culturales", "Edificios gubernamentales"]
    },
    {
      icon: <Calendar className="w-12 h-12 text-tech-blue" />,
      title: "Soluciones para Eventos",
      description: "Sistemas LED modulares y portátiles para eventos, conferencias y activaciones de marca temporal.",
      features: [
        "Montaje y desmontaje rápido",
        "Sistema modular flexible",
        "Transporte especializado",
        "Soporte técnico en sitio"
      ],
      applications: ["Eventos corporativos", "Conciertos", "Ferias comerciales", "Activaciones de marca"]
    }
  ];

  return (
    <section className="py-20 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Soluciones a la Medida de tu
            <span className="bg-gradient-electric bg-clip-text text-transparent"> Visión</span>
          </h2>
          <p className="font-tech text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde pantallas gigantes hasta letreros elegantes, creamos tecnología LED que se adapta perfectamente a tus necesidades.
          </p>
        </div>

        <div className="md:grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-glow-blue transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Header */}
              <div className="flex items-start space-x-6 mb-6">
                <div className="flex-shrink-0 p-4 bg-glass-surface rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground font-tech leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                  Características Principales
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm font-tech">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                  Aplicaciones Ideales
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-tech rounded-full"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 max-w-4xl mx-auto shadow-glow-blue">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
              ¿No encuentras exactamente lo que buscas?
            </h3>
            <p className="text-muted-foreground font-tech mb-6 leading-relaxed">
              Especializamos en soluciones completamente personalizadas. Nuestro equipo de ingenieros puede diseñar
              y fabricar la solución LED perfecta para tu proyecto específico, sin importar qué tan único sea.
            </p>
            <Button
              variant="cta"
              className="font-tech"
              onClick={() => scrollToSection("contact")}
            >
              Solicitar Solución Personalizada
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
