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
            Hola, soy Axel Ganum. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
              Desarrollador Full Stack
            </span>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-muted-foreground text-md sm:text-lg max-w-3xl mx-auto"
          >
            Especializado en crear aplicaciones web modernas y escalables.
            Actualmente busco mi <strong>primera oportunidad profesional</strong> para aportar valor con NestJS, React y soluciones integradas con IA.
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
            <Button asChild variant="secondary" size="lg" className="shadow-lg hover:scale-105 transition-transform">
              <a href="/cv.pdf" download="Axel_Ganum_CV.pdf" className="inline-flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar CV
              </a>
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
