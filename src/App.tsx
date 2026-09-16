import { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsGrid } from './components/ProjectsGrid';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';

export function PortfolioContent() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] dark:bg-[#090a0b] text-stone-900 dark:text-stone-100 selection:bg-amber-500/25 selection:text-stone-950 dark:selection:text-white transition-colors duration-200 relative">
      {/* Sticky Navigation Header */}
      <Navbar 
        onOpenContact={scrollToContact} 
        onOpenCv={() => setIsCvOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onExploreProjects={scrollToProjects} 
          onContactClick={scrollToContact} 
          onOpenCv={() => setIsCvOpen(true)}
        />
        <AboutSection />
        <ExperienceTimeline />
        <ProjectsGrid />
        <SkillsSection />
        <EducationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenCv={() => setIsCvOpen(true)} />

      {/* Comprehensive Curriculum Vitae (CV) Modal */}
      <CvModal 
        isOpen={isCvOpen} 
        onClose={() => setIsCvOpen(false)} 
        onOpenContact={scrollToContact}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioContent />
    </ThemeProvider>
  );
}
