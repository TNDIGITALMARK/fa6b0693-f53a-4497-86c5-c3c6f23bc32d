/**
 * Mock Product Data
 * Stride E-commerce Store
 */

import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nike Air Max 270',
    slug: 'nike-air-max-270',
    brand: 'Nike',
    category: 'running',
    price: 149.99,
    description: 'The Nike Air Max 270 delivers visible cushioning under every step. With its sleek silhouette and breathable mesh upper, this shoe keeps you comfortable mile after mile.',
    images: [
      '/generated/nike-air-max-270.png',
      '/generated/nike-air-max-270.png',
      '/generated/nike-air-max-270.png'
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: [
      { name: 'White/Black', hex: '#FFFFFF', available: true },
      { name: 'Black', hex: '#000000', available: true },
      { name: 'Red', hex: '#DC2626', available: false }
    ],
    inStock: true,
    featured: true,
    rating: 4.5,
    reviewCount: 128
  },
  {
    id: '2',
    name: 'Adidas Ultraboost 22',
    slug: 'adidas-ultraboost-22',
    brand: 'Adidas',
    category: 'athletic',
    price: 189.99,
    description: 'Experience energy return with every stride. The Adidas Ultraboost 22 features responsive Boost cushioning and a Primeknit+ upper for adaptive support.',
    images: [
      '/generated/adidas-ultraboost-22.png',
      '/generated/adidas-ultraboost-22.png',
      '/generated/adidas-ultraboost-22.png'
    ],
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    colors: [
      { name: 'Blue/Gray', hex: '#3B82F6', available: true },
      { name: 'Green', hex: '#10B981', available: true },
      { name: 'Gray', hex: '#6B7280', available: true }
    ],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 256
  },
  {
    id: '3',
    name: 'Converse Chuck Taylor All Star',
    slug: 'converse-chuck-taylor',
    brand: 'Converse',
    category: 'casual',
    price: 79.99,
    description: 'An icon since 1917. The Converse Chuck Taylor All Star is a timeless classic with a canvas upper, rubber toe cap, and signature ankle patch.',
    images: [
      '/generated/converse-chuck-taylor.png',
      '/generated/converse-chuck-taylor.png',
      '/generated/converse-chuck-taylor.png'
    ],
    sizes: [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 13.5, 14],
    colors: [
      { name: 'White', hex: '#FFFFFF', available: true },
      { name: 'Black', hex: '#000000', available: true },
      { name: 'Red', hex: '#DC2626', available: true }
    ],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviewCount: 512
  },
  {
    id: '4',
    name: 'Vans Old Skool',
    slug: 'vans-old-skool',
    brand: 'Vans',
    category: 'skate',
    price: 69.99,
    description: 'The legendary lace-up skate shoe with durable suede and canvas uppers, reinforced toe caps, and the iconic Vans side stripe.',
    images: [
      '/generated/vans-old-skool.png',
      '/generated/vans-old-skool.png',
      '/generated/vans-old-skool.png'
    ],
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    colors: [
      { name: 'Black/White', hex: '#000000', available: true },
      { name: 'Navy', hex: '#1E40AF', available: true },
      { name: 'Burgundy', hex: '#991B1B', available: false }
    ],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 384
  },
  {
    id: '5',
    name: 'Timberland 6-Inch Premium Boot',
    slug: 'timberland-6-inch-boot',
    brand: 'Timberland',
    category: 'boots',
    price: 199.99,
    description: 'Built to protect. The iconic Timberland boot features waterproof leather, seam-sealed construction, and a padded collar for comfort.',
    images: [
      '/generated/timberland-6-inch.png',
      '/generated/timberland-6-inch.png',
      '/generated/timberland-6-inch.png'
    ],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13],
    colors: [
      { name: 'Wheat', hex: '#D97706', available: true },
      { name: 'Black', hex: '#000000', available: true }
    ],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 672
  },
  // Additional products for catalog variety
  {
    id: '6',
    name: 'Urban Explorer Sneaker',
    slug: 'urban-explorer-sneaker',
    brand: 'Nike',
    category: 'casual',
    price: 119.99,
    description: 'Lightweight and versatile sneakers perfect for everyday wear. Features breathable mesh construction and cushioned insole.',
    images: [
      '/generated/converse-chuck-taylor.png',
      '/generated/converse-chuck-taylor.png'
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: [
      { name: 'White', hex: '#FFFFFF', available: true },
      { name: 'Gray', hex: '#9CA3AF', available: true }
    ],
    inStock: true,
    featured: false,
    rating: 4.3,
    reviewCount: 89
  },
  {
    id: '7',
    name: 'Athletic Performance Runner',
    slug: 'athletic-performance-runner',
    brand: 'Adidas',
    category: 'running',
    price: 139.99,
    description: 'Engineered for speed and comfort. These running shoes feature responsive cushioning and a lightweight, breathable upper.',
    images: [
      '/generated/adidas-ultraboost-22.png',
      '/generated/adidas-ultraboost-22.png'
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: [
      { name: 'Navy', hex: '#1E40AF', available: true },
      { name: 'Gray', hex: '#6B7280', available: true }
    ],
    inStock: true,
    featured: false,
    rating: 4.4,
    reviewCount: 156
  },
  {
    id: '8',
    name: 'Timeless Leather Boot',
    slug: 'timeless-leather-boot',
    brand: 'Timberland',
    category: 'boots',
    price: 208.99,
    description: 'Premium full-grain leather construction with a classic silhouette. Built for durability and all-weather protection.',
    images: [
      '/generated/timberland-6-inch.png',
      '/generated/timberland-6-inch.png'
    ],
    sizes: [8, 9, 10, 11, 12],
    colors: [
      { name: 'Brown', hex: '#92400E', available: true },
      { name: 'Black', hex: '#000000', available: true }
    ],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewCount: 234
  },
  {
    id: '9',
    name: 'Casual Comfort Sneaker',
    slug: 'casual-comfort-sneaker',
    brand: 'Vans',
    category: 'casual',
    price: 64.99,
    description: 'Laid-back style meets everyday comfort. Canvas upper with padded collar and signature waffle outsole.',
    images: [
      '/generated/vans-old-skool.png',
      '/generated/vans-old-skool.png'
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    colors: [
      { name: 'Black', hex: '#000000', available: true },
      { name: 'Olive', hex: '#65A30D', available: true }
    ],
    inStock: true,
    featured: false,
    rating: 4.2,
    reviewCount: 178
  }
];

export const FEATURED_PRODUCTS = PRODUCTS.filter(p => p.featured);

export const CATEGORIES = [
  { id: 'all', name: 'All Shoes', slug: '' },
  { id: 'running', name: 'Running', slug: 'running' },
  { id: 'athletic', name: 'Athletic', slug: 'athletic' },
  { id: 'casual', name: 'Casual', slug: 'casual' },
  { id: 'skate', name: 'Skate', slug: 'skate' },
  { id: 'boots', name: 'Boots', slug: 'boots' }
];

export const BRANDS = ['Nike', 'Adidas', 'Converse', 'Vans', 'Timberland'];
