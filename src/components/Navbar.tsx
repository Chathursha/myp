import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon, MoonIcon, SunIcon } from 'lucide-react';
import { siteConfig } from '../config/site.config';
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'skills', 'education', 'projects', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleDarkMode = () => {
    setIsDark(prev => {
      const newMode = !prev;
      localStorage.setItem('darkMode', String(newMode));
      return newMode;
    });
  };
  const navItems = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'about',
    label: 'About'
  }, {
    id: 'skills',
    label: 'Skills'
  }, {
    id: 'education',
    label: 'Education'
  }, {
    id: 'projects',
    label: 'Projects'
  }, {
    id: 'achievements',
    label: 'Achievements'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => scrollToSection('home')} className="text-xl font-bold text-navy-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-500 transition-colors">
            {siteConfig.displayName}
          </button>
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === item.id ? 'text-orange-600 dark:text-orange-500 bg-orange-50 dark:bg-orange-900/20' : 'text-navy-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500'}`}>
                {item.label}
              </button>)}
            <button onClick={toggleDarkMode} className="ml-4 p-2 rounded-md text-navy-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              {isDark ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <button onClick={toggleDarkMode} className="p-2 rounded-md text-navy-700 dark:text-gray-300">
              {isDark ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-navy-700 dark:text-gray-300">
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${activeSection === item.id ? 'text-orange-600 dark:text-orange-500 bg-orange-50 dark:bg-orange-900/20' : 'text-navy-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
                {item.label}
              </button>)}
          </div>
        </div>}
    </nav>;
};