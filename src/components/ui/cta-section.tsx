import { useState } from "react";
import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type FormValues = {
  nombre: string;
  telefono: string;
  email: string;
  tipoProyecto: string;
  detalles: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  nombre: "",
  telefono: "",
  email: "",
  tipoProyecto: "",
  detalles: "",
};

const PHONE_PATTERN = /^[+\d][\d\s().-]{5,}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};

  if (!values.nombre.trim()) {
    errors.nombre = "Ingresa tu nombre completo.";
  }

  if (!values.telefono.trim()) {
    errors.telefono = "Ingresa un teléfono de contacto.";
  } else if (!PHONE_PATTERN.test(values.telefono.trim())) {
    errors.telefono = "Ingresa un teléfono válido (números, espacios y +).";
  }

  if (!values.email.trim()) {
    errors.email = "Ingresa tu correo electrónico.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Ingresa un correo electrónico válido.";
  }

  if (!values.tipoProyecto) {
    errors.tipoProyecto = "Selecciona el tipo de proyecto.";
  }

  return errors;
};

const FieldError = ({ id, message }: { id: string; message?: string }) =>
  message ? (
    <p id={id} role="alert" className="mt-2 text-sm text-destructive font-tech">
      {message}
    </p>
  ) : null;

export const CTASection = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const setField = (field: keyof FormValues, value: string) => {
    setValues((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => {
      if (!previous[field]) return previous;
      const next = { ...previous };
      delete next[field];
      return next;
    });
    setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  };

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
            Transforma tu espacio con tecnología LED de vanguardia. Recibe una cotización personalizada para tu proyecto.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-card">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Solicita tu Cotización Gratuita
            </h3>

            <form className="space-y-6" noValidate onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-nombre" className="block text-sm font-tech font-medium text-foreground mb-2">
                    Nombre Completo *
                  </label>
                  <Input
                    id="contact-nombre"
                    name="nombre"
                    value={values.nombre}
                    onChange={(event) => setField("nombre", event.target.value)}
                    placeholder="Tu nombre completo"
                    autoComplete="name"
                    required
                    aria-invalid={Boolean(errors.nombre)}
                    aria-describedby={errors.nombre ? "contact-nombre-error" : undefined}
                    className="bg-glass-surface border-border"
                  />
                  <FieldError id="contact-nombre-error" message={errors.nombre} />
                </div>
                <div>
                  <label htmlFor="contact-telefono" className="block text-sm font-tech font-medium text-foreground mb-2">
                    Teléfono *
                  </label>
                  <Input
                    id="contact-telefono"
                    name="telefono"
                    type="tel"
                    value={values.telefono}
                    onChange={(event) => setField("telefono", event.target.value)}
                    placeholder="Tu teléfono de contacto"
                    autoComplete="tel"
                    required
                    aria-invalid={Boolean(errors.telefono)}
                    aria-describedby={errors.telefono ? "contact-telefono-error" : undefined}
                    className="bg-glass-surface border-border"
                  />
                  <FieldError id="contact-telefono-error" message={errors.telefono} />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-tech font-medium text-foreground mb-2">
                  Email Corporativo *
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={(event) => setField("email", event.target.value)}
                  placeholder="tu@empresa.com"
                  autoComplete="email"
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className="bg-glass-surface border-border"
                />
                <FieldError id="contact-email-error" message={errors.email} />
              </div>

              <div>
                <label htmlFor="contact-tipo" className="block text-sm font-tech font-medium text-foreground mb-2">
                  Tipo de Proyecto *
                </label>
                <Select
                  value={values.tipoProyecto}
                  onValueChange={(value) => setField("tipoProyecto", value)}
                  name="tipoProyecto"
                >
                  <SelectTrigger
                    id="contact-tipo"
                    aria-invalid={Boolean(errors.tipoProyecto)}
                    aria-describedby={errors.tipoProyecto ? "contact-tipo-error" : undefined}
                    className="bg-glass-surface border-border"
                  >
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
                <FieldError id="contact-tipo-error" message={errors.tipoProyecto} />
              </div>

              <div>
                <label htmlFor="contact-detalles" className="block text-sm font-tech font-medium text-foreground mb-2">
                  Detalles del Proyecto
                </label>
                <Textarea
                  id="contact-detalles"
                  name="detalles"
                  value={values.detalles}
                  onChange={(event) => setField("detalles", event.target.value)}
                  placeholder="Cuéntanos sobre tu proyecto: dimensiones aproximadas, ubicación, objetivos, presupuesto estimado..."
                  className="bg-glass-surface border-border min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                variant="cta"
                size="hero"
                className="w-full font-tech"
              >
                Solicitar Cotización Ahora
              </Button>

              {submitted && (
                <p
                  role="status"
                  className="rounded-lg border border-primary/20 bg-glass-surface px-4 py-3 text-sm text-muted-foreground font-tech text-center"
                >
                  Demo: el envío se conectará al canal oficial del cliente.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
