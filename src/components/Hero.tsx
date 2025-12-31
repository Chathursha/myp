import { ArrowDownIcon, DownloadIcon, MailIcon } from 'lucide-react';
import { siteConfig } from '../config/site.config';
import { useEffect, useState } from 'react';
// local profile image (DP)
import dp from '../../images/img.png';
export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900 pt-16 overflow-hidden">
      {/* Professional gradient background with subtle pattern */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 via-blue-50/40 to-slate-100/50 dark:from-gray-900 dark:via-slate-900 dark:to-gray-900"></div>
        <div className="absolute inset-0 opacity-[0.15] dark:opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(59 130 246 / 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Professional subtle animated shapes */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 via-indigo-400/15 to-slate-400/20 dark:from-blue-500/10 dark:via-indigo-500/8 dark:to-slate-500/10 rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute top-1/4 -right-32 w-[450px] h-[450px] bg-gradient-to-bl from-cyan-400/20 via-blue-400/15 to-indigo-400/20 dark:from-cyan-500/10 dark:via-blue-500/8 dark:to-indigo-500/10 rounded-full blur-3xl animate-[floatSlow_25s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-slate-400/20 via-blue-400/15 to-indigo-400/20 dark:from-slate-500/10 dark:via-blue-500/8 dark:to-indigo-500/10 rounded-full blur-3xl animate-[pulse_15s_ease-in-out_infinite]" />

        {/* Additional professional accents */}
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-blue-300/15 to-indigo-300/15 dark:from-blue-500/8 dark:to-indigo-500/8 rounded-full blur-2xl animate-[float_18s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-to-tr from-slate-300/15 to-blue-300/15 dark:from-slate-500/8 dark:to-blue-500/8 rounded-full blur-2xl animate-[floatSlow_22s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full relative z-10">
        {/* Mobile-first: image on top, text below. On lg: side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16">
          {/* Avatar (first on mobile) - Professional styling */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              {/* Professional blue ring animation */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-full opacity-60 group-hover:opacity-80 blur-2xl group-hover:blur-3xl transition duration-1000 animate-pulse"></div>

              {/* Main avatar container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full p-1.5 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 shadow-2xl overflow-hidden ring-4 ring-white/50 dark:ring-gray-900/50 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
                <img src={dp} alt={siteConfig.name} className="w-full h-full object-cover object-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 transition-transform duration-700 group-hover:scale-110" />

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Border glow */}
                <div className="absolute inset-0 rounded-full ring-1 ring-black/5 dark:ring-white/5" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-full shadow-xl border border-blue-200 dark:border-blue-800 group-hover:shadow-2xl transition-all duration-300">
                <p className="text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent whitespace-nowrap">
                  ✨ Available for Work
                </p>
              </div>
            </div>
          </div>

          {/* Text content - Enhanced with stagger animations */}
          <div className={`text-center lg:text-left transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/80 dark:bg-blue-900/30 backdrop-blur-sm rounded-full mb-4 border border-blue-200 dark:border-blue-800">
              <span className="text-2xl animate-[float_3s_ease-in-out_infinite]">👋</span>
              <span className="text-sm font-semibold text-blue-700 dark:text-blue-400">
                Hello, I'm
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-navy-900 dark:text-white leading-tight mb-3 tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 dark:from-white dark:via-blue-300 dark:to-indigo-300 bg-clip-text text-transparent animate-[gradient_3s_ease_infinite]">
                {siteConfig.name}
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-bold mb-4 flex items-center justify-center lg:justify-start gap-2">
              <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></span>
              {siteConfig.title}
            </p>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {siteConfig.tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch gap-4 justify-center lg:justify-start w-full lg:w-auto flex-wrap">
              <button onClick={() => window.open('#', '_blank')} className="group relative px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-semibold gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden flex items-center justify-center">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <DownloadIcon size={20} className="relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10 text-sm sm:text-base">Download CV</span>
              </button>

              <button onClick={() => scrollToSection('projects')} className="group px-6 py-3.5 bg-navy-900 dark:bg-navy-800 hover:bg-navy-800 dark:hover:bg-navy-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <span className="text-sm sm:text-base">View Projects</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </button>

              <button onClick={() => scrollToSection('contact')} className="group px-6 py-3.5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 text-navy-900 dark:text-white border-2 border-blue-300 dark:border-blue-700 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                <MailIcon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm sm:text-base">Contact Me</span>
              </button>
            </div>

            {/* Social proof badges */}
            <div className="flex items-center justify-center lg:justify-start gap-6 mt-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 ring-2 ring-white dark:ring-gray-900"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 ring-2 ring-white dark:ring-gray-900"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-700 ring-2 ring-white dark:ring-gray-900"></div>
                </div>
                <span className="font-medium">4+ Projects</span>
              </div>
              <div className="h-4 w-px bg-gray-300 dark:bg-gray-700"></div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                <span className="font-medium">IIT Student</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className={`flex justify-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <button onClick={() => scrollToSection('about')} className="group flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
            <span className="text-xs font-medium tracking-wider uppercase">Scroll Down</span>
            <ArrowDownIcon size={24} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
