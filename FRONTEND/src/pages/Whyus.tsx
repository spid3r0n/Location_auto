import React from 'react';
import { motion } from "framer-motion";
import { Shield, Zap, Star, Globe, Clock, Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const strengths = [
  {
    icon: Shield,
    title: "Absolute Security",
    desc: "Every vehicle in our fleet is maintained to aerospace standards. Your safety is our primary engineering requirement."
  },
  {
    icon: Zap,
    title: "Instant Access",
    desc: "Our booking system uses real-time telemetry to ensure your vehicle is ready the second you arrive."
  },
  {
    icon: Star,
    title: "Elite Hangar",
    desc: "We own one of the world's most curated automotive collections, ranging from vintage classics to hyper-prototypes."
  },
  {
    icon: Globe,
    title: "Global Network",
    desc: "Access your membership benefits across 40 major cities worldwide with seamless cross-border service."
  },
  {
    icon: Clock,
    title: "24/7 Concierge",
    desc: "A dedicated lifestyle manager is assigned to every member, ensuring no request is too small."
  },
  {
    icon: Heart,
    title: "Passion Driven",
    desc: "We are more than a rental service. We are a community of enthusiasts dedicated to the art of the drive."
  }
];

export default function WhyUs() {
  const { current } = useTheme();

  return (
    <main className={`min-h-screen ${current.bg} ${current.text} pt-40 pb-32 px-6`}>
      <div className="max-w-7xl mx-auto">
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-blue-500 font-black text-xs uppercase tracking-[0.4em] mb-8">
              The AutoLoc Philosophy
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-12">
              EXCELLENCE<br />
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${current.accent}`}>IS STANDARD.</span>
            </h1>
            <p className={`${current.subtext} text-xl md:text-2xl leading-relaxed max-w-xl font-light italic`}>
              "We don't just provide cars; we provide the moments between where you are and where you want to be."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/5"
          >
            <img 
              src="https://images.unsplash.com/photo-1614162692292-7acdb14a4411?auto=format&fit=crop&q=80&w=1200" 
              alt="Luxury Car Interior" 
              className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full border border-white/20 backdrop-blur-3xl flex items-center justify-center">
                 <Shield className="w-12 h-12 text-blue-500" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* STRENGTHS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strengths.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-[2.5rem] border ${current.card} hover:border-blue-500/30 transition-all duration-500 group`}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/5 group-hover:bg-blue-600 transition-colors">
                <s.icon className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{s.title}</h3>
              <p className={`${current.subtext} font-medium leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity`}>
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* QUOTE SECTION */}
        <div className="mt-40 text-center max-w-4xl mx-auto">
           <div className="w-1 h-24 bg-gradient-to-b from-blue-600 to-transparent mx-auto mb-12" />
           <h2 className="text-4xl md:text-6xl font-serif italic font-light leading-snug mb-12">
             "To drive an AutoLoc vehicle is to understand that the destination is merely a formality of the journey."
           </h2>
           <div className="flex items-center justify-center gap-6">
              <div className="h-[1px] w-12 bg-white/20" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">The Crafting Team</span>
              <div className="h-[1px] w-12 bg-white/20" />
           </div>
        </div>
      </div>
    </main>
  );
}
