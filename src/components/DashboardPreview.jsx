import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Calendar, 
  Filter, 
  Download, 
  Layers, 
  PieChart as PieIcon, 
  Target, 
  Clock, 
  CheckCircle2, 
  Plus, 
  Home, 
  Utensils, 
  GraduationCap, 
  Car, 
  Film,
  Music,
  BookOpen,
  ShoppingBag,
  Landmark,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { 
  financialStats, 
  chartMonthlyData, 
  spendingCategories, 
  savingsGoals, 
  recentTransactions 
} from '../data/financeData';

export default function DashboardPreview({ onOpenAuth }) {
  const [timeRange, setTimeRange] = useState('6M');
  const [activeMetric, setActiveMetric] = useState('overview');

  const currentChartData = chartMonthlyData[timeRange] || chartMonthlyData['6M'];
  const maxIncome = Math.max(...currentChartData.map(d => d.income));

  const getCategoryIcon = (iconName) => {
    switch(iconName) {
      case 'Home': return <Home className="w-4 h-4" />;
      case 'Utensils': return <Utensils className="w-4 h-4" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4" />;
      case 'Car': return <Car className="w-4 h-4" />;
      case 'Film': return <Film className="w-4 h-4" />;
      default: return <PieIcon className="w-4 h-4" />;
    }
  };

  const getTransactionIcon = (iconName) => {
    switch(iconName) {
      case 'Music': return <Music className="w-4 h-4 text-purple-600" />;
      case 'ArrowDownLeft': return <ArrowDownLeft className="w-4 h-4 text-emerald-600" />;
      case 'BookOpen': return <BookOpen className="w-4 h-4 text-blue-600" />;
      case 'ShoppingBag': return <ShoppingBag className="w-4 h-4 text-amber-600" />;
      case 'Landmark': return <Landmark className="w-4 h-4 text-[#126B46]" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <section id="dashboard" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5ED] border border-[#D7E8DC] text-[#126B46] text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Platform Preview</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-[#153F2C] tracking-tight mb-5">
            Your Financial Universe at a Glance
          </h2>
          <p className="font-sans text-lg text-[#829188] leading-relaxed">
            A comprehensive, distraction-free command center that updates continuously so you're always in command of every dollar.
          </p>
        </div>

        {/* Large Dashboard Container */}
        <div className="bg-[#EAF5ED] rounded-3xl sm:rounded-[36px] p-4 sm:p-8 lg:p-10 border border-[#D7E8DC] shadow-xl">
          
          {/* Dashboard Control Bar */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#D7E8DC] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <span className="font-heading font-bold text-base text-[#153F2C]">
                  Alex's Personal Wealth Workspace
                </span>
                <span className="text-xs text-[#829188] ml-2 hidden sm:inline">
                  • Synced 2 minutes ago
                </span>
              </div>
            </div>

            {/* Time Filter Buttons */}
            <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-end">
              <div className="bg-[#F0F8F3] p-1 rounded-xl border border-[#D7E8DC] flex items-center gap-1">
                {['1M', '6M', '1Y'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setTimeRange(range)}
                    type="button"
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      timeRange === range
                        ? 'bg-[#126B46] text-white shadow-xs'
                        : 'text-[#829188] hover:text-[#26352D]'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>

              <button
                onClick={() => onOpenAuth('signup')}
                type="button"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#EAF5ED] hover:bg-[#D7E8DC] text-[#126B46] text-xs font-semibold rounded-xl border border-[#D7E8DC] transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export Report</span>
              </button>
            </div>
          </div>

          {/* Top Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            
            {/* Total Balance Metric */}
            <div className="bg-white rounded-2xl p-5 border border-[#D7E8DC] shadow-xs hover:border-[#126B46]/40 transition-colors">
              <div className="flex items-center justify-between text-xs text-[#829188] font-medium mb-1">
                <span>Total Net Balance</span>
                <span className="inline-flex items-center text-xs font-bold text-[#126B46] bg-[#EAF5ED] px-2 py-0.5 rounded-md">
                  {financialStats.balanceTrend}
                </span>
              </div>
              <div className="font-heading font-bold text-2xl lg:text-3xl text-[#153F2C]">
                {financialStats.totalBalance}
              </div>
              <div className="text-[11px] text-[#829188] mt-2">
                Available across 3 connected accounts
              </div>
            </div>

            {/* Monthly Income Metric */}
            <div className="bg-white rounded-2xl p-5 border border-[#D7E8DC] shadow-xs hover:border-[#126B46]/40 transition-colors">
              <div className="flex items-center justify-between text-xs text-[#829188] font-medium mb-1">
                <span>Monthly Income</span>
                <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  <TrendingUp className="w-3 h-3" />
                  <span>+8.4%</span>
                </span>
              </div>
              <div className="font-heading font-bold text-2xl lg:text-3xl text-[#153F2C]">
                {financialStats.monthlyIncome}
              </div>
              <div className="text-[11px] text-[#829188] mt-2">
                Stipend, Freelance & Investments
              </div>
            </div>

            {/* Monthly Expenses Metric */}
            <div className="bg-white rounded-2xl p-5 border border-[#D7E8DC] shadow-xs hover:border-[#126B46]/40 transition-colors">
              <div className="flex items-center justify-between text-xs text-[#829188] font-medium mb-1">
                <span>Monthly Expenses</span>
                <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  <TrendingDown className="w-3 h-3" />
                  <span>-12.0%</span>
                </span>
              </div>
              <div className="font-heading font-bold text-2xl lg:text-3xl text-[#153F2C]">
                {financialStats.monthlyExpenses}
              </div>
              <div className="text-[11px] text-[#829188] mt-2">
                $454.50 below budget ceiling
              </div>
            </div>

            {/* Savings Rate Metric */}
            <div className="bg-white rounded-2xl p-5 border border-[#D7E8DC] shadow-xs hover:border-[#126B46]/40 transition-colors">
              <div className="flex items-center justify-between text-xs text-[#829188] font-medium mb-1">
                <span>Net Savings Rate</span>
                <span className="text-xs font-bold text-white bg-[#126B46] px-2 py-0.5 rounded-md">
                  Top 5%
                </span>
              </div>
              <div className="font-heading font-bold text-2xl lg:text-3xl text-[#126B46]">
                {financialStats.savingsRate}
              </div>
              <div className="text-[11px] text-[#829188] mt-2">
                +{financialStats.netSavingsThisMonth} added to reserves
              </div>
            </div>

          </div>

          {/* Middle Row: Monthly Financial Chart & Spending Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
            
            {/* Monthly Financial Chart (8 cols) */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-[#D7E8DC] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#153F2C]">
                      Cash Flow Dynamics
                    </h3>
                    <p className="text-xs text-[#829188]">
                      Income vs. Expenses across {timeRange === '1M' ? 'Weeks' : 'Selected Months'}
                    </p>
                  </div>
                  
                  {/* Legend */}
                  <div className="flex items-center gap-4 text-xs font-medium">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#126B46]" />
                      <span className="text-[#26352D]">Income</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#7BC49C]" />
                      <span className="text-[#26352D]">Expenses</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-[#153F2C]" />
                      <span className="text-[#26352D]">Net Savings</span>
                    </div>
                  </div>
                </div>

                {/* SVG/Bar Visualization */}
                <div className="h-64 sm:h-72 w-full flex items-end justify-between gap-2 sm:gap-4 pt-6 pb-2 border-b border-[#EAF5ED]">
                  {currentChartData.map((d, idx) => {
                    const incomeHeight = `${Math.round((d.income / maxIncome) * 100)}%`;
                    const expenseHeight = `${Math.round((d.expense / maxIncome) * 100)}%`;
                    const savingsHeight = `${Math.round((d.savings / maxIncome) * 100)}%`;

                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center h-full justify-end group/chart relative">
                        {/* Hover Tooltip */}
                        <div className="absolute -top-12 opacity-0 group-hover/chart:opacity-100 transition-opacity bg-[#153F2C] text-white text-[10px] py-1 px-2 rounded-lg pointer-events-none z-20 whitespace-nowrap shadow-md">
                          <div>+{d.income} in / -{d.expense} out</div>
                        </div>

                        {/* Side by side bars */}
                        <div className="w-full flex items-end justify-center gap-1 sm:gap-1.5 h-full">
                          {/* Income Bar */}
                          <div 
                            className="w-1/3 bg-[#126B46] rounded-t-md hover:bg-[#0E5336] transition-all duration-300"
                            style={{ height: incomeHeight }}
                          />
                          {/* Expense Bar */}
                          <div 
                            className="w-1/3 bg-[#7BC49C] rounded-t-md hover:bg-[#5BA87E] transition-all duration-300"
                            style={{ height: expenseHeight }}
                          />
                          {/* Net Savings Bar */}
                          <div 
                            className="w-1/3 bg-[#153F2C] rounded-t-md hover:bg-[#0A2016] transition-all duration-300 hidden sm:block"
                            style={{ height: savingsHeight }}
                          />
                        </div>

                        <span className="text-xs font-semibold text-[#829188] mt-3">{d.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Chart Footer Highlights */}
              <div className="mt-4 pt-3 flex flex-wrap items-center justify-between text-xs text-[#829188] gap-2">
                <span>Peak savings month: <strong>September (+$3,600)</strong></span>
                <span className="text-[#126B46] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Average savings efficiency: 94.2%
                </span>
              </div>
            </div>

            {/* Spending Categories Breakdown (4 cols) */}
            <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-[#D7E8DC] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-lg text-[#153F2C]">
                    Spending Categories
                  </h3>
                  <span className="text-xs font-bold text-[#126B46] bg-[#EAF5ED] px-2 py-0.5 rounded-md">
                    Total $2,845
                  </span>
                </div>

                <div className="space-y-4">
                  {spendingCategories.map((cat, idx) => (
                    <div key={idx} className="group/cat">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-6 h-6 rounded-lg flex items-center justify-center text-white"
                            style={{ backgroundColor: cat.color }}
                          >
                            {getCategoryIcon(cat.icon)}
                          </div>
                          <span className="font-semibold text-[#26352D]">{cat.name}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-[#153F2C]">{cat.amount}</span>
                          <span className="text-[11px] text-[#829188] ml-1.5 font-medium">({cat.percentage}%)</span>
                        </div>
                      </div>

                      {/* Category Progress Bar */}
                      <div className="w-full h-2 bg-[#F0F8F3] rounded-full overflow-hidden border border-[#EAF5ED]">
                        <div 
                          className="h-full rounded-full transition-all duration-500"
                          style={{ 
                            width: `${cat.percentage}%`,
                            backgroundColor: cat.color 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAF5ED] text-center">
                <button
                  onClick={() => onOpenAuth('signup')}
                  type="button"
                  className="text-xs font-bold text-[#126B46] hover:text-[#0E5336] inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Customize Category Limits</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Row: Savings Goal Progress & Recent Transactions */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Savings Goal Progress (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-[#D7E8DC] shadow-xs">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#153F2C]">
                    Savings Goal Progress
                  </h3>
                  <p className="text-xs text-[#829188]">3 Active Goal Vaults</p>
                </div>
                <button
                  onClick={() => onOpenAuth('signup')}
                  type="button"
                  className="w-8 h-8 rounded-xl bg-[#EAF5ED] hover:bg-[#126B46] text-[#126B46] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  title="Create New Goal Vault"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                {savingsGoals.map((goal, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#F0F8F3] border border-[#D7E8DC] hover:border-[#126B46]/30 transition-colors">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#153F2C] mb-1">
                      <span className="flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-[#126B46]" />
                        {goal.title}
                      </span>
                      <span className="font-bold text-[#126B46]">{goal.percentage}%</span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-[#829188] mb-2">
                      <span>{goal.current} of {goal.target}</span>
                      <span>Target: {goal.targetDate}</span>
                    </div>

                    <div className="w-full h-2.5 bg-white rounded-full overflow-hidden p-0.5 border border-[#D7E8DC]">
                      <div 
                        className={`h-full rounded-full transition-all duration-700 ${
                          goal.percentage === 100 
                            ? 'bg-emerald-600' 
                            : 'bg-gradient-to-r from-[#126B46] to-[#34D399]'
                        }`}
                        style={{ width: `${goal.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Fictional Transactions Feed (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-[#D7E8DC] shadow-xs">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#153F2C]">
                    Recent Ledger Activity
                  </h3>
                  <p className="text-xs text-[#829188]">Real-time automatic sync</p>
                </div>
                <span className="text-xs font-semibold text-[#126B46] bg-[#EAF5ED] px-2.5 py-1 rounded-lg border border-[#D7E8DC]">
                  Live Feed
                </span>
              </div>

              <div className="divide-y divide-[#EAF5ED]">
                {recentTransactions.map((tx) => (
                  <div key={tx.id} className="py-3 flex items-center justify-between group hover:bg-[#F0F8F3]/70 px-2 rounded-xl transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#F0F8F3] border border-[#D7E8DC] flex items-center justify-center shrink-0">
                        {getTransactionIcon(tx.icon)}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold text-[#26352D] group-hover:text-[#126B46] transition-colors">
                          {tx.merchant}
                        </div>
                        <div className="text-[11px] text-[#829188] flex items-center gap-2">
                          <span>{tx.category}</span>
                          <span>•</span>
                          <span>{tx.date}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className={`text-xs sm:text-sm font-bold ${
                        tx.type === 'income' ? 'text-emerald-700' : 'text-[#153F2C]'
                      }`}>
                        {tx.amount}
                      </div>
                      <span className="text-[10px] text-emerald-800 font-medium bg-emerald-50 px-1.5 py-0.5 rounded-sm">
                        {tx.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
