export const LEDSignText = () => {
  return (
    <div className="flex items-center justify-center py-8 bg-background">
      <div className="text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wider">
          <span className="inline-block text-electric-cyan animate-neon-blink">L</span>
          <span className="inline-block text-led-orange animate-neon-blink" style={{ animationDelay: '0.1s' }}>E</span>
          <span className="inline-block text-neon-green animate-neon-blink" style={{ animationDelay: '0.2s' }}>D</span>
          <span className="mx-4 text-foreground">•</span>
          <span className="inline-block text-primary animate-neon-blink" style={{ animationDelay: '0.3s' }}>P</span>
          <span className="inline-block text-electric-cyan animate-neon-blink" style={{ animationDelay: '0.4s' }}>R</span>
          <span className="inline-block text-led-orange animate-neon-blink" style={{ animationDelay: '0.5s' }}>O</span>
        </h2>
        <p className="text-muted-foreground font-tech text-sm md:text-base mt-2 tracking-widest">
          SOLUCIONES VISUALES DE IMPACTO
        </p>
      </div>
    </div>
  );
};