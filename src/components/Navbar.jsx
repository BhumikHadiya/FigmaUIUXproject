import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Menu, 
  X, 
  ArrowRight, 
  ShieldCheck, 
  ChevronRight,
  Wallet
} from 'lucide-react';

export default function Navbar({ onOpenAuth }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#F0F8F3]/90 backdrop-blur-md shadow-sm border-b border-[#D7E8DC]/80 py-3.5' 
          : 'bg-[#F0F8F3]/60 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Finora Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group focus:outline-hidden">
            <div className="w-10 h-10 rounded-xl bg-[#126B46] text-white flex items-center justify-center shadow-md shadow-[#126B46]/20 transition-transform duration-300 group-hover:scale-105">
              <Wallet className="w-5 h-5 text-white stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-2xl tracking-tight text-[#153F2C]">
                  Finora
                </span>
                <span className="w-2 h-2 rounded-full bg-[#126B46] animate-pulse"></span>
              </div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#829188] -mt-1 hidden sm:block">
                Personal Finance
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/70 px-3 py-1.5 rounded-full border border-[#D7E8DC] shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-[#26352D] hover:text-[#126B46] hover:bg-[#EAF5ED] rounded-full transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenAuth('login')}
              type="button"
              className="px-4 py-2 text-sm font-semibold text-[#153F2C] hover:text-[#126B46] transition-colors rounded-xl hover:bg-[#EAF5ED]/60 focus:outline-hidden"
            >
              Log In
            </button>
            <button
              onClick={() => onOpenAuth('signup')}
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#126B46] hover:bg-[#0E5336] text-white text-sm font-semibold rounded-xl shadow-md shadow-[#126B46]/20 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 focus:outline-hidden cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 stroke-[2.2]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => onOpenAuth('signup')}
              type="button"
              className="px-3 py-1.5 bg-[#126B46] text-white text-xs font-semibold rounded-lg shadow-xs"
            >
              Start Free
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-[#26352D] hover:text-[#126B46] bg-white rounded-lg border border-[#D7E8DC] focus:outline-hidden"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#F0F8F3] border-b border-[#D7E8DC] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-[#26352D] hover:text-[#126B46] hover:bg-[#EAF5ED] rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#D7E8DC] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('login');
              }}
              type="button"
              className="w-full py-2.5 text-center text-sm font-semibold text-[#153F2C] bg-white rounded-xl border border-[#D7E8DC]"
            >
              Log In
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('signup');
              }}
              type="button"
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#126B46] rounded-xl shadow-md flex items-center justify-center gap-2"
            >
              <span>Get Started for Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
