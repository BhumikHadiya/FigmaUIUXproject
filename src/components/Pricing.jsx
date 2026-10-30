import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Pricing({ onOpenAuth }) {
  const [annualBilling, setAnnualBilling] = useState(true);

  const plans = [
    {
      name: 'Student Starter',
      badge: '100% Free Forever',
      price: '$0',
      period: 'forever',
      description: 'Everything essential for students to track daily spending, build budgets, and stop overdraft fees.',
      features: [
        'Connect up to 2 bank accounts',
        'Unlimited manual & receipt expense logging',
        '3 Custom savings goal vaults',
        'Basic monthly budget limits',
        'Mobile web & desktop access',
        'Export data to CSV/Excel',
      ],
      popular: false,
      cta: 'Start Free Today',
      buttonStyle: 'bg-white hover:bg-[#EAF5ED] text-[#26352D] border border-[#D7E8DC]',
    },
    {
      name: 'Finora Pro',
      badge: 'Most Popular',
      price: annualBilling ? '$3.99' : '$4.99',
      period: 'per month',
      description: 'Intelligent automation, predictive cashflow modeling, and deep analytics for early-career professionals.',
      features: [
        'Unlimited bank & credit card sync',
        'Instant real-time transaction classification',
        'Unlimited savings goal vaults with projections',
        'Adaptive cashflow forecasting for variable income',
        'Automated spare-change roundups',
        'Custom alerts & overspending notifications',
        'Priority 24/7 customer support',
      ],
      popular: true,
      cta: 'Get Started with Pro',
      buttonStyle: 'bg-[#126B46] hover:bg-[#0E5336] text-white shadow-lg shadow-[#126B46]/25',
    },
    {
      name: 'Roommates & Household',
      badge: 'Group Plan',
      price: annualBilling ? '$7.99' : '$9.99',
      period: 'per month',
      description: 'Ideal for apartment roommates, couples, and housemates managing shared rent, groceries, and bills.',
      features: [
        'Everything in Finora Pro for up to 5 members',
        'Shared household budget & expense pools',
        'One-click automated rent & grocery splitting',
        'IOU balances & automated settlement reminders',
        'Individual private budgets alongside shared vaults',
        'Consolidated tax & lease reports',
      ],
      popular: false,
      cta: 'Choose Household Plan',
      buttonStyle: 'bg-white hover:bg-[#EAF5ED] text-[#26352D] border border-[#D7E8DC]',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5ED] border border-[#D7E8DC] text-[#126B46] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fair & Transparent Pricing</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#153F2C] tracking-tight mb-5">
            Plans Built for Students and Young Pros
          </h2>
          <p className="font-sans text-lg text-[#829188] leading-relaxed">
            No surprise fees, no hidden maintenance charges. Switch plans or cancel anytime with a single click.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-[#F0F8F3] p-1.5 rounded-2xl border border-[#D7E8DC]">
            <button
              onClick={() => setAnnualBilling(false)}
              type="button"
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                !annualBilling
                  ? 'bg-[#126B46] text-white shadow-xs'
                  : 'text-[#829188] hover:text-[#26352D]'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              type="button"
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                annualBilling
                  ? 'bg-[#126B46] text-white shadow-xs'
                  : 'text-[#829188] hover:text-[#26352D]'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between relative ${
                plan.popular
                  ? 'bg-[#EAF5ED] border-[#126B46] shadow-xl ring-2 ring-[#126B46]/20 -translate-y-2'
                  : 'bg-white border-[#D7E8DC] hover:border-[#126B46]/40 shadow-sm hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#126B46] text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  Most Popular for Young Pros
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-2xl text-[#153F2C]">
                    {plan.name}
                  </h3>
                  <span className="text-[11px] font-bold text-[#126B46] bg-white px-2.5 py-1 rounded-full border border-[#D7E8DC]">
                    {plan.badge}
                  </span>
                </div>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="font-heading font-extrabold text-4xl sm:text-5xl text-[#153F2C]">
                    {plan.price}
                  </span>
                  <span className="text-xs text-[#829188] font-medium">/{plan.period}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#829188] leading-relaxed mb-6 pb-6 border-b border-[#D7E8DC]">
                  {plan.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#153F2C] mb-2">
                    What's Included:
                  </div>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#26352D]">
                      <div className="w-4 h-4 rounded-full bg-[#126B46]/10 text-[#126B46] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onOpenAuth('signup')}
                type="button"
                className={`w-full py-3.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${plan.buttonStyle}`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Security guarantee line */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs text-[#829188] font-medium">
          <ShieldCheck className="w-4 h-4 text-[#126B46]" />
          <span>30-day money-back guarantee • No credit card required for Starter • 256-bit AES encryption</span>
        </div>

      </div>
    </section>
  );
}
