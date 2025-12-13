import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';

// Configuración de Google AI
const googleAIConfig = {
  apiKey: process.env.GOOGLE_AI_API_KEY,
};

// Verificar que la API key esté configurada
console.log('Configurando Genkit con la siguiente API key:', 
  googleAIConfig.apiKey ? 'API key encontrada' : 'NO se encontró API key');

if (!googleAIConfig.apiKey) {
  console.error('ERROR: No se encontró GOOGLE_AI_API_KEY en las variables de entorno');
  console.error('Por favor, asegúrate de tener un archivo .env.local con tu API key');
}

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: googleAIConfig.apiKey,
      // Configuración mínima para pruebas
    }),
  ],
});

console.log('Genkit configurado correctamente');
