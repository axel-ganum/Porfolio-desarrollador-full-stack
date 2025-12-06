"use client";

import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState } from 'react';

const projectsData = [
  {
    id: 'project-task-ia',
    title: 'Task IA App',
    description: 'Aplicación con generación automática de tareas usando modelos DeepSeek (Hugging Face). Backend NestJS, frontend React, arquitectura modular.',
    tags: ['NestJS', 'React', 'IA'],
    videoUrl: 'https://storage.googleapis.com/aifirebase/us-central1/projects/task-ia.mp4'
  },
  {
    id: 'project-mind-maps',
    title: 'Mapas Mentales en Tiempo Real',
    description: 'App colaborativa para trabajo en equipo en tiempo real. WebSockets + React + Node.js.',
    tags: ['WebSockets', 'Node.js', 'React'],
    videoUrl: 'https://storage.googleapis.com/aifirebase/us-central1/projects/mind-maps.mp4'
  },
  {
    id: 'project-ecommerce',
    title: 'Plataforma E-commerce',
    description: 'Sistema con roles, autenticación JWT, carrito, pedidos y backend robusto NestJS.',
    tags: ['React', 'NestJS', 'JWT'],
    videoUrl: 'https://storage.googleapis.com/aifirebase/us-central1/projects/ecommerce.mp4'
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="proyectos">
      <h3 className="text-3xl font-bold mb-2">Proyectos destacados</h3>
      <p className="text-muted-foreground mb-10">Una selección cuidada de lo que sé construir: IA, tiempo real, APIs, frontend y backend.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => {
          const projectImage = PlaceHolderImages.find(p => p.id === project.id);
          const isHovered = hoveredProject === project.id;

          return (
            <Card 
              key={project.id} 
              className="bg-card border-primary/20 hover:scale-[1.03] transition-transform duration-300 flex flex-col overflow-hidden rounded-2xl"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {projectImage && (
                <div className="relative h-40 w-full">
                  {isHovered ? (
                    <video
                      src={project.videoUrl}
                      autoPlay
                      loop
                      muted
                      className="object-cover object-center w-full h-full"
                      playsInline
                    />
                  ) : (
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover object-center"
                      data-ai-hint={projectImage.imageHint}
                    />
                  )}
                </div>
              )}
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="font-semibold text-xl mt-4">{project.title}</h4>
                <p className="text-muted-foreground text-sm mt-2 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4 text-xs">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/20 rounded">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
