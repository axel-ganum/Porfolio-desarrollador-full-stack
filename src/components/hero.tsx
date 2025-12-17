"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const technologies = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'NestJS',
  'PostgreSQL',
  'MongoDB',
  'Docker',
];

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-background via-[#111c3d] to-background py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Construyo aplicaciones web{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
              modernas, útiles y de calidad
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-muted-foreground text-md sm:text-lg max-w-3xl mx-auto"
          >
            Soy un Desarrollador Full Stack apasionado por crear experiencias
            completas: diseño del frontend, lógica del backend y arquitectura
            que funcione bien, sea estable y fácil de mantener.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-4 justify-center"
          >
            <Button asChild size="lg" className="shadow-lg hover:scale-105 transition-transform">
              <Link href="#proyectos">Ver mis proyectos</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-transform">
              <Link href="#contacto">Contactar</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-8 flex flex-wrap gap-3 text-sm justify-center"
          >
            {technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="border-primary/40 bg-primary/20"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
