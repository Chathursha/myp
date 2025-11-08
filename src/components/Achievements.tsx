import { TrophyIcon, AwardIcon } from 'lucide-react';
import { siteConfig } from '../config/site.config';
export const Achievements = () => {
  return <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
    {/* Animated gradient background */}
    <div className="absolute inset-0 -z-10 opacity-25">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-yellow-200/50 to-transparent dark:from-yellow-500/10 dark:to-transparent rounded-full blur-3xl animate-[float_22s_ease-in-out_infinite]" />
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-[clamp(1.5rem,3.5vw,2.75rem)] font-bold text-navy-900 dark:text-white mb-4">
          Achievements & Activities
        </h2>
        <div className="w-20 h-1 bg-orange-600 mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {siteConfig.achievements.map((achievement, index) => <div key={index} className="bg-white dark:bg-gray-900 rounded-lg p-6 hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex-shrink-0">
              <TrophyIcon className="text-orange-600 dark:text-orange-500" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-navy-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                {achievement.description}
              </p>
              <span className="inline-block px-3 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 rounded-full text-xs font-medium border border-orange-200 dark:border-orange-800">
                {achievement.year}
              </span>
            </div>
          </div>
        </div>)}
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-gray-700 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <AwardIcon className="text-orange-600 dark:text-orange-500" size={32} />
          <h3 className="text-2xl font-bold text-navy-900 dark:text-white">
            Sports Activities
          </h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {siteConfig.sports.map((sport, index) => <span key={index} className="px-4 py-2 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 rounded-lg font-medium shadow-sm border border-orange-200 dark:border-orange-800">
            {sport}
          </span>)}
        </div>
      </div>
    </div>
  </section>;
};
