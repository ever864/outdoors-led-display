import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

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

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
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

          {/* Social Media and Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">Síguenos</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="text-muted-foreground hover:text-electric-cyan transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="font-tech text-sm text-muted-foreground">
              <a href="mailto:ventas@ledvisionpro.com" className="hover:text-electric-cyan transition-colors">ventas@ledvisionpro.com</a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground font-tech text-sm">
          <p>&copy; {new Date().getFullYear()} Outdoor LED Display. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};