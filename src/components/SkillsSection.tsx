import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Cpu, 
  Database, 
  Users, 
  Layers
} from 'lucide-react';

export function SkillsSection() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="w-5 h-5 text-amber-800 dark:text-amber-300" />;
      case 1:
        return <Database className="w-5 h-5 text-stone-900 dark:text-zinc-100" />;
      case 2:
        return <Cpu className="w-5 h-5 text-amber-800 dark:text-amber-300" />;
      default:
        return <Users className="w-5 h-5 text-stone-900 dark:text-zinc-100" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-bold tracking-wider uppercase font-mono mb-2">
            Capabilities & Mastery
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-950 dark:text-white tracking-tight">
            Technical Stack & Domain Skills
          </h2>
        </div>

        {/* 4-Bento Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              className="premium-card p-6 sm:p-8 rounded-2xl border-2 border-stone-200 dark:border-zinc-800 transition-all duration-150 hover:border-amber-600 dark:hover:border-amber-400 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-zinc-800 border-2 border-stone-200 dark:border-zinc-700">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-stone-950 dark:text-white">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-stone-700 dark:text-zinc-300">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold bg-stone-100 dark:bg-zinc-800 border border-stone-300 dark:border-zinc-700 text-stone-950 dark:text-zinc-100 shadow-xs"
                    >
                      <span>{skill.name}</span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded font-bold ${
                        skill.level === 'Expert'
                          ? 'bg-amber-500/20 text-amber-950 dark:text-amber-200 border border-amber-500/30'
                          : 'bg-stone-200 dark:bg-zinc-700 text-stone-800 dark:text-zinc-200'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom indicator */}
              <div className="pt-4 mt-6 border-t border-stone-200 dark:border-zinc-800 flex items-center justify-between text-xs text-stone-700 dark:text-zinc-300 font-mono font-bold">
                <span>{cat.skills.length} Core Competencies</span>
                <span className="text-amber-800 dark:text-amber-300">Production Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
