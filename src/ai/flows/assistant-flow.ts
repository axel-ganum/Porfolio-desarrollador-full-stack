'use server';

import { model } from '@/ai/genkit';

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

export async function chatWithAssistant(message: string): Promise<string> {
  try {
    console.log('Pregunta recibida:', message);
    
    if (!message.trim()) {
      return '¿En qué puedo ayudarte hoy? Puedes preguntarme sobre los proyectos, habilidades o experiencia de Axel.';
    }
    
    // Crear el prompt con el contexto
    const prompt = `Eres un asistente amigable para el portafolio de Axel Ganum. 
    Responde de manera natural y conversacional, como si estuvieras teniendo una charla informal.
    Usa emojis ocasionalmente para hacer la conversación más amena. 
    Formatea las respuestas en markdown para mejor legibilidad.
    
    Información sobre Axel:
    ${context}
    
    Pregunta del usuario: "${message}"
    
    Por favor, responde de manera clara, concisa y amigable, como si estuvieras teniendo una conversación.`;

    // Generar la respuesta
    const result = await model.generateContent({
      contents: [{
        role: 'user',
        parts: [{ text: prompt }]
      }],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    const response = await result.response;
    const text = response.text();
    
    console.log('Respuesta generada con éxito');
    return text;
    
  } catch (error) {
    console.error('Error en chatWithAssistant:', {
      error,
      message: error instanceof Error ? error.message : 'Error desconocido',
    });
    
    return 'Disculpa, estoy teniendo problemas para conectarme con el servicio de IA. ' +
           'Puedes contactar directamente a Axel a través del formulario de contacto.';
  }
}