import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Wallet, Users, Zap } from 'lucide-react';

export default function CTASection({ onOpenAuth }) {
  return (
    <section className="py-20 sm:py-24 bg-[#F0F8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Dark Green Banner Card */}
        <div className="relative rounded-[32px] sm:rounded-[44px] bg-[#153F2C] text-white p-8 sm:p-14 lg:p-20 shadow-2xl overflow-hidden border border-[#1A4F38]">
          
          {/* Background Decorative Ambient Glows and Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#126B46]/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#34D399]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#126B46_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />

          {/* Floating Accents */}
          <div className="hidden lg:flex absolute top-12 right-16 items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15 animate-bounce-subtle">
            <ShieldCheck className="w-5 h-5 text-emerald-300" />
            <div className="text-left">
              <div className="text-xs font-bold text-white">256-Bit TLS Security</div>
              <div className="text-[10px] text-emerald-200/80">Read-Only Bank Sync</div>
            </div>
          </div>

          <div className="hidden lg:flex absolute bottom-12 left-16 items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15">
            <Users className="w-5 h-5 text-emerald-300" />
            <div className="text-left">
              <div className="text-xs font-bold text-white">50,000+ Savers</div>
              <div className="text-[10px] text-emerald-200/80">Campuses & Young Pros</div>
            </div>
          </div>

          {/* Center Content */}
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-emerald-200 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Begin Your Financial Journey</span>
            </div>

            {/* Required Heading */}
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
              Your Money. Your Future.
            </h2>

            {/* Required Description */}
            <p className="font-sans text-base sm:text-xl text-emerald-100/90 leading-relaxed max-w-xl mx-auto mb-10">
              Start building better financial habits today with Finora. Everything you need to eliminate money stress and achieve your financial goals.
            </p>

            {/* Required CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenAuth('signup')}
                type="button"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#126B46] hover:bg-[#0E5336] text-white font-semibold text-base rounded-2xl shadow-xl shadow-black/20 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer group border border-emerald-400/30"
              >
                <span>Get Started for Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2.2]" />
              </button>
            </div>

            {/* Guarantees checklist */}
            <div className="mt-8 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-emerald-200/80 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Free forever for students</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>60-second setup</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
