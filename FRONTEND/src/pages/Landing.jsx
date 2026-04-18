import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Sparkles, Play, Palette, Zap, 
  ChevronRight, Search, CalendarCheck, CarFront 
} from 'lucide-react';
import CarCard from '../components/CarCard';

// --- CONFIGURATION DES DONNÉES ---
const featuredCars = [
  { name: 'BMW 5 Series', type: 'Sedan', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop', pricePerDay: 89, seats: 5, fuel: 'Petrol', power: '248 HP' },
  { name: 'Mercedes GLE', type: 'SUV', image: 'https://images.unsplash.com/photo-1606611013016-969c19ba27d5?w=600&h=400&fit=crop', pricePerDay: 120, seats: 7, fuel: 'Diesel', power: '362 HP' },
  { name: 'Porsche 911', type: 'Sport', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop', pricePerDay: 220, seats: 2, fuel: 'Petrol', power: '443 HP' },
];

const marqueeImages = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800",
];

// --- THÈMES ---
const themes = {
  luxury: {
    name: "Midnight Luxury",
    bg: "bg-[#02040a]",
    accent: "from-blue-400 via-indigo-400 to-purple-500",
    btn: "bg-blue-600 hover:bg-blue-500",
    mesh: "bg-blue-600/20",
    text: "text-white",
    card: "bg-white/5 border-white/10",
    subtext: "text-gray-400",
    glow: "shadow-[0_0_30px_rgba(37,99,235,0.3)]"
  },
  solar: {
    name: "Solar Gold",
    bg: "bg-slate-50",
    accent: "from-orange-500 via-amber-500 to-yellow-600",
    btn: "bg-orange-600 hover:bg-orange-500",
    mesh: "bg-orange-200/60",
    text: "text-slate-900",
    card: "bg-white border-slate-200 shadow-xl",
    subtext: "text-slate-600",
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.3)]"
  },
  cyber: {
    name: "Cyber Neon",
    bg: "bg-black",
    accent: "from-fuchsia-500 via-purple-500 to-cyan-500",
    btn: "bg-fuchsia-600 hover:bg-fuchsia-500",
    mesh: "bg-fuchsia-600/30",
    text: "text-white",
    card: "bg-zinc-900 border-fuchsia-500/30",
    subtext: "text-zinc-400",
    glow: "shadow-[0_0_30px_rgba(192,38,211,0.4)]"
  }
};

export default function Landing() {
  const [theme, setTheme] = useState('luxury');
  const current = themes[theme];

  const cycleTheme = () => {
    const keys = Object.keys(themes);
    const nextIndex = (keys.indexOf(theme) + 1) % keys.length;
    setTheme(keys[nextIndex]);
  };

  return (
    <main className={`${current.bg} ${current.text} transition-colors duration-1000 min-h-screen font-sans overflow-x-hidden`}>
      
      {/* BOUTON CHANGER DE STYLE (FLOATING DESIGN) */}
      <div className="fixed top-8 right-8 z-[100]">
        <motion.button 
          onClick={cycleTheme}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          className={`relative p-4 rounded-2xl backdrop-blur-2xl border border-white/20 ${current.glow} transition-all duration-500 bg-white/5 group`}
        >
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${current.accent} opacity-20 group-hover:opacity-40 transition-opacity`} />
          <Palette className="w-6 h-6 relative z-10" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg bg-white text-black text-[10px] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Mood: {current.name}
          </span>
        </motion.button>
      </div>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20">
        <motion.div animate={{ background: current.mesh }} className="absolute top-0 left-0 w-full h-full blur-[150px] opacity-50 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-current/30 text-[10px] font-bold tracking-[0.4em] uppercase mb-8"
          >
            <Zap className="w-3 h-3 fill-current" /> Experience the future
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-6xl md:text-[10rem] font-black tracking-tighter leading-[0.85] mb-8"
          >
            BEYOND <br />
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${current.accent}`}>
              DRIVING.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.4 }}
            className={`${current.subtext} text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light`}
          >
            L'excellence automobile redéfinie. Louez les véhicules les plus exclusifs en un clic.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
          >
            <Link to="/register" className={`px-12 py-5 ${theme === 'solar' ? 'bg-black text-white' : 'bg-white text-black'} font-black uppercase text-xs tracking-[0.2em] rounded-full hover:scale-105 transition-all ${current.glow}`}>
              Start Engine
            </Link>
            <button className="flex items-center gap-3 font-bold text-xs uppercase tracking-widest hover:opacity-50 transition-opacity">
              <Play className="w-4 h-4 fill-current" /> Watch Film
            </button>
          </motion.div>
        </div>

        {/* INFINITE MARQUEE SLIDER (L'image du milieu transformée) */}
        <div className="relative w-full overflow-hidden py-10">
          <motion.div 
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          >
            {[...marqueeImages, ...marqueeImages].map((img, i) => (
              <div key={i} className="flex-shrink-0 w-[350px] h-[220px] md:w-[500px] md:h-[300px] relative group overflow-hidden rounded-[2.5rem]">
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60`} />
                <img 
                  src={img} 
                  alt="Car" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
                />
              </div>
            ))}
          </motion.div>
          
          {/* Fade Gradients sur les côtés pour le style */}
          <div className={`absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-${theme === 'solar' ? 'slate-50' : '[#02040a]'} to-transparent z-20 pointer-events-none`} />
          <div className={`absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-${theme === 'solar' ? 'slate-50' : '[#02040a]'} to-transparent z-20 pointer-events-none`} />
        </div>
      </section>

      {/* FLEET SECTION */}
      <section id="cars" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-black tracking-tighter mb-4 uppercase">The Collection</h2>
              <p className={current.subtext}>Performance, luxe et prestige à votre disposition.</p>
            </div>
            <Link to="/fleet" className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest group">
              View All Fleet <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredCars.map((car, idx) => (
              <motion.div 
                key={car.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-[2.5rem] p-2 border ${current.card} hover:scale-[1.02] transition-all duration-500`}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-40 px-4">
        <motion.div 
          whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
          className={`max-w-6xl mx-auto relative rounded-[4rem] overflow-hidden p-16 md:p-32 text-center border ${current.card}`}
        >
          <div className={`absolute inset-0 opacity-10 bg-gradient-to-tr ${current.accent}`} />
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-10">TIME TO DRIVE?</h2>
            <Link to="/register" className={`inline-block px-16 py-6 ${current.btn} text-white font-black uppercase text-xs tracking-[0.3em] rounded-full ${current.glow} hover:scale-105 transition-transform`}>
              Book Now
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}