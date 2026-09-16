import { Project } from '../types';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Calendar,
  Globe
} from 'lucide-react';
import { useEffect } from 'react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-stone-950/70 dark:bg-black/85 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 sm:p-8 relative bg-white dark:bg-[#141518] border-2 border-stone-200 dark:border-zinc-800 animate-in zoom-in-95 duration-150 text-stone-950 dark:text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-stone-100 dark:bg-zinc-800 text-stone-800 dark:text-zinc-200 hover:text-stone-950 dark:hover:text-white border border-stone-300 dark:border-zinc-700 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-stone-100 dark:bg-zinc-800 text-stone-950 dark:text-white border border-stone-300 dark:border-zinc-700">
              {project.category}
            </span>
            {project.metrics && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 text-amber-950 dark:text-amber-200 border border-amber-500/30">
                {project.metrics}
              </span>
            )}
            <span className="text-xs text-stone-700 dark:text-zinc-300 font-mono font-bold flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
              {project.dateRange}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-bold text-stone-950 dark:text-white">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-amber-800 dark:text-amber-300 font-bold mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Project Description */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-mono uppercase font-bold text-stone-700 dark:text-zinc-300">
            System Overview & Scope
          </h4>
          <p className="text-stone-800 dark:text-zinc-200 text-sm sm:text-base leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        {/* Technical Architecture & Highlights */}
        <div className="space-y-3 mb-6">
          <h4 className="text-xs font-mono uppercase font-bold text-stone-700 dark:text-zinc-300">
            Engineering Highlights
          </h4>
          <div className="space-y-2.5">
            {project.detailedPoints.map((pt, i) => (
              <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-stone-800 dark:text-zinc-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{pt}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Tags */}
        <div className="space-y-3 mb-8">
          <h4 className="text-xs font-mono uppercase font-bold text-stone-700 dark:text-zinc-300">
            Technologies & Architecture
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-bold bg-stone-100 dark:bg-zinc-800 text-stone-900 dark:text-zinc-100 border border-stone-300 dark:border-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-stone-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-950 hover:bg-stone-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-950 font-bold text-xs sm:text-sm shadow-xs transition-all hover:scale-[1.01]"
            >
              <Globe className="w-4 h-4" />
              <span>Visit Live Project Demo</span>
              <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-stone-100 dark:bg-zinc-800 text-stone-900 dark:text-zinc-100 hover:bg-stone-200 dark:hover:bg-zinc-700 border border-stone-300 dark:border-zinc-700 transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
