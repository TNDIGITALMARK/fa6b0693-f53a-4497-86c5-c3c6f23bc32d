/**
 * Hero Section Component
 * Matches design reference: Light gray background with "STEP INTO STYLE" headline and featured images
 */

import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="bg-light py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary mb-4 uppercase tracking-tight">
              STEP INTO STYLE
            </h1>
            <p className="text-lg sm:text-xl text-secondary mb-8 max-w-2xl mx-auto lg:mx-0">
              Explore our Latest Collections
            </p>
          </div>

          {/* Right Content - Featured Products */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              {/* Featured Product Images */}
              <div className="relative aspect-square bg-white rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="/generated/timberland-6-inch.png"
                  alt="Featured boot"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
              </div>
              <div className="relative aspect-square bg-white rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="/generated/converse-chuck-taylor.png"
                  alt="Featured sneaker"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
              </div>
              <div className="relative aspect-square bg-white rounded-lg shadow-sm overflow-hidden">
                <Image
                  src="/generated/vans-old-skool.png"
                  alt="Featured casual shoe"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
