'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const features = [
    'Unlimited photo submissions',
    'Real-time voting results',
    'Advanced analytics dashboard',
    'Custom profile customization',
    'Priority support',
    'Ad-free experience',
    'Exclusive badges & rewards',
    'Early access to new features'
  ];

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-slate-500">
            Join thousands of users who are already building their reputation on Ego
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-semibold transition-colors ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-7 bg-slate-200 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2"
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-1 left-1 w-5 h-5 bg-violet-600 rounded-full transition-transform duration-300 ${
                isYearly ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-semibold transition-colors ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
            Yearly
          </span>
          {isYearly && (
            <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-400 text-white">
              Save 20%
            </span>
          )}
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-all duration-300">
            {/* Card Header */}
            <div className="text-center mb-8">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-2">
                Pro Access
              </h3>
              <p className="text-slate-500 mb-6">
                Everything you need to dominate the leaderboard
              </p>
              
              {/* Price Display */}
              <div className="mb-6">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900">
                    ${isYearly ? '23' : '29'}
                  </span>
                  <span className="text-slate-500 font-medium">
                    /{isYearly ? 'month' : 'month'}
                  </span>
                </div>
                {isYearly && (
                  <p className="text-sm text-slate-500 mt-2">
                    Billed annually at $276
                  </p>
                )}
              </div>

              {/* Stripe Button */}
              <button
                onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                className="w-full py-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Pre-Order Now - ${isYearly ? '23' : '29'}
              </button>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-50 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-violet-600" />
                  </div>
                  <span className="text-slate-700 text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <p className="text-xs text-center text-slate-500">
                30-day money-back guarantee. Cancel anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500">
            Have questions?{' '}
            <a href="#contact" className="text-violet-600 hover:text-violet-700 font-semibold transition-colors">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </section>
  </span>);
}
