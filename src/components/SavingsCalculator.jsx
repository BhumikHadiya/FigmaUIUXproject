import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  DollarSign, 
  TrendingUp, 
  ArrowRight,
  PiggyBank,
  Percent,
  Calendar
} from 'lucide-react';

export default function SavingsCalculator({ onOpenAuth }) {
  const [monthlyIncome, setMonthlyIncome] = useState(3800);
  const [savingsRate, setSavingsRate] = useState(25);
  const [timeHorizon, setTimeHorizon] = useState(24); // months

  const monthlySavings = (monthlyIncome * (savingsRate / 100));
  const baseSavings = monthlySavings * timeHorizon;
  // Fictional 5.2% high yield savings return estimation
  const interestEarned = Math.round(baseSavings * (0.052 * (timeHorizon / 12) * 0.5));
  const totalProjected = baseSavings + interestEarned;

  return (
    <section id="calculator" className="py-24 bg-[#F0F8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D7E8DC] text-[#126B46] text-xs font-semibold uppercase tracking-wider mb-4 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-[#126B46]" />
            <span>Smart Wealth Simulator</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#153F2C] tracking-tight mb-5">
            See What Your Habits Are Worth
          </h2>
          <p className="font-sans text-lg text-[#829188] leading-relaxed">
            Move the sliders to simulate how small changes in your daily spending compound into serious savings with Finora's automated smart budgets.
          </p>
        </div>

        {/* Interactive Calculator Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#D7E8DC] shadow-xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Slider 1: Monthly Income */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold text-[#153F2C]">
                    Monthly Income / Stipend
                  </label>
                  <span className="font-heading font-bold text-xl text-[#126B46] bg-[#EAF5ED] px-3 py-1 rounded-xl border border-[#D7E8DC]">
                    ${monthlyIncome.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="800"
                  max="12000"
                  step="100"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#EAF5ED] rounded-lg appearance-none cursor-pointer accent-[#126B46]"
                />
                <div className="flex justify-between text-xs text-[#829188] mt-2 font-medium">
                  <span>$800 (Part-time student)</span>
                  <span>$12,000+ (Full-time tech pro)</span>
                </div>
              </div>

              {/* Slider 2: Target Savings Rate */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold text-[#153F2C]">
                    Target Monthly Savings Rate
                  </label>
                  <span className="font-heading font-bold text-xl text-[#126B46] bg-[#EAF5ED] px-3 py-1 rounded-xl border border-[#D7E8DC]">
                    {savingsRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="50"
                  step="1"
                  value={savingsRate}
                  onChange={(e) => setSavingsRate(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#EAF5ED] rounded-lg appearance-none cursor-pointer accent-[#126B46]"
                />
                <div className="flex justify-between text-xs text-[#829188] mt-2 font-medium">
                  <span>5% (Gentle start)</span>
                  <span>25% (Finora target)</span>
                  <span>50% (Aggressive saver)</span>
                </div>
              </div>

              {/* Slider 3: Time Horizon */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-bold text-[#153F2C]">
                    Timeline Horizon
                  </label>
                  <span className="font-heading font-bold text-xl text-[#126B46] bg-[#EAF5ED] px-3 py-1 rounded-xl border border-[#D7E8DC]">
                    {timeHorizon} Months ({Math.round(timeHorizon / 12 * 10) / 10} yrs)
                  </span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="60"
                  step="6"
                  value={timeHorizon}
                  onChange={(e) => setTimeHorizon(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#EAF5ED] rounded-lg appearance-none cursor-pointer accent-[#126B46]"
                />
                <div className="flex justify-between text-xs text-[#829188] mt-2 font-medium">
                  <span>6 Mo (Graduation)</span>
                  <span>24 Mo (First Car)</span>
                  <span>5 Yrs (Down Payment)</span>
                </div>
              </div>

            </div>

            {/* Results Panel (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#153F2C] to-[#126B46] rounded-2xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-xl pointer-events-none" />

              <div className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-white/10 text-emerald-200 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Projected Finora Portfolio</span>
              </div>

              <div className="text-xs text-emerald-200/90 font-medium">
                Estimated Total Saved
              </div>
              <div className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mt-1 mb-6">
                ${totalProjected.toLocaleString()}
              </div>

              <div className="space-y-3.5 py-4 border-t border-white/15 text-xs text-left">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-200/80">Monthly Auto-Save:</span>
                  <span className="font-bold text-white text-sm">${Math.round(monthlySavings).toLocaleString()} / mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-200/80">Base Capital Deposited:</span>
                  <span className="font-bold text-white">${Math.round(baseSavings).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-200/80">Est. High-Yield Interest:</span>
                  <span className="font-bold text-emerald-300">+${interestEarned.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={() => onOpenAuth('signup')}
                type="button"
                className="mt-6 w-full py-3.5 px-4 bg-white hover:bg-emerald-50 text-[#153F2C] font-semibold text-sm rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Automate This Goal Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
