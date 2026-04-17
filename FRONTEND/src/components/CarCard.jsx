import { Link } from 'react-router-dom';
import { Users, Fuel, Gauge, ArrowRight } from 'lucide-react';

const specIcons = {
  seats: Users,
  fuel: Fuel,
  power: Gauge,
};

export default function CarCard({ car }) {
  const {
    name,
    type,
    image,
    pricePerDay,
    seats,
    fuel,
    power,
  } = car;

  return (
    <div className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2" id={`car-card-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      {/* Glow effect on hover */}
      <div className="absolute -inset-[1px] bg-gradient-to-br from-electric-500/20 via-transparent to-indigo-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative glass rounded-2xl overflow-hidden">
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-navy-800">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Type badge */}
          <span className="absolute top-4 left-4 badge badge-info backdrop-blur-md">
            {type}
          </span>
          {/* Price overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-950/90 to-transparent pt-10 pb-3 px-4">
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-white">${pricePerDay}</span>
              <span className="text-sm text-slate-400">/day</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-white mb-3 font-[var(--font-heading)]">{name}</h3>

          {/* Specs */}
          <div className="flex items-center gap-4 mb-4">
            {[
              { key: 'seats', value: `${seats} Seats`, icon: specIcons.seats },
              { key: 'fuel', value: fuel, icon: specIcons.fuel },
              { key: 'power', value: power, icon: specIcons.power },
            ].map((spec) => (
              <div key={spec.key} className="flex items-center gap-1.5 text-xs text-slate-400">
                <spec.icon className="w-3.5 h-3.5 text-electric-500/70" />
                {spec.value}
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            to="/register"
            className="w-full btn-secondary !py-2.5 !text-sm !rounded-xl group/btn flex items-center justify-center"
          >
            <span>Rent Now</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
