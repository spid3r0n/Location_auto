import { Car, Fuel, Gauge, Settings2, ArrowUpRight } from "lucide-react";

const Cars = () => {
  const cars = [
    {
      id: 1,
      name: "Lamborghini Huracán",
      category: "Luxury Spors",
      price: "1,200",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=1000&auto=format&fit=crop", // Remplace par tes vraies images
      specs: { speed: "325 km/h", type: "Petrol", transmission: "Auto" }
    },
    {
      id: 2,
      name: "Porsche 911 GT3",
      category: "Sport",
      price: "850",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop",
      specs: { speed: "318 km/h", type: "Petrol", transmission: "Manual" }
    },
    {
      id: 3,
      name: "Mercedes AMG G63",
      category: "Luxury SUV",
      price: "950",
      image: "https://images.unsplash.com/photo-1520050206274-a1af4464086d?q=80&w=1000&auto=format&fit=crop",
      specs: { speed: "240 km/h", type: "Petrol", transmission: "Auto" }
    }
  ];

  return (
    <section id="cars" className="py-24 px-6 bg-[#020617]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header de la section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-blue-500 font-bold tracking-widest uppercase text-xs">
              Our Fleet
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-2 italic">
              EXPLORE OUR <span className="text-blue-500">PREMIUM</span> CARS
            </h2>
          </div>
          <button className="px-6 py-3 rounded-xl border border-white/10 text-white hover:bg-white/5 transition-all font-semibold flex items-center gap-2">
            View All Fleet <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Grille de voitures */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div 
              key={car.id} 
              className="group relative rounded-[2rem] bg-white/[0.03] border border-white/10 overflow-hidden hover:border-blue-500/50 transition-all duration-500"
            >
              {/* Image de la voiture */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
                
                {/* Badge de prix */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-2xl font-bold shadow-lg">
                  ${car.price}<span className="text-xs font-normal text-blue-100">/day</span>
                </div>
              </div>

              {/* Détails de la voiture */}
              <div className="p-8">
                <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">{car.category}</span>
                <h3 className="text-2xl font-bold text-white mt-1 mb-6">{car.name}</h3>

                {/* Caractéristiques (Specs) */}
                <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-6 mb-6">
                  <div className="flex flex-col items-center gap-2">
                    <Gauge size={20} className="text-gray-500" />
                    <span className="text-xs text-gray-400 font-medium">{car.specs.speed}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 border-x border-white/5">
                    <Fuel size={20} className="text-gray-500" />
                    <span className="text-xs text-gray-400 font-medium">{car.specs.type}</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Settings2 size={20} className="text-gray-500" />
                    <span className="text-xs text-gray-400 font-medium">{car.specs.transmission}</span>
                  </div>
                </div>

                {/* Bouton Louer */}
                <button className="w-full py-4 rounded-2xl bg-white/5 text-white font-bold group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 flex items-center justify-center gap-2">
                  Rent Now <Car size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cars;