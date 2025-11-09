/**
 * Product Card Component
 * Matches design reference: White card with image, name, price, and green CTA button
 */

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/products/types';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-white px-4 py-2 rounded-md font-semibold text-sm">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Brand */}
        <p className="text-xs font-medium text-secondary uppercase tracking-wide mb-1">
          {product.brand}
        </p>

        {/* Product Name */}
        <h3 className="font-semibold text-base text-primary mb-2 line-clamp-2 group-hover:text-ring transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-xs text-secondary">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          <button
            className="bg-brand-green text-white px-4 py-1.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!product.inStock}
            onClick={(e) => {
              e.preventDefault();
              // Quick add to cart functionality can be added here
            }}
          >
            {product.inStock ? 'Shop Now' : 'Sold Out'}
          </button>
        </div>

        {/* Available Colors Indicator */}
        {product.colors.length > 0 && (
          <div className="mt-3 flex items-center space-x-1.5">
            {product.colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="h-4 w-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-secondary">
                +{product.colors.length - 4}
              </span>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
