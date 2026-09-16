import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowRight, 
  MapPin, 
  CheckCircle2, 
  Linkedin, 
  Github,
  MessageSquare, 
  Briefcase, 
  Award,
  FileText
} from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onContactClick: () => void;
  onOpenCv?: () => void;
}

export function Hero({ onExploreProjects, onContactClick, onOpenCv }: HeroProps) {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden"
    >
      {/* Subtle organic background aura */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 dark:bg-amber-400/5 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -right-32 w-[400px] h-[400px] bg-stone-500/10 dark:bg-zinc-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Availability tag */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-xs font-bold text-emerald-900 dark:text-emerald-300 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
            <span>Open for Remote Roles & High-Impact Contracts</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-stone-800 dark:text-zinc-200 bg-stone-100 dark:bg-zinc-900 border border-stone-300 dark:border-zinc-700">
            <MapPin className="w-3.5 h-3.5 text-amber-700 dark:text-amber-400" />
            <span>Rawalpindi, Pakistan • Remote Worldwide</span>
          </div>
        </div>

        {/* Hero Main Headline & Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-bold tracking-wider uppercase font-mono mb-2.5">
                Software Engineer & CMS Architect
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-stone-950 dark:text-white leading-[1.1]">
                Engineering resilient web systems & <span className="text-amber-800 dark:text-amber-400">custom digital architectures.</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-stone-800 dark:text-zinc-200 max-w-2xl font-normal leading-relaxed">
              Hi, I'm <strong className="text-stone-950 dark:text-white font-bold">Huzaifa Bilal</strong>. I architect high-performance web platforms, custom WordPress CMS ecosystems, and real-time data solutions for international businesses, European agencies, and digital enterprises.
            </p>

            {/* Action CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                id="hero-view-projects-btn"
                onClick={onExploreProjects}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 font-bold text-sm shadow-sm transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Explore 13+ Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {onOpenCv && (
                <button
                  id="hero-view-cv-btn"
                  onClick={onOpenCv}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 dark:bg-amber-500/20 dark:hover:bg-amber-500/30 text-amber-950 dark:text-amber-300 font-bold text-sm border-2 border-amber-400/60 dark:border-amber-500/40 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-xs"
                  title="View Full CV & Download PDF"
                >
                  <FileText className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                  <span>View CV</span>
                </button>
              )}

              <button
                id="hero-contact-btn"
                onClick={onContactClick}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-stone-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-stone-950 dark:text-white font-bold text-sm border-2 border-stone-300 dark:border-zinc-700 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageSquare className="w-4 h-4 text-amber-700 dark:text-amber-400" />
                <span>Get in Touch</span>
              </button>

              <a
                id="hero-linkedin-btn"
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-zinc-900 hover:bg-stone-100 dark:hover:bg-zinc-800 text-stone-900 dark:text-zinc-100 border-2 border-stone-300 dark:border-zinc-700 transition-colors"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                id="hero-github-btn"
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-white dark:bg-zinc-900 hover:bg-stone-100 dark:hover:bg-zinc-800 text-stone-900 dark:text-zinc-100 border-2 border-stone-300 dark:border-zinc-700 transition-colors"
                title="GitHub Profile (Huzaifa-Bilal142)"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Hero Summary Card with Crisp High-Contrast Typography */}
          <div className="lg:col-span-4">
            <div className="premium-card p-6 sm:p-7 rounded-2xl relative border-2 border-stone-200 dark:border-zinc-800 shadow-sm">
              {/* Top badge */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600 dark:bg-amber-400" />
                  <span className="text-xs font-mono font-bold uppercase text-stone-800 dark:text-zinc-200">
                    Professional Profile
                  </span>
                </div>
                <span className="text-xs font-mono text-amber-800 dark:text-amber-300 font-bold">
                  UOS 2022–2026
                </span>
              </div>

              {/* Core Attributes */}
              <div className="py-5 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/15 text-amber-800 dark:text-amber-300 shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-950 dark:text-white">WanneerOnline Developer</h4>
                    <p className="text-xs text-stone-700 dark:text-zinc-300 font-medium">
                      Engineering Dutch corporate & e-commerce platforms (Netherlands remote).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-stone-100 dark:bg-zinc-800 text-stone-900 dark:text-zinc-200 shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-950 dark:text-white">Generative AI Certified</h4>
                    <p className="text-xs text-stone-700 dark:text-zinc-300 font-medium">
                      IBM Generative AI certified (80.35%) & Duke Univ JavaScript Foundations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-stone-100 dark:bg-zinc-800 text-stone-900 dark:text-zinc-200 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-950 dark:text-white">Capstone: Auctify Platform</h4>
                    <p className="text-xs text-stone-700 dark:text-zinc-300 font-medium">
                      Full-stack real-time auction web app deployed on Vercel.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Snapshot */}
              <div className="pt-4 border-t border-stone-200 dark:border-zinc-800 space-y-2.5 text-xs font-medium">
                <div className="flex items-center justify-between">
                  <span className="text-stone-700 dark:text-zinc-300">Email</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="font-mono text-amber-800 dark:text-amber-300 hover:underline font-semibold">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-700 dark:text-zinc-300">GitHub</span>
                  <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="font-mono text-stone-950 dark:text-white hover:text-amber-700 dark:hover:text-amber-300 hover:underline font-semibold">
                    @{PERSONAL_INFO.githubUsername}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-stone-700 dark:text-zinc-300">WhatsApp</span>
                  <a href={PERSONAL_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="font-mono text-stone-950 dark:text-white hover:text-amber-700 font-semibold">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                {onOpenCv && (
                  <div className="flex items-center justify-between pt-1 border-t border-stone-200/60 dark:border-zinc-800/60">
                    <span className="text-stone-700 dark:text-zinc-300">Curriculum Vitae</span>
                    <button 
                      onClick={onOpenCv}
                      className="font-mono text-amber-700 dark:text-amber-400 hover:underline font-bold inline-flex items-center gap-1"
                    >
                      <span>View & Download (.PDF)</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Metrics Strip with Maximum Contrast */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="premium-card p-5 rounded-2xl border-2 border-stone-200 dark:border-zinc-800">
            <div className="text-2xl sm:text-3xl font-display font-bold text-stone-950 dark:text-white mb-1">
              13+
            </div>
            <div className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase font-mono mb-1">
              Production Web Apps
            </div>
            <p className="text-xs text-stone-700 dark:text-zinc-300 font-medium">
              Live enterprise, e-commerce, & custom CMS architectures.
            </p>
          </div>

          <div className="premium-card p-5 rounded-2xl border-2 border-stone-200 dark:border-zinc-800">
            <div className="text-2xl sm:text-3xl font-display font-bold text-stone-950 dark:text-white mb-1">
              82.16%
            </div>
            <div className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase font-mono mb-1">
              University Merit
            </div>
            <p className="text-xs text-stone-700 dark:text-zinc-300 font-medium">
              B.Sc. Software Engineering CGPA 3.33/4.00 at UOS.
            </p>
          </div>

          <div className="premium-card p-5 rounded-2xl border-2 border-stone-200 dark:border-zinc-800">
            <div className="text-2xl sm:text-3xl font-display font-bold text-stone-950 dark:text-white mb-1">
              Global
            </div>
            <div className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase font-mono mb-1">
              European Client Base
            </div>
            <p className="text-xs text-stone-700 dark:text-zinc-300 font-medium">
              Delivering web solutions for Dutch & international businesses.
            </p>
          </div>

          <div className="premium-card p-5 rounded-2xl border-2 border-stone-200 dark:border-zinc-800">
            <div className="text-2xl sm:text-3xl font-display font-bold text-stone-950 dark:text-white mb-1">
              100%
            </div>
            <div className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase font-mono mb-1">
              Verified Production Code
            </div>
            <p className="text-xs text-stone-700 dark:text-zinc-300 font-medium">
              Complete architectural documentation for every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
