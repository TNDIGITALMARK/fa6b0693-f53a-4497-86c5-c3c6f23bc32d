/**
 * Shopping Cart Store
 * Client-side cart management with localStorage persistence
 */

'use client';

import { CartItem, Product } from '@/lib/products/types';

const CART_STORAGE_KEY = 'stride-cart';

export class CartStore {
  private static instance: CartStore;
  private items: CartItem[] = [];
  private listeners: Array<() => void> = [];

  private constructor() {
    // Load cart from localStorage on initialization
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(CART_STORAGE_KEY);
      if (stored) {
        try {
          this.items = JSON.parse(stored);
        } catch (e) {
          console.error('Failed to parse cart from localStorage', e);
          this.items = [];
        }
      }
    }
  }

  static getInstance(): CartStore {
    if (!CartStore.instance) {
      CartStore.instance = new CartStore();
    }
    return CartStore.instance;
  }

  subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(listener => listener());
    if (typeof window !== 'undefined') {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.items));
    }
  }

  getItems(): CartItem[] {
    return [...this.items];
  }

  addItem(product: Product, size: number, color: string, quantity: number = 1): void {
    const existingIndex = this.items.findIndex(
      item =>
        item.product.id === product.id &&
        item.size === size &&
        item.color === color
    );

    if (existingIndex >= 0) {
      this.items[existingIndex].quantity += quantity;
    } else {
      this.items.push({ product, size, color, quantity });
    }

    this.notify();
  }

  updateQuantity(productId: string, size: number, color: string, quantity: number): void {
    const index = this.items.findIndex(
      item =>
        item.product.id === productId &&
        item.size === size &&
        item.color === color
    );

    if (index >= 0) {
      if (quantity <= 0) {
        this.items.splice(index, 1);
      } else {
        this.items[index].quantity = quantity;
      }
      this.notify();
    }
  }

  removeItem(productId: string, size: number, color: string): void {
    this.items = this.items.filter(
      item =>
        !(item.product.id === productId &&
          item.size === size &&
          item.color === color)
    );
    this.notify();
  }

  clearCart(): void {
    this.items = [];
    this.notify();
  }

  getTotal(): number {
    return this.items.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  }

  getItemCount(): number {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }
}

// React hook for using cart store
import { useState, useEffect } from 'react';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const store = CartStore.getInstance();
    setItems(store.getItems());

    const unsubscribe = store.subscribe(() => {
      setItems(store.getItems());
    });

    return unsubscribe;
  }, []);

  const store = CartStore.getInstance();

  return {
    items: mounted ? items : [],
    addItem: store.addItem.bind(store),
    updateQuantity: store.updateQuantity.bind(store),
    removeItem: store.removeItem.bind(store),
    clearCart: store.clearCart.bind(store),
    total: store.getTotal(),
    itemCount: store.getItemCount()
  };
}
