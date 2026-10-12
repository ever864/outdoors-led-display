export const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: "Inicio", href: "hero" },
    { label: "Soluciones", href: "problem-solution" },
    { label: "Proyectos", href: "projects" },
    { label: "Contacto", href: "contact" },
  ];

  return (
    <footer className="bg-dark-surface border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Branding */}
          <div className="col-span-3 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-electric rounded-md flex items-center justify-center">
                <div className="w-4 h-4 bg-background rounded-sm"></div>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                Outdoor LED <span className="text-electric-cyan">Display</span>
              </span>
            </div>
            <p className="text-muted-foreground font-tech text-sm max-w-xs">
              Soluciones visuales de alto impacto para llevar tu marca al siguiente nivel.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">Navegación</h3>
            <nav className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-muted-foreground hover:text-electric-cyan transition-colors duration-200 font-tech"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">Contacto</h3>
            <p className="font-tech text-sm text-muted-foreground mb-4">
              Estamos habilitando nuestros canales de contacto oficiales. Por ahora, escríbenos desde el formulario de cotización.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-tech text-sm text-electric-cyan hover:text-primary transition-colors duration-200"
            >
              Ir al formulario de contacto →
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground font-tech text-sm">
          <p>&copy; {new Date().getFullYear()} Outdoor LED Display. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};