import { GithubIcon, ExternalLinkIcon } from 'lucide-react';
import { siteConfig } from '../config/site.config';
import { useState } from 'react';

export const Projects = () => {
  const [, setHoveredIndex] = useState<number | null>(null);

  return <section id="projects" className="py-20 bg-gradient-to-br from-white via-slate-50 to-white dark:from-gray-900 dark:via-gray-900 dark:to-gray-900 relative overflow-hidden">
    {/* Subtle background animation */}
    <div className="absolute inset-0 -z-10 opacity-20">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-300/30 via-indigo-300/20 to-transparent dark:from-blue-500/10 dark:via-indigo-500/8 dark:to-transparent rounded-full blur-3xl animate-[pulse_25s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-300/30 via-blue-300/20 to-transparent dark:from-indigo-500/10 dark:via-blue-500/8 dark:to-transparent rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite]" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 dark:bg-blue-900/30 backdrop-blur-sm rounded-full mb-4">
          <span className="text-2xl">💼</span>
          <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
            My Work
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of my recent work showcasing full-stack development and problem-solving skills
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {siteConfig.projects.map((project, index) => <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transform hover:-translate-y-2">

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-indigo-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-indigo-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none"></div>

          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl transform translate-x-8 -translate-y-8"></div>
          </div>

          <div className="relative p-6 sm:p-8">
            {/* Project number badge */}
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 flex items-center justify-center font-bold text-blue-600 dark:text-blue-400 text-lg border border-blue-200 dark:border-blue-800">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-navy-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                {project.description}
              </p>
            </div>

            {/* Tech stack with improved styling */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech, techIndex) => <span
                key={techIndex}
                className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-700 dark:text-blue-400 rounded-lg text-sm font-medium border border-blue-200 dark:border-blue-800 hover:scale-105 transition-transform duration-300 cursor-default">
                {tech}
              </span>)}
            </div>

            {/* Action buttons with enhanced styling */}
            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-navy-900 dark:bg-navy-800 hover:bg-navy-800 dark:hover:bg-navy-700 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5">
                <GithubIcon size={18} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                <span className="font-medium">View Code</span>
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5">
                <ExternalLinkIcon size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                <span className="font-medium">Live Demo</span>
              </a>
            </div>

            {/* Hover indicator line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </div>)}
      </div>

      {/* View all projects CTA */}
      <div className="text-center mt-12">
        <a
          href={siteConfig.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 text-navy-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-orange-500 dark:hover:border-orange-500 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <GithubIcon size={20} />
          <span>View All Projects on GitHub</span>
          <span className="text-orange-600">→</span>
        </a>
      </div>
    </div>
  </section>;
};
