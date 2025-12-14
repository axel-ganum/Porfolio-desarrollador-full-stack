'server';
import { z } from 'zod';

/**
 * @fileOverview A contact form flow.
 *
 * - sendContactMessage - A function that handles sending a message from the contact form.
 * - ContactFormInput - The input type for the sendContactMessage function.
 * - ContactFormOutput - The return type for the sendContactMessage function.
 */

const ContactFormInputSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Por favor ingresa un correo electrónico válido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
});

export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

export async function sendContactMessage(
  input: ContactFormInput
): Promise<ContactFormOutput> {
  try {
    // Validar la entrada
    const validatedInput = ContactFormInputSchema.parse(input);
    
    // Hacer una petición a la API de contacto
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedInput),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Error al enviar el mensaje');
    }
    
    return { 
      success: true, 
      message: '¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.' 
    };
    
  } catch (error) {
    console.error('Error al procesar el formulario de contacto:', error);
    
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        message: 'Error de validación: ' + error.errors.map(e => e.message).join(', ') 
      };
    }
    
    return { 
      success: false, 
      message: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.' 
    };
  }
}
