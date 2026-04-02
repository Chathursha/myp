import { GraduationCapIcon, DownloadIcon } from 'lucide-react';
import { siteConfig } from '../config/site.config';
export const Education = () => {
  return <section id="education" className="py-20 bg-slate-50 dark:bg-gray-900 relative overflow-hidden">
    {/* Animated background shapes */}
    <div className="absolute inset-0 -z-10 opacity-15">
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-bl from-blue-200/40 to-transparent dark:from-blue-500/8 dark:to-transparent rounded-full blur-3xl animate-[float_24s_ease-in-out_infinite]" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-[clamp(1.5rem,3.5vw,2.75rem)] font-bold text-navy-900 dark:text-white mb-4">
          Education
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
          {siteConfig.education.map((edu, index) => <div key={index} className="relative pl-20 pb-12 last:pb-0">
            <div className="absolute left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <GraduationCapIcon className="text-white" size={16} />
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6 hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-navy-900 dark:text-white">
                  {edu.institution}
                </h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${edu.current || edu.status === 'Ongoing' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}>
                  {edu.year}
                </span>
              </div>
              <p className="text-lg text-blue-600 dark:text-blue-500 mb-2 font-medium">
                {edu.degree}
              </p>
              {edu.details && <p className="text-gray-700 dark:text-gray-400">
                {edu.details}
              </p>}
              {edu.status && edu.status !== 'Ongoing' && <p className="text-gray-700 dark:text-gray-400 mt-1">
                {edu.status}
              </p>}
            </div>
          </div>)}
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <button onClick={() => window.open('#', '_blank')} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2 shadow-lg">
          <DownloadIcon size={20} />
          Download Full CV
        </button>
      </div>
    </div>
  </section>;
};
