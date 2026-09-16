import { EDUCATION, CERTIFICATIONS } from '../data/portfolioData';
import { 
  GraduationCap, 
  CheckCircle2, 
  Calendar,
  ExternalLink
} from 'lucide-react';

export function EducationSection() {
  const edu = EDUCATION[0];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-bold tracking-wider uppercase font-mono mb-2">
            Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-950 dark:text-white tracking-tight">
            Education & Capstone Engineering
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Degree Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="premium-card p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between border-2 border-stone-200 dark:border-zinc-800">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-stone-100 dark:bg-zinc-800 text-stone-900 dark:text-zinc-100 border border-stone-300 dark:border-zinc-700">
                    Graduating June 2026
                  </span>
                  <span className="text-xs font-mono font-bold text-stone-800 dark:text-zinc-200 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                    {edu.period}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-stone-950 dark:text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-base font-bold text-amber-800 dark:text-amber-300 mb-2">
                  {edu.institution}
                </p>
                <p className="text-xs font-semibold text-stone-700 dark:text-zinc-300 mb-6">
                  {edu.location}
                </p>

                <div className="p-4 rounded-xl bg-stone-50 dark:bg-zinc-900 border-2 border-stone-200 dark:border-zinc-800 mb-6">
                  <div className="text-xs text-stone-700 dark:text-zinc-300 font-mono font-bold uppercase mb-1">
                    Cumulative Academic Merit
                  </div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-emerald-800 dark:text-emerald-300">
                    {edu.grade}
                  </div>
                </div>

                <p className="text-sm text-stone-800 dark:text-zinc-200 leading-relaxed font-normal">
                  Rigorous software engineering curriculum covering software design patterns, distributed algorithms, relational databases, data structures, and enterprise web engineering.
                </p>
              </div>

              {/* Certifications row */}
              <div className="pt-6 mt-6 border-t border-stone-200 dark:border-zinc-800">
                <h4 className="text-xs font-mono uppercase font-bold text-stone-800 dark:text-zinc-200 mb-3">
                  Verified International Certifications
                </h4>
                <div className="space-y-2.5">
                  {CERTIFICATIONS.map((cert) => (
                    <div 
                      key={cert.id}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-stone-50 dark:bg-zinc-900 border border-stone-300 dark:border-zinc-800 text-xs"
                    >
                      <span className="font-bold text-stone-950 dark:text-zinc-100">{cert.title}</span>
                      <span className="font-mono text-amber-800 dark:text-amber-300 font-bold ml-2 shrink-0 bg-amber-500/15 px-2 py-0.5 rounded border border-amber-500/30">
                        {cert.issuer} ({cert.score})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Capstone Spotlight: Auctify */}
          {edu.finalProject && (
            <div className="lg:col-span-6">
              <div className="premium-card p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between relative overflow-hidden border-2 border-stone-200 dark:border-zinc-800">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-950 dark:text-amber-200 border border-amber-500/40">
                      Final Year Capstone Project
                    </span>
                    <span className="text-xs font-mono font-bold text-stone-700 dark:text-zinc-300">
                      Vercel Architecture
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-bold text-stone-950 dark:text-white mb-2">
                    {edu.finalProject.title}
                  </h3>
                  <p className="text-sm text-stone-800 dark:text-zinc-200 leading-relaxed mb-6 font-normal">
                    {edu.finalProject.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-3 mb-6">
                    {edu.finalProject.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-800 dark:text-zinc-200 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-stone-200 dark:border-zinc-800 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-800 dark:text-amber-300">
                    Capstone Production Platform
                  </span>

                  <span className="text-xs font-mono font-bold text-stone-700 dark:text-zinc-300">
                    Next.js • Real-time APIs • Vercel
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
