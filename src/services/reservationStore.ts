import { Reservation } from '@/types';

const STORAGE_KEY = 'demoReservations';

type ReservationStore = Record<string, Reservation[]>;

const readStore = (): ReservationStore => {
  if (typeof window === 'undefined') return {};
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as ReservationStore;
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
};

const writeStore = (store: ReservationStore) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
};

export const listUserReservations = (userId: string | null | undefined): Reservation[] => {
  if (!userId) return [];
  const store = readStore();
  return store[userId] ?? [];
};

export const createUserReservation = (
  userId: string,
  input: Omit<Reservation, 'id' | 'status'> & { status?: Reservation['status'] }
): Reservation => {
  const store = readStore();
  const next: Reservation = {
    id: `RES-${Date.now()}`,
    carName: input.carName,
    image: input.image,
    startDate: input.startDate,
    endDate: input.endDate,
    total: input.total,
    status: input.status ?? 'ongoing',
  };
  const current = store[userId] ?? [];
  store[userId] = [next, ...current];
  writeStore(store);
  return next;
};
