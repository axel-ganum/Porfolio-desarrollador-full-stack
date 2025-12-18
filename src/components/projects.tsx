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
    title: 'Task IA App',
    description: 'Aplicación web para gestión de tareas con generación automática de tareas usando IA (DeepSeek de Hugging Face). Desarrollada con React.js y Tailwind CSS en el frontend, y NestJS en el backend. Utiliza Supabase como base de datos. El backend está desplegado en Render (puede tardar unos segundos en cargar inicialmente por ser un plan gratuito) y el frontend en Netlify. La aplicación demuestra integración con IA y gestión de estado avanzada.',
    tags: ['NestJS', 'React', 'IA'],
    projectUrl: 'https://taka-ai.netlify.app/',
    githubFrontend: 'https://github.com/axel-ganum/TASK-IA-FRONTEND.git',
    githubBackend: 'https://github.com/axel-ganum/Bckend-Task.git'
  },
  {
    id: 'project-mind-maps',
    title: 'Mapas Mentales en Tiempo Real',
    description: 'Aplicación colaborativa para creación de mapas mentales en tiempo real, desarrollada con React en el frontend y Express.js en el backend. Utiliza MongoDB Atlas como base de datos en la nube. La aplicación está desplegada en Render (puede tardar unos segundos en cargar inicialmente por ser un plan gratuito) y soporta múltiples usuarios conectados simultáneamente. Incluye funcionalidades de arrastrar y soltar, edición en tiempo real y sincronización instantánea entre usuarios.',
    tags: ['WebSockets', 'Node.js', 'React'],
    projectUrl: 'https://gorgeous-druid-40dd81.netlify.app/',
    githubFrontend: 'https://github.com/axel-ganum/mapa-mental.git',
    githubBackend: 'https://github.com/axel-ganum/Api-mapa-mental.git'
  },
  {
    id: 'project-pionex-dashboard',
    title: 'Pionex Trading Dashboard',
    description: 'Dashboard de trading que consume datos de Pionex. Las gráficas están implementadas con React ApexCharts y cuenta con un backend en Express para la gestión de datos.',
    tags: ['React', 'API', 'Trading', 'ApexCharts', 'Express'],
    projectUrl: 'https://trading-frontend-desboard.vercel.app/',
    githubFrontend: 'https://github.com/axel-ganum/trading-frontend-desboard.git',
    githubBackend: 'https://github.com/axel-ganum/trading-desboar-backend.git'
  },
];

export default function Projects() {

  return (
    <section id="proyectos" className="pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold mb-2">Proyectos destacados</h3>
        <p className="text-muted-foreground mb-10">Una selección cuidada de lo que sé construir: IA, tiempo real, APIs, frontend y backend.</p>
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
            >
              <Card
                className="bg-card border border-primary/20 hover:scale-[1.03] transition-transform duration-300 flex flex-col overflow-hidden rounded-2xl shadow-md h-full"
              >
                {projectImage && (
                  <div className="relative w-full" style={{
                    aspectRatio: '16/9',
                    position: 'relative',
                    backgroundColor: 'transparent',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'center'
                    }}>
                      <div style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden'
                      }}>
                        <Image
                          src={projectImage.imageUrl}
                          alt={project.title}
                          fill
                          className="transition-transform duration-700 hover:scale-110"
                          style={{
                            objectFit: 'cover',
                            objectPosition: project.id === 'project-task-ia' ? 'left top' : 'top center'
                          }}
                          data-ai-hint={projectImage.imageHint}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                )}
                <div className="p-5 flex flex-col flex-grow rounded-b-2xl bg-card">
                  <h4 className="font-semibold text-xl mt-4">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mt-2 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4 text-xs">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/20 rounded">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    {project.projectUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Ver Proyecto
                      </a>
                    )}
                    <div className="flex gap-2">
                      {project.githubFrontend && (
                        <a
                          href={project.githubFrontend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-md border border-gray-600 hover:bg-gray-800 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          Frontend
                        </a>
                      )}
                      {project.githubBackend && (
                        <a
                          href={project.githubBackend}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium rounded-md border border-gray-600 hover:bg-gray-800 transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                          Backend
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
