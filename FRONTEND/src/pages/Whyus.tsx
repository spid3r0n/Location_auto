import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, CircleDollarSign, Clock, CarFront, 
  ArrowRight, MousePointerClick, CalendarCheck, Key 
} from "lucide-react";

const Whyus = () => {
  const features = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Premium Insurance",
      description: "Drive with absolute peace of mind with our fully comprehensive elite coverage.",
      color: "from-blue-600 to-cyan-400"
    },
    {
      icon: <CircleDollarSign size={32} />,
      title: "Best Price",
      description: "No hidden fees. We guarantee the most competitive luxury rates on the market.",
      color: "from-indigo-600 to-blue-400"
    },
    {
      icon: <Clock size={32} />,
      title: "Quick Booking",
      description: "Secure your dream vehicle in less than 120 seconds with our instant tech.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <CarFront size={32} />,
      title: "Wide Selection",
      description: "From exclusive city cars to the rarest hypercars in the world.",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const steps = [
    { icon: <MousePointerClick />, title: "Select", desc: "Choose your vibe from 500+ elite models." },
    { icon: <CalendarCheck />, title: "Reserve", desc: "Set your dates and confirm with one tap." },
    { icon: <Key />, title: "Drive", desc: "Grab the keys and hit the road instantly." }
  ];

  return (
    <section id="why-us" className="relative py-32 px-6 bg-[#020617] overflow-hidden font-sans">
      
      {/* BACKGROUND AMBIANCE */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            <span className="text-blue-400 font-black tracking-[0.3em] uppercase text-[10px]">AutoLoc Excellence</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter"
          >
            WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500">CHOOSE US?</span>
          </motion.h2>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {features.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-500"
            >
              <div className={`mb-8 p-5 w-fit rounded-[2rem] bg-gradient-to-br ${item.color} text-white shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[10deg]`}>
                {item.icon}
              </div>

              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors">{item.description}</p>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 text-blue-400 font-black text-[10px] uppercase tracking-widest cursor-pointer group-hover:text-blue-300"
              >
                Discover More <ArrowRight size={14} className="transition-transform" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* --- HOW IT WORKS (THE STEPS) --- */}
        <div className="relative pt-20 border-t border-white/5">
          <div className="text-center mb-24">
            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">How to get <span className="text-blue-500">Started</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Connection Line (Desktop) */}
            <div className="hidden md:block absolute top-[45px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-[#0a1025] border-2 border-blue-500/20 flex items-center justify-center text-blue-400 mb-8 group-hover:border-blue-500 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-500 bg-black">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    {React.cloneElement(step.icon, { size: 32 })}
                  </motion.div>
                  
                  {/* Step Number Badge */}
                  <span className="absolute -top-1 -right-1 w-9 h-9 rounded-full bg-blue-600 text-white text-[10px] font-black flex items-center justify-center border-4 border-[#020617] shadow-xl">
                    0{i + 1}
                  </span>
                </div>
                
                <h4 className="text-xl font-black text-white uppercase mb-4 tracking-tighter group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h4>
                <p className="text-gray-500 text-sm max-w-[220px] leading-relaxed group-hover:text-gray-400">
                  {step.desc}
                </p>
                
                {/* Mobile Arrow */}
                {i < 2 && (
                  <div className="md:hidden my-8 text-blue-500/20">
                    <ArrowRight size={24} className="rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- NUMBERS SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 grid grid-cols-2 md:grid-cols-4 gap-8 p-16 rounded-[4rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl relative overflow-hidden group hover:border-white/10 transition-colors duration-700"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-purple-600/5" />
          {[
            { val: "500+", label: "Elite Cars" },
            { val: "12k+", label: "Active Drivers" },
            { val: "24/7", label: "VIP Support" },
            { val: "0", label: "Paperwork" }
          ].map((stat, i) => (
            <div key={i} className="text-center relative z-10">
              <motion.div 
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                className="text-5xl font-black text-white tracking-tighter mb-2"
              >
                {stat.val}
              </motion.div>
              <div className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Whyus;