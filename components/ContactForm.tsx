'use client';

import { useState } from 'react';
import { Send, Mail, Phone, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const formObject: any = {};
    formData.forEach((value, key) => { formObject[key] = value; });
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_data: formObject,
          form_id: 'contact_form',
          project_id: '1a03be62-530f-4e49-97ef-85d7b9622035',
          founder_id: '',
          submitted_at: new Date().toISOString()
        })
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
    } catch (error) { setStatus('error'); }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-violet-600/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-violet-600/10 text-violet-400 px-4 py-2 rounded-full text-sm font-semibold">
                <Send className="w-4 h-4" />
                <span>Get in Touch</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-white">
                Let's Build Something
                <span className="text-emerald-400"> Extraordinary</span>
              </h2>
              
              <p className="text-slate-400 text-lg leading-relaxed">
                Ready to elevate your tech presence? Share your vision with us and we'll transform it into reality. Our team responds within 24 hours.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4 pt-8">
              <div className="flex items-start gap-4 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-violet-600/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-violet-600/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email Us</h3>
                  <p className="text-slate-400">hello@ego.tech</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-violet-600/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Call Us</h3>
                  <p className="text-slate-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-violet-600/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-violet-600/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-violet-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Response Time</h3>
                  <p className="text-slate-400">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10">
            {status === 'success' ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-500">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-violet-600 hover:text-violet-700 font-semibold transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full pl-12 pr-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:border-violet-600 focus:ring-violet-600/20 transition-all duration-300 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full pl-12 pr-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:border-violet-600 focus:ring-violet-600/20 transition-all duration-300 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-12 pr-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:border-violet-600 focus:ring-violet-600/20 transition-all duration-300 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:border-violet-600 focus:ring-violet-600/20 transition-all duration-300 outline-none resize-none"
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-100 rounded-xl">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <p className="text-sm text-red-700">
                      Failed to send message. Please try again.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-sm text-slate-500 text-center">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
