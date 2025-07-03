
import ThemeToggle from '@/components/ThemeToggle';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
      <footer className="py-6 sm:py-8 text-center text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 px-4">
        <p className="text-sm sm:text-base">&copy; 2025 GOPICHAND NAGANABOYINA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
