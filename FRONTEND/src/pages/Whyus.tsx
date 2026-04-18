import { ShieldCheck, CircleDollarSign, Clock, CarFront, ArrowRight } from "lucide-react";

const Whyus = () => {
  const features = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Premium Insurance",
      description: "Drive with peace of mind with our comprehensive insurance coverage included.",
      color: "from-blue-600 to-cyan-400"
    },
    {
      icon: <CircleDollarSign size={32} />,
      title: "Best Price Guarantee",
      description: "No hidden fees. We guarantee the most competitive rates on the market.",
      color: "from-indigo-600 to-blue-400"
    },
    {
      icon: <Clock size={32} />,
      title: "Quick Booking",
      description: "Book your dream vehicle in less than 2 minutes through our platform.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <CarFront size={32} />,
      title: "Wide Selection",
      description: "From economic city cars to the rarest luxury sports cars in our fleet.",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section id="why-us" className="relative py-32 px-6 bg-[#020617] overflow-hidden">
      
      {/* --- ÉLÉMENTS DÉCORATIFS D'ARRIÈRE-PLAN --- */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 animate-bounce-slow">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            <span className="text-blue-400 font-bold tracking-widest uppercase text-xs">
              Why Auto Loc
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Pure Luxury</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We don't just rent cars. We provide an unforgettable journey 
            with world-class service and a fleet that defines excellence.
          </p>
        </div>

        {/* --- GRID DE CARTES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-4"
            >
              {/* Effet de lueur au survol */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icône avec dégradé dynamique */}
              <div className={`mb-8 p-4 w-fit rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>

              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm cursor-pointer group/link">
                Learn more 
                <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* --- STATS RAPIDES (Optionnel pour plus de "Style") --- */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 p-12 rounded-[3rem] bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-white/5 backdrop-blur-sm">
            {[
                { val: "500+", label: "Luxury Cars" },
                { val: "12k+", label: "Happy Clients" },
                { val: "24/7", label: "Support" },
                { val: "15+", label: "Cities" }
            ].map((stat, i) => (
                <div key={i} className="text-center">
                    <div className="text-3xl font-black text-white">{stat.val}</div>
                    <div className="text-blue-400 text-sm font-medium uppercase tracking-widest">{stat.label}</div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Whyus;