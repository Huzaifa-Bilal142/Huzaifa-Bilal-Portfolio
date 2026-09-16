import { WORK_EXPERIENCE } from '../data/portfolioData';
import { 
  Calendar, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-14">
          <div className="text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-bold tracking-wider uppercase font-mono mb-2">
            Career Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-950 dark:text-white tracking-tight">
            Professional Work Experience
          </h2>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-stone-300 dark:border-zinc-700 ml-3 sm:ml-6 space-y-12">
          {WORK_EXPERIENCE.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              {/* Timeline marker node */}
              <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-110 ${
                exp.current 
                  ? 'bg-amber-600 dark:bg-amber-400 border-white dark:border-zinc-900 shadow-sm' 
                  : 'bg-stone-500 dark:bg-zinc-600 border-white dark:border-zinc-900'
              }`} />

              <div className="premium-card p-6 sm:p-8 rounded-2xl border-2 border-stone-200 dark:border-zinc-800 transition-all duration-200 hover:border-amber-600 dark:hover:border-amber-400">
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-lg sm:text-xl font-display font-bold text-stone-950 dark:text-white">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-950 dark:text-amber-200 border border-amber-500/40">
                          Current Role
                        </span>
                      )}
                    </div>
                    <div className="text-base font-bold text-amber-800 dark:text-amber-300 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-stone-800 dark:text-zinc-200 font-mono font-bold">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                      {exp.period}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-stone-800 dark:text-zinc-200 text-sm mb-4 leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-2.5 mb-6">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-stone-800 dark:text-zinc-200 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Highlight Platforms */}
                {exp.highlightProjects && exp.highlightProjects.length > 0 && (
                  <div className="mb-4 pt-3 border-t border-stone-200 dark:border-zinc-800 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-stone-800 dark:text-zinc-300 uppercase">Featured Platforms:</span>
                    {exp.highlightProjects.map((proj, pIdx) => (
                      <span 
                        key={pIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-stone-100 dark:bg-zinc-800 text-stone-900 dark:text-amber-300 border border-stone-300 dark:border-zinc-700 shadow-xs"
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                )}

                {/* Technologies used */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md text-xs font-bold bg-stone-100 dark:bg-zinc-800 border border-stone-300 dark:border-zinc-700 text-stone-900 dark:text-zinc-100 shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
