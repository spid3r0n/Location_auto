export type ThemeKey = 'luxury' | 'solar' | 'cyber';

export interface ThemeConfig {
  name: string;
  bg: string;
  accent: string;
  btn: string;
  mesh: string;
  text: string;
  card: string;
  subtext: string;
  glow: string;
  navBg: string;
}

export interface Car {
  id: string;
  name: string;
  type: string;
  image: string;
  pricePerDay: number;
  seats: number;
  fuel: string;
  power: string;
  transmission: string;
}

export interface Reservation {
  id: string;
  carName: string;
  image: string;
  startDate: string;
  endDate: string;
  total: number;
  status: 'ongoing' | 'cancelled' | 'completed';
}
