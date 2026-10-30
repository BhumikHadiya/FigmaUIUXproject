import React, { useState } from 'react';
import { 
  Receipt, 
  PieChart, 
  Target, 
  ArrowUpRight, 
  Sparkles, 
  WalletCards, 
  Split, 
  ShieldCheck, 
  ArrowRight,
  TrendingDown,
  Layers,
  Check,
  Percent
} from 'lucide-react';

export default function Features({ onOpenAuth }) {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="features" className="py-24 bg-white relative">
      {/* Decorative background grid and soft mint gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(#126B46_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5ED] border border-[#D7E8DC] text-[#126B46] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#153F2C] tracking-tight mb-5">
            Everything You Need to Manage Money
          </h2>
          <p className="font-sans text-lg text-[#829188] leading-relaxed">
            Finora combines automated tracking, intelligent budgeting, and habit-building tools engineered specifically for college students and ambitious young professionals.
          </p>
        </div>

        {/* 3 Main Required Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Feature 1: Track Expenses */}
          <div className="bg-[#EAF5ED] rounded-3xl p-8 border border-[#D7E8DC] hover:border-[#126B46]/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between">
            <div>
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-[#126B46] text-white flex items-center justify-center mb-6 shadow-md shadow-[#126B46]/20 group-hover:scale-105 transition-transform">
                <Receipt className="w-7 h-7 stroke-[2.2]" />
              </div>

              <h3 className="font-heading font-bold text-2xl text-[#153F2C] mb-3">
                Track Expenses
              </h3>
              
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-[#26352D] font-medium text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#126B46]" />
                  <span>Monitor your daily spending automatically.</span>
                </li>
                <li className="flex items-center gap-2 text-[#26352D] font-medium text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#126B46]" />
                  <span>Understand exactly where your money goes.</span>
                </li>
              </ul>
            </div>

            {/* Visual Micro-Dashboard for Track Expenses */}
            <div className="mt-4 pt-4 bg-white rounded-2xl p-4 border border-[#D7E8DC] shadow-xs">
              <div className="text-[11px] font-semibold text-[#829188] uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Recent Categorized Spending</span>
                <span className="text-[#126B46] font-bold">Auto-Logged</span>
              </div>
              <div className="space-y-2.5">
                {[
                  { tag: 'Groceries', name: 'Fresh Market', amount: '-$42.50', color: 'bg-emerald-100 text-emerald-800' },
                  { tag: 'Study', name: 'Campus Books', amount: '-$89.00', color: 'bg-blue-100 text-blue-800' },
                  { tag: 'Coffee', name: 'Artisan Cafe', amount: '-$4.75', color: 'bg-amber-100 text-amber-800' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded-xl bg-[#F0F8F3] hover:bg-[#EAF5ED] transition-colors">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${item.color}`}>
                        {item.tag}
                      </span>
                      <span className="text-xs font-semibold text-[#26352D]">{item.name}</span>
                    </div>
                    <span className="text-xs font-bold text-[#153F2C]">{item.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature 2: Smart Budgeting */}
          <div className="bg-[#EAF5ED] rounded-3xl p-8 border border-[#D7E8DC] hover:border-[#126B46]/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between">
            <div>
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-[#153F2C] text-white flex items-center justify-center mb-6 shadow-md shadow-[#153F2C]/20 group-hover:scale-105 transition-transform">
                <PieChart className="w-7 h-7 stroke-[2.2]" />
              </div>

              <h3 className="font-heading font-bold text-2xl text-[#153F2C] mb-3">
                Smart Budgeting
              </h3>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-[#26352D] font-medium text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#126B46]" />
                  <span>Create flexible monthly budgets with ease.</span>
                </li>
                <li className="flex items-center gap-2 text-[#26352D] font-medium text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#126B46]" />
                  <span>Set automated spending limits with instant alerts.</span>
                </li>
              </ul>
            </div>

            {/* Visual Micro-Dashboard for Smart Budgeting */}
            <div className="mt-4 pt-4 bg-white rounded-2xl p-4 border border-[#D7E8DC] shadow-xs">
              <div className="text-[11px] font-semibold text-[#829188] uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Monthly Limits Status</span>
                <span className="text-emerald-700 font-bold">On Track</span>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-[#26352D]">Dining Out</span>
                    <span className="text-[#126B46] font-bold">$245 / $300 (82%)</span>
                  </div>
                  <div className="w-full h-2 bg-[#EAF5ED] rounded-full overflow-hidden">
                    <div className="h-full bg-[#126B46] rounded-full" style={{ width: '82%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-[#26352D]">Shopping & Tech</span>
                    <span className="text-amber-600 font-bold">$180 / $250 (72%)</span>
                  </div>
                  <div className="w-full h-2 bg-[#EAF5ED] rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '72%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-semibold text-[#26352D]">Entertainment</span>
                    <span className="text-[#126B46] font-bold">$60 / $150 (40%)</span>
                  </div>
                  <div className="w-full h-2 bg-[#EAF5ED] rounded-full overflow-hidden">
                    <div className="h-full bg-[#34D399] rounded-full" style={{ width: '40%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Save More */}
          <div className="bg-[#EAF5ED] rounded-3xl p-8 border border-[#D7E8DC] hover:border-[#126B46]/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between">
            <div>
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-[#126B46] text-white flex items-center justify-center mb-6 shadow-md shadow-[#126B46]/20 group-hover:scale-105 transition-transform">
                <Target className="w-7 h-7 stroke-[2.2]" />
              </div>

              <h3 className="font-heading font-bold text-2xl text-[#153F2C] mb-3">
                Save More
              </h3>

              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-[#26352D] font-medium text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#126B46]" />
                  <span>Set targeted financial milestones and vaults.</span>
                </li>
                <li className="flex items-center gap-2 text-[#26352D] font-medium text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#126B46]" />
                  <span>Track real-time savings growth & projection models.</span>
                </li>
              </ul>
            </div>

            {/* Visual Micro-Dashboard for Save More */}
            <div className="mt-4 pt-4 bg-white rounded-2xl p-4 border border-[#D7E8DC] shadow-xs">
              <div className="text-[11px] font-semibold text-[#829188] uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Active Savings Vaults</span>
                <span className="text-[#126B46] font-bold">2 Active</span>
              </div>
              <div className="space-y-2.5">
                <div className="p-2.5 rounded-xl bg-[#F0F8F3] border border-[#D7E8DC]">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#153F2C] mb-1">
                    <span>Graduation Trip to Japan</span>
                    <span className="text-[#126B46] font-bold">$2,150 / $3,000</span>
                  </div>
                  <div className="w-full h-2 bg-white rounded-full overflow-hidden border border-[#D7E8DC]">
                    <div className="h-full bg-gradient-to-r from-[#126B46] to-[#34D399] rounded-full" style={{ width: '71%' }} />
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[#F0F8F3] border border-[#D7E8DC]">
                  <div className="flex items-center justify-between text-xs font-semibold text-[#153F2C] mb-1">
                    <span>First Apartment Deposit</span>
                    <span className="text-[#126B46] font-bold">$3,200 / $4,000</span>
                  </div>
                  <div className="w-full h-2 bg-white rounded-full overflow-hidden border border-[#D7E8DC]">
                    <div className="h-full bg-gradient-to-r from-[#126B46] to-[#34D399] rounded-full" style={{ width: '80%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 2 Complementary Bonus Feature Highlights: Student Perks & Roommate Splits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          
          <div className="bg-[#F0F8F3] rounded-3xl p-6 sm:p-8 border border-[#D7E8DC] flex flex-col sm:flex-row items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-[#126B46]/10 text-[#126B46] flex items-center justify-center shrink-0">
              <Split className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-[#153F2C] mb-1">
                Roommate & Group Expense Splitting
              </h4>
              <p className="text-sm text-[#829188] leading-relaxed">
                Split rent, utilities, and groceries with housemates without spreadsheets. Send automated friendly reminders and settle balances with zero stress.
              </p>
            </div>
          </div>

          <div className="bg-[#F0F8F3] rounded-3xl p-6 sm:p-8 border border-[#D7E8DC] flex flex-col sm:flex-row items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-[#126B46]/10 text-[#126B46] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-[#153F2C] mb-1">
                Zero Fees for College Students
              </h4>
              <p className="text-sm text-[#829188] leading-relaxed">
                Sign up with your college email to unlock 100% free premium budgeting, receipt scans, and customized financial advice for your entire academic tenure.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
