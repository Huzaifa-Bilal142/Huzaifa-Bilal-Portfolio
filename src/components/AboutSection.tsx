import { CERTIFICATIONS } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  Globe2, 
  Check, 
  ShieldCheck, 
  ExternalLink
} from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-bold tracking-wider uppercase font-mono mb-2">
            Background & Identity
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-950 dark:text-white tracking-tight">
            Engineering with Purpose, Precision & Scalability
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Story Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="premium-card p-6 sm:p-8 rounded-2xl space-y-4 border-2 border-stone-200 dark:border-zinc-800">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-stone-950 dark:text-white">
                Software Engineer with deep CMS & AI expertise
              </h3>
              <p className="text-stone-800 dark:text-zinc-200 leading-relaxed text-sm sm:text-base">
                I am a Software Engineer with robust professional experience in modern web development, specializing in advanced WordPress architecture and Artificial Intelligence. My background encompasses architecting custom CMS frameworks—including WooCommerce, Elementor, Advanced Custom Fields (ACF Pro), and JetEngine—alongside building intelligent, data-driven digital solutions.
              </p>
              <p className="text-stone-800 dark:text-zinc-200 leading-relaxed text-sm sm:text-base">
                Currently, I engineer customized corporate and e-commerce platforms at <strong className="text-stone-950 dark:text-white font-bold">WanneerOnline</strong> for clients across the Netherlands and Europe. I take pride in developing custom PHP filters, scalable database models, and high-performance front-end interfaces that score high on technical SEO and Core Web Vitals benchmarks.
              </p>

              {/* Core Philosophy points */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-stone-200 dark:border-zinc-800">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-stone-900 dark:text-zinc-100">
                  <span className="p-1 rounded bg-amber-500/20 text-amber-900 dark:text-amber-300">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Clean, Maintainable Codebase</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-stone-900 dark:text-zinc-100">
                  <span className="p-1 rounded bg-amber-500/20 text-amber-900 dark:text-amber-300">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Technical SEO & Performance</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-stone-900 dark:text-zinc-100">
                  <span className="p-1 rounded bg-amber-500/20 text-amber-900 dark:text-amber-300">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>Custom ACF & JetEngine Logic</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-stone-900 dark:text-zinc-100">
                  <span className="p-1 rounded bg-amber-500/20 text-amber-900 dark:text-amber-300">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>WCAG Accessibility Standards</span>
                </div>
              </div>
            </div>

            {/* Language & Global Readiness */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="premium-card p-5 rounded-2xl flex items-center gap-4 border-2 border-stone-200 dark:border-zinc-800">
                <div className="p-3 rounded-xl bg-amber-500/15 text-amber-800 dark:text-amber-300">
                  <Globe2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-stone-700 dark:text-zinc-300 uppercase">Communication</div>
                  <div className="font-bold text-stone-950 dark:text-white text-sm">English (Proficient)</div>
                  <div className="text-xs font-medium text-stone-700 dark:text-zinc-300">Urdu (Native)</div>
                </div>
              </div>

              <div className="premium-card p-5 rounded-2xl flex items-center gap-4 border-2 border-stone-200 dark:border-zinc-800">
                <div className="p-3 rounded-xl bg-emerald-500/15 text-emerald-800 dark:text-emerald-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-stone-700 dark:text-zinc-300 uppercase">Work Model</div>
                  <div className="font-bold text-stone-950 dark:text-white text-sm">Remote & Async Native</div>
                  <div className="text-xs font-medium text-stone-700 dark:text-zinc-300">European Timezone Alignment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Academic & Certifications */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Spotlight */}
            <div className="premium-card p-6 rounded-2xl border-2 border-stone-200 dark:border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-stone-100 dark:bg-zinc-800 text-stone-900 dark:text-zinc-100 border border-stone-300 dark:border-zinc-700">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-stone-950 dark:text-white text-base">
                    B.Sc. Software Engineering
                  </h4>
                  <p className="text-xs font-medium text-stone-700 dark:text-zinc-300">University of Sargodha (UOS)</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-stone-800 dark:text-zinc-200 font-medium">
                <div className="flex justify-between py-1.5 border-b border-stone-200 dark:border-zinc-800">
                  <span className="text-stone-700 dark:text-zinc-300">Duration</span>
                  <span className="font-mono font-bold text-stone-950 dark:text-white">Dec 2022 – Jun 2026</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-stone-200 dark:border-zinc-800">
                  <span className="text-stone-700 dark:text-zinc-300">Academic Standing</span>
                  <span className="font-mono font-bold text-emerald-800 dark:text-emerald-300">
                    CGPA: 3.33 / 4.00 (82.16%)
                  </span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-stone-700 dark:text-zinc-300">Final Year Project</span>
                  <span className="font-bold text-amber-800 dark:text-amber-300">
                    Auctify Platform
                  </span>
                </div>
              </div>
            </div>

            {/* Certifications Spotlight */}
            <div className="premium-card p-6 rounded-2xl border-2 border-stone-200 dark:border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-800 dark:text-amber-300 border border-amber-500/30">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-stone-950 dark:text-white text-base">
                    Verified Certifications
                  </h4>
                  <p className="text-xs font-medium text-stone-700 dark:text-zinc-300">Global Tech & Academic Credentials</p>
                </div>
              </div>

              <div className="space-y-2.5">
                {CERTIFICATIONS.map((cert) => (
                  <div 
                    key={cert.id}
                    className="p-3.5 rounded-xl bg-stone-50 dark:bg-zinc-900 border border-stone-300 dark:border-zinc-800 flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-stone-950 dark:text-white">
                        {cert.title}
                      </div>
                      <div className="text-[11px] font-medium text-stone-700 dark:text-zinc-300">
                        {cert.issuer}
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-amber-500/20 text-amber-950 dark:text-amber-200 border border-amber-500/40">
                      {cert.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
