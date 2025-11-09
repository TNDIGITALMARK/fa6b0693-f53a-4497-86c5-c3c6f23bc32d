/**
 * Product Type Definitions
 * Stride E-commerce Store
 */

export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: string;
  category: 'running' | 'athletic' | 'casual' | 'skate' | 'boots';
  price: number;
  description: string;
  images: string[];
  sizes: number[];
  colors: ProductColor[];
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviewCount: number;
}

export interface ProductColor {
  name: string;
  hex: string;
  available: boolean;
}

export interface CartItem {
  product: Product;
  size: number;
  color: string;
  quantity: number;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  helpful: number;
}

export interface FilterOptions {
  categories: string[];
  brands: string[];
  sizes: number[];
  colors: string[];
  priceRange: [number, number];
}
