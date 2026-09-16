import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  ArrowUpRight,
  FileText
} from 'lucide-react';

interface NavbarProps {
  onOpenContact?: () => void;
  onOpenCv?: () => void;
}

export function Navbar({ onOpenContact, onOpenCv }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      id="main-navbar" 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'py-3.5 premium-nav shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 dark:from-amber-500 dark:to-amber-600 flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
            HB
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-stone-950 dark:text-stone-50 tracking-tight text-base sm:text-lg">
                Huzaifa Bilal
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mr-1.5" />
                Available
              </span>
            </div>
            <p className="text-xs text-stone-700 dark:text-zinc-300 font-mono font-medium hidden sm:block">
              Software Engineer
            </p>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-stone-100 dark:bg-zinc-900/90 border border-stone-300 dark:border-zinc-700">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-${link.id}`}
                onClick={() => scrollTo(link.id)}
                className={`px-3.5 py-1.5 text-xs rounded-full transition-all duration-150 ${
                  isActive
                    ? 'bg-stone-950 text-white dark:bg-zinc-100 dark:text-zinc-950 font-bold shadow-xs'
                    : 'text-stone-800 dark:text-zinc-200 hover:text-stone-950 dark:hover:text-white hover:bg-stone-200/80 dark:hover:bg-zinc-800 font-semibold'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls: Theme Switch & Contact CTA */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-100 hover:bg-stone-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 border-2 border-stone-300 dark:border-zinc-700 text-stone-950 dark:text-zinc-100 font-bold transition-all active:scale-95"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-bold hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-stone-900" />
                <span className="text-xs font-bold hidden sm:inline">Dark</span>
              </>
            )}
          </button>

          {/* Dedicated CV Button in Header */}
          <button
            id="nav-cv-btn"
            onClick={onOpenCv}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/15 hover:bg-amber-500/25 dark:bg-amber-500/20 dark:hover:bg-amber-500/30 text-amber-900 dark:text-amber-300 border-2 border-amber-400/50 dark:border-amber-500/40 text-xs font-bold transition-all shadow-xs hover:scale-[1.02] active:scale-[0.98]"
            title="View Full Curriculum Vitae & Download PDF"
          >
            <FileText className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
            <span>CV</span>
          </button>

          {/* Quick Contact / Let's Talk CTA */}
          <button
            id="nav-cta-contact"
            onClick={() => {
              if (onOpenContact) {
                onOpenContact();
              } else {
                scrollTo('contact');
              }
            }}
            className="hidden lg:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-stone-900 hover:bg-stone-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs font-semibold shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
            title="Contact Huzaifa Bilal"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-stone-100 dark:bg-zinc-900 border border-stone-200 dark:border-zinc-800 text-stone-800 dark:text-zinc-200"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-white dark:bg-zinc-900 border-b border-stone-200 dark:border-zinc-800 shadow-xl mt-2">
          <div className="flex flex-col gap-1.5">
            {/* Mobile CV Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv?.();
              }}
              className="text-left px-4 py-2.5 rounded-xl text-sm flex items-center justify-between bg-amber-500/15 text-amber-900 dark:text-amber-300 font-bold border border-amber-500/30 mb-1"
            >
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Curriculum Vitae (CV)</span>
              </div>
              <span className="text-[11px] bg-amber-500/25 px-2 py-0.5 rounded font-mono">View & PDF</span>
            </button>

            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-sm transition-colors ${
                  activeSection === link.id
                    ? 'bg-stone-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-bold'
                    : 'text-stone-800 dark:text-zinc-200 hover:bg-stone-100 dark:hover:bg-zinc-800 font-medium'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
