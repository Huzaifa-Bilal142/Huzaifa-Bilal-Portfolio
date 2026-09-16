import { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Globe, 
  Award, 
  Check, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  FileText,
  ArrowUpRight
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  WORK_EXPERIENCE, 
  EDUCATION, 
  CERTIFICATIONS, 
  SKILL_CATEGORIES, 
  PROJECTS_DATA 
} from '../data/portfolioData';
import { generateCvPdf } from '../utils/generateCvPdf';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact?: () => void;
}

export function CvModal({ isOpen, onClose, onOpenContact }: CvModalProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const edu = EDUCATION[0];

  const handleDownload = () => {
    setIsDownloading(true);
    try {
      generateCvPdf();
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-stone-950/70 dark:bg-black/85 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl shadow-2xl bg-white dark:bg-[#121316] border-2 border-stone-200 dark:border-zinc-800 text-stone-900 dark:text-zinc-100 overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Top Bar with Download & Actions */}
        <div className="shrink-0 px-5 sm:px-7 py-4 border-b-2 border-stone-200 dark:border-zinc-800 bg-stone-50/95 dark:bg-zinc-900/95 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-display font-bold text-base sm:text-lg text-stone-950 dark:text-white leading-tight">
                  Curriculum Vitae
                </h2>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-stone-200 dark:bg-zinc-800 text-stone-800 dark:text-zinc-200 uppercase">
                  Verified Resume
                </span>
              </div>
              <p className="text-xs text-stone-700 dark:text-zinc-300">
                Huzaifa Bilal • Software Engineer
              </p>
            </div>
          </div>

          {/* Right side Action Buttons including Download CV */}
          <div className="flex items-center gap-2 sm:gap-2.5 ml-auto">
            {/* Download CV Button */}
            <button
              id="cv-modal-download-btn"
              onClick={handleDownload}
              disabled={isDownloading}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white dark:text-stone-950 shadow-sm transition-all active:scale-95 disabled:opacity-50"
              title="Download official PDF copy"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-white dark:text-stone-950" />
                  <span>Downloaded!</span>
                </>
              ) : (
                <>
                  <Download className={`w-4 h-4 ${isDownloading ? 'animate-bounce' : ''}`} />
                  <span>{isDownloading ? 'Preparing PDF...' : 'Download CV'}</span>
                </>
              )}
            </button>

            {/* Print Button */}
            <button
              id="cv-modal-print-btn"
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-stone-100 dark:bg-zinc-800 hover:bg-stone-200 dark:hover:bg-zinc-700 text-stone-800 dark:text-zinc-200 border border-stone-300 dark:border-zinc-700 transition-colors"
              title="Print CV or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            {/* Close Button */}
            <button
              id="cv-modal-close-btn"
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-100 dark:bg-zinc-800 hover:bg-stone-200 dark:hover:bg-zinc-700 text-stone-700 dark:text-zinc-300 hover:text-stone-950 dark:hover:text-white border border-stone-300 dark:border-zinc-700 transition-colors"
              aria-label="Close CV preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document Body */}
        <div id="cv-printable-content" className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8 print:p-0 print:overflow-visible">
          
          {/* Document Header & Contact Block */}
          <div className="border-b-2 border-stone-200 dark:border-zinc-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="font-display font-extrabold text-2xl sm:text-3xl text-stone-950 dark:text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-base sm:text-lg font-bold text-amber-700 dark:text-amber-400 mt-0.5">
                  {PERSONAL_INFO.title}
                </p>
              </div>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-xs font-bold text-emerald-900 dark:text-emerald-300 self-start">
                <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                <span>Available for Global Roles</span>
              </div>
            </div>

            {/* Contact details grid */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-xs">
              <div className="flex items-center gap-2 text-stone-800 dark:text-zinc-200 font-medium">
                <Phone className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="hover:underline font-mono">
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2 text-stone-800 dark:text-zinc-200 font-medium">
                <Mail className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline font-mono">
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2 text-stone-800 dark:text-zinc-200 font-medium">
                <MapPin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <div className="flex items-center gap-2 text-stone-800 dark:text-zinc-200 font-medium">
                <Linkedin className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:underline truncate">
                  linkedin.com/in/huzaifa-bilal-6409b1417
                </a>
              </div>

              <div className="flex items-center gap-2 text-stone-800 dark:text-zinc-200 font-medium">
                <Github className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="hover:underline font-mono">
                  github.com/{PERSONAL_INFO.githubUsername}
                </a>
              </div>

              <div className="flex items-center gap-2 text-stone-800 dark:text-zinc-200 font-medium">
                <Globe className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <a href={PERSONAL_INFO.portfolioUrl} target="_blank" rel="noreferrer" className="hover:underline truncate">
                  huzaifas-digital-canvas.vercel.app
                </a>
              </div>
            </div>
          </div>

          {/* Section: Profile */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 border-b border-stone-200 dark:border-zinc-800 pb-1.5">
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-stone-900 dark:text-zinc-100">
                Professional Profile
              </h3>
            </div>
            <p className="text-sm text-stone-800 dark:text-zinc-200 leading-relaxed font-normal">
              {PERSONAL_INFO.shortBio}
            </p>
          </div>

          {/* Section: Work Experience */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-stone-200 dark:border-zinc-800 pb-1.5">
              <Briefcase className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-stone-900 dark:text-zinc-100">
                Work Experience
              </h3>
            </div>

            <div className="space-y-6">
              {WORK_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-stone-50 dark:bg-zinc-900/60 border border-stone-200 dark:border-zinc-800">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <h4 className="text-sm font-bold text-stone-950 dark:text-white">
                      {exp.role}
                    </h4>
                    <span className="text-xs font-mono font-bold text-amber-800 dark:text-amber-300">
                      {exp.period}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-stone-700 dark:text-zinc-300 mb-3 flex items-center gap-2">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span className="font-mono">{exp.location}</span>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-2 text-xs text-stone-800 dark:text-zinc-200 mb-3.5">
                    {exp.achievements.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 dark:bg-amber-400 mt-1.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Featured Platforms */}
                  {exp.highlightProjects && exp.highlightProjects.length > 0 && (
                    <div className="pt-2.5 border-t border-stone-200 dark:border-zinc-800 flex flex-wrap items-center gap-1.5">
                      <span className="text-[11px] font-mono font-bold text-stone-700 dark:text-zinc-300 uppercase">
                        Featured:
                      </span>
                      {exp.highlightProjects.map((p, pIdx) => (
                        <span 
                          key={pIdx}
                          className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-white dark:bg-zinc-800 text-stone-900 dark:text-amber-300 border border-stone-300 dark:border-zinc-700 shadow-xs"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Section: Education & Final Year Project */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-stone-200 dark:border-zinc-800 pb-1.5">
              <GraduationCap className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-stone-900 dark:text-zinc-100">
                Education & Degree
              </h3>
            </div>

            {edu && (
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-zinc-900/60 border border-stone-200 dark:border-zinc-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h4 className="text-sm font-bold text-stone-950 dark:text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-medium text-stone-700 dark:text-zinc-300">
                      {edu.institution} • {edu.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-stone-700 dark:text-zinc-300 block">
                      {edu.period}
                    </span>
                    <span className="inline-block mt-0.5 px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                      {edu.grade}
                    </span>
                  </div>
                </div>

                {/* FYP: Auctify */}
                {edu.finalProject && (
                  <div className="pt-3 border-t border-stone-200 dark:border-zinc-800">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h5 className="text-xs font-bold text-stone-950 dark:text-white">
                        Final Year Project: {edu.finalProject.title}
                      </h5>
                      <a 
                        href={edu.finalProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold text-amber-700 dark:text-amber-400 hover:underline"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <ul className="space-y-1.5 text-xs text-stone-800 dark:text-zinc-200">
                      {edu.finalProject.highlights.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-stone-400 dark:bg-zinc-600 mt-1.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Certifications */}
                <div className="pt-3 border-t border-stone-200 dark:border-zinc-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                    <span className="text-xs font-mono font-bold uppercase text-stone-800 dark:text-zinc-200">
                      Industry Certifications:
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {CERTIFICATIONS.map((cert) => (
                      <div key={cert.id} className="p-2.5 rounded-lg bg-white dark:bg-zinc-800 border border-stone-300 dark:border-zinc-700 flex items-center justify-between text-xs">
                        <div>
                          <span className="font-bold text-stone-950 dark:text-white block">{cert.title}</span>
                          <span className="text-[11px] text-stone-600 dark:text-zinc-400">{cert.issuer}</span>
                        </div>
                        <span className="font-mono text-[11px] font-bold text-amber-800 dark:text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                          {cert.score}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Section: Key Projects & Live Websites */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-stone-200 dark:border-zinc-800 pb-1.5">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-stone-900 dark:text-zinc-100">
                  Engineering Projects & Live Client Platforms
                </h3>
              </div>
              <span className="text-[11px] font-mono text-stone-600 dark:text-zinc-400">
                12 Production Websites
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROJECTS_DATA.map((proj) => (
                <div 
                  key={proj.id}
                  className="p-3 rounded-xl bg-stone-50 dark:bg-zinc-900/60 border border-stone-200 dark:border-zinc-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-baseline justify-between gap-1 mb-1">
                      <h4 className="text-xs font-bold text-stone-950 dark:text-white leading-tight">
                        {proj.title}
                      </h4>
                      <span className="text-[10px] font-mono text-stone-600 dark:text-zinc-400 shrink-0">
                        {proj.dateRange}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-700 dark:text-zinc-300 mb-2 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-200 dark:border-zinc-800 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-stone-200 dark:bg-zinc-800 text-stone-800 dark:text-zinc-200">
                      {proj.category}
                    </span>
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-amber-700 dark:text-amber-400 hover:underline"
                      >
                        <Globe className="w-3 h-3" />
                        <span>Visit Site</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Technical Skills */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-stone-200 dark:border-zinc-800 pb-1.5">
              <h3 className="text-xs font-mono font-bold tracking-wider uppercase text-stone-900 dark:text-zinc-100">
                Core Competencies & Skills
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-3.5 rounded-xl bg-stone-50 dark:bg-zinc-900/60 border border-stone-200 dark:border-zinc-800">
                  <h4 className="text-xs font-mono font-bold text-stone-950 dark:text-white uppercase mb-2">
                    {cat.title}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span 
                        key={s.name}
                        className="px-2 py-0.5 rounded text-[11px] font-semibold bg-white dark:bg-zinc-800 text-stone-800 dark:text-zinc-200 border border-stone-300 dark:border-zinc-700"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Languages */}
          <div className="pt-2 border-t border-stone-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-4">
              <span className="font-mono font-bold uppercase text-stone-900 dark:text-zinc-100">
                Languages:
              </span>
              <span className="text-stone-800 dark:text-zinc-200">
                <strong>Urdu:</strong> Native
              </span>
              <span className="text-stone-800 dark:text-zinc-200">
                <strong>English:</strong> Proficient
              </span>
            </div>

            <span className="text-[11px] font-mono text-stone-600 dark:text-zinc-400">
              Last updated: September 2026
            </span>
          </div>
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="shrink-0 px-5 sm:px-7 py-3.5 border-t-2 border-stone-200 dark:border-zinc-800 bg-stone-50 dark:bg-zinc-900 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-stone-600 dark:text-zinc-400 hidden sm:block">
            High-resolution vector PDF format • Includes live platform links
          </div>

          <div className="flex items-center gap-2.5 ml-auto">
            {onOpenContact && (
              <button
                id="cv-modal-bottom-talk-btn"
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-stone-900 hover:bg-stone-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              id="cv-modal-bottom-close-btn"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold text-stone-700 dark:text-zinc-300 hover:bg-stone-200 dark:hover:bg-zinc-800 border border-stone-300 dark:border-zinc-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
