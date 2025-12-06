import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const technologies = ['React', 'Next.js', 'Node.js', 'NestJS', 'PostgreSQL', 'MongoDB'];

export default function Hero() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-portrait');

  return (
    <section className="bg-gradient-to-br from-background via-[#111c3d] to-background py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="animate-fadeIn" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Construyo aplicaciones web{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
              modernas, útiles y de calidad
            </span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Soy un Desarrollador Full Stack apasionado por crear experiencias completas: diseño del frontend, lógica del backend y arquitectura que funcione bien, sea estable y fácil de mantener.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="shadow-lg">
              <Link href="#proyectos">Ver mis proyectos</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contacto">Contactar</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="border-primary/40 bg-primary/20">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex justify-center animate-float">
          <div className="w-72 h-72 rounded-2xl bg-background shadow-xl overflow-hidden border border-border/30 relative">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover object-center"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
