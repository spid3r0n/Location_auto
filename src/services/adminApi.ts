import {
  AdminApiResponse,
  AdminBooking,
  AdminDashboardPayload,
  AdminUser,
  AdminVehicle,
  BookingStatus,
  VehicleApproval,
} from '../types';

const delay = (ms = 350) => new Promise((resolve) => setTimeout(resolve, ms));

let usersDb: AdminUser[] = [
  { id: 'USR-1001', name: 'Nora Bennett', email: 'nora.bennett@example.com', phone: '+44 20 7946 1234', role: 'user', status: 'active', createdAt: '2026-02-11' },
  { id: 'USR-1002', name: 'Adam Singh', email: 'adam.singh@example.com', phone: '+44 20 7946 1143', role: 'user', status: 'active', createdAt: '2026-01-05' },
  { id: 'USR-1003', name: 'Lina Rocha', email: 'lina.rocha@example.com', phone: '+44 20 7946 2212', role: 'support', status: 'active', createdAt: '2025-11-19' },
  { id: 'USR-1004', name: 'Ethan Cole', email: 'ethan.cole@example.com', phone: '+44 20 7946 3921', role: 'user', status: 'suspended', createdAt: '2025-09-02' },
];

const VEHICLES_KEY = 'demoVehicles';

const seedVehicles = (): AdminVehicle[] => [
  { id: 'VEH-001', name: 'BMW 5 Series', type: 'Sedan', image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1200', pricePerDay: 89, seats: 5, fuel: 'Petrol', transmission: 'Auto', status: 'available', approval: 'approved', updatedAt: '2026-04-10' },
  { id: 'VEH-002', name: 'Mercedes GLE', type: 'SUV', image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200', pricePerDay: 120, seats: 7, fuel: 'Diesel', transmission: 'Auto', status: 'available', approval: 'approved', updatedAt: '2026-04-12' },
  { id: 'VEH-003', name: 'Porsche 911', type: 'Sport', image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1200', pricePerDay: 220, seats: 2, fuel: 'Petrol', transmission: 'Manual', status: 'available', approval: 'approved', updatedAt: '2026-04-08' },
  { id: 'VEH-004', name: 'Audi RS6', type: 'Avant', image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1200', pricePerDay: 180, seats: 5, fuel: 'Petrol', transmission: 'Auto', status: 'available', approval: 'approved', updatedAt: '2026-04-01' },
  { id: 'VEH-005', name: 'Tesla Model S', type: 'Electric', image: 'https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=1200', pricePerDay: 150, seats: 5, fuel: 'Electric', transmission: 'Direct', status: 'available', approval: 'approved', updatedAt: '2026-04-05' },
  { id: 'VEH-006', name: 'Range Rover', type: 'SUV', image: 'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1200', pricePerDay: 140, seats: 5, fuel: 'Hybrid', transmission: 'Auto', status: 'available', approval: 'approved', updatedAt: '2026-04-03' },
];

let vehiclesDb: AdminVehicle[] = seedVehicles();

const ensureVehicles = () => {
  if (typeof window === 'undefined') return;
  const stored = localStorage.getItem(VEHICLES_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as AdminVehicle[];
      if (Array.isArray(parsed) && parsed.length > 0) {
        const seedMap = new Map(seedVehicles().map((item) => [item.id, item.image]));
        const migrated = parsed.map((item) => {
          const seedImage = seedMap.get(item.id);
          if (seedImage && item.image.includes('unsplash.com')) {
            return { ...item, image: seedImage };
          }
          return item;
        });
        vehiclesDb = migrated;
        const changed = migrated.some((item, index) => item.image !== parsed[index].image);
        if (changed) {
          localStorage.setItem(VEHICLES_KEY, JSON.stringify(migrated));
        }
        return;
      }
    } catch {
      // fall through to reseed
    }
  }
  localStorage.setItem(VEHICLES_KEY, JSON.stringify(vehiclesDb));
};

const persistVehicles = () => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(VEHICLES_KEY, JSON.stringify(vehiclesDb));
};

let bookingsDb: AdminBooking[] = [
  { id: 'BKG-9001', userName: 'Nora Bennett', userEmail: 'nora.bennett@example.com', vehicleName: 'BMW 5 Series', startDate: '2026-04-22', endDate: '2026-04-26', total: 356, status: 'confirmed', createdAt: '2026-04-17' },
  { id: 'BKG-9002', userName: 'Adam Singh', userEmail: 'adam.singh@example.com', vehicleName: 'Mercedes GLE', startDate: '2026-04-21', endDate: '2026-04-24', total: 360, status: 'pending', createdAt: '2026-04-18' },
  { id: 'BKG-9003', userName: 'Ethan Cole', userEmail: 'ethan.cole@example.com', vehicleName: 'Porsche 911', startDate: '2026-04-19', endDate: '2026-04-20', total: 440, status: 'cancelled', createdAt: '2026-04-15' },
  { id: 'BKG-9004', userName: 'Lina Rocha', userEmail: 'lina.rocha@example.com', vehicleName: 'Audi RS6', startDate: '2026-04-13', endDate: '2026-04-17', total: 720, status: 'completed', createdAt: '2026-04-09' },
  { id: 'BKG-9005', userName: 'Nora Bennett', userEmail: 'nora.bennett@example.com', vehicleName: 'Mercedes GLE', startDate: '2026-04-20', endDate: '2026-04-23', total: 360, status: 'ongoing', createdAt: '2026-04-16' },
];

const clone = <T,>(value: T): T => JSON.parse(JSON.stringify(value)) as T;
const wrap = <T,>(endpoint: string, data: T): AdminApiResponse<T> => ({ endpoint, data });

const findById = <T extends { id: string }>(items: T[], id: string, entity: string): T => {
  const found = items.find((item) => item.id === id);
  if (!found) throw new Error(`${entity} with id ${id} was not found`);
  return found;
};

const sortByDateDesc = <T extends { createdAt: string }>(items: T[]): T[] =>
  [...items].sort((a, b) => b.createdAt.localeCompare(a.createdAt));

const sortVehiclesByUpdatedAtDesc = (items: AdminVehicle[]): AdminVehicle[] =>
  [...items].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));

const nextVehicleId = (): string => {
  ensureVehicles();
  const max = vehiclesDb.reduce((acc, item) => {
    const number = Number(item.id.replace('VEH-', ''));
    return Number.isNaN(number) ? acc : Math.max(acc, number);
  }, 0);
  return `VEH-${String(max + 1).padStart(3, '0')}`;
};

export async function getAdminDashboard(): Promise<AdminApiResponse<AdminDashboardPayload>> {
  await delay();
  ensureVehicles();
  const pendingListings = vehiclesDb.filter((item) => item.approval === 'pending').length;
  const pendingBookings = bookingsDb.filter((item) => item.status === 'pending').length;
  const activeUsers = usersDb.filter((item) => item.status === 'active').length;
  const payload: AdminDashboardPayload = {
    stats: { totalUsers: usersDb.length, activeUsers, totalBookings: bookingsDb.length, pendingBookings, totalVehicles: vehiclesDb.length, pendingListings },
    recentBookings: sortByDateDesc(bookingsDb).slice(0, 6),
  };
  return wrap('/admin/dashboard', clone(payload));
}

export async function listAdminUsers(search = ''): Promise<AdminApiResponse<AdminUser[]>> {
  await delay();
  const keyword = search.trim().toLowerCase();
  const data = keyword ? usersDb.filter((item) => `${item.name} ${item.email} ${item.id}`.toLowerCase().includes(keyword)) : usersDb;
  return wrap('/admin/users', clone(sortByDateDesc(data)));
}

export async function updateAdminUser(id: string, patch: Partial<Pick<AdminUser, 'name' | 'phone' | 'role'>>): Promise<AdminApiResponse<AdminUser>> {
  await delay();
  const found = findById(usersDb, id, 'User');
  Object.assign(found, patch);
  return wrap(`/admin/users/${id}`, clone(found));
}

export async function setAdminUserSuspended(id: string, suspended: boolean): Promise<AdminApiResponse<AdminUser>> {
  await delay();
  const found = findById(usersDb, id, 'User');
  found.status = suspended ? 'suspended' : 'active';
  return wrap(`/admin/users/${id}/suspend`, clone(found));
}

export async function deleteAdminUser(id: string): Promise<AdminApiResponse<{ id: string }>> {
  await delay();
  findById(usersDb, id, 'User');
  usersDb = usersDb.filter((item) => item.id !== id);
  return wrap(`/admin/users/${id}`, { id });
}

export async function listAdminVehicles(search = ''): Promise<AdminApiResponse<AdminVehicle[]>> {
  await delay();
  ensureVehicles();
  const keyword = search.trim().toLowerCase();
  const data = keyword ? vehiclesDb.filter((item) => `${item.name} ${item.type} ${item.id}`.toLowerCase().includes(keyword)) : vehiclesDb;
  return wrap('/admin/vehicles', clone(sortVehiclesByUpdatedAtDesc(data)));
}

export async function createAdminVehicle(input: Omit<AdminVehicle, 'id' | 'updatedAt'>): Promise<AdminApiResponse<AdminVehicle>> {
  await delay();
  ensureVehicles();
  const next: AdminVehicle = { ...input, id: nextVehicleId(), updatedAt: new Date().toISOString().slice(0, 10) };
  vehiclesDb = [next, ...vehiclesDb];
  persistVehicles();
  return wrap('/admin/vehicles', clone(next));
}

export async function updateAdminVehicle(id: string, patch: Partial<Omit<AdminVehicle, 'id'>>): Promise<AdminApiResponse<AdminVehicle>> {
  await delay();
  ensureVehicles();
  const found = findById(vehiclesDb, id, 'Vehicle');
  Object.assign(found, patch, { updatedAt: new Date().toISOString().slice(0, 10) });
  persistVehicles();
  return wrap(`/admin/vehicles/${id}`, clone(found));
}

export async function setVehicleApproval(id: string, approval: VehicleApproval): Promise<AdminApiResponse<AdminVehicle>> {
  await delay();
  ensureVehicles();
  const found = findById(vehiclesDb, id, 'Vehicle');
  found.approval = approval;
  found.updatedAt = new Date().toISOString().slice(0, 10);
  persistVehicles();
  return wrap(`/admin/vehicles/${id}/approval`, clone(found));
}

export async function setVehicleAvailability(id: string, status: AdminVehicle['status']): Promise<AdminApiResponse<AdminVehicle>> {
  await delay();
  ensureVehicles();
  const found = findById(vehiclesDb, id, 'Vehicle');
  found.status = status;
  found.updatedAt = new Date().toISOString().slice(0, 10);
  persistVehicles();
  return wrap(`/admin/vehicles/${id}/availability`, clone(found));
}

export async function deleteAdminVehicle(id: string): Promise<AdminApiResponse<{ id: string }>> {
  await delay();
  ensureVehicles();
  findById(vehiclesDb, id, 'Vehicle');
  vehiclesDb = vehiclesDb.filter((item) => item.id !== id);
  persistVehicles();
  return wrap(`/admin/vehicles/${id}`, { id });
}

export async function listAdminBookings(status: BookingStatus | 'all' = 'all'): Promise<AdminApiResponse<AdminBooking[]>> {
  await delay();
  const data = status === 'all' ? bookingsDb : bookingsDb.filter((item) => item.status === status);
  return wrap('/admin/bookings', clone(sortByDateDesc(data)));
}

export async function updateAdminBooking(id: string, patch: Partial<Pick<AdminBooking, 'startDate' | 'endDate' | 'status'>>): Promise<AdminApiResponse<AdminBooking>> {
  await delay();
  const found = findById(bookingsDb, id, 'Booking');
  Object.assign(found, patch);
  return wrap(`/admin/bookings/${id}`, clone(found));
}

export async function cancelAdminBooking(id: string): Promise<AdminApiResponse<AdminBooking>> {
  await delay();
  const found = findById(bookingsDb, id, 'Booking');
  found.status = 'cancelled';
  return wrap(`/admin/bookings/${id}/cancel`, clone(found));
}
