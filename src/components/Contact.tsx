import React, { useState } from 'react';
import { MailIcon, PhoneIcon, SendIcon, CheckCircleIcon, MapPinIcon, Loader2Icon } from 'lucide-react';
import { siteConfig } from '../config/site.config';
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  return <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
    {/* Animated background */}
    <div className="absolute inset-0 -z-10 opacity-30">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-300/50 via-blue-300/30 to-transparent dark:from-cyan-500/15 dark:via-blue-500/10 dark:to-transparent rounded-full blur-3xl animate-[floatSlow_28s_ease-in-out_infinite]" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-300/40 via-pink-300/30 to-transparent dark:from-orange-500/15 dark:via-pink-500/10 dark:to-transparent rounded-full blur-3xl animate-[pulse_20s_ease-in-out_infinite]" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100/80 dark:bg-cyan-900/30 backdrop-blur-sm rounded-full mb-4">
          <span className="text-2xl">📬</span>
          <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-400">
            Let's Connect
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {/* Contact Information - 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-6">
              Contact Information
            </h3>

            <div className="space-y-5">
              <div className="group bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-xl p-5 hover:shadow-md transition-all duration-300 border border-orange-200 dark:border-orange-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-pink-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MailIcon className="text-white" size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-navy-900 dark:text-white mb-1">
                      Email
                    </h4>
                    <button onClick={() => copyToClipboard(siteConfig.contact.email)} className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500 transition-colors text-sm break-all">
                      {siteConfig.contact.email}
                    </button>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-5 hover:shadow-md transition-all duration-300 border border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <PhoneIcon className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-navy-900 dark:text-white mb-1">
                      Phone
                    </h4>
                    <button onClick={() => copyToClipboard(siteConfig.contact.phone)} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-500 transition-colors text-sm">
                      {siteConfig.contact.phone}
                    </button>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-5 hover:shadow-md transition-all duration-300 border border-purple-200 dark:border-purple-800">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPinIcon className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-navy-900 dark:text-white mb-1">
                      Location
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      {siteConfig.contact.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time badge */}
            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-semibold text-green-700 dark:text-green-400">
                    Quick Response Time
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">
                    Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form - 3 columns */}
        <div className="lg:col-span-3">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({
                    ...formData,
                    name: e.target.value
                  })}
                  className="w-full px-4 py-3.5 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })}
                  className="w-full px-4 py-3.5 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })}
                  className="w-full px-4 py-3.5 bg-white dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                  placeholder="Tell me about your project or just say hi..."
                />
              </div>

              <button
                type="submit"
                disabled={submitted || loading}
                className={`w-full py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg transform hover:-translate-y-1 ${submitted
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white cursor-default'
                    : loading
                      ? 'bg-gradient-to-r from-gray-400 to-gray-500 text-white cursor-wait'
                      : 'bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white hover:shadow-xl'
                  }`}>
                {submitted ? (
                  <>
                    <CheckCircleIcon size={22} className="animate-bounce" />
                    <span>Message Sent Successfully!</span>
                  </>
                ) : loading ? (
                  <>
                    <Loader2Icon size={22} className="animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <SendIcon size={22} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>;
};
