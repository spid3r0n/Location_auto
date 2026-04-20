import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import { 
  Mail, Lock, 
  ArrowRight, Eye, EyeOff,
  CarFront, Shield, Zap, CircleDollarSign, LogIn
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Login() {
  const { current } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  const features = [
    { title: 'Instant Access', sub: 'No waiting time', icon: Zap },
    { title: 'Secure Vault', sub: 'Your data is safe', icon: Shield },
    { title: 'Best Deals', sub: 'Exclusive offers', icon: CircleDollarSign },
  ];

  return (
    <main className={`min-h-screen flex flex-col lg:flex-row ${current.bg} ${current.text}`}>
      
      {/* FORM SECTION */}
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

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase">Welcome Back</h1>
          <p className={`${current.subtext} text-sm sm:text-base mb-12`}>Enter your credentials to access your luxury garage.</p>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-1.5">
              <label className="text-[10px] font-black uppercase tracking-widest opacity-60 ml-1">Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:opacity-100 transition-opacity" />
                <input 
                  required
                  type="email" 
                  placeholder="you@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-white/20"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between px-1">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-60">Password</label>
                <button type="button" className="text-[9px] font-bold text-blue-500 uppercase hover:underline">Forgot password?</button>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40 group-focus-within:opacity-100 transition-opacity" />
                <input 
                  required
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••"
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

            <button 
              disabled={isLoading}
              className="w-full py-5 rounded-2xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-black uppercase text-xs tracking-[0.2em] shadow-[0_20px_40px_rgba(37,99,235,0.3)] transition-all flex items-center justify-center gap-3 group relative overflow-hidden"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                   <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                   Processing...
                </div>
              ) : (
                <>
                  Enter Garage <LogIn className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <p className="mt-12 text-center text-sm font-medium opacity-60">
            Don't have an account? <Link to="/register" className="text-blue-500 font-bold hover:underline">Join the Club <ArrowRight className="w-4 h-4 inline ml-1" /></Link>
          </p>
        </motion.div>
      </div>

      {/* INFO SIDEBAR */}
      <div className="hidden lg:flex flex-1 relative bg-[#05070a] border-l border-white/5 p-20 flex-col justify-center items-center text-center overflow-hidden">
        <motion.div 
          animate={{ background: [`radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 70%)`, `radial-gradient(circle at 60% 40%, rgba(37, 99, 235, 0.15) 0%, transparent 70%)`] }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 pointer-events-none" 
        />
        
        <div className="relative z-10 max-w-lg">
           <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-blue-400 to-indigo-600 mx-auto flex items-center justify-center shadow-2xl mb-12">
              <LogIn className="w-10 h-10 text-white" />
           </div>
           <h2 className="text-6xl font-black tracking-tighter mb-6 uppercase leading-none">Access<br />Excellence</h2>
           <p className="text-xl text-white/50 mb-16 leading-relaxed font-light">Sign in to your private dashboard to manage your fleet and exclusive memberships.</p>

           <div className="grid grid-cols-1 gap-4 text-left">
              {features.map((f, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-3xl flex items-center gap-6">
                   <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                      <f.icon className="w-6 h-6 text-blue-500" />
                   </div>
                   <div>
                      <h3 className="text-sm font-black uppercase tracking-tight mb-0.5">{f.title}</h3>
                      <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{f.sub}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </main>
  );
}
