import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-lg">
        <p className="font-display text-7xl md:text-8xl font-bold bg-gradient-electric bg-clip-text text-transparent mb-6">
          404
        </p>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
          Página no encontrada
        </h1>
        <p className="font-tech text-muted-foreground mb-8">
          La página que buscas no existe o fue movida. Revisa la dirección o vuelve al inicio.
        </p>
        <Button asChild variant="cta" size="lg" className="font-tech">
          <Link to="/">Volver al inicio</Link>
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
