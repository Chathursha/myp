import { MailIcon, PhoneIcon, MapPinIcon, GraduationCapIcon, LinkedinIcon, GithubIcon, UserIcon } from 'lucide-react';
import { siteConfig } from '../config/site.config';
export const About = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-slate-900 relative overflow-hidden">
    {/* Subtle animated background */}
    <div className="absolute inset-0 -z-10 opacity-20">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-300/30 via-indigo-300/20 to-transparent dark:from-blue-500/10 dark:via-indigo-500/8 dark:to-transparent rounded-full blur-3xl animate-[pulse_20s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-slate-300/30 via-blue-300/20 to-transparent dark:from-slate-500/10 dark:via-blue-500/8 dark:to-transparent rounded-full blur-3xl animate-[float_25s_ease-in-out_infinite]" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 dark:bg-blue-900/30 backdrop-blur-sm rounded-full mb-4">
          <span className="text-2xl">👨‍💻</span>
          <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
            Know More
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg">
              <UserIcon className="text-white" size={28} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">
                My Journey
              </h3>
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
            </div>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            {siteConfig.bio}
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
        <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-blue-200 dark:border-blue-800 transform hover:-translate-y-1">
          <div className="flex items-start gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative p-3 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40 rounded-xl">
                <GraduationCapIcon className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-navy-900 dark:text-white mb-1 text-lg">
                University
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                {siteConfig.university}
              </p>
              <span className="inline-block px-3 py-1 bg-blue-200/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-xs font-semibold">
                {siteConfig.status}
              </span>
            </div>
          </div>
        </div>

        <div className="group bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-300 border border-indigo-200 dark:border-indigo-800 transform hover:-translate-y-1">
          <div className="flex items-start gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative p-3 bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-indigo-900/40 dark:to-blue-900/40 rounded-xl">
                <GraduationCapIcon className="text-indigo-600 dark:text-indigo-400" size={24} />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-navy-900 dark:text-white mb-1 text-lg">
                Degree Program
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {siteConfig.degree}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
        <div className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transform hover:-translate-y-1">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <MailIcon className="text-blue-600 dark:text-blue-500" size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-navy-900 dark:text-white mb-1 text-sm">
                Email
              </h3>
              <button onClick={() => copyToClipboard(siteConfig.contact.email)} className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors text-xs break-all">
                {siteConfig.contact.email}
              </button>
            </div>
          </div>
        </div>

        <div className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transform hover:-translate-y-1">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <PhoneIcon className="text-blue-600 dark:text-blue-500" size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-navy-900 dark:text-white mb-1 text-sm">
                Mobile
              </h3>
              <button onClick={() => copyToClipboard(siteConfig.contact.phone)} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors text-xs">
                {siteConfig.contact.phone}
              </button>
            </div>
          </div>
        </div>

        <div className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <MapPinIcon className="text-purple-600 dark:text-purple-500" size={20} />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-navy-900 dark:text-white mb-1 text-sm">
                Location
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-xs">
                {siteConfig.contact.location}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="group p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 rounded-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-transparent shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-110">
          <LinkedinIcon className="text-navy-700 dark:text-gray-300 group-hover:text-white transition-colors" size={24} />
        </a>
        <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="group p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-900 rounded-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-transparent shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-110">
          <GithubIcon className="text-navy-700 dark:text-gray-300 group-hover:text-white transition-colors" size={24} />
        </a>
      </div>
    </div>
  </section>;
};
