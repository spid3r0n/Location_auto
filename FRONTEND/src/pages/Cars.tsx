import { motion } from "framer-motion";
import { Car, Fuel, Gauge, Settings2, ArrowUpRight, Sparkles } from "lucide-react";

const Cars = () => {
  const cars = [
    {
      id: 1,
      name: "Lamborghini Huracán",
      category: "Luxury Sports",
      price: "1,200",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1400",
      specs: { speed: "325 km/h", type: "Petrol", transmission: "Auto" },
      accent: "from-orange-500 to-red-600"
    },
    {
      id: 2,
      name: "Porsche 911 GT3",
      category: "Pure Sport",
      price: "850",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1400",
      specs: { speed: "318 km/h", type: "Petrol", transmission: "Manual" },
      accent: "from-blue-500 to-indigo-600"
    },
    {
      id: 3,
      name: "Mercedes AMG G63",
      category: "Luxury SUV",
      price: "950",
      image: "https://images.unsplash.com/photo-1520050206274-a1af4464086d?auto=format&fit=crop&q=80&w=1400",
      specs: { speed: "240 km/h", type: "Petrol", transmission: "Auto" },
      accent: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section id="cars" className="relative py-32 px-6 bg-[#02040a] overflow-hidden">
      {/* Glow Effects D'arrière-plan */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-blue-500" />
              <span className="text-blue-500 font-black tracking-[0.3em] uppercase text-[10px]">
                The Elite Collection
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter uppercase">
              Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Driving</span>
            </h2>
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:border-blue-500/50 transition-all font-bold flex items-center gap-3 backdrop-blur-md"
          >
            Explore Full Fleet 
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>

        {/* --- Grille de voitures --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cars.map((car, index) => (
            <motion.div 
              key={car.id} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative rounded-[3rem] bg-gradient-to-b from-white/10 to-transparent border border-white/10 p-4 hover:border-white/20 transition-all duration-500"
            >
              {/* Image Container avec effet de zoom et lueur */}
              <div className="relative h-72 rounded-[2.5rem] overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent opacity-80" />
                
                {/* Floating Badge (Price) */}
                <div className="absolute top-5 right-5 flex flex-col items-end">
                  <div className="bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-2xl">
                    <span className="text-white font-black text-xl">${car.price}</span>
                    <span className="text-[10px] text-gray-400 uppercase ml-1">/Day</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2">
                  <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${car.accent} animate-pulse`} />
                  <span className="text-white font-bold text-[10px] uppercase tracking-widest">{car.category}</span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-6">
                <h3 className="text-3xl font-black text-white tracking-tighter mb-6 group-hover:text-blue-400 transition-colors">
                  {car.name}
                </h3>

                {/* Specs Box - Glass Style */}
                <div className="grid grid-cols-3 gap-2 bg-white/5 rounded-3xl p-4 mb-8 border border-white/5 group-hover:bg-white/10 transition-colors">
                  <div className="flex flex-col items-center gap-1">
                    <Gauge size={18} className="text-blue-500" />
                    <span className="text-[10px] text-gray-300 font-bold uppercase">{car.specs.speed}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 border-x border-white/10">
                    <Fuel size={18} className="text-blue-500" />
                    <span className="text-[10px] text-gray-300 font-bold uppercase">{car.specs.type}</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Settings2 size={18} className="text-blue-500" />
                    <span className="text-[10px] text-gray-300 font-bold uppercase">{car.specs.transmission}</span>
                  </div>
                </div>

                {/* Main CTA Button */}
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-5 rounded-[2rem] bg-white text-black font-black uppercase text-xs tracking-widest flex items-center justify-center gap-3 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-2xl overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book This Experience <Sparkles size={16} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cars;