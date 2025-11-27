'use client';

import { motion } from 'framer-motion';
import { Zap, Shield, Layers, Rocket } from 'lucide-react';

export default function Services() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance that scales with your ambitions'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption protecting your data 24/7'
    },
    {
      icon: Layers,
      title: 'Seamless Integration',
      description: 'Connect with your existing tools in minutes'
    },
    {
      icon: Rocket,
      title: 'Deploy Instantly',
      description: 'Go from code to production in seconds, not hours'
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Built for Modern Teams
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Everything you need to build, ship, and scale your tech products with confidence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-violet-50 flex items-center justify-center mb-4 group-hover:bg-violet-100 transition-all duration-300 group-hover:scale-110">
                <feature.icon className="w-10 h-10 text-violet-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-slate-900 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
