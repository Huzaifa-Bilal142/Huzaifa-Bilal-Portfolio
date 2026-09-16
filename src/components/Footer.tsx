import { ArrowUp, Github, Linkedin, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenCv?: () => void;
}

export function Footer({ onOpenCv }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-stone-200 dark:border-zinc-800 bg-stone-100/90 dark:bg-[#0c0d0e] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand and identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-700 dark:from-amber-500 dark:to-amber-600 flex items-center justify-center text-white font-bold text-sm shadow-xs">
              HB
            </div>
            <div>
              <div className="font-display font-bold text-stone-950 dark:text-white text-base">
                Huzaifa Bilal
              </div>
              <p className="text-xs text-stone-700 dark:text-zinc-300 font-mono font-medium">
                Software Engineer • WordPress & CMS Architect
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-stone-900 dark:text-zinc-100 font-bold">
            <a href="#about" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">About</a>
            <a href="#experience" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">Contact</a>
            {onOpenCv && (
              <button
                onClick={onOpenCv}
                className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors inline-flex items-center gap-1 font-bold text-amber-800 dark:text-amber-400"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </button>
            )}
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-zinc-800 border-2 border-stone-200 dark:border-zinc-700 text-stone-900 dark:text-zinc-100 hover:text-amber-700 dark:hover:text-amber-400 transition-colors shadow-xs"
              title="GitHub: Huzaifa-Bilal142"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white dark:bg-zinc-800 border-2 border-stone-200 dark:border-zinc-700 text-stone-900 dark:text-zinc-100 hover:text-amber-700 dark:hover:text-amber-400 transition-colors shadow-xs"
              title="LinkedIn Profile"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white dark:bg-zinc-800 border-2 border-stone-200 dark:border-zinc-700 text-stone-900 dark:text-zinc-100 hover:text-amber-700 dark:hover:text-amber-400 transition-colors shadow-xs"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-8 pt-8 border-t border-stone-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-stone-700 dark:text-zinc-300">
          <div>
            © {new Date().getFullYear()} Huzaifa Bilal. All rights reserved.
          </div>
          <div>
            <span>Engineered with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
