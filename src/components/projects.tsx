"use client";

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState } from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 'project-task-ia',
    title: 'Task AI App',
    description: 'Gestión inteligente de tareas con AI.',
    problem: 'La sobrecarga de tareas dificulta la organización y priorización efectiva.',
    contribution: 'Desarrollé el sistema de generación automática de tareas integrando DeepSeek (Hugging Face) y construí la arquitectura Full Stack desde cero.',
    challenge: 'Optimizar las llamadas a la API de AI para manejar tiempos de respuesta y asegurar la persistencia en Supabase de forma atómica.',
    tags: ['NestJS', 'React', 'AI', 'Supabase'],
    projectUrl: 'https://taka-ai.netlify.app/',
    githubFrontend: 'https://github.com/axel-ganum/TASK-IA-FRONTEND.git',
    githubBackend: 'https://github.com/axel-ganum/Bckend-Task.git'
  },
  {
    id: 'project-mind-maps',
    title: 'Mapas Mentales Pro',
    description: 'Colaboración creativa en tiempo real.',
    problem: 'Equipos remotos necesitaban una herramienta fluida para hacer brainstorming sin retrasos de sincronización.',
    contribution: 'Implementé la comunicación bidireccional con WebSockets (Socket.io) y la lógica de renderizado del canvas interactivo.',
    challenge: 'Sincronizar el estado de múltiples nodos en tiempo real evitando conflictos de edición paralela entre usuarios.',
    tags: ['WebSockets', 'Node.js', 'React', 'MongoDB'],
    projectUrl: 'https://gorgeous-druid-40dd81.netlify.app/',
    githubFrontend: 'https://github.com/axel-ganum/mapa-mental.git',
    githubBackend: 'https://github.com/axel-ganum/Api-mapa-mental.git'
  },
  {
    id: 'project-pionex-dashboard',
    title: 'Trading Dashboard',
    description: 'Visualización de datos financieros en vivo.',
    problem: 'La visualización de datos de trading suele ser compleja y poco intuitiva para el seguimiento rápido.',
    contribution: 'Diseñé e implementé el dashboard dinámico utilizando ApexCharts y una capa de backend para cachear peticiones de la API externa.',
    challenge: 'Procesar grandes volúmenes de datos en tiempo real sin degradar el rendimiento del navegador (Optimización de re-renders).',
    tags: ['React', 'API', 'ApexCharts', 'Express'],
    projectUrl: 'https://trading-frontend-desboard.vercel.app/',
    githubFrontend: 'https://github.com/axel-ganum/trading-frontend-desboard.git',
    githubBackend: 'https://github.com/axel-ganum/trading-desboar-backend.git'
  },
];

export default function Projects() {

  return (
    <section id="proyectos" className="pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h3 className="text-3xl font-bold mb-2">Proyectos destacados</h3>
            <p className="text-muted-foreground">Enfoque en resolución de problemas y calidad técnica.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 -mx-4">
        {projectsData.map((project, index) => {
          const projectImage = PlaceHolderImages.find(p => p.id === project.id);

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card
                className="bg-card border border-primary/20 hover:border-primary/50 transition-all duration-300 flex flex-col overflow-hidden rounded-2xl shadow-md h-full group"
              >
                {projectImage && (
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      fill
                      className="transition-transform duration-700 group-hover:scale-105 object-cover"
                      style={{
                        objectPosition: project.id === 'project-task-ia' ? 'left top' : 'top center'
                      }}
                      data-ai-hint={projectImage.imageHint}
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-xs text-white font-medium">Click para ver detalles</p>
                    </div>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-xl">{project.title}</h4>
                  </div>

                  <div className="space-y-4 flex-grow">
                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">El Desafío</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Mi Solución</p>
                      <p className="text-sm text-foreground leading-relaxed italic">"{project.contribution}"</p>
                    </div>

                    <div className="bg-primary/5 p-3 rounded-lg border border-primary/10">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Dificultad Técnica</p>
                      <p className="text-xs text-muted-foreground">{project.challenge}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-[10px] px-2 py-0 border-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-2">
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded-xl text-white bg-primary hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                      >
                        Probar Aplicación
                      </a>
                    )}
                    <div className="flex gap-2">
                      {project.githubFrontend && (
                        <a
                          href={project.githubFrontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors"
                        >
                          Repo Front
                        </a>
                      )}
                      {project.githubBackend && (
                        <a
                          href={project.githubBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors"
                        >
                          Repo Back
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
