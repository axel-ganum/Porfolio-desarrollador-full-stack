import { Card } from '@/components/ui/card';
import { Search, Zap, Handshake } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Strength = {
  icon: LucideIcon;
  title: string;
  description: string;
}

const strengths: Strength[] = [
  {
    icon: Search,
    title: 'Código limpio',
    description: 'Estructuras mantenibles, arquitectura clara y buenas prácticas.',
  },
  {
    icon: Zap,
    title: 'Aprendizaje rápido',
    description: 'Me adapto muy rápido a nuevas tecnologías y flujos de trabajo.',
  },
  {
    icon: Handshake,
    title: 'Trabajo en equipo',
    description: 'Buena comunicación, claridad y colaboración real.',
  },
];

export default function Strengths() {
  return (
    <section id="fortalezas">
      <h3 className="text-3xl font-bold mb-6">Lo que puedo aportar</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {strengths.map(({ icon: Icon, title, description }) => (
          <Card key={title} className="bg-card p-6 border-primary/20 rounded-2xl">
            <div className="flex items-center gap-4 mb-2">
              <Icon className="w-6 h-6 text-primary flex-shrink-0" />
              <h4 className="font-semibold text-xl">{title}</h4>
            </div>
            <p className="text-muted-foreground text-sm">{description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
