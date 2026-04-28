'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  User, Mail, Lock, Phone, ArrowRight, Eye, EyeOff,
  CarFront, Shield, Zap, CircleDollarSign, UserPlus,
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';

export default function Register() {
  const { current } = useTheme();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      login(isAdmin ? 'admin' : 'user');
      router.push(isAdmin ? '/admin' : '/dashboard');
    }, 1500);
  };

  const features = [
    { title: 'Wide Selection', sub: 'Luxury to economy', icon: CarFront },
    { title: 'Best Prices', sub: 'No hidden fees', icon: CircleDollarSign },
    { title: 'Easy Booking', sub: 'Instant confirmation', icon: Zap },
    { title: '24/7 Support', sub: 'Always here to help', icon: Shield },
  ];

  return (
    <main className={`min-h-screen flex flex-col lg:flex-row ${current.bg} ${current.text}`}>
      <div className="w-full lg:w-[45%] p-6 md:p-12 lg:p-20 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-md w-full mx-auto"
        >
          <div className="flex items-center gap-2 mb-10">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <CarFront className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm font-black tracking-tighter uppercase">AutoLoc</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase">Create Account</h1>
          <p className={`${current.subtext} text-sm sm:text-base mb-12`}>
            Fill in your details to get started with the ultimate driving experience.
          </p>

          <form className="space-y-6" onSubmit={handleRegister}>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest opacity-60 ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:opacity-100 transition-opacity" />
                <input
                  required type="text" placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-white/20"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-60 ml-1">Email</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:opacity-100 transition-opacity" />
                  <input
                    required type="email" placeholder="you@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-white/20"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-60 ml-1">Phone</label>
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:opacity-100 transition-opacity" />
                  <input
                    required type="tel" placeholder="+1 (234) 567"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-white/20"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest opacity-60 ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:opacity-100 transition-opacity" />
                <input
                  required type={showPassword ? 'text' : 'password'} placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-white/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-100 transition-opacity"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 py-2">
              <input required type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5" />
              <p className="text-[11px] font-medium opacity-60">
                I agree to the{' '}
                <span className="text-blue-500 underline cursor-pointer">Terms of Service</span>
                {' '}and{' '}
                <span className="text-blue-500 underline cursor-pointer">Privacy Policy</span>.
              </p>
            </div>

            <div className="flex items-center gap-3 py-2">
              <input
                type="checkbox"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
                className="w-4 h-4 rounded border-white/10 bg-white/5"
              />
              <p className="text-[11px] font-medium opacity-60 text-blue-400">Register as Admin (Demo)</p>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-black uppercase text-xs tracking-[0.2em] shadow-[0_20px_40px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing up...
                </div>
              ) : (
                <>Create Account <UserPlus className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
              )}
            </button>
          </form>

          <div className="mt-12 flex items-center gap-4">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">OR</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <p className="mt-12 text-center text-sm font-medium opacity-60">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-500 font-bold hover:underline">
              Sign In <ArrowRight className="w-4 h-4 inline ml-1" />
            </Link>
          </p>
        </motion.div>
      </div>

      <div className="hidden lg:flex flex-1 relative bg-[#05070a] border-l border-white/5 p-20 flex-col justify-center items-center text-center overflow-hidden">
        <motion.div
          animate={{ background: ['radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 70%)', 'radial-gradient(circle at 60% 40%, rgba(37, 99, 235, 0.15) 0%, transparent 70%)'] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0 pointer-events-none"
        />
        <div className="relative z-10 max-w-lg">
          <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-blue-400 to-indigo-600 mx-auto flex items-center justify-center shadow-2xl mb-12">
            <UserPlus className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-6xl font-black tracking-tighter mb-6 uppercase">Join AutoLoc</h2>
          <p className="text-xl text-white/50 mb-16 leading-relaxed">
            Create your account today and unlock access to our premium fleet. Your next adventure starts here.
          </p>
          <div className="grid grid-cols-2 gap-6 text-left">
            {features.map((feature) => (
              <div key={feature.title} className="p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-3xl">
                <feature.icon className="w-6 h-6 text-blue-500 mb-4" />
                <h3 className="text-sm font-black uppercase tracking-tight mb-1">{feature.title}</h3>
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{feature.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
