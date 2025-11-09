/**
 * Home Page - Product Catalog
 * Stride E-commerce Store
 */

import { Header } from '@/components/store/header';
import { Footer } from '@/components/store/footer';
import { HeroSection } from '@/components/store/hero-section';
import { ProductCard } from '@/components/store/product-card';
import { PRODUCTS, FEATURED_PRODUCTS } from '@/lib/products/data';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Collections */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-primary mb-8 uppercase tracking-tight">
              Featured Collections
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURED_PRODUCTS.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* All Products */}
        <section className="py-12 lg:py-16 bg-light">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-primary uppercase tracking-tight">
                All Shoes
              </h2>
              <p className="text-secondary">
                {PRODUCTS.length} Products
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}