"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/card';
import { Input } from './ui/input';
import { MessageCircle, Send, X, Bot, User, Loader } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { chatWithAssistant } from '@/ai/flows/assistant-flow';

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
      const assistantResponse = await chatWithAssistant(input);
      const assistantMessage: Message = { role: 'assistant', content: assistantResponse };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error from AI assistant:", error);
      const errorMessage: Message = { role: 'assistant', content: 'Lo siento, algo salió mal. Por favor, intenta de nuevo.' };
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

      {isOpen && (
        <div className="fixed bottom-24 right-4 left-4 sm:left-auto sm:right-6 sm:w-80 md:w-96 z-50">
          <Card className="w-full shadow-2xl border-primary/30">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg">Asistente de IA</CardTitle>
              <Button variant="ghost" size="icon" onClick={toggleChat}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-80 pr-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex items-start gap-3 ${
                        message.role === 'user' ? 'justify-end' : ''
                      }`}
                    >
                      {message.role === 'assistant' && (
                        <div className="p-2 bg-primary rounded-full text-primary-foreground">
                          <Bot size={16} />
                        </div>
                      )}
                      <p
                        className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                          message.role === 'user'
                            ? 'bg-secondary text-secondary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {message.content}
                      </p>
                      {message.role === 'user' && (
                         <div className="p-2 bg-purple-500 rounded-full text-primary-foreground">
                          <User size={16} />
                        </div>
                      )}
                    </div>
                  ))}
                   {isLoading && (
                    <div className="flex items-start gap-3">
                       <div className="p-2 bg-primary rounded-full text-primary-foreground">
                          <Bot size={16} />
                        </div>
                      <div className="flex items-center space-x-2">
                        <Loader className="animate-spin" size={16}/>
                        <p className="text-sm text-muted-foreground">Pensando...</p>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </CardContent>
            <CardFooter>
              <form onSubmit={handleSendMessage} className="flex w-full gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Pregúntame algo..."
                  disabled={isLoading}
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                  <Send />
                  <span className="sr-only">Enviar mensaje</span>
                </Button>
              </form>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}