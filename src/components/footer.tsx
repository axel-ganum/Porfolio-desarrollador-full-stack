export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/20">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Axel Ganum. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
