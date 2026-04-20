import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LogIn, UserPlus, CarFront, Palette, Menu, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar() {
  const { current, cycleTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Cars', path: '/fleet' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Admin', path: '/admin' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group relative z-[60]">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform">
            <CarFront className="w-6 h-6 text-white" />
          </div>
          <span className={`text-xl font-black tracking-tighter uppercase ${current.text}`}>
            Auto-Loc
          </span>
        </Link>

        {/* DESKTOP NAV ITEMS */}
        <ul className="hidden lg:flex items-center gap-12">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all opacity-60 hover:opacity-100 ${current.text}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* ACTIONS */}
        <div className="flex items-center gap-4 relative z-[60]">
          <Link to="/login" className={`hidden sm:flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest hover:opacity-70 ${current.text}`}>
            <LogIn className="w-4 h-4" /> Login
          </Link>
          <Link to="/register" className={`hidden md:flex px-6 py-3 rounded-full bg-white text-black text-[11px] font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-transform`}>
            Join Club
          </Link>
          
          <button 
            onClick={cycleTheme}
            className={`p-3 rounded-full border border-white/10 ${current.navBg} backdrop-blur-2xl hover:scale-110 transition-transform ${current.text}`}
          >
            <Palette className="w-4 h-4" />
          </button>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-3 rounded-full border border-white/10 ${current.navBg} backdrop-blur-2xl ${current.text}`}
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className={`fixed inset-0 z-50 ${current.bg} flex flex-col p-10 lg:hidden`}
          >
            <div className="mt-24 space-y-8">
               {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-4xl font-black uppercase tracking-tighter hover:text-blue-500 transition-colors ${current.text}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto space-y-4">
              <Link 
                to="/login" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-center gap-2 w-full py-5 rounded-2xl border border-white/10 font-bold uppercase text-[11px] tracking-widest ${current.text}`}
              >
                <LogIn className="w-4 h-4" /> Login
              </Link>
              <Link 
                to="/register" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-5 rounded-2xl bg-white text-black font-black uppercase text-[11px] tracking-widest"
              >
                <UserPlus className="w-4 h-4" /> Join Club
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
