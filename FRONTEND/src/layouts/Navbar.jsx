import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Car, LogIn, Sparkles, Zap } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fermer le menu mobile lors du changement de page
  useEffect(() => setMobileOpen(false), [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/cars', label: 'Cars' },
    { to: '/whyus', label: 'Why Us' },
    { to: '/dashboard', label: 'Dashboard' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className={`relative flex items-center justify-between px-6 py-3 rounded-[2rem] transition-all duration-700 border ${
            scrolled 
            ? 'bg-black/60 backdrop-blur-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]' 
            : 'bg-transparent border-transparent'
          }`}
        >
          {/* LOGO FUTURISTE */}
          <Link to="/" className="flex items-center gap-3 group no-underline">
            <motion.div 
              whileHover={{ rotate: 180, scale: 1.1 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)]"
            >
              <Car className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-black text-white tracking-tighter uppercase italic">
              Auto<span className="text-blue-500 not-italic">Loc</span>
            </span>
          </Link>

          {/* DESKTOP NAV (STYLE PILULE) */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative px-6 py-2 no-underline"
              >
                {isActive(link.to) && (
                  <motion.div 
                    layoutId="nav-active"
                    className="absolute inset-0 bg-blue-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 text-xs font-black uppercase tracking-widest transition-colors duration-300 ${
                  isActive(link.to) ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* AUTH BUTTONS */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/login"
              className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-blue-400 transition-all no-underline"
            >
              <LogIn className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Login
            </Link>
            
            <Link
              to="/register"
              className="relative px-8 py-3 rounded-full bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] no-underline overflow-hidden group transition-transform hover:scale-105 active:scale-95 shadow-xl"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <span className="relative z-10 group-hover:text-white transition-colors flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-blue-500 group-hover:text-white" />
                Join Club
              </span>
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white border-none cursor-pointer"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU ANIMÉ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full left-0 w-full px-6 pt-2 md:hidden"
          >
            <div className="bg-[#050a18]/95 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-8 shadow-2xl">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.to}
                  >
                    <Link
                      to={link.to}
                      className={`block text-3xl font-black uppercase tracking-tighter no-underline ${
                        isActive(link.to) ? 'text-blue-500' : 'text-white/40 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <div className="h-[1px] bg-white/10 my-8" />
              
              <div className="grid grid-cols-2 gap-4">
                <Link to="/login" className="py-4 text-center rounded-2xl bg-white/5 text-white font-black uppercase text-[10px] tracking-widest no-underline border border-white/10">
                  Login
                </Link>
                <Link to="/register" className="py-4 text-center rounded-2xl bg-blue-600 text-white font-black uppercase text-[10px] tracking-widest no-underline shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  Register
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}