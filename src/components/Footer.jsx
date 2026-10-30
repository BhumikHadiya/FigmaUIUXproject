import React, { useState } from 'react';
import { 
  Wallet, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Heart,
  Globe
} from 'lucide-react';

export default function Footer({ onOpenAuth }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#153F2C] text-white pt-20 pb-12 border-t border-[#1C5039]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#126B46] text-white flex items-center justify-center shadow-md shadow-black/20">
                <Wallet className="w-5 h-5 text-white stroke-[2.2]" />
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight text-white">
                Finora
              </span>
            </a>

            <p className="font-sans text-sm text-emerald-100/75 leading-relaxed max-w-sm">
              Finora is the modern personal finance platform built for college students and young professionals to track expenses, automate budgets, and build long-term wealth habits.
            </p>

            {/* Social Icons - Clean inline SVGs for high reliability */}
            <div className="flex items-center gap-3 pt-2">
              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (formerly Twitter)"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#126B46] text-emerald-200 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#126B46] text-emerald-200 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.4 9.74v-8.37H5.06v8.37z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#126B46] text-emerald-200 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10"
              >
                <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#126B46] text-emerald-200 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10"
              >
                <svg className="w-4 h-4 fill-none stroke-currentColor stroke-width-2 stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-emerald-300">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/70">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Expense Tracking
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Smart Budgeting
                </a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-white transition-colors">
                  Dashboard Analytics
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Savings Simulator
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 text-emerald-300 font-medium">
                  <span>Student Perks</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-sm">0% Fees</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Company Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-emerald-300">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-emerald-100/70">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Careers <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-sm">We're hiring</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Press & Media
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Student Campus Reps
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Security Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-heading font-bold text-sm tracking-wider uppercase text-emerald-300">
              Stay in the Know
            </h4>
            <p className="text-xs text-emerald-100/75 leading-relaxed">
              Join 35,000+ students and young professionals getting weekly bite-sized money tips and wealth blueprints.
            </p>

            {/* Newsletter Form */}
            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center gap-2 text-xs text-emerald-200">
                <Check className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>You're subscribed! Welcome to the Finora community.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-emerald-200/50 text-xs focus:outline-hidden focus:border-emerald-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-[#126B46] hover:bg-[#0E5336] text-white text-xs font-semibold rounded-xl transition-colors shrink-0 shadow-xs cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}

            {/* Contact details */}
            <div className="pt-2 space-y-2 text-xs text-emerald-100/70">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>hello@finora.io</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>San Francisco, California • Global Remote</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/60">
          <div>
            © {new Date().getFullYear()} Finora Technologies Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#about" className="hover:text-emerald-200 transition-colors">Privacy Policy</a>
            <a href="#about" className="hover:text-emerald-200 transition-colors">Terms of Service</a>
            <a href="#faq" className="hover:text-emerald-200 transition-colors">Security Disclosure</a>
            <a href="#about" className="hover:text-emerald-200 transition-colors">Cookie Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
