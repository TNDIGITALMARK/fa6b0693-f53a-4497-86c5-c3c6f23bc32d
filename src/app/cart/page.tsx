/**
 * Shopping Cart Page
 * View cart items, update quantities, and proceed to checkout
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/store/header';
import { Footer } from '@/components/store/footer';
import { useCart } from '@/lib/cart/store';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function CartPage() {
  const { items, updateQuantity, removeItem, total, itemCount } = useCart();

  const shippingCost = total > 100 ? 0 : 9.99;
  const taxRate = 0.08;
  const tax = total * taxRate;
  const grandTotal = total + shippingCost + tax;

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1 py-16 bg-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <ShoppingBag className="mx-auto h-24 w-24 text-gray-300 mb-6" />
              <h1 className="text-3xl font-bold text-primary mb-4">Your Cart is Empty</h1>
              <p className="text-secondary mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link
                href="/"
                className="inline-block bg-brand-green text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12 bg-light">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary mb-8">Shopping Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}-${item.color}`}
                  className="bg-white rounded-lg p-6 shadow-sm"
                >
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="relative h-32 w-32 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-contain p-2"
                        sizes="128px"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 space-y-3">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-semibold text-lg text-primary">
                            {item.product.name}
                          </h3>
                          <p className="text-sm text-secondary">{item.product.brand}</p>
                        </div>
                        <button
                          onClick={() =>
                            removeItem(item.product.id, item.size, item.color)
                          }
                          className="text-red-600 hover:text-red-700 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="flex items-center space-x-4 text-sm text-secondary">
                        <span>Size: {item.size}</span>
                        <span>•</span>
                        <span>Color: {item.color}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-border rounded-md">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.color,
                                item.quantity - 1
                              )
                            }
                            className="p-2 hover:bg-gray-100 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-6 py-2 font-medium">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.color,
                                item.quantity + 1
                              )
                            }
                            className="p-2 hover:bg-gray-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-lg font-bold text-primary">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                          {item.quantity > 1 && (
                            <p className="text-sm text-secondary">
                              ${item.product.price.toFixed(2)} each
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24 space-y-6">
                <h2 className="text-xl font-bold text-primary">Order Summary</h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-secondary">Subtotal ({itemCount} items)</span>
                    <span className="font-medium text-primary">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary">Shipping</span>
                    <span className="font-medium text-primary">
                      {shippingCost === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `$${shippingCost.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {shippingCost > 0 && (
                    <p className="text-xs text-secondary italic">
                      Free shipping on orders over $100
                    </p>
                  )}
                  <div className="flex justify-between">
                    <span className="text-secondary">Estimated Tax</span>
                    <span className="font-medium text-primary">${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="flex justify-between mb-6">
                    <span className="text-lg font-bold text-primary">Total</span>
                    <span className="text-2xl font-bold text-primary">
                      ${grandTotal.toFixed(2)}
                    </span>
                  </div>

                  <Link
                    href="/checkout"
                    className="block w-full bg-brand-green text-white text-center py-4 rounded-md font-semibold hover:opacity-90 transition-opacity"
                  >
                    Proceed to Checkout
                  </Link>
                </div>

                <Link
                  href="/"
                  className="block text-center text-sm text-ring hover:underline"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
