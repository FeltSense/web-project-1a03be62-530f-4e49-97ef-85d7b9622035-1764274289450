import React from 'react';
import { Code2, Twitter, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const navigation = [
    {
      title: 'Product',
      links: [
        { name: 'Features', href: '#services' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Careers', href: '#contact' },
        { name: 'Blog', href: '#contact' },
        { name: 'Press', href: '#contact' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '#contact' },
        { name: 'Support', href: '#contact' },
        { name: 'Privacy', href: '#contact' },
        { name: 'Terms', href: '#contact' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'hello@ego.tech' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: 'San Francisco, CA' }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-violet-600 blur-xl opacity-50"></div>
                  <div className="relative bg-gradient-to-br from-violet-600 to-emerald-400 p-2.5 rounded-xl">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span className="text-2xl font-bold text-white font-['Sora']">Ego</span>
              </div>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Building the future of professional web experiences. Crafted with precision, designed for impact.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-400 hover:text-violet-400 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-violet-600" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-slate-900 p-3 rounded-xl text-slate-400 hover:text-white hover:bg-violet-600 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
                {navigation.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-white font-semibold font-['Sora'] mb-6 text-lg">
                      {section.title}
                    </h3>
                    <ul className="space-y-4">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a
                            href={link.href}
                            className="text-slate-400 hover:text-violet-400 transition-colors duration-300 text-sm inline-flex items-center gap-2 group"
                          >
                            <span className="group-hover:translate-x-1 transition-transform duration-300">
                              {link.name}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-slate-800">
          <div className="max-w-2xl">
            <h3 className="text-white font-bold font-['Sora'] text-xl mb-3">
              Stay Updated
            </h3>
            <p className="text-slate-400 mb-6 text-sm">
              Get the latest updates, articles, and resources delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3.5 bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-600/25 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Ego. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#contact" className="text-slate-500 hover:text-violet-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#contact" className="text-slate-500 hover:text-violet-400 transition-colors duration-300 text-sm">
                Terms of Service
              </a>
              <a href="#contact" className="text-slate-500 hover:text-violet-400 transition-colors duration-300 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
