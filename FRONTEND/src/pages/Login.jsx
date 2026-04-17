import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, LogIn, Car, ArrowRight } from 'lucide-react';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email format';
    if (!form.password) e.password = 'Password is required';
    else if (form.password.length < 6) e.password = 'Min 6 characters';
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
  };

  return (
    <div className="min-h-screen flex">
      {/* Left decorative panel */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 items-center justify-center p-12">
        <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="relative z-10 text-center max-w-md">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-8 shadow-glow">
            <Car className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white font-[var(--font-heading)] mb-4">Welcome Back</h2>
          <p className="text-slate-400 leading-relaxed">Sign in to access your dashboard, manage reservations, and get back on the road.</p>
          <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500&h=300&fit=crop" alt="Car" className="mt-10 rounded-2xl shadow-2xl w-full object-cover opacity-80" />
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-navy-950">
        <div className="w-full max-w-md animate-fade-in">
          {/* Mobile logo */}
          <div className="lg:hidden flex items-center gap-2.5 mb-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-glow">
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-[var(--font-heading)] text-white">Drive<span className="text-gradient">Fleet</span></span>
          </div>

          <h1 className="text-3xl font-bold text-white font-[var(--font-heading)] mb-2">Sign In</h1>
          <p className="text-slate-400 mb-8">Enter your credentials to access your account</p>

          <form onSubmit={handleSubmit} className="space-y-5" id="login-form" noValidate>
            {/* Email */}
            <div>
              <label htmlFor="login-email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input id="login-email" type="email" placeholder="you@example.com" value={form.email} onChange={(e) => update('email', e.target.value)} className={`input-field !pl-11 ${errors.email ? 'error' : ''}`} />
              </div>
              {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="login-password" className="block text-sm font-medium text-slate-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input id="login-password" type={showPassword ? 'text' : 'password'} placeholder="••••••••" value={form.password} onChange={(e) => update('password', e.target.value)} className={`input-field !pl-11 !pr-11 ${errors.password ? 'error' : ''}`} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 bg-transparent border-none cursor-pointer p-0">
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && <p className="text-red-400 text-xs mt-1.5">{errors.password}</p>}
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="w-4 h-4 rounded border-slate-600 bg-navy-800 text-blue-500 focus:ring-blue-500 focus:ring-offset-0 cursor-pointer" />
                <span className="text-sm text-slate-400">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-400 hover:text-blue-300 no-underline transition-colors" id="forgot-password-link">Forgot password?</a>
            </div>

            {/* Submit */}
            <button type="submit" disabled={loading} className="btn-primary w-full !py-3.5 !text-base disabled:opacity-50 disabled:cursor-not-allowed" id="login-submit">
              {loading ? (
                <span className="flex items-center gap-2"><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />Signing in...</span>
              ) : (
                <><span>Sign In</span><LogIn className="w-5 h-5" /></>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-xs text-slate-500 uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <p className="text-center text-slate-400 text-sm">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="text-blue-400 hover:text-blue-300 font-medium no-underline transition-colors inline-flex items-center gap-1" id="goto-register">
              Create one <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
