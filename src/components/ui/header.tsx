import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: "Inicio", href: "hero" },
    { label: "Soluciones", href: "problem-solution" },
    { label: "Proyectos", href: "projects" },
    { label: "Beneficios", href: "benefits" },
    { label: "Productos", href: "products" },
    { label: "Proceso", href: "process" },
    { label: "Contacto", href: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-electric rounded-md flex items-center justify-center">
              <div className="w-4 h-4 bg-background rounded-sm"></div>
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Outdoor LED <span className="text-electric-cyan">Display</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-electric-cyan transition-colors duration-200 font-tech text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button
              variant="cta"
              size="sm"
              onClick={() => scrollToSection('contact')}
            >
              Cotizar Proyecto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-electric-cyan transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background backdrop-blur-md border-b border-border shadow-xl">
            <nav className="px-6 py-4 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-muted-foreground hover:text-electric-cyan transition-colors duration-200 font-tech"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4">
                <Button
                  variant="cta"
                  size="default"
                  className="w-full"
                  onClick={() => scrollToSection('contact')}
                >
                  Cotizar Proyecto
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
