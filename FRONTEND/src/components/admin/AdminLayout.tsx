import React, { useMemo, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  BarChart3,
  CalendarClock,
  CarFront,
  Menu,
  ShieldAlert,
  UserRound,
  X,
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface AdminNavItem {
  label: string;
  to: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: AdminNavItem[] = [
  { label: 'Dashboard', to: '/admin', icon: BarChart3 },
  { label: 'Users', to: '/admin/users', icon: UserRound },
  { label: 'Vehicles', to: '/admin/vehicles', icon: CarFront },
  { label: 'Bookings', to: '/admin/bookings', icon: CalendarClock },
];

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const { current } = useTheme();

  return (
    <div className="h-full flex flex-col">
      <div className="px-6 pt-8 pb-6 border-b border-white/10">
        <Link to="/" className="inline-flex items-center gap-3 group" onClick={onNavigate}>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.4)]">
            <CarFront className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">Auto-Loc</p>
            <h1 className="text-sm font-black uppercase tracking-widest">Admin Panel</h1>
          </div>
        </Link>
      </div>

      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/admin'}
            onClick={onNavigate}
            className={({ isActive }) =>
              [
                'flex items-center gap-3 rounded-2xl px-4 py-3 text-xs font-black uppercase tracking-[0.2em] transition-all border',
                isActive
                  ? 'bg-blue-600 text-white border-blue-500 shadow-[0_8px_20px_rgba(37,99,235,0.35)]'
                  : `${current.card} hover:bg-white/10`,
              ].join(' ')
            }
          >
            <item.icon className="w-4 h-4" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto p-4">
        <div className={`rounded-2xl border p-4 ${current.card}`}>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40 mb-2">Role</p>
          <p className="text-sm font-bold">Administrator</p>
          <p className="text-[11px] opacity-60 mt-2">Manage users, bookings, vehicles, and listing approvals.</p>
        </div>
      </div>
    </div>
  );
}

export default function AdminLayout() {
  const { current } = useTheme();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const role = useMemo(() => {
    if (typeof window === 'undefined') {
      return 'admin';
    }
    return window.localStorage.getItem('autoloc-role') ?? 'admin';
  }, []);

  if (role !== 'admin') {
    return (
      <main className={`min-h-screen ${current.bg} ${current.text} px-6 py-32`}>
        <div className={`max-w-xl mx-auto rounded-[2rem] border ${current.card} p-8 text-center`}>
          <ShieldAlert className="w-12 h-12 mx-auto text-red-400 mb-4" />
          <h2 className="text-3xl font-black uppercase tracking-tight mb-3">Admin Access Required</h2>
          <p className="opacity-70 mb-8">
            Your current role is <b>{role}</b>. Set <b>autoloc-role</b> to <b>admin</b> in local storage to view this area.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-black uppercase tracking-[0.2em]"
          >
            Back To Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <div className={`min-h-screen ${current.bg} ${current.text}`}>
      <div className="flex min-h-screen">
        <aside className={`hidden lg:block w-72 border-r border-white/10 ${current.card}`}>
          <SidebarContent />
        </aside>

        <AnimatePresence>
          {isMobileNavOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                className={`h-full w-72 ${current.bg} border-r border-white/10`}
              >
                <SidebarContent onNavigate={() => setIsMobileNavOpen(false)} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="flex-1 min-w-0">
          <div className="lg:hidden sticky top-0 z-30 border-b border-white/10 bg-black/30 backdrop-blur-xl">
            <div className="px-4 py-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setIsMobileNavOpen((prev) => !prev)}
                className={`p-2 rounded-xl border ${current.card}`}
              >
                {isMobileNavOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <h1 className="text-xs font-black uppercase tracking-[0.3em]">Admin Panel</h1>
              <Link to="/" className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400">
                Exit
              </Link>
            </div>
          </div>

          <div className="p-4 sm:p-6 lg:p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
