import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// 1. Configuración básica
const GOOGLE_AI_API_KEY = process.env.GOOGLE_AI_API_KEY;

if (!GOOGLE_AI_API_KEY) {
  console.error('ERROR: Falta la API key de Google AI');
  console.error('Crea un archivo .env.local con: GOOGLE_AI_API_KEY=tu_api_key');
  process.exit(1);
}

// 2. Inicialización del cliente de Google AI
const genAI = new GoogleGenerativeAI(GOOGLE_AI_API_KEY);

// 3. Configuración del modelo
export const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  generationConfig: {
    temperature: 0.8,  // Un poco más creativo
    topP: 0.9,        // Para respuestas más diversas
    maxOutputTokens: 1000, // Respuestas más completas
    topK: 40,         // Mejor variedad en las respuestas
  },
  safetySettings: [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
  ],
  systemInstruction: {
    role: "user",
    parts: [{
      text: `Eres un asistente amigable para el portafolio de Axel Ganum. 
      - Responde de manera natural y conversacional, como en una charla informal.
      - Usa emojis ocasionalmente para hacer la conversación más amena.
      - Formatea las respuestas en markdown para mejor legibilidad.
      - Sé conciso pero amigable en tus respuestas.
      - Si no sabes algo, dilo abiertamente.`
    }]
  }
});

console.log('✅ Chat de texto configurado correctamente');
