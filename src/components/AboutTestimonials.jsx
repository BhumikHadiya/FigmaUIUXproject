import React from 'react';
import { Star, Quote, Award, Sparkles, HeartHandshake, Shield, Users } from 'lucide-react';
import { testimonials } from '../data/financeData';

export default function AboutTestimonials() {
  return (
    <section id="about" className="py-24 bg-[#F0F8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Brand Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D7E8DC] text-[#126B46] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
              <HeartHandshake className="w-3.5 h-3.5 text-[#126B46]" />
              <span>About Finora</span>
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#153F2C] tracking-tight mb-6">
              Empowering the Next Generation of Smart Savers
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#829188] leading-relaxed mb-6">
              Traditional banking apps were designed thirty years ago for desktop computers and corporate salaries. They overload users with dense tables, hidden maintenance fees, and zero actionable guidance.
            </p>
            <p className="font-sans text-base text-[#829188] leading-relaxed mb-8">
              At Finora, we believe money management should feel clear, inspiring, and accessible. Whether you are balancing student loans in college or negotiating your first tech salary, Finora gives you the calm clarity needed to take control of your financial destiny.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D7E8DC]">
              <div>
                <div className="font-heading font-bold text-2xl text-[#126B46]">50k+</div>
                <div className="text-xs text-[#829188] font-medium mt-0.5">Active Savers</div>
              </div>
              <div>
                <div className="font-heading font-bold text-2xl text-[#126B46]">$320</div>
                <div className="text-xs text-[#829188] font-medium mt-0.5">Avg Monthly Saved</div>
              </div>
              <div>
                <div className="font-heading font-bold text-2xl text-[#126B46]">99.8%</div>
                <div className="text-xs text-[#829188] font-medium mt-0.5">Overdraft Reduction</div>
              </div>
            </div>
          </div>

          {/* Core Values Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 border border-[#D7E8DC] shadow-lg space-y-6">
              <h3 className="font-heading font-bold text-xl text-[#153F2C] pb-4 border-b border-[#EAF5ED]">
                Our Guiding Principles
              </h3>
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF5ED] text-[#126B46] flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#153F2C]">Zero Commercial Data Selling</h4>
                  <p className="text-xs sm:text-sm text-[#829188] mt-1 leading-relaxed">
                    We never sell your transaction history to predatory advertisers or payday loan brokers. Your data is strictly yours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF5ED] text-[#126B46] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#153F2C]">Actionable Habit Design</h4>
                  <p className="text-xs sm:text-sm text-[#829188] mt-1 leading-relaxed">
                    Rather than shaming you for buying a morning latte, Finora identifies sustainable micro-adjustments that respect your lifestyle.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF5ED] text-[#126B46] flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base text-[#153F2C]">Student Community First</h4>
                  <p className="text-xs sm:text-sm text-[#829188] mt-1 leading-relaxed">
                    We partner directly with university finance clubs to deliver free financial literacy resources to tens of thousands of undergraduates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D7E8DC] text-[#126B46] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Community Stories</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#153F2C] tracking-tight mb-4">
            Loved by Students and Young Professionals
          </h2>
          <p className="text-base text-[#829188]">
            Real stories from young adults who transformed their relationship with money using Finora.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-7 border border-[#D7E8DC] shadow-sm hover:shadow-xl hover:border-[#126B46]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Highlight Tag */}
                <span className="inline-block text-[11px] font-bold text-[#126B46] bg-[#EAF5ED] px-2.5 py-1 rounded-md mb-4">
                  {t.highlight}
                </span>

                {/* Quote */}
                <p className="text-sm text-[#26352D] leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#EAF5ED]">
                <img 
                  src={t.avatar} 
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-[#126B46]/20" 
                />
                <div>
                  <div className="font-heading font-bold text-sm text-[#153F2C]">{t.name}</div>
                  <div className="text-[11px] text-[#829188]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
