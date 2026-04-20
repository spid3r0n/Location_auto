import React from 'react';
import { motion } from "framer-motion";
import { 
  User, Mail, Phone, ShieldCheck, 
  Clock, Calendar, CreditCard, ChevronRight,
  TrendingUp, Activity, FileText, Upload
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Reservation } from '../types';

const mockReservations: Reservation[] = [
  { id: 'RES-9042', carName: 'Tesla Model 3', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&q=80', startDate: 'Oct 15', endDate: 'Oct 20, 2023', total: 600, status: 'completed' },
  { id: 'RES-8821', carName: 'Tesla Model 3', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&q=80', startDate: 'Nov 02', endDate: 'Nov 05, 2023', total: 285, status: 'ongoing' },
  { id: 'RES-9105', carName: 'Audi A4', image: 'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?w=400&q=80', startDate: 'Dec 10', endDate: 'Dec 12, 2023', total: 150, status: 'cancelled' },
];

export default function Dashboard() {
  const { current } = useTheme();

  return (
    <div className={`min-h-screen pt-32 pb-20 px-6 ${current.bg} ${current.text}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: PROFILE & DOCS */}
        <div className="lg:col-span-4 space-y-8">
          {/* Profile Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border ${current.card} relative overflow-hidden`}
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${current.accent}`} />
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full border-4 border-current/10 p-1 mb-6">
                <div className="w-full h-full rounded-full bg-blue-500 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop" 
                    alt="John Doe" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <h2 className="text-3xl font-black tracking-tight mb-2 uppercase">John Doe</h2>
              <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full mb-8">
                <ShieldCheck className="w-3 h-3 text-green-500" />
                <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Verified Member</span>
              </div>

              <div className="w-full space-y-6 text-left">
                <div className="space-y-1">
                  <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${current.subtext}`}>Full Name</span>
                  <div className="flex items-center gap-3 text-sm font-bold">
                    <User className="w-4 h-4 opacity-40" /> John Doe
                  </div>
                </div>
                <div className="space-y-1">
                  <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${current.subtext}`}>Email Address</span>
                  <div className="flex items-center gap-3 text-sm font-bold">
                    <Mail className="w-4 h-4 opacity-40" /> john.doe@example.com
                  </div>
                </div>
                <div className="space-y-1">
                  <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${current.subtext}`}>Phone Number</span>
                  <div className="flex items-center gap-3 text-sm font-bold">
                    <Phone className="w-4 h-4 opacity-40" /> +1 (555) 123-4567
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Documents Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border ${current.card}`}
          >
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-5 h-5 text-blue-500" />
              <h3 className="text-xl font-bold uppercase tracking-tight">Documents</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { name: "Driver's License", status: 'Pending', color: 'text-red-500' },
               
              ].map(doc => (
                <div key={doc.name} className="flex items-center justify-between p-4 rounded-2xl bg-black/20 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-current/5 ${doc.color}`}>
                       <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">{doc.name}</div>
                      <div className={`text-[9px] font-black uppercase tracking-widest ${doc.color}`}>{doc.status}</div>
                    </div>
                  </div>
                  
                </div>
              ))}
              <button className="w-full mt-4 py-4 rounded-2xl border-2 border-dashed border-white/10 flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-all">
                <Upload className="w-4 h-4" /> Upload Document
              </button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: STATS & RESERVATIONS */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Stats Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: 'Total Rides', val: '24', icon: Activity },
              { label: 'Miles Covered', val: '1,240', icon: TrendingUp },
              { label: 'Club Status', val: 'Gold', icon: ShieldCheck },
              { label: 'Saved', val: '$420', icon: CreditCard },
            ].map((stat, i) => (
              <div key={i} className={`rounded-3xl p-6 border ${current.card} flex flex-col gap-2`}>
                <stat.icon className="w-5 h-5 text-blue-500 mb-2" />
                <span className="text-2xl font-black lowercase tracking-tighter">{stat.val}</span>
                <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${current.subtext}`}>{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Reservations List */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`flex-1 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 border ${current.card}`}
          >
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-black uppercase tracking-tight">Reservations</h3>
              <button className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 border-b border-blue-500/30">View All History</button>
            </div>

            <div className="space-y-6">
              {mockReservations.map(res => (
                <div key={res.id} className="group relative rounded-3xl p-6 bg-black/20 border border-white/5 hover:border-blue-500/30 transition-all overflow-hidden">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-48 h-32 rounded-2xl overflow-hidden shadow-2xl">
                      <img src={res.image} alt={res.carName} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="space-y-1">
                        <span className={`text-[9px] font-black uppercase tracking-[0.3em] ${current.subtext}`}>Reference</span>
                        <div className="text-sm font-bold">{res.id}</div>
                        <div className="text-lg font-black uppercase tracking-tighter">{res.carName}</div>
                      </div>
                      <div className="space-y-1">
                        <span className={`text-[9px] font-black uppercase tracking-[0.3em] ${current.subtext}`}>Period</span>
                        <div className="flex items-center gap-2 text-sm font-bold">
                          <Calendar className="w-4 h-4 opacity-40" /> {res.startDate} - {res.endDate}
                        </div>
                        <div className="text-[10px] font-bold opacity-60">Total: ${res.total}</div>
                      </div>
                      <div className="flex items-center justify-end md:justify-start lg:justify-end">
                        <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                          res.status === 'ongoing' ? 'bg-blue-500/20 text-blue-500 border border-blue-500/20' :
                          res.status === 'cancelled' ? 'bg-red-500/20 text-red-500 border border-red-500/20' :
                          'bg-green-500/20 text-green-500 border border-green-500/20'
                        }`}>
                          {res.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 opacity-0 group-hover:opacity-40 group-hover:translate-x-2 transition-all cursor-pointer" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
