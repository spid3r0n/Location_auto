import { Link } from 'react-router-dom';
import {
  ArrowRight, Search, CalendarCheck, CarFront,
  Shield, Clock, DollarSign, Headphones,
  Star, ChevronRight, Sparkles,
} from 'lucide-react';
import CarCard from '../components/CarCard';

const featuredCars = [
  { name: 'BMW 5 Series', type: 'Sedan', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop', pricePerDay: 89, seats: 5, fuel: 'Petrol', power: '248 HP' },
  { name: 'Mercedes GLE', type: 'SUV', image: 'https://images.unsplash.com/photo-1606611013016-969c19ba27d5?w=600&h=400&fit=crop', pricePerDay: 120, seats: 7, fuel: 'Diesel', power: '362 HP' },
  { name: 'Audi A4', type: 'Sedan', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop', pricePerDay: 75, seats: 5, fuel: 'Petrol', power: '201 HP' },
  { name: 'Range Rover Sport', type: 'SUV', image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop', pricePerDay: 150, seats: 5, fuel: 'Diesel', power: '395 HP' },
  { name: 'Tesla Model 3', type: 'Electric', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop', pricePerDay: 95, seats: 5, fuel: 'Electric', power: '283 HP' },
  { name: 'Porsche 911', type: 'Sport', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop', pricePerDay: 220, seats: 2, fuel: 'Petrol', power: '443 HP' },
];

const steps = [
  { icon: Search, title: 'Search & Choose', description: 'Browse our wide selection of premium vehicles and find your perfect match.', step: '01' },
  { icon: CalendarCheck, title: 'Book Online', description: 'Select your dates, customize add-ons, and confirm your reservation instantly.', step: '02' },
  { icon: CarFront, title: 'Drive Away', description: 'Pick up your car or get it delivered. Hit the road and enjoy the ride.', step: '03' },
];

const benefits = [
  { icon: Shield, title: 'Full Insurance', description: 'Every rental comes with comprehensive coverage for your peace of mind.', color: 'from-emerald-500 to-teal-500' },
  { icon: DollarSign, title: 'Best Prices', description: 'Transparent pricing with no hidden fees. Price-match guarantee included.', color: 'from-amber-500 to-orange-500' },
  { icon: Headphones, title: '24/7 Support', description: 'Our dedicated team is always available to assist you on the road.', color: 'from-blue-500 to-indigo-500' },
  { icon: Clock, title: 'Quick Booking', description: 'Book in under 2 minutes. Instant confirmation, no paperwork needed.', color: 'from-purple-500 to-pink-500' },
];

const stats = [
  { value: '500+', label: 'Premium Cars' },
  { value: '15K+', label: 'Happy Clients' },
  { value: '50+', label: 'Locations' },
  { value: '4.9★', label: 'Rating' },
];

export default function Landing() {
  return (
    <main>
      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-float pointer-events-none" style={{ animationDelay: '-3s' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Premium Car Rental Service
              </div>
              <h1 className="font-[var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-6">
                Drive Your<br /><span className="text-gradient">Dream Car</span><br />Today
              </h1>
              <p className="text-lg text-slate-400 max-w-lg mb-8 leading-relaxed">
                Unlock the road with our curated fleet of luxury and economy vehicles. Book in minutes, drive away in style.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register" className="btn-primary !py-3.5 !px-8 !text-base" id="hero-cta">
                  <span>Start Renting</span><ArrowRight className="w-5 h-5" />
                </Link>
                <a href="#cars" className="btn-secondary !py-3.5 !px-8 !text-base"><span>Browse Cars</span></a>
              </div>
              <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/5">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-white font-[var(--font-heading)]">{s.value}</div>
                    <div className="text-sm text-slate-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl" />
                <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=700&h=500&fit=crop" alt="Luxury car" className="relative w-full rounded-3xl shadow-2xl object-cover" />
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 animate-float shadow-xl" style={{ animationDelay: '-2s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div><div className="text-white font-semibold text-sm">Top Rated</div><div className="text-slate-400 text-xs">4.9 / 5.0 rating</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050816] to-transparent" />
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">How It Works</span>
            <h2 className="section-title mt-3">Rent a Car in 3 Simple Steps</h2>
            <p className="section-subtitle mt-4">From search to steering wheel in minutes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {steps.map((step, idx) => (
              <div key={step.step} className="relative group">
                {idx < steps.length - 1 && <div className="hidden md:block absolute top-12 left-[60%] w-[calc(100%-20%)] h-px bg-gradient-to-r from-blue-500/30 to-transparent" />}
                <div className="glass rounded-2xl p-8 text-center hover:bg-white/[0.03] transition-all duration-500 h-full">
                  <div className="text-5xl font-extrabold text-blue-500/10 font-[var(--font-heading)] absolute top-4 right-6">{step.step}</div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-5 shadow-glow group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-[var(--font-heading)]">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CARS */}
      <section id="cars" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Our Fleet</span>
            <h2 className="section-title mt-3">Featured Vehicles</h2>
            <p className="section-subtitle mt-4">Hand-picked premium cars for every occasion.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {featuredCars.map((car) => (<CarCard key={car.name} car={car} />))}
          </div>
          <div className="text-center mt-12">
            <Link to="/register" className="btn-secondary !py-3 !px-8 inline-flex items-center gap-2">
              <span>View All Cars</span><ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="section-title mt-3">Built for Drivers Like You</h2>
            <p className="section-subtitle mt-4">We go the extra mile so you can focus on the drive.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {benefits.map((b) => (
              <div key={b.title} className="glass rounded-2xl p-6 text-center hover:bg-white/[0.03] transition-all duration-500 group">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${b.color} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <b.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-[var(--font-heading)]">{b.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="cta-banner" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-cta" />
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.15) 0%, transparent 50%)' }} />
            <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-[var(--font-heading)] mb-4">Ready to Hit the Road?</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">Join thousands of satisfied drivers. Create your free account and get 15% off your first rental.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-indigo-600 font-semibold rounded-xl no-underline hover:bg-slate-100 transition-all duration-300 hover:-translate-y-1 shadow-xl" id="cta-register">
                  <span>Create Account</span><ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/login" className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent border-2 border-white/30 text-white font-semibold rounded-xl no-underline hover:bg-white/10 transition-all duration-300">
                  <span>Sign In</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
