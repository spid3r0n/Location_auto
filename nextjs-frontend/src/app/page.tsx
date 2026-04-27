'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, ChevronRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import CarCard from '@/components/ui/CarCard';
import { Car } from '@/types';

const featuredCars: Car[] = [
  { id: '1', name: 'BMW 5 Series', type: 'Sedan', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', pricePerDay: 89, seats: 5, fuel: 'Petrol', power: '248 HP', transmission: 'Auto' },
  { id: '2', name: 'Mercedes GLE', type: 'SUV', image: 'https://images.unsplash.com/photo-1606611013016-969c19ba27d5?w=800&q=80', pricePerDay: 120, seats: 7, fuel: 'Diesel', power: '362 HP', transmission: 'Auto' },
  { id: '3', name: 'Porsche 911', type: 'Sport', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', pricePerDay: 220, seats: 2, fuel: 'Petrol', power: '443 HP', transmission: 'Manual' },
];

const marqueeImages = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800",
];

export default function Landing() {
  const { current, theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${current.bg} ${current.text} overflow-hidden font-sans relative`}>
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <section className="relative min-h-screen grid grid-cols-12 pt-20">
        <div className="col-span-12 lg:col-span-7 flex flex-col justify-center px-8 md:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-blue-500/30 text-[9px] font-bold tracking-[0.4em] uppercase mb-10 bg-blue-500/5 w-fit backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> Experience the future
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[40px] sm:text-[60px] md:text-[110px] font-black tracking-tighter leading-[0.82] mb-12 uppercase"
          >
            BEYOND <br />
            <span className={`bg-clip-text text-transparent bg-gradient-to-r ${current.accent}`}>
              DRIVING.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`${current.subtext} text-xl md:text-2xl max-w-lg mb-16 font-light leading-relaxed`}
          >
            Automotive excellence redefined. Access the world&apos;s most exclusive fleet with a single touch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-10"
          >
            <Link href="/register" className={`px-12 py-6 rounded-full font-black uppercase text-[10px] tracking-[0.2em] transition-all hover:scale-105 ${current.glow} ${current.btn}`}>
              Start Engine
            </Link>
            <button className="flex items-center gap-4 font-bold text-[10px] uppercase tracking-widest hover:opacity-50 transition-all group">
              <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <Play className="w-4 h-4 fill-current ml-1" />
              </span>
              Watch Film
            </button>
          </motion.div>
        </div>

        <div className="hidden lg:flex col-span-5 bg-white/3 border-l border-white/5 flex-col items-center justify-center p-16 relative">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full"
          >
            <CarCard car={featuredCars[featuredCars.length - 1]} theme={current} />
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-28 bg-black/20 backdrop-blur-xl flex items-center border-t border-white/5 z-20 overflow-hidden transform translate-y-16">
          <div className="flex whitespace-nowrap items-center w-full">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="flex gap-4 px-4"
            >
              {[...marqueeImages, ...marqueeImages, ...marqueeImages].map((img, i) => (
                <div key={i} className="relative group w-48 h-20 rounded-2xl overflow-hidden border border-white/5 shrink-0 transition-transform hover:scale-105 active:scale-95 cursor-crosshair">
                  <img
                    src={img}
                    alt="Marquee Vehicle"
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end">
                    <span className="text-[7px] font-black uppercase tracking-[0.3em] text-white">Hyper Series</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-32 left-10 hidden md:flex flex-col items-center gap-8 z-20">
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
          <p className="[writing-mode:vertical-rl] text-[10px] font-bold uppercase tracking-[0.3em] opacity-20 transform rotate-180">Discovery Circle</p>
        </div>
      </section>

      <section id="fleet" className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-6"
              >
                Curated Selection
              </motion.div>
              <h2 className="text-6xl md:text-7xl font-black tracking-tighter mb-8 uppercase leading-none">The Masterpiece<br />Collection</h2>
              <p className={`${current.subtext} text-xl leading-relaxed`}>Découvrez notre flotte exclusive, où chaque véhicule est une invitation à l&apos;exceptionnel.</p>
            </div>
            <Link href="/fleet" className="px-10 py-5 rounded-full border border-current/20 font-bold text-xs uppercase tracking-widest group hover:bg-current hover:text-black transition-all">
              View All Fleet <ChevronRight className="w-4 h-4 inline ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} theme={current} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-6">
        <motion.div
          whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
          viewport={{ once: true }}
          className={`max-w-6xl mx-auto relative rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden p-10 md:p-32 text-center border ${current.card}`}
        >
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: '120%', opacity: [0, 0.15, 0.15, 0] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute top-1/2 -translate-y-1/2 w-[800px] pointer-events-none mix-blend-overlay z-0"
          >
            <img
              src="https://images.unsplash.com/photo-1614162692292-7acdb14a4411?auto=format&fit=crop&q=80&w=1200"
              alt="Elite Vehicle"
              className="w-full h-auto grayscale filter brightness-200"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className={`absolute inset-0 opacity-15 bg-gradient-to-br ${current.accent} blur-3xl`} />
          <div className="relative z-10">
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter mb-12 uppercase leading-none">Your journey<br />awaits.</h2>
            <p className={`${current.subtext} text-xl md:text-2xl max-w-2xl mx-auto mb-16 font-medium italic`}>
              &quot;The most exclusive keys are reserved for our members. Sign in now to unlock private rates and elite hangar access.&quot;
            </p>
            <Link href="/login" className={`inline-block px-20 py-7 text-white font-black uppercase text-xs tracking-[0.3em] rounded-full ${current.glow} hover:scale-110 transition-all ${theme === 'cyber' ? 'bg-fuchsia-600' : 'bg-blue-600'}`}>
              Connect to Collection
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
