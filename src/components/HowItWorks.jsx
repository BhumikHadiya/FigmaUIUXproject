import React from 'react';
import { 
  UserPlus, 
  SearchCode, 
  Trophy, 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Zap, 
  Sparkles,
  Smartphone,
  CreditCard,
  Target
} from 'lucide-react';

export default function HowItWorks({ onOpenAuth }) {
  const steps = [
    {
      number: '01',
      title: 'Create Your Account',
      description: 'Sign up in under 60 seconds with bank-grade security. Link your accounts or start with manual tracking—completely free.',
      icon: UserPlus,
      badge: 'Quick 60s Setup',
      details: [
        'Zero setup or subscription fees for students',
        '256-bit AES read-only encrypted connection',
        'Compatible with over 10,000+ banks & credit unions'
      ],
      preview: {
        type: 'account',
        status: 'Encrypted & Verified',
        tag: 'Instant Setup'
      }
    },
    {
      number: '02',
      title: 'Track Your Spending',
      description: 'Finora intelligently categorizes every transaction in real-time. Uncover hidden subscriptions and see exactly where your money goes.',
      icon: CreditCard,
      badge: 'Smart Auto-Categorization',
      details: [
        'Automatic recurring subscription detection',
        'Customizable spending categories & tags',
        'Instant alerts when you approach monthly limits'
      ],
      preview: {
        type: 'tracking',
        status: 'Real-Time Sync',
        tag: 'Live Feed'
      }
    },
    {
      number: '03',
      title: 'Achieve Your Goals',
      description: 'Turn your leftover cash into growing savings vaults. Build sustainable financial habits and reach your dream milestones faster.',
      icon: Trophy,
      badge: 'Automated Wealth Habits',
      details: [
        'Personalized savings milestone recommendations',
        'Automated spare-change round-up deposits',
        'Clear visual progress trackers and celebration alerts'
      ],
      preview: {
        type: 'goals',
        status: 'Goal Hit: +$3,500',
        tag: 'Milestone Unlocked'
      }
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#F0F8F3] relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-[#126B46]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#126B46]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D7E8DC] text-[#126B46] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Zap className="w-3.5 h-3.5 fill-[#126B46]" />
            <span>How It Works</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#153F2C] tracking-tight mb-5">
            Managing Money Made Simple
          </h2>
          <p className="font-sans text-lg text-[#829188] leading-relaxed">
            Three straightforward steps to transform your financial habits from stressful uncertainty to effortless confidence.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          
          {/* Subtle Desktop Connector Line */}
          <div className="hidden lg:block absolute top-28 left-[18%] right-[18%] h-0.5 border-t-2 border-dashed border-[#D7E8DC] -z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 border border-[#D7E8DC] shadow-sm hover:shadow-xl hover:border-[#126B46]/40 transition-all duration-300 relative z-10 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Row: Step Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-heading font-black text-4xl text-[#EAF5ED] group-hover:text-[#126B46]/20 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-[#EAF5ED] group-hover:bg-[#126B46] text-[#126B46] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs">
                      <Icon className="w-7 h-7 stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Badge */}
                  <span className="inline-block text-[11px] font-bold text-[#126B46] bg-[#EAF5ED] px-3 py-1 rounded-full mb-3">
                    {step.badge}
                  </span>

                  {/* Step Title */}
                  <h3 className="font-heading font-bold text-2xl text-[#153F2C] mb-3">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="font-sans text-sm text-[#829188] leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#F0F8F3]">
                    {step.details.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-[#26352D] font-medium">
                        <CheckCircle className="w-4 h-4 text-[#126B46] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Illustrative Footer Card */}
                <div className="mt-4 p-3.5 rounded-2xl bg-[#F0F8F3] border border-[#D7E8DC] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#126B46]" />
                    <span className="text-xs font-semibold text-[#153F2C]">{step.preview.status}</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-[#829188] tracking-wider">
                    {step.preview.tag}
                  </span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-[#D7E8DC] shadow-sm">
            <span className="text-sm font-medium text-[#26352D]">
              Ready to take control of your student or personal finances?
            </span>
            <button
              onClick={() => onOpenAuth('signup')}
              type="button"
              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#126B46] hover:bg-[#0E5336] px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <span>Get Started Now — It's Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
