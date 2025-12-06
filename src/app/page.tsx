import Header from '@/components/header';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import About from '@/components/about';
import Strengths from '@/components/strengths';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="max-w-6xl mx-auto px-6 py-20 space-y-20 md:space-y-24">
          <Projects />
          <About />
          <Skills />
          <Strengths />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
