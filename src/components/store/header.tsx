'use client';

/**
 * Header Component
 * Matches design reference: Dark header with STRIDE logo, navigation, search, and cart
 */

import Link from 'next/link';
import { ShoppingCart, Search } from 'lucide-react';
import { useCart } from '@/lib/cart/store';
import { useState } from 'react';

const NAV_ITEMS = [
  { label: 'MEN', href: '/shop?category=men' },
  { label: 'WOMEN', href: '/shop?category=women' },
  { label: 'SNEAKERS', href: '/shop?category=sneakers' },
  { label: 'BOOTS', href: '/shop?category=boots' },
  { label: 'SALE', href: '/shop?sale=true', highlight: true }
];

export function Header() {
  const { itemCount } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="sticky top-0 z-50 shadow-header">
      {/* Top Bar - Dark background with logo and cart */}
      <div className="bg-dark-header">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold tracking-tight text-white">
                STRIDE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    item.highlight
                      ? 'bg-brand-green px-4 py-2 rounded-md text-white hover:opacity-90'
                      : 'text-white hover:text-gray-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Cart Icon */}
            <Link
              href="/cart"
              className="relative flex items-center text-white hover:text-gray-300 transition-colors"
              aria-label={`Shopping cart with ${itemCount} items`}
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-green text-xs font-bold text-white">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar - White background */}
      <div className="bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="relative max-w-2xl">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-2.5 rounded-lg border border-border focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/20 transition-all"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand-green text-white rounded-md hover:opacity-90 transition-opacity"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation (Simplified) */}
      <div className="md:hidden bg-dark-header border-t border-gray-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex overflow-x-auto py-3 space-x-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`whitespace-nowrap text-sm font-medium ${
                  item.highlight
                    ? 'bg-brand-green px-3 py-1.5 rounded-md text-white'
                    : 'text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
