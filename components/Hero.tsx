'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-slate-950 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-950 to-slate-950"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-violet-950/50 border border-violet-800/30 rounded-full px-4 py-2 mb-8"
            >
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-slate-300">Built for Modern Tech Teams</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6 font-['Sora']"
            >
              Elevate Your Tech{' '}
              <span className="bg-gradient-to-r from-violet-400 to-emerald-400 bg-clip-text text-transparent">
                Presence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Transform your digital identity with cutting-edge solutions. Built for ambitious tech companies that refuse to blend in.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-lg hover:shadow-violet-500/50"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300"
              >
                Explore Services
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-slate-800"
            >
              <div>
                <div className="text-3xl font-bold text-white mb-1 font-['Sora']">500+</div>
                <div className="text-sm text-slate-400">Projects Launched</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1 font-['Sora']">98%</div>
                <div className="text-sm text-slate-400">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1 font-['Sora']">24/7</div>
                <div className="text-sm text-slate-400">Expert Support</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Dashboard Container */}
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 shadow-2xl">
              {/* Browser Header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div className="flex-1 bg-slate-800 rounded-lg px-4 py-2 ml-4">
                  <span className="text-xs text-slate-500">ego.tech/dashboard</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80"
                  alt="Dashboard Preview"
                  fill
                  className="object-cover"
                />
                
                {/* Overlay Cards */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  {/* Top Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 }}
                      className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                          <TrendingUp className="w-4 h-4 text-violet-600" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-slate-900 mb-1 font-['Sora']">+24%</div>
                      <div className="text-xs text-slate-500">Growth</div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.1 }}
                      className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                          <Zap className="w-4 h-4 text-emerald-600" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-slate-900 mb-1 font-['Sora']">99.9%</div>
                      <div className="text-xs text-slate-500">Uptime</div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                          <Shield className="w-4 h-4 text-violet-600" />
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-slate-900 mb-1 font-['Sora']">100%</div>
                      <div className="text-xs text-slate-500">Secure</div>
                    </motion.div>
                  </div>

                  {/* Bottom Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                    className="bg-gradient-to-r from-violet-600 to-violet-700 rounded-xl p-5 shadow-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-violet-200 mb-1">System Performance</div>
                        <div className="text-2xl font-bold text-white font-['Sora']">Exceptional</div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <div className="text-2xl">⚡</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-violet-500 to-emerald-400 rounded-2xl blur-3xl opacity-50"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-emerald-400 to-violet-500 rounded-2xl blur-3xl opacity-50"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
