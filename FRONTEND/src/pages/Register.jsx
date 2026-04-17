import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, Phone, Eye, EyeOff, UserPlus, Car, ArrowRight } from 'lucide-react';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email format';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (!form.password) e.password = 'Password is required';
    else if (form.password.length < 6) e.password = 'Min 6 characters';
    if (form.password !== form.confirmPassword) e.confirmPassword = 'Passwords do not match';
    if (!agree) e.agree = 'You must agree to the terms';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    }
  };

  const update = (field, value) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
    if (field === 'agree') setAgree(value);
  };

  return (
    <div className="min-h-screen flex">
      {/* Right panel (swapped from login) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-bl from-navy-900 via-navy-800 to-navy-950 items-center justify-center p-12 order-2">
        <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
        <div className="relative z-10 text-center max-w-md">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-8 shadow-glow">
            <UserPlus className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white font-[var(--font-heading)] mb-4">Join DriveFleet</h2>
          <p className="text-slate-400 leading-relaxed">Create your account today and unlock access to our premium fleet. Your next adventure starts here.</p>
          <div className="mt-10 grid grid-cols-2 gap-4 text-left">
            {[
              { title: 'Wide Selection', desc: 'Luxury to economy' },
              { title: 'Best Prices', desc: 'No hidden fees' },
              { title: 'Easy Booking', desc: 'Instant confirmation' },
              { title: '24/7 Support', desc: 'Always here to help' },
            ].map((b) => (
              <div key={b.title} className="glass-light rounded-xl p-4">
                <div className="text-white font-semibold text-sm">{b.title}</div>
                <div className="text-slate-400 text-xs mt-1">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Left form panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-navy-950 order-1">
        <div className="w-full max-w-md animate-fade-in">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2.5 mb-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-glow">
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-[var(--font-heading)] text-white">Drive<span className="text-gradient">Fleet</span></span>
          </div>

          <h1 className="text-3xl font-bold text-white font-[var(--font-heading)] mb-2">Create Account</h1>
          <p className="text-slate-400 mb-8">Fill in your details to get started</p>

          <form onSubmit={handleSubmit} className="space-y-4" id="register-form" noValidate>
            {/* Name */}
            <div>
              <label htmlFor="reg-name" className="block text-sm font-medium text-slate-300 mb-1.5">Full Name</label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input id="reg-name" type="text" placeholder="John Doe" value={form.name} onChange={(e) => update('name', e.target.value)} className={`input-field !pl-11 ${errors.name ? 'error' : ''}`} />
              </div>
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="reg-email" className="block text-sm font-medium text-slate-300 mb-1.5">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input id="reg-email" type="email" placeholder="you@example.com" value={form.email} onChange={(e) => update('email', e.target.value)} className={`input-field !pl-11 ${errors.email ? 'error' : ''}`} />
                </div>
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="reg-phone" className="block text-sm font-medium text-slate-300 mb-1.5">Phone</label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input id="reg-phone" type="tel" placeholder="+1 (234) 567" value={form.phone} onChange={(e) => update('phone', e.target.value)} className={`input-field !pl-11 ${errors.phone ? 'error' : ''}`} />
                </div>
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="reg-password" className="block text-sm font-medium text-slate-300 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input id="reg-password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" value={form.password} onChange={(e) => update('password', e.target.value)} className={`input-field !pl-11 !pr-11 ${errors.password ? 'error' : ''}`} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 bg-transparent border-none cursor-pointer p-0">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="reg-confirm" className="block text-sm font-medium text-slate-300 mb-1.5">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input id="reg-confirm" type={showPassword ? 'text' : 'password'} placeholder="••••••••" value={form.confirmPassword} onChange={(e) => update('confirmPassword', e.target.value)} className={`input-field !pl-11 ${errors.confirmPassword ? 'error' : ''}`} />
              </div>
              {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* Terms */}
            <div className="pt-2">
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" checked={agree} onChange={(e) => update('agree', e.target.checked)} className="mt-1 w-4 h-4 rounded border-slate-600 bg-navy-800 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer" />
                <span className="text-sm text-slate-400">
                  I agree to the <a href="#" className="text-blue-400 hover:text-blue-300 no-underline">Terms of Service</a> and <a href="#" className="text-blue-400 hover:text-blue-300 no-underline">Privacy Policy</a>.
                </span>
              </label>
              {errors.agree && <p className="text-red-400 text-xs mt-1">{errors.agree}</p>}
            </div>

            {/* Submit */}
            <button type="submit" disabled={loading} className="btn-primary w-full !py-3.5 !text-base mt-2 disabled:opacity-50 disabled:cursor-not-allowed" id="register-submit">
              {loading ? (
                <span className="flex items-center gap-2"><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Creating...</span>
              ) : (
                <><span>Create Account</span><UserPlus className="w-5 h-5" /></>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-slate-500 uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <p className="text-center text-slate-400 text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium no-underline transition-colors inline-flex items-center gap-1" id="goto-login">
              Sign In <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
