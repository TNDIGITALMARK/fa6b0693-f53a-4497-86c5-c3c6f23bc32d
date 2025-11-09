/**
 * Order Success Page
 * Confirmation page after successful checkout
 */

import Link from 'next/link';
import { Header } from '@/components/store/header';
import { Footer } from '@/components/store/footer';
import { CheckCircle } from 'lucide-react';

export default function OrderSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-16 bg-light">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-12 shadow-sm text-center">
            <CheckCircle className="mx-auto h-20 w-20 text-green-600 mb-6" />
            <h1 className="text-3xl font-bold text-primary mb-4">
              Order Placed Successfully!
            </h1>
            <p className="text-lg text-secondary mb-8">
              Thank you for your purchase. Your order is being processed and will ship soon.
            </p>
            <div className="bg-light rounded-lg p-6 mb-8">
              <p className="text-sm text-secondary mb-2">Order Number</p>
              <p className="text-2xl font-bold text-primary font-mono">
                #{Math.random().toString(36).substring(2, 10).toUpperCase()}
              </p>
            </div>
            <p className="text-sm text-secondary mb-8">
              You will receive an email confirmation shortly with your order details and
              tracking information.
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
