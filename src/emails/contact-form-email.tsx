import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Heading,
} from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export function ContactFormEmail({ name, email, message }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje de contacto de {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nuevo mensaje de contacto</Heading>
          
          <Section style={section}>
            <Text style={text}><strong>Nombre:</strong> {name}</Text>
            <Text style={text}><strong>Email:</strong> {email}</Text>
          </Section>
          
          <Section style={section}>
            <Text style={text}><strong>Mensaje:</strong></Text>
            <Text style={messageText}>{message}</Text>
          </Section>
          
          <Section style={footer}>
            <Text style={footerText}>
              Este mensaje fue enviado desde el formulario de contacto de tu portafolio.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#ffffff',
  color: '#24292e',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  width: '480px',
  margin: '0 auto',
  padding: '20px 0 48px',
};

const h1 = {
  fontSize: '24px',
  lineHeight: 1.25,
};

const section = {
  padding: '24px',
  border: 'solid 1px #dedede',
  borderRadius: '5px',
  textAlign: 'left' as const,
  backgroundColor: '#fff',
  margin: '24px 0',
};

const text = {
  margin: '0 0 10px 0',
  textAlign: 'left' as const,
  fontSize: '16px',
};

const messageText = {
  ...text,
  whiteSpace: 'pre-line' as const,
  padding: '10px',
  backgroundColor: '#f6f8fa',
  borderRadius: '4px',
};

const footer = {
  color: '#6a737d',
  fontSize: '12px',
  textAlign: 'center' as const,
  marginTop: '60px',
};

const footerText = {
  margin: '0',
  color: '#6a737d',
  fontSize: '12px',
  textAlign: 'center' as const,
};
