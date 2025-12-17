"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Input } from './ui/input';
import { MessageCircle, Send, X, Bot, User, Loader } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { chatWithAssistant } from '@/ai/flows/assistant-flow';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      setMessages([
        { role: 'assistant', content: "¡Hola! Soy el asistente de Axel. ¿En qué puedo ayudarte? Puedes preguntarme sobre sus proyectos, habilidades o experiencia." }
      ]);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      console.log('Enviando mensaje al asistente...');
      const assistantResponse = await chatWithAssistant(input);
      console.log('Respuesta del asistente recibida:', assistantResponse);

      if (!assistantResponse) {
        throw new Error('La respuesta del asistente está vacía');
      }

      const assistantMessage: Message = {
        role: 'assistant',
        content: assistantResponse || 'No pude generar una respuesta. Por favor, intenta de nuevo.'
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error en handleSendMessage:', {
        error,
        message: error instanceof Error ? error.message : 'Error desconocido',
        stack: error instanceof Error ? error.stack : undefined,
      });

      const errorMessage: Message = {
        role: 'assistant',
        content: `Lo siento, ocurrió un error: ${error instanceof Error ? error.message : 'Error desconocido'}. Por favor, inténtalo de nuevo más tarde.`
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg z-50"
        size="icon"
      >
        {isOpen ? <X /> : <MessageCircle />}
        <span className="sr-only">Abrir chat del asistente</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 left-4 sm:left-auto sm:right-6 w-auto sm:w-80 md:w-96 z-50 origin-bottom-right"
          >
            <Card className="w-full shadow-2xl border-primary/30 h-[70vh] sm:h-auto flex flex-col">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Asistente de IA</CardTitle>
                <Button variant="ghost" size="icon" onClick={toggleChat}>
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="flex-grow overflow-hidden p-0">
                {/* Usamos flex-grow en el contenedor del ScrollArea para que ocupe el espacio disponible y no se corte */}
                <ScrollArea className="h-full px-4 py-2" ref={scrollAreaRef}>
                  <div className="space-y-4 pb-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''
                          }`}
                      >
                        {message.role === 'assistant' && (
                          <div className="p-2 bg-primary rounded-full text-primary-foreground flex-shrink-0">
                            <Bot size={16} />
                          </div>
                        )}
                        <p
                          className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${message.role === 'user'
                            ? 'bg-secondary text-secondary-foreground'
                            : 'bg-muted text-muted-foreground'
                            }`}
                        >
                          {message.content}
                        </p>
                        {message.role === 'user' && (
                          <div className="p-2 bg-purple-500 rounded-full text-primary-foreground flex-shrink-0">
                            <User size={16} />
                          </div>
                        )}
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-primary rounded-full text-primary-foreground flex-shrink-0">
                          <Bot size={16} />
                        </div>
                        <div className="flex items-center space-x-2 bg-muted rounded-lg px-3 py-2">
                          <Loader className="animate-spin" size={12} />
                          <p className="text-xs text-muted-foreground">Pensando...</p>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>
              </CardContent>
              <CardFooter className="pt-2">
                <form onSubmit={handleSendMessage} className="flex w-full gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Pregúntame algo..."
                    disabled={isLoading}
                  />
                  <Button type="submit" size="icon" disabled={isLoading}>
                    <Send className="h-4 w-4" />
                    <span className="sr-only">Enviar mensaje</span>
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}