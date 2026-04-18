import { useState, useEffect } from 'react'; // Ajout de useState et useEffect qui manquaient
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car, LogIn, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/cars', label: 'Cars' },
    { to: '/whyus', label: 'Why Us' },
    { to: '/dashboard', label: 'Dashboard' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3 bg-[#050a18]/80 backdrop-blur-lg border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo avec animation de survol */}
        <Link to="/" className="flex items-center gap-3 group no-underline">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
            <Car className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black text-white tracking-tighter italic uppercase">
            Auto<span className="text-blue-500 not-italic">Loc</span>
          </span>
        </Link>

        {/* Desktop Navigation - Style Pilule Moderne */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-5 py-2 rounded-xl text-sm font-semibold no-underline transition-all duration-300 ${
                isActive(link.to)
                  ? 'text-white bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/login"
            className="flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-blue-400 no-underline transition-colors duration-300"
          >
            <LogIn className="w-4 h-4" />
            Login
          </Link>
          
          <Link
            to="/register"
            className="relative group overflow-hidden bg-blue-600 text-white px-8 py-2.5 rounded-xl font-bold text-sm no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] active:scale-95"
          >
            {/* Effet de brillance (Shine) */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_1s_ease-in-out]" />
            <span className="relative flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Sign Up
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-xl bg-white/5 text-white border-none cursor-pointer"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile avec animation d'entrée */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 ease-in-out ${
          mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="mx-4 mt-2 p-4 bg-[#050a18]/95 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-4 rounded-2xl text-lg font-bold no-underline mb-1 ${
                isActive(link.to) ? 'text-blue-400 bg-blue-500/10' : 'text-slate-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <Link to="/login" className="py-4 text-center rounded-2xl bg-white/5 text-white font-bold no-underline">Login</Link>
            <Link to="/register" className="py-4 text-center rounded-2xl bg-blue-600 text-white font-bold no-underline">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}