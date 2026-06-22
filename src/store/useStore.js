import { create } from 'zustand';
import sofaImg from '../assets/sofa.jpg';
import bedImg from '../assets/bed.jpg';
import diningImg from '../assets/dining.jpg';
import livingRoomImg from '../assets/living-room.jpg';
import coffeeTableImg from '../assets/coffee-table.jpg';
import lightTableImg from '../assets/light-table.jpg';

// Mock Product Data
export const products = [
  { id: 1, name: 'Royal Chesterfield Sofa', category: 'Sofas', price: 85000, image: sofaImg, rating: 4.9, badge: 'Best Seller' },
  { id: 2, name: 'Emperor King Bed', category: 'Beds', price: 120000, image: bedImg, rating: 5.0, badge: 'Premium' },
  { id: 3, name: 'Modern Velvet 3-Seater', category: 'Sofas', price: 65000, image: livingRoomImg, rating: 4.8 },
  { id: 4, name: 'Classic Teak Dining Set', category: 'Dining', price: 95000, image: diningImg, rating: 4.7 },
  { id: 5, name: 'Minimalist Queen Bed', category: 'Beds', price: 75000, image: bedImg, rating: 4.6 },
  { id: 6, name: 'Coffee Table', category: 'Tables', price: 45000, image: coffeeTableImg, rating: 4.9 },
];

export const useStore = create((set) => ({
  categoryFilter: 'All',
  setCategoryFilter: (category) => set({ categoryFilter: category }),
  
  priceRange: [0, 200000],
  setPriceRange: (range) => set({ priceRange: range }),

  emiAmount: 100000,
  emiTenure: 12,
  setEmiAmount: (amount) => set({ emiAmount: amount }),
  setEmiTenure: (tenure) => set({ emiTenure: tenure }),
}));
