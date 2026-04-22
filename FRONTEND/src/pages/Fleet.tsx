import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Search, Filter, SlidersHorizontal, ChevronDown, CarFront } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import CarCard from '../components/ui/CarCard';
import { Car } from '../types';

const allCars: Car[] = [
  { id: '1', name: 'BMW 5 Series', type: 'Sedan', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', pricePerDay: 89, seats: 5, fuel: 'Petrol', power: '248 HP', transmission: 'Auto' },
  { id: '2', name: 'Mercedes GLE', type: 'SUV', image: 'https://images.unsplash.com/photo-1606611013016-969c19ba27d5?w=800&q=80', pricePerDay: 120, seats: 7, fuel: 'Diesel', power: '362 HP', transmission: 'Auto' },
  { id: '3', name: 'Porsche 911', type: 'Sport', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', pricePerDay: 220, seats: 2, fuel: 'Petrol', power: '443 HP', transmission: 'Manual' },
  { id: '4', name: 'Audi RS6', type: 'Avant', image: 'https://images.unsplash.com/photo-1603501092305-649033339e1a?w=800&q=80', pricePerDay: 180, seats: 5, fuel: 'Petrol', power: '591 HP', transmission: 'Auto' },
  { id: '5', name: 'Tesla Model S', type: 'Electric', image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&q=80', pricePerDay: 150, seats: 5, fuel: 'Electric', power: '670 HP', transmission: 'Direct' },
  { id: '6', name: 'Range Rover', type: 'SUV', image: 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?w=800&q=80', pricePerDay: 140, seats: 5, fuel: 'Hybrid', power: '398 HP', transmission: 'Auto' },
];

export default function Fleet() {
  const { current } = useTheme();
  const [search, setSearch] = useState('');

  return (
    <div className={`min-h-screen pt-32 pb-20 px-6 ${current.bg} ${current.text}`}>
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-10"
          >
            <div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-6">The Fleet</h1>
              <p className={`${current.subtext} text-xl max-w-xl font-medium`}>Parcourez notre catalogue d'exception. Trouvez la monture qui correspond à votre prochain chapitre.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 px-6 py-3 rounded-full text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <CarFront className="w-4 h-4" /> 6 Models Found
              </div>
            </div>
          </motion.div>
        </header>

        {/* CONTROLS */}
        <div className="flex flex-col md:flex-row gap-6 mb-16">
          <div className="flex-1 relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40 group-focus-within:opacity-100 group-focus-within:text-blue-500 transition-all" />
            <input 
              type="text" 
              placeholder="Search by model, brand or type..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-6 pl-16 pr-6 text-sm focus:border-blue-500/50 outline-none transition-all placeholder:text-current/30"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-3 px-8 py-6 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-xs font-black uppercase tracking-widest">
              <Filter className="w-4 h-4" /> Type <ChevronDown className="w-4 h-4 opacity-40 ml-2" />
            </button>
            <button className="flex items-center gap-3 px-8 py-6 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-xs font-black uppercase tracking-widest">
              <SlidersHorizontal className="w-4 h-4" /> Filters
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allCars
            .filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.type.toLowerCase().includes(search.toLowerCase()))
            .map((car, idx) => (
              <CarCard key={car.id} car={car} theme={current} />
          ))}
        </div>
      </div>
    </div>
  );
}
