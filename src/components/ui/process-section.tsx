import { MessageCircle, PenTool, Cog, ShieldCheck } from "lucide-react";

export const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Contacto y Asesoría",
      description: "Conversamos sobre tu visión y necesidades específicas. Evaluamos el espacio y definimos objetivos.",
      details: ["Consulta gratuita", "Evaluación del sitio", "Propuesta inicial"]
    },
    {
      number: "02",
      icon: <PenTool className="w-8 h-8" />,
      title: "Diseño y Propuesta",
      description: "Creamos un diseño personalizado con especificaciones técnicas y cotización detallada.",
      details: ["Diseño 3D", "Especificaciones técnicas", "Cotización detallada"]
    },
    {
      number: "03",
      icon: <Cog className="w-8 h-8" />,
      title: "Fabricación e Instalación",
      description: "Fabricamos con materiales premium e instalamos con nuestro equipo de técnicos certificados.",
      details: ["Fabricación a medida", "Instalación profesional", "Pruebas de calidad"]
    },
    {
      number: "04",
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Soporte y Acompañamiento",
      description: "Capacitación completa, soporte técnico y acompañamiento post-venta para tu tranquilidad.",
      details: ["Capacitación incluida", "Soporte técnico", "Acompañamiento post-venta"]
    }
  ];

  return (
    <section id="process" className="py-20 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Tu Proyecto en
            <span className="bg-gradient-electric bg-clip-text text-transparent"> 4 Sencillos Pasos</span>
          </h2>
          <p className="font-tech text-xl text-muted-foreground max-w-3xl mx-auto">
            Un proceso transparente y eficiente, diseñado para hacer realidad tu visión sin complicaciones.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection Line */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Step Number Circle */}
                <div className="relative mx-auto mb-6">
                  <div className="w-16 h-16 bg-gradient-electric text-center rounded-full flex items-center justify-center text-background font-display font-bold text-xl shadow-glow-blue group-hover:scale-110 transition-transform duration-300 mx-auto">
                    {step.number}
                  </div>

                  {/* Icon Background */}
                </div>

                <div className="space-y-4">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground font-tech leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-2 pt-4">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center justify-center text-sm text-electric-cyan font-tech">
                        <div className="w-1 h-1 bg-electric-cyan rounded-full mr-2"></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow for larger screens */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 text-electric-cyan opacity-50">
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
