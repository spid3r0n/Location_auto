import { Car } from '@/types';

export const featuredCars: Car[] = [
  { id: '1', name: 'BMW 5 Series', type: 'Sedan', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80', pricePerDay: 89, seats: 5, fuel: 'Petrol', power: '248 HP', transmission: 'Auto' },
  { id: '2', name: 'Mercedes GLE', type: 'SUV', image: 'https://images.unsplash.com/photo-1606611013016-969c19ba27d5?w=800&q=80', pricePerDay: 120, seats: 7, fuel: 'Diesel', power: '362 HP', transmission: 'Auto' },
  { id: '3', name: 'Porsche 911', type: 'Sport', image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80', pricePerDay: 220, seats: 2, fuel: 'Petrol', power: '443 HP', transmission: 'Manual' },
];