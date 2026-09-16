import { useState, useMemo } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { 
  Search, 
  Eye,
  ArrowRight
} from 'lucide-react';

export function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'WordPress', 'E-Commerce', 'Corporate', 'SEO'];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCat = selectedCategory === 'All' || project.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.subtitle.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tags.some((t) => t.toLowerCase().includes(q));

      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-bold tracking-wider uppercase font-mono mb-2">
              Production Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-950 dark:text-white tracking-tight">
              Featured Web Platforms & Systems
            </h2>
          </div>
          <p className="text-sm font-medium text-stone-700 dark:text-zinc-200 max-w-md leading-relaxed">
            A verified collection of 13+ production web platforms, custom CMS architectures, e-commerce stores, and full-stack solutions.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? PROJECTS_DATA.length 
                : PROJECTS_DATA.filter((p) => p.category === cat).length;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-stone-950 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-sm'
                      : 'bg-stone-100 hover:bg-stone-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-stone-900 dark:text-zinc-100 border border-stone-300 dark:border-zinc-700'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full font-bold ${
                    isActive 
                      ? 'bg-white/20 dark:bg-zinc-900/20 text-white dark:text-zinc-900' 
                      : 'bg-stone-200 dark:bg-zinc-700 text-stone-800 dark:text-zinc-200'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px] max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-500 dark:text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech, title, scope..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium bg-white dark:bg-zinc-900 border-2 border-stone-300 dark:border-zinc-700 text-stone-950 dark:text-white placeholder:text-stone-500 dark:placeholder:text-zinc-400 focus:outline-none focus:border-amber-600"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-stone-600 hover:text-stone-900 dark:text-zinc-400 dark:hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="premium-card text-center py-16 rounded-2xl p-6 border-2 border-stone-200 dark:border-zinc-800">
            <p className="text-stone-800 dark:text-zinc-200 text-sm font-semibold mb-3">
              No projects found matching "{searchQuery}" in category "{selectedCategory}".
            </p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-stone-950 text-white dark:bg-zinc-100 dark:text-zinc-900"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => setActiveModalProject(project)}
                className="group premium-card rounded-2xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-amber-600 dark:hover:border-amber-400 hover:shadow-md relative border-2 border-stone-200 dark:border-zinc-800"
              >
                {/* Top badges */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-stone-100 dark:bg-zinc-800 text-stone-900 dark:text-zinc-100 border border-stone-300 dark:border-zinc-700">
                      {project.category}
                    </span>

                    {project.metrics && (
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-amber-500/15 text-amber-900 dark:text-amber-200 border border-amber-500/30 truncate max-w-[170px]">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display font-bold text-lg text-stone-950 dark:text-white group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors line-clamp-1 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs font-bold text-amber-800 dark:text-amber-300 mb-3 line-clamp-1">
                    {project.subtitle}
                  </p>

                  {/* Description snippet */}
                  <p className="text-xs text-stone-700 dark:text-zinc-200 leading-relaxed mb-4 line-clamp-3 font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Bottom section: tags & actions */}
                <div>
                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-stone-100 dark:bg-zinc-800 text-stone-900 dark:text-zinc-100 border border-stone-300 dark:border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold text-stone-600 dark:text-zinc-400">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Action row: Replaced external live site button with single, prominent details trigger */}
                  <div className="pt-3 border-t border-stone-200 dark:border-zinc-800 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-stone-600 dark:text-zinc-400">
                      {project.dateRange}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalProject(project);
                      }}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-stone-900 hover:bg-stone-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs font-bold shadow-xs transition-all group-hover:scale-105"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Project Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
