'use server';
/**
 * @fileOverview An AI assistant for Axel Ganum's portfolio.
 *
 * - chatWithAssistant - A function that handles conversation with the assistant.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export async function chatWithAssistant(message: string): Promise<string> {
  const result = await assistantFlow(message);
  return result;
}

const context = `
  Información sobre Axel Ganum:
  - Sobre mí: "Me apasiona crear software que funcione bien y que también se vea bien. Me gusta trabajar en proyectos donde puedo participar en todas las capas: idea → UI → backend → deploy. Me enfoco en código limpio, buenas prácticas, aprendizaje constante y disfruto mucho construir cosas nuevas."
  - Proyectos:
    1. Task IA App: "Aplicación con generación automática de tareas usando modelos DeepSeek (Hugging Face). Backend NestJS, frontend React, arquitectura modular."
    2. Mapas Mentales en Tiempo Real: "App colaborativa para trabajo en equipo en tiempo real. WebSockets + React + Node.js."
    3. Plataforma E-commerce: "Sistema con roles, autenticación JWT, carrito, pedidos y backend robusto NestJS."
  - Habilidades: 'React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Node.js', 'NestJS', 'Express', 'HTML5', 'CSS3', 'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'TypeORM', 'REST APIs', 'WebSockets', 'Docker', 'Git', 'Jest'.
  - Fortalezas: 
    1. Código limpio: "Estructuras mantenibles, arquitectura clara y buenas prácticas."
    2. Aprendizaje rápido: "Me adapto muy rápido a nuevas tecnologías y flujos de trabajo."
    3. Trabajo en equipo: "Buena comunicación, claridad y colaboración real."
  - Contacto: "Para contactar a Axel, se puede usar el formulario en la sección de contacto de la página."
`;

const assistantFlow = ai.defineFlow(
  {
    name: 'assistantFlow',
    inputSchema: z.string(),
    outputSchema: z.string(),
  },
  async (message) => {
    const { output } = await ai.generate({
      prompt: `
        Eres un asistente virtual amigable y profesional para el portafolio de Axel Ganum.
        Tu objetivo es responder preguntas sobre Axel, sus habilidades, experiencia y proyectos.
        Utiliza ÚNICAMENTE la siguiente información para formular tus respuestas. No inventes nada.
        Sé conciso y directo en tus respuestas. Habla en nombre del asistente, no como si fueras Axel.
        Por ejemplo, di "Axel tiene experiencia en..." en lugar de "Tengo experiencia en...".

        Contexto:
        ${context}

        Pregunta del usuario:
        ${message}
      `,
    });
    return output!;
  }
);
