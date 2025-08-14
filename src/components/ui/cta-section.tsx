import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-electric-cyan rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-led-orange rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-neon-green rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            ¿Listo para
            <span className="bg-gradient-electric bg-clip-text text-transparent"> Brillar?</span>
          </h2>
          <p className="font-tech text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforma tu espacio con tecnología LED de vanguardia. Recibe una cotización personalizada en menos de 24 horas.
          </p>
        </div>

        <div className="md:grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border mb-6 border-border rounded-2xl p-6 md:p-8 shadow-card">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Solicita tu Cotización Gratuita
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-tech font-medium text-foreground mb-2">
                    Nombre Completo *
                  </label>
                  <Input
                    placeholder="Tu nombre completo"
                    className="bg-glass-surface border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-tech font-medium text-foreground mb-2">
                    Teléfono *
                  </label>
                  <Input
                    placeholder="+1 (555) 123-4567"
                    className="bg-glass-surface border-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-tech font-medium text-foreground mb-2">
                  Email Corporativo *
                </label>
                <Input
                  type="email"
                  placeholder="tu@empresa.com"
                  className="bg-glass-surface border-border"
                />
              </div>

              <div>
                <label className="block text-sm font-tech font-medium text-foreground mb-2">
                  Tipo de Proyecto *
                </label>
                <Select>
                  <SelectTrigger className="bg-glass-surface border-border">
                    <SelectValue placeholder="Selecciona el tipo de proyecto" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pantalla-led">Pantalla LED Exterior</SelectItem>
                    <SelectItem value="letrero-luminoso">Letrero Luminoso</SelectItem>
                    <SelectItem value="senalizacion-digital">Señalización Digital</SelectItem>
                    <SelectItem value="fachada-led">Fachada LED</SelectItem>
                    <SelectItem value="evento-temporal">Evento Temporal</SelectItem>
                    <SelectItem value="otro">Otro (especificar)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-tech font-medium text-foreground mb-2">
                  Detalles del Proyecto
                </label>
                <Textarea
                  placeholder="Cuéntanos sobre tu proyecto: dimensiones aproximadas, ubicación, objetivos, presupuesto estimado..."
                  className="bg-glass-surface border-border min-h-[120px]"
                />
              </div>

              <Button
                variant="cta"
                size="hero"
                className="w-full font-tech"
              >
                Solicitar Cotización Ahora
              </Button>

              <p className="text-xs text-muted-foreground text-center font-tech">
                * Nos comprometemos a responder en menos de 4 horas durante horario laboral
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-card border border-primary/20 rounded-2xl p-8 shadow-glow-blue">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-electric-cyan/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-electric-cyan" />
                  </div>
                  <div>
                    <p className="font-tech font-medium text-foreground">Teléfono Directo</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-led-orange/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-led-orange" />
                  </div>
                  <div>
                    <p className="font-tech font-medium text-foreground">Email Comercial</p>
                    <p className="text-muted-foreground">ventas@ledvisionpro.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon-green/20 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-neon-green" />
                  </div>
                  <div>
                    <p className="font-tech font-medium text-foreground">Showroom & Oficinas</p>
                    <p className="text-muted-foreground">123 Tech Avenue, Ciudad Digital</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-glass-surface border border-border rounded-2xl p-6">
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                Horarios de Atención
              </h4>
              <div className="space-y-2 font-tech text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lunes - Viernes:</span>
                  <span className="text-foreground">8:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábados:</span>
                  <span className="text-foreground">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Emergencias:</span>
                  <span className="text-electric-cyan">24/7 Disponible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
