import React, { useState, useEffect } from 'react';
import { X, Wallet, ShieldCheck, ArrowRight, CheckCircle2, Lock, Mail, User, Sparkles } from 'lucide-react';

export default function AuthModal({ isOpen, initialMode = 'signup', onClose }) {
  const [mode, setMode] = useState(initialMode);
  const [userType, setUserType] = useState('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMode(initialMode);
    setSubmitted(false);
  }, [initialMode, isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto-close demo feedback after 2.5 seconds
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 1500);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#D7E8DC] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-full text-[#829188] hover:text-[#26352D] hover:bg-[#EAF5ED] transition-colors focus:outline-hidden"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Brand Logo */}
        <div className="flex items-center gap-2.5 mb-6">
          <div className="w-9 h-9 rounded-xl bg-[#126B46] text-white flex items-center justify-center shadow-xs">
            <Wallet className="w-4 h-4 stroke-[2.2]" />
          </div>
          <span className="font-heading font-bold text-xl text-[#153F2C]">Finora</span>
        </div>

        {submitted ? (
          /* Demo Success State */
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#EAF5ED] text-[#126B46] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-[#153F2C]">
              {mode === 'signup' ? 'Welcome to Finora!' : 'Welcome Back!'}
            </h3>
            <p className="text-sm text-[#829188]">
              {mode === 'signup' 
                ? 'Your student/personal account demo has been initialized.' 
                : 'Signing you into your personal financial workspace...'}
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#126B46] bg-[#EAF5ED] px-3 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Demo Mode Activated</span>
            </div>
          </div>
        ) : (
          /* Normal Auth Form */
          <div>
            {/* Mode Tabs */}
            <div className="flex bg-[#F0F8F3] p-1 rounded-2xl border border-[#D7E8DC] mb-6">
              <button
                type="button"
                onClick={() => setMode('signup')}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  mode === 'signup'
                    ? 'bg-[#126B46] text-white shadow-xs'
                    : 'text-[#829188] hover:text-[#26352D]'
                }`}
              >
                Create Free Account
              </button>
              <button
                type="button"
                onClick={() => setMode('login')}
                className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  mode === 'login'
                    ? 'bg-[#126B46] text-white shadow-xs'
                    : 'text-[#829188] hover:text-[#26352D]'
                }`}
              >
                Log In
              </button>
            </div>

            {/* Title & Subtitle */}
            <h3 className="font-heading font-bold text-2xl text-[#153F2C] mb-1.5">
              {mode === 'signup' ? 'Get Started with Finora' : 'Log In to Your Account'}
            </h3>
            <p className="text-xs text-[#829188] mb-6">
              {mode === 'signup'
                ? 'Join 50,000+ smart students and young pros managing money effortlessly.'
                : 'Enter your credentials to access your personal dashboard.'}
            </p>

            {/* Persona Switcher for Signup */}
            {mode === 'signup' && (
              <div className="grid grid-cols-2 gap-2 mb-5">
                <button
                  type="button"
                  onClick={() => setUserType('student')}
                  className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                    userType === 'student'
                      ? 'border-[#126B46] bg-[#EAF5ED] text-[#126B46]'
                      : 'border-[#D7E8DC] text-[#829188] hover:border-gray-300'
                  }`}
                >
                  <div className="font-bold">🎓 College Student</div>
                  <div className="text-[10px] opacity-80 mt-0.5">Free forever with .edu</div>
                </button>
                <button
                  type="button"
                  onClick={() => setUserType('pro')}
                  className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition-all cursor-pointer ${
                    userType === 'pro'
                      ? 'border-[#126B46] bg-[#EAF5ED] text-[#126B46]'
                      : 'border-[#D7E8DC] text-[#829188] hover:border-gray-300'
                  }`}
                >
                  <div className="font-bold">💼 Young Professional</div>
                  <div className="text-[10px] opacity-80 mt-0.5">Automated cash flow</div>
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <div>
                  <label className="block text-xs font-bold text-[#153F2C] mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#829188] absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Alex Chen"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-[#F0F8F3] border border-[#D7E8DC] rounded-xl text-sm text-[#26352D] focus:outline-hidden focus:border-[#126B46]"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#153F2C] mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#829188] absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder={userType === 'student' ? 'alex@berkeley.edu' : 'alex@company.com'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-[#F0F8F3] border border-[#D7E8DC] rounded-xl text-sm text-[#26352D] focus:outline-hidden focus:border-[#126B46]"
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-bold text-[#153F2C]">
                    Password
                  </label>
                  {mode === 'login' && (
                    <a href="#about" className="text-[11px] text-[#126B46] hover:underline font-semibold">
                      Forgot?
                    </a>
                  )}
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-[#829188] absolute left-3.5 top-3.5" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-[#F0F8F3] border border-[#D7E8DC] rounded-xl text-sm text-[#26352D] focus:outline-hidden focus:border-[#126B46]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#126B46] hover:bg-[#0E5336] text-white font-semibold text-sm rounded-xl shadow-md shadow-[#126B46]/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>{mode === 'signup' ? 'Create Account' : 'Sign In'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-5 pt-4 border-t border-[#D7E8DC] flex items-center justify-center gap-2 text-xs text-[#829188]">
              <ShieldCheck className="w-4 h-4 text-[#126B46]" />
              <span>256-bit bank-grade encryption guarantee</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
