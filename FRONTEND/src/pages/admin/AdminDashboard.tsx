import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarClock, CarFront, Clock3, RefreshCw, Users } from 'lucide-react';
import AdminTable from '../../components/admin/AdminTable';
import { AdminEmptyState, AdminErrorState, AdminLoadingState } from '../../components/admin/AdminStates';
import { useTheme } from '../../context/ThemeContext';
import { getAdminDashboard } from '../../services/adminApi';
import { AdminBooking, AdminDashboardPayload } from '../../types';

function bookingStatusClass(status: AdminBooking['status']) {
  if (status === 'pending') {
    return 'bg-amber-500/20 text-amber-300 border border-amber-400/20';
  }
  if (status === 'cancelled') {
    return 'bg-red-500/20 text-red-300 border border-red-400/20';
  }
  if (status === 'completed') {
    return 'bg-green-500/20 text-green-300 border border-green-400/20';
  }
  if (status === 'ongoing') {
    return 'bg-blue-500/20 text-blue-300 border border-blue-400/20';
  }
  return 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/20';
}

export default function AdminDashboard() {
  const { current } = useTheme();
  const [data, setData] = useState<AdminDashboardPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadDashboard = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getAdminDashboard();
      setData(response.data);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to load dashboard data';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadDashboard();
  }, []);

  return (
    <section className="space-y-8">
      <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">
        <div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter mb-2">Admin Dashboard</h1>
          <p className={`${current.subtext} text-sm sm:text-base`}>
            Overview of users, bookings, vehicles, and the latest reservation activity.
          </p>
        </div>
        <button
          type="button"
          onClick={() => void loadDashboard()}
          className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border ${current.card} text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white/10 transition-all`}
        >
          <RefreshCw className="w-4 h-4" />
          Refresh
        </button>
      </header>

      {loading && <AdminLoadingState title="Loading Dashboard" hint="Fetching latest admin metrics and bookings." />}

      {!loading && error && <AdminErrorState title="Dashboard Error" hint={error} />}

      {!loading && !error && data && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {[
              {
                label: 'Total Users',
                value: data.stats.totalUsers,
                sub: `${data.stats.activeUsers} active`,
                icon: Users,
              },
              {
                label: 'Total Bookings',
                value: data.stats.totalBookings,
                sub: `${data.stats.pendingBookings} pending`,
                icon: CalendarClock,
              },
              {
                label: 'Vehicles',
                value: data.stats.totalVehicles,
                sub: `${data.stats.pendingListings} awaiting approval`,
                icon: CarFront,
              },
              {
                label: 'Pending Bookings',
                value: data.stats.pendingBookings,
                sub: 'Needs review',
                icon: Clock3,
              },
            ].map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.06 }}
                className={`rounded-3xl border ${current.card} p-5`}
              >
                <item.icon className="w-5 h-5 text-blue-400 mb-3" />
                <p className="text-3xl font-black tracking-tight">{item.value}</p>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-50 mt-1">{item.label}</p>
                <p className="text-xs opacity-60 mt-4">{item.sub}</p>
              </motion.div>
            ))}
          </div>

          {data.recentBookings.length === 0 ? (
            <AdminEmptyState title="No Recent Bookings" hint="New reservations will appear here when activity starts." />
          ) : (
            <div className="space-y-3">
              <div className="px-1">
                <h2 className="text-xl font-black uppercase tracking-tight">Recent Bookings</h2>
                <p className="text-xs opacity-60 mt-1">Latest reservations from all users.</p>
              </div>

              <AdminTable
                columns={['Booking', 'Customer', 'Vehicle', 'Dates', 'Total', 'Status']}
                minWidth="min-w-[860px]"
              >
                {data.recentBookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="px-5 py-4">
                      <p className="font-bold text-sm">{booking.id}</p>
                      <p className="text-[11px] opacity-50">Created {booking.createdAt}</p>
                    </td>
                    <td className="px-5 py-4">
                      <p className="font-semibold text-sm">{booking.userName}</p>
                      <p className="text-[11px] opacity-50">{booking.userEmail}</p>
                    </td>
                    <td className="px-5 py-4 text-sm font-semibold">{booking.vehicleName}</td>
                    <td className="px-5 py-4 text-xs opacity-80">
                      {booking.startDate} to {booking.endDate}
                    </td>
                    <td className="px-5 py-4 font-black text-sm">${booking.total}</td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.18em] ${bookingStatusClass(booking.status)}`}
                      >
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </AdminTable>
            </div>
          )}
        </>
      )}
    </section>
  );
}
