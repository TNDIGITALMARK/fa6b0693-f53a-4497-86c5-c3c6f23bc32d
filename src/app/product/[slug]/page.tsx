/**
 * Product Detail Page
 * Individual product view with images, details, size selection, and add to cart
 */

'use client';

import { use, useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Header } from '@/components/store/header';
import { Footer } from '@/components/store/footer';
import { PRODUCTS } from '@/lib/products/data';
import { useCart } from '@/lib/cart/store';
import { Star, Check, Minus, Plus } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: PageProps) {
  const { slug } = use(params);
  const product = PRODUCTS.find((p) => p.slug === slug);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0].name || '');
  const [quantity, setQuantity] = useState(1);

  const { addItem } = useCart();

  if (!product) {
    notFound();
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addItem(product, selectedSize, selectedColor, quantity);
    alert('Added to cart!');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-contain p-8"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index
                        ? 'border-ring'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-contain p-2"
                      sizes="(max-width: 1024px) 25vw, 12vw"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Brand & Name */}
              <div>
                <p className="text-sm font-medium text-secondary uppercase tracking-wide mb-2">
                  {product.brand}
                </p>
                <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-secondary">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="border-t border-b border-border py-6">
                <p className="text-4xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </p>
                {product.inStock ? (
                  <p className="mt-2 text-sm text-green-600 flex items-center">
                    <Check className="h-4 w-4 mr-1" />
                    In Stock
                  </p>
                ) : (
                  <p className="mt-2 text-sm text-red-600">Out of Stock</p>
                )}
              </div>

              {/* Description */}
              <div>
                <h2 className="text-lg font-semibold text-primary mb-2">Description</h2>
                <p className="text-secondary leading-relaxed">{product.description}</p>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="text-sm font-semibold text-primary mb-3">
                  Color: {selectedColor}
                </h3>
                <div className="flex items-center space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      disabled={!color.available}
                      className={`relative h-10 w-10 rounded-full border-2 transition-all ${
                        selectedColor === color.name
                          ? 'border-ring scale-110'
                          : 'border-gray-300 hover:border-gray-400'
                      } ${!color.available ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {!color.available && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-px w-full bg-gray-500 rotate-45" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-sm font-semibold text-primary mb-3">Select Size</h3>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-4 border rounded-md text-sm font-medium transition-all ${
                        selectedSize === size
                          ? 'border-ring bg-ring/10 text-ring'
                          : 'border-border hover:border-gray-400 text-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-semibold text-primary">Quantity:</label>
                  <div className="flex items-center border border-border rounded-md">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-6 py-2 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="w-full bg-brand-green text-white py-4 rounded-md text-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>

              {/* Category & Brand */}
              <div className="border-t border-border pt-6 space-y-2 text-sm">
                <p className="text-secondary">
                  <span className="font-semibold text-primary">Category:</span>{' '}
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </p>
                <p className="text-secondary">
                  <span className="font-semibold text-primary">Brand:</span> {product.brand}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
