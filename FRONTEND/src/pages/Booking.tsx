import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ChevronLeft, Calendar, ShieldCheck, 
  CreditCard, Info, MapPin, CheckCircle2 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Booking() {
  const { current } = useTheme();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const car = {
    name: 'Porsche 911 GT3',
    price: 450,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80'
  };

  const handleNext = () => {
    if (step < 2) setStep(step + 1);
    else navigate('/dashboard');
  };

  return (
    <div className={`min-h-screen pt-32 pb-20 px-6 ${current.bg} ${current.text}`}>
      <div className="max-w-5xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest opacity-60 hover:opacity-100 mb-12 transition-all"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 space-y-10">
            <header>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">Request your<br/>Reservation</h1>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                {[1, 2].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black ${
                      step >= s ? 'bg-blue-600 text-white' : 'bg-white/5 border border-white/10'
                    }`}>
                      {s}
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${step >= s ? 'opacity-100' : 'opacity-30'}`}>
                      {s === 1 ? 'Details' : 'Confirmation'}
                    </span>
                    {s < 2 && <div className="w-8 h-px bg-white/10" />}
                  </div>
                ))}
              </div>
            </header>

            {step === 1 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <div className={`p-4 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border ${current.card} space-y-8`}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-2">Pickup Location</label>
                      <div className="relative group">
                        <MapPin className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
                        <input type="text" placeholder="London Luxury Garage" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-sm outline-none focus:border-blue-500/50 transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest opacity-40 ml-2">Duration</label>
                      <div className="relative group">
                        <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
                        <input type="text" placeholder="Oct 20 - Oct 22" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-sm outline-none focus:border-blue-500/50 transition-all" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-black uppercase tracking-tight">Additional Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Full Insurance', 'Private Driver', 'Airport Delivery', 'GPS Luxury Pack'].map(service => (
                        <div key={service} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all">
                          <span className="text-xs font-bold">{service}</span>
                          <div className="w-5 h-5 rounded-md border border-white/20 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                <div className="w-24 h-24 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-8 animate-pulse">
                  <CheckCircle2 className="w-12 h-12 text-blue-500" />
                </div>
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Request Sent!</h2>
                <p className={`${current.subtext} mb-12 max-w-md mx-auto`}>Our team is reviewing your request. You will receive a <b>confirmation SMS and Email</b> within the next 15 minutes.</p>
              </motion.div>
            )}

            <button 
              onClick={handleNext}
              className={`w-full py-6 rounded-[2rem] font-black uppercase text-xs tracking-[0.4em] transition-all shadow-xl hover:scale-[1.02] active:scale-95 ${current.btn}`}
            >
              {step === 2 ? 'Go to Dashboard' : 'Send Reservation Request'}
            </button>
          </div>

          {/* SUMMARY SIDEBAR */}
          <div className="lg:col-span-4">
            <div className={`sticky top-32 p-8 rounded-[2.5rem] border ${current.card} space-y-8`}>
              <div className="aspect-video rounded-3xl overflow-hidden mb-8 border border-white/5 shadow-2xl">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover grayscale-[0.3]" />
              </div>

              <div className="space-y-6">
                <div className="flex items-start justify-between">
                   <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-1">Selected Vehicle</h4>
                      <p className="text-xl font-bold uppercase tracking-tight">{car.name}</p>
                   </div>
                   <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                      <ShieldCheck className="w-5 h-5 text-blue-500" />
                   </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/5">
                  <div className="flex justify-between text-sm font-bold opacity-60">
                    <span>Base Fare (2 Days)</span>
                    <span>${car.price * 2}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold opacity-60">
                    <span>Priority Service</span>
                    <span>$45</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold opacity-60">
                    <span>Insurance</span>
                    <span className="text-green-500">Free</span>
                  </div>
                  <div className="flex justify-between pt-4 border-t border-white/10">
                    <span className="text-sm font-black uppercase tracking-widest">Total cost</span>
                    <span className="text-2xl font-black tracking-tighter">${car.price * 2 + 45}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10 flex items-start gap-4">
                 <Info className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                 <p className="text-[10px] font-semibold leading-relaxed opacity-60 italic">Free cancellation up to 24 hours before pickup. Secure your booking now without worries.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
