import { useState } from "react";
import { Button } from "@/components/ui/button";
import projectRetail from "@/assets/project-retail.jpg";
import projectEvents from "@/assets/project-events.jpg";
import projectRestaurant from "@/assets/project-restaurant.jpg";
import placeholder from "/placeholder.svg";

export const ProjectsGallery = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const projects = [
    {
      id: 1,
      title: "Tienda de Lujo - Centro Comercial",
      category: "retail",
      image: projectRetail,
      description: "Pantalla LED curva P2.5 de 15m² para maximizar el impacto visual",
      tech: "LED P2.5, Control Remoto, Brillo 6000cd/m²"
    },
    {
      id: 2,
      title: "Evento Corporativo - Lanzamiento",
      category: "eventos", 
      image: projectEvents,
      description: "Instalación modular de 50m² para evento empresarial",
      tech: "LED P3.9, Modular, Control en Tiempo Real"
    },
    {
      id: 3,
      title: "Restaurante Gourmet - Menú Digital",
      category: "restaurantes",
      image: projectRestaurant,
      description: "Letrero LED interior para menú dinámico y promociones",
      tech: "LED P4, Interior, Gestión de Contenido CMS"
    },
    {
      id: 4,
      title: "Torre Corporativa - Fachada LED",
      category: "corporativo",
      image: placeholder,
      description: "Pantalla LED gigante de 200m² en fachada de edificio",
      tech: "LED P10, Exterior IP65, Brillo 8000cd/m²"
    },
    {
      id: 5,
      title: "Centro de Convenciones",
      category: "eventos",
      image: placeholder,
      description: "Sistema LED modular para múltiples configuraciones",
      tech: "LED P2.9, Ultra Liviano, Setup Rápido"
    },
    {
      id: 6,
      title: "Cadena de Retail - Señalización",
      category: "retail",
      image: placeholder,
      description: "Red de pantallas LED sincronizadas en múltiples ubicaciones",
      tech: "LED P6, Red Distribuida, Gestión Centralizada"
    }
  ];

  const filters = [
    { id: "todos", label: "Todos los Proyectos" },
    { id: "retail", label: "Retail" },
    { id: "corporativo", label: "Corporativo" },
    { id: "eventos", label: "Eventos" },
    { id: "restaurantes", label: "Restaurantes" }
  ];

  const filteredProjects = activeFilter === "todos" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Proyectos que 
            <span className="bg-gradient-electric bg-clip-text text-transparent"> Hablan por Sí Mismos</span>
          </h2>
          <p className="font-tech text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada instalación cuenta una historia de éxito. Descubre cómo transformamos espacios y elevamos marcas.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className="font-tech"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-card hover:shadow-glow-blue transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Content */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="bg-glass-surface/90 backdrop-blur-sm rounded-lg p-3 border border-primary/20">
                    <p className="text-sm font-tech text-electric-cyan font-medium">
                      {project.tech}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-tech">
                  {project.description}
                </p>
                
                <Button variant="link" className="mt-4 p-0 text-primary font-tech">
                  Ver detalles del proyecto →
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="font-tech">
            Ver Todos Nuestros Proyectos
          </Button>
        </div>
      </div>
    </section>
  );
};