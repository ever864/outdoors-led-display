import { Eye, Zap, TrendingUp, Shield } from "lucide-react";

export const ProblemSolution = () => {
  const problems = [
    {
      icon: <Eye className="w-8 h-8 text-destructive" />,
      title: "Baja visibilidad",
      description: "Tu negocio pasa desapercibido en la competencia"
    },
    {
      icon: <Zap className="w-8 h-8 text-destructive" />,
      title: "Publicidad estática",
      description: "Contenido aburrido que no genera impacto"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-destructive" />,
      title: "Costos elevados",
      description: "Publicidad tradicional con ROI limitado"
    }
  ];

  const solutions = [
    {
      icon: <Eye className="w-8 h-8 text-electric-cyan" />,
      title: "Visibilidad 24/7",
      description: "Tu marca siempre visible, día y noche"
    },
    {
      icon: <Zap className="w-8 h-8 text-electric-cyan" />,
      title: "Contenido dinámico",
      description: "Atrae miradas con contenido vibrante y atractivo"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-electric-cyan" />,
      title: "Inversión rentable",
      description: "ROI superior a largo plazo con bajo mantenimiento"
    }
  ];

  return (
    <section className="py-20 bg-dark-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            ¿Tu negocio pasa desapercibido en un
            <span className="bg-gradient-electric bg-clip-text text-transparent"> mar de competencia?</span>
          </h2>
        </div>

        <div className="md:grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problems Column */}
          <div className="space-y-8">
            <h3 className="font-display text-2xl font-semibold text-destructive mb-8 text-center">
              Problemas Comunes
            </h3>
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-lg bg-glass-surface border border-border animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  {problem.icon}
                </div>
                <div>
                  <h4 className="font-tech text-lg font-semibold text-foreground mb-2">
                    {problem.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {problem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions Column */}
          <div className="space-y-8">
            <h3 className="font-display text-2xl font-semibold text-electric-cyan mb-8 text-center">
              Nuestras Soluciones
            </h3>
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-lg bg-gradient-card border border-primary/20 animate-slide-in-right shadow-glow-blue"
                style={{ animationDelay: `${index * 0.2 + 0.3}s` }}
              >
                <div className="flex-shrink-0">
                  {solution.icon}
                </div>
                <div>
                  <h4 className="font-tech text-lg font-semibold text-foreground mb-2">
                    {solution.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
