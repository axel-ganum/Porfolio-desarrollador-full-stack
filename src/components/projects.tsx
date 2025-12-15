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
    description: 'Aplicación web para gestión de tareas con generación automática de tareas usando IA (DeepSeek de Hugging Face). Desarrollada con React.js y Tailwind CSS en el frontend, y NestJS en el backend. Utiliza Supabase como base de datos. El backend está desplegado en Render (puede tardar unos segundos en cargar inicialmente por ser un plan gratuito) y el frontend en Netlify. La aplicación demuestra integración con IA y gestión de estado avanzada.',
    tags: ['NestJS', 'React', 'IA'],
    videoUrl: 'https://storage.googleapis.com/aifirebase/us-central1/projects/task-ia.mp4',
    projectUrl: 'https://taka-ai.netlify.app/'
  },
  {
    id: 'project-mind-maps',
    title: 'Mapas Mentales en Tiempo Real',
    description: 'Aplicación colaborativa para creación de mapas mentales en tiempo real, desarrollada con React en el frontend y Express.js en el backend. Utiliza MongoDB Atlas como base de datos en la nube. La aplicación está desplegada en Render (puede tardar unos segundos en cargar inicialmente por ser un plan gratuito) y soporta múltiples usuarios conectados simultáneamente. Incluye funcionalidades de arrastrar y soltar, edición en tiempo real y sincronización instantánea entre usuarios.',
    tags: ['WebSockets', 'Node.js', 'React'],
    videoUrl: 'https://storage.googleapis.com/aifirebase/us-central1/projects/mind-maps.mp4',
    projectUrl: 'https://gorgeous-druid-40dd81.netlify.app/'
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
                <div className={`relative w-full overflow-hidden ${project.id === 'project-task-ia' ? 'h-56' : 'h-48'}`} style={{ paddingTop: project.id === 'project-task-ia' ? '90px' : '30px' }}>
                  {isHovered ? (
                    <video
                      src={project.videoUrl}
                      autoPlay
                      loop
                      muted
                      className={`w-full h-full ${project.id === 'project-task-ia' ? 'object-cover object-top -mt-5' : 'object-cover object-center'}`}
                      playsInline
                    />
                  ) : (
                    <Image
                      src={projectImage.imageUrl}
                      alt={project.title}
                      fill
                      className={`w-full h-full ${project.id === 'project-task-ia' ? 'object-cover object-top -mt-5' : 'object-cover object-center'}`}
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
                {project.projectUrl && (
                  <a 
                    href={project.projectUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Ver Proyecto
                  </a>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
