import { NextResponse } from 'next/server';
import { z } from 'zod';
import { ContactFormEmail } from '@/emails/contact-form-email';
import { render } from '@react-email/render';
import { resend } from '@/lib/resend';

// Definir el esquema de validación
const ContactFormInputSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Por favor ingresa un correo electrónico válido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = ContactFormInputSchema.parse(body);

    // Renderizar el correo electrónico a HTML
    const emailHtml = await render(
      ContactFormEmail({ name, email, message })
    );

    // Enviar el correo electrónico
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Dominio de prueba de Resend
      to: process.env.CONTACT_EMAIL || 'tu-email@ejemplo.com', // Tu dirección de correo
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: emailHtml,
      replyTo: email,
    });

    if (error) {
      console.error('Error al enviar el correo:', error);
      return NextResponse.json(
        { success: false, message: 'Error al enviar el mensaje' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Mensaje enviado con éxito',
    });
  } catch (error) {
    console.error('Error en el servidor:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, message: error.message },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: 'Error al procesar la solicitud' },
      { status: 500 }
    );
  }
}
