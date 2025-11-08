import { HeartIcon, CodeIcon } from 'lucide-react';
import { siteConfig } from '../config/site.config';
import { useState } from 'react';

export const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 -z-10 opacity-25">
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-gradient-to-tr from-blue-300/50 via-cyan-300/30 to-transparent dark:from-blue-500/15 dark:via-cyan-500/10 dark:to-transparent rounded-full blur-3xl animate-[floatSlow_30s_ease-in-out_infinite]" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-gradient-to-bl from-indigo-300/40 via-purple-300/30 to-transparent dark:from-indigo-500/12 dark:via-purple-500/10 dark:to-transparent rounded-full blur-3xl animate-[pulse_20s_ease-in-out_infinite]" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 dark:bg-blue-900/30 backdrop-blur-sm rounded-full mb-4">
          <span className="text-2xl">⚡</span>
          <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
            What I Do Best
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A blend of technical prowess and interpersonal excellence
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Soft Skills Card */}
        <div className="group relative bg-gradient-to-br from-orange-50 via-white to-pink-50 dark:from-orange-900/10 dark:via-gray-800 dark:to-pink-900/10 rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-200/50 dark:border-orange-700/30 hover:border-orange-300 dark:hover:border-orange-600 transform hover:-translate-y-2">
          {/* Decorative gradient orb */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative p-4 bg-gradient-to-br from-orange-100 to-pink-100 dark:from-orange-900/40 dark:to-pink-900/40 rounded-2xl backdrop-blur-sm border border-orange-200 dark:border-orange-700">
                  <HeartIcon className="text-orange-600 dark:text-orange-400" size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white">
                  Soft Skills
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  People & Process
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {siteConfig.skills.soft.map((skill, index) => <button
                key={index}
                onClick={() => setSelectedSkill(skill)}
                className={`group/skill px-4 py-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl text-sm font-medium border-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${selectedSkill === skill
                    ? 'border-orange-500 text-orange-700 dark:text-orange-400 shadow-lg scale-105'
                    : 'border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-400 hover:border-orange-400 dark:hover:border-orange-600'
                  }`}>
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-orange-500 group-hover/skill:animate-pulse"></span>
                  {skill}
                </span>
              </button>)}
            </div>

            {/* Progress indicator */}
            <div className="mt-8 p-4 bg-orange-100/50 dark:bg-orange-900/20 rounded-xl border border-orange-200 dark:border-orange-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-orange-700 dark:text-orange-400">
                  Proficiency Level
                </span>
                <span className="text-sm font-bold text-orange-600 dark:text-orange-500">
                  {siteConfig.skills.soft.length} Skills
                </span>
              </div>
              <div className="w-full h-2 bg-orange-200 dark:bg-orange-900/40 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-full animate-[shimmer_3s_infinite]" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills Card */}
        <div className="group relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-900/10 dark:via-gray-800 dark:to-indigo-900/10 rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-200/50 dark:border-blue-700/30 hover:border-blue-300 dark:hover:border-blue-600 transform hover:-translate-y-2">
          {/* Decorative gradient orb */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative p-4 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-2xl backdrop-blur-sm border border-blue-200 dark:border-blue-700">
                  <CodeIcon className="text-navy-700 dark:text-navy-400" size={32} />
                </div>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold text-navy-900 dark:text-white">
                  Technical Skills
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Tools & Technologies
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {siteConfig.skills.technical.map((skill, index) => <button
                key={index}
                onClick={() => setSelectedSkill(skill)}
                className={`group/skill px-4 py-2.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl text-sm font-medium border-2 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${selectedSkill === skill
                    ? 'border-blue-500 text-navy-700 dark:text-navy-300 shadow-lg scale-105'
                    : 'border-navy-200 dark:border-navy-800 text-navy-700 dark:text-navy-300 hover:border-navy-400 dark:hover:border-navy-600'
                  }`}>
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500 group-hover/skill:animate-pulse"></span>
                  {skill}
                </span>
              </button>)}
            </div>

            {/* Progress indicator */}
            <div className="mt-8 p-4 bg-blue-100/50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-navy-700 dark:text-navy-400">
                  Proficiency Level
                </span>
                <span className="text-sm font-bold text-navy-600 dark:text-navy-400">
                  {siteConfig.skills.technical.length} Technologies
                </span>
              </div>
              <div className="w-full h-2 bg-navy-200 dark:bg-navy-900/40 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-[shimmer_3s_infinite]" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {[
          { label: 'Projects', value: '4+', icon: '🚀' },
          { label: 'Technologies', value: '11+', icon: '⚡' },
          { label: 'Soft Skills', value: '7+', icon: '💡' },
          { label: 'Experience', value: '2+ yrs', icon: '📈' }
        ].map((stat, index) => (
          <div key={index} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>;
};
