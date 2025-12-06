import { Card } from '@/components/ui/card';

export default function About() {
  return (
    <section id="sobre-mi">
      <Card
        className="bg-card border-primary/20 p-8 shadow-xl animate-fadeIn"
        style={{ animationDelay: '0.4s', opacity: 0 }}
      >
        <h3 className="text-3xl font-bold">Sobre mí</h3>
        <p className="mt-6 text-muted-foreground leading-relaxed max-w-3xl">
          Me apasiona crear software que funcione bien y que también se vea bien.
          Me gusta trabajar en proyectos donde puedo participar en todas las
          capas: idea → UI → backend → deploy.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
          Me enfoco en código limpio, buenas prácticas, aprendizaje constante y
          disfruto mucho construir cosas nuevas.
        </p>
      </Card>
    </section>
  );
}
