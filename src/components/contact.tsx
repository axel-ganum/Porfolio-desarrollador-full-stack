"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card } from "./ui/card";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, introduce un email válido.",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres.",
  }),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // Simulate form submission
    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactarme. Te responderé a la brevedad.",
    });
    form.reset();
  }

  return (
    <section id="contacto">
      <Card className="bg-card border-primary/20 p-8 shadow-xl animate-fadeIn" style={{ animationDelay: '0.6s', opacity: 0 }}>
        <h3 className="text-3xl font-bold mb-6">Contacto</h3>
        <p className="text-muted-foreground mb-6 max-w-2xl">Si querés comunicarte conmigo, completá este formulario. Te responderé a la brevedad.</p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground">Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu nombre" {...field} className="bg-background border-primary/30 focus:border-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="tu@email.com" {...field} className="bg-background border-primary/30 focus:border-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel className="text-muted-foreground">Mensaje</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Escribí tu mensaje..." rows={5} {...field} className="bg-background border-primary/30 focus:border-primary" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" className="md:col-span-2 w-full shadow-lg">Enviar mensaje</Button>
          </form>
        </Form>
      </Card>
    </section>
  );
}
