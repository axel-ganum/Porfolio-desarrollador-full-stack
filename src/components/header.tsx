import Link from 'next/link';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const navItems = [
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Sobre mí', href: '#sobre-mi' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Fortalezas', href: '#fortalezas' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Header() {
  return (
    <header className="bg-background/80 backdrop-blur sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-primary-foreground font-bold text-lg animate-float">
            AG
          </div>
          <div>
            <h1 className="text-xl font-semibold">Axel Ganum</h1>
            <p className="text-xs text-muted-foreground">Desarrollador Web Full Stack</p>
          </div>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-primary transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 text-lg font-medium mt-10">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
