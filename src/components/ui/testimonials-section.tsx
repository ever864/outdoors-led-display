import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Rodriguez",
      role: "Gerente de Marketing",
      company: "TechCorp Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b8d9?w=150&h=150&fit=crop&crop=face",
      content: "La pantalla LED que instalaron triplicó nuestra visibilidad. El retorno de inversión fue inmediato y el soporte técnico es excepcional.",
      rating: 5,
      project: "Fachada LED 25m²"
    },
    {
      name: "Carlos Mendoza", 
      role: "Director Comercial",
      company: "Grupo Retail Premium",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "Profesionalismo total desde el diseño hasta la instalación. Nuestros clientes no pueden dejar de mirar nuestro nuevo letrero LED.",
      rating: 5,
      project: "Letrero Luminoso Curvo"
    },
    {
      name: "Ana Patricia Silva",
      role: "Arquitecta Principal", 
      company: "Innovar Arquitectura",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "La integración arquitectónica fue perfecta. Logramos el impacto visual que buscábamos sin comprometer el diseño del edificio.",
      rating: 5,
      project: "Integración Arquitectónica"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Nuestros Clientes,
            <span className="bg-gradient-electric bg-clip-text text-transparent"> Nuestra Mejor Publicidad</span>
          </h2>
          <p className="font-tech text-xl text-muted-foreground max-w-3xl mx-auto">
            Más de 500 proyectos exitosos respaldan nuestra experiencia. Cada testimonio refleja nuestro compromiso con la excelencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-glow-blue transition-all duration-500 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-12 h-12 text-electric-cyan" />
              </div>

              {/* Rating Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-led-orange text-led-orange" />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-muted-foreground font-tech leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <h4 className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground font-tech">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-electric-cyan font-tech font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Project Tag */}
              <div className="mt-4 pt-4 border-t border-border">
                <span className="inline-block px-3 py-1 bg-glass-surface text-electric-cyan text-xs font-tech rounded-full">
                  Proyecto: {testimonial.project}
                </span>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-electric opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-electric-cyan mb-2">500+</div>
            <div className="font-tech text-muted-foreground">Proyectos Completados</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-led-orange mb-2">10+</div>
            <div className="font-tech text-muted-foreground">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-neon-green mb-2">98%</div>
            <div className="font-tech text-muted-foreground">Satisfacción Cliente</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold text-tech-blue mb-2">24/7</div>
            <div className="font-tech text-muted-foreground">Soporte Técnico</div>
          </div>
        </div>
      </div>
    </section>
  );
};