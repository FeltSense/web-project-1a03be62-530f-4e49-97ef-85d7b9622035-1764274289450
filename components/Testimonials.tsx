'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Ego transformed our development workflow. The performance monitoring and analytics are unmatched. We shipped 40% faster this quarter.",
      name: "Sarah Chen",
      role: "CTO",
      company: "Stripe",
      avatar: "https://i.pravatar.cc/150?img=5",
      logo: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=40&fit=crop&q=80"
    },
    {
      quote: "The best developer tool we've integrated. Ego's real-time insights helped us identify bottlenecks we didn't even know existed.",
      name: "Marcus Rodriguez",
      role: "Head of Engineering",
      company: "Vercel",
      avatar: "https://i.pravatar.cc/150?img=12",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=40&fit=crop&q=80"
    },
    {
      quote: "Ego isn't just a tool—it's a competitive advantage. Our team's productivity increased dramatically, and deployment confidence is at an all-time high.",
      name: "Emily Watson",
      role: "VP of Product",
      company: "Linear",
      avatar: "https://i.pravatar.cc/150?img=27",
      logo: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=120&h=40&fit=crop&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-4">
            Trusted by elite engineering teams
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Join thousands of developers who ship faster and smarter with Ego
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="mb-6">
                <div className="h-10 relative opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <div className="text-slate-900 font-bold text-lg">{testimonial.company}</div>
                </div>
              </div>

              <p className="text-slate-600 text-base leading-relaxed mb-8 flex-grow">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
