import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  TrendingDown, 
  ShieldCheck, 
  Wallet, 
  ArrowUpRight, 
  Bell, 
  CheckCircle2, 
  Target,
  PiggyBank,
  DollarSign,
  ChevronRight
} from 'lucide-react';
import { financialStats } from '../data/financeData';

export default function Hero({ onOpenAuth }) {
  const [activeTab, setActiveTab] = useState('monthly');

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
      {/* Background Decorative Soft Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-[#126B46]/10 via-[#34D399]/10 to-transparent blur-3xl pointer-events-none rounded-full -z-10" />
      <div className="absolute top-1/3 right-5 w-72 h-72 bg-[#126B46]/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-6 flex flex-col text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-[#EAF5ED] border border-[#D7E8DC] text-[#126B46] text-xs sm:text-sm font-semibold mb-6 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-[#126B46] animate-ping" />
              <span>Finora 2.0 is Live</span>
              <span className="text-[#829188]">•</span>
              <span className="text-[#26352D] font-medium hidden sm:inline">Designed for Students & Young Pros</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#126B46]" />
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#153F2C] tracking-tight leading-[1.12] mb-6">
              Take Control of <br className="hidden sm:block" />
              <span className="text-[#126B46] relative inline-block">
                Your Money.
                <svg className="absolute -bottom-2 left-0 w-full text-[#126B46]/30 h-2.5" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q50 0 100 15" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="font-sans text-lg sm:text-xl text-[#829188] leading-relaxed max-w-xl mb-8">
              Manage your expenses, build better financial habits, and reach your financial goals with Finora. Everything you need to make smarter financial decisions in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={() => onOpenAuth('signup')}
                type="button"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#126B46] hover:bg-[#0E5336] text-white font-semibold text-base rounded-2xl shadow-lg shadow-[#126B46]/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer group"
              >
                <span>Start for Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2.2]" />
              </button>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-[#EAF5ED] text-[#26352D] border border-[#D7E8DC] font-semibold text-base rounded-2xl transition-all duration-200 shadow-xs hover:border-[#126B46]/40 text-center"
              >
                <span>Explore Features</span>
                <ChevronRight className="w-4 h-4 text-[#829188]" />
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-[#D7E8DC]/80 grid grid-cols-3 gap-3 sm:gap-6">
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-[#153F2C]">$4.2M+</div>
                <div className="text-xs text-[#829188] font-medium mt-0.5">Tracked Safely</div>
              </div>
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-[#153F2C]">4.9 / 5.0</div>
                <div className="text-xs text-[#829188] font-medium mt-0.5">50k+ Happy Savers</div>
              </div>
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-[#153F2C]">256-Bit</div>
                <div className="text-xs text-[#829188] font-medium mt-0.5">Bank-Grade Security</div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Modern Dashboard Mockup Illustration */}
          <div className="lg:col-span-6 relative">
            
            {/* Background Glow Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#126B46]/20 to-[#EAF5ED] rounded-3xl filter blur-2xl opacity-70 transform rotate-1 scale-95" />

            {/* Main Dashboard Card Container */}
            <div className="relative bg-white rounded-3xl border border-[#D7E8DC] p-5 sm:p-7 shadow-2xl shadow-[#153F2C]/10 backdrop-blur-md">
              
              {/* Dashboard Top Header Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-[#EAF5ED]">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" 
                      alt="Alex Chen" 
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-[#126B46]/20"
                    />
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                  </div>
                  <div>
                    <div className="text-xs text-[#829188] font-medium">Welcome back,</div>
                    <div className="font-heading font-semibold text-[#153F2C] text-sm sm:text-base">Alex Chen</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-[#EAF5ED] text-[#126B46] text-xs font-semibold rounded-lg border border-[#D7E8DC]">
                    October 2026
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#EAF5ED] flex items-center justify-center text-[#126B46]">
                    <Bell className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Total Balance Card */}
              <div className="mt-5 p-5 rounded-2xl bg-gradient-to-br from-[#153F2C] to-[#126B46] text-white shadow-md relative overflow-hidden">
                {/* Background Pattern Shape */}
                <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/5 pointer-events-none" />
                <div className="absolute top-2 right-4 text-xs font-medium text-emerald-200/80 bg-white/10 px-2.5 py-1 rounded-full">
                  Primary Checking
                </div>

                <div className="text-xs text-emerald-200/90 font-medium">Total Balance</div>
                <div className="flex items-baseline gap-3 mt-1.5">
                  <div className="font-heading font-bold text-3xl sm:text-4xl tracking-tight text-white">
                    {financialStats.totalBalance}
                  </div>
                  <div className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-400/20 text-emerald-200">
                    <TrendingUp className="w-3 h-3" />
                    <span>{financialStats.balanceTrend}</span>
                  </div>
                </div>

                {/* Sub metrics row */}
                <div className="mt-5 pt-4 border-t border-white/15 grid grid-cols-2 gap-4 text-left">
                  <div>
                    <div className="text-[11px] text-emerald-200/80 uppercase tracking-wider font-semibold">Monthly Income</div>
                    <div className="text-base sm:text-lg font-bold text-white mt-0.5 flex items-center gap-1">
                      <span className="text-emerald-300">▲</span> {financialStats.monthlyIncome}
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] text-emerald-200/80 uppercase tracking-wider font-semibold">Monthly Expenses</div>
                    <div className="text-base sm:text-lg font-bold text-white mt-0.5 flex items-center gap-1">
                      <span className="text-red-300">▼</span> {financialStats.monthlyExpenses}
                    </div>
                  </div>
                </div>
              </div>

              {/* Expense Analytics Chart & Savings Goal Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                
                {/* Expense Analytics SVG Mini Chart */}
                <div className="p-4 rounded-2xl bg-[#EAF5ED]/60 border border-[#D7E8DC] flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs font-semibold text-[#153F2C]">Expense Trends</div>
                    <span className="text-[10px] font-semibold text-[#126B46] bg-white px-2 py-0.5 rounded-md border border-[#D7E8DC]">
                      -12% vs last mo
                    </span>
                  </div>

                  {/* SVG Bar Visual */}
                  <div className="pt-3 pb-1">
                    <div className="h-24 flex items-end justify-between gap-1.5 px-1">
                      {[
                        { day: 'Mon', h: '42%', val: '$42' },
                        { day: 'Tue', h: '68%', val: '$68' },
                        { day: 'Wed', h: '35%', val: '$35' },
                        { day: 'Thu', h: '85%', val: '$85' },
                        { day: 'Fri', h: '55%', val: '$55' },
                        { day: 'Sat', h: '92%', val: '$92' },
                        { day: 'Sun', h: '30%', val: '$30' },
                      ].map((bar, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1 group/bar">
                          <div className="w-full bg-[#D7E8DC] rounded-t-md h-full flex items-end">
                            <div 
                              className={`w-full rounded-t-md transition-all duration-300 group-hover/bar:bg-[#0E5336] ${
                                i === 5 ? 'bg-[#153F2C]' : 'bg-[#126B46]'
                              }`}
                              style={{ height: bar.h }}
                            />
                          </div>
                          <span className="text-[10px] text-[#829188] font-medium">{bar.day}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Savings Progress Card */}
                <div className="p-4 rounded-2xl bg-[#EAF5ED]/60 border border-[#D7E8DC] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold text-[#153F2C] flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-[#126B46]" />
                        <span>Savings Goal</span>
                      </div>
                      <span className="text-[11px] font-bold text-[#126B46]">74%</span>
                    </div>

                    <div className="text-xs text-[#829188] mt-1 font-medium">
                      Emergency & Travel Fund
                    </div>

                    <div className="mt-3">
                      <div className="flex justify-between text-xs font-bold text-[#26352D] mb-1.5">
                        <span>$18,500</span>
                        <span className="text-[#829188] font-normal">of $25,000</span>
                      </div>
                      {/* Animated Progress Bar */}
                      <div className="w-full h-3 bg-white rounded-full overflow-hidden p-0.5 border border-[#D7E8DC]">
                        <div 
                          className="h-full bg-gradient-to-r from-[#126B46] to-[#34D399] rounded-full transition-all duration-1000"
                          style={{ width: '74%' }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#D7E8DC] flex items-center justify-between text-[11px]">
                    <span className="text-[#829188]">Est. completion:</span>
                    <span className="font-semibold text-[#126B46]">Jan 2027</span>
                  </div>
                </div>

              </div>

              {/* Floating Widget 1: Smart Alert (Overlapping top right) */}
              <div className="hidden sm:flex absolute -top-5 -right-5 items-center gap-3 bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-[#D7E8DC] animate-bounce-subtle">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#126B46] flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#153F2C]">Weekly Budget Win!</div>
                  <div className="text-[11px] text-[#829188]">Saved $180 on dining out</div>
                </div>
              </div>

              {/* Floating Widget 2: Round-up Deposit (Overlapping bottom left) */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-3 bg-white px-4 py-2.5 rounded-2xl shadow-xl border border-[#D7E8DC]">
                <div className="w-9 h-9 rounded-xl bg-[#126B46] text-white flex items-center justify-center">
                  <PiggyBank className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#153F2C]">Auto Round-Up</div>
                  <div className="text-[11px] text-[#126B46] font-semibold">+$4.50 invested in Goal Vault</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
