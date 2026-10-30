import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../data/financeData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5ED] border border-[#D7E8DC] text-[#126B46] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-[#153F2C] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#829188]">
            Everything you need to know about Finora, student verification, and bank-grade data security.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#D7E8DC] bg-[#F0F8F3] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  type="button"
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-hidden cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-bold text-base sm:text-lg text-[#153F2C]">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#D7E8DC] transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#126B46] text-white border-transparent' : 'text-[#829188]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-[#829188] leading-relaxed border-t border-[#D7E8DC]/60 pt-4 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#EAF5ED] border border-[#D7E8DC] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="font-heading font-bold text-base text-[#153F2C]">Still have questions?</div>
            <div className="text-xs text-[#829188]">Our human support team responds in under 15 minutes.</div>
          </div>
          <a
            href="mailto:support@finora.io"
            className="px-5 py-2.5 bg-white hover:bg-[#F0F8F3] text-[#126B46] border border-[#D7E8DC] font-semibold text-xs sm:text-sm rounded-xl transition-colors shrink-0 shadow-xs"
          >
            Contact Finora Support
          </a>
        </div>

      </div>
    </section>
  );
}
