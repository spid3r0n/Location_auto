import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car, User, LogIn } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/#cars', label: 'Cars' },
    { to: '/#benefits', label: 'Why Us' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 glass shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline group" id="nav-logo">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-500 to-indigo-500 flex items-center justify-center shadow-glow transition-transform duration-300 group-hover:scale-110">
            <Car className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold font-[var(--font-heading)] text-white tracking-tight">
            Drive<span className="text-gradient">Fleet</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium no-underline transition-all duration-200 ${
                isActive(link.to)
                  ? 'text-electric-400 bg-electric-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            id="nav-login"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white no-underline transition-colors duration-200"
          >
            <LogIn className="w-4 h-4" />
            Login
          </Link>
          <Link
            to="/register"
            id="nav-register"
            className="btn-primary !py-2 !px-5 !text-sm !rounded-lg"
          >
            <span>Sign Up</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors border-none bg-transparent cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-4 glass-light mt-2 mx-4 rounded-2xl border border-white/5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`block px-4 py-3 rounded-xl text-sm font-medium no-underline transition-all duration-200 ${
                isActive(link.to)
                  ? 'text-electric-400 bg-electric-500/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-white/10 my-2" />
          <div className="flex gap-2 mt-2">
            <Link
              to="/login"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium text-slate-300 border border-white/10 no-underline hover:bg-white/5 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Link>
            <Link
              to="/register"
              className="flex-1 btn-primary !py-2.5 !text-sm !rounded-xl"
            >
              <span>Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
