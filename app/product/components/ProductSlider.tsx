'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ProductSlider = ({ products }: { products: any[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [0, 4, 8];

  const formattedPriceFn = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    })
      .format(price)
      .replace(/\./g, ',');
  };

  return (
    <div className="relative mt-5 w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex w-[300%] transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}
      >
        {slides.map((startIndex, slideIndex) => (
          <div key={slideIndex} className="flex w-1/3 flex-shrink-0 justify-between gap-4">
            {products.slice(startIndex, startIndex + 4).map((product, index) => (
              <div key={index} className="flex w-1/4 flex-col items-center gap-4 text-center">
                <Image
                  src={product.images[0]?.url as string}
                  alt={product.title}
                  width={300}
                  height={200}
                  quality={100}
                  className="w-full rounded-lg object-cover shadow-lg"
                />
                <a href={`/product/${product.handle}`} className="line-clamp-1 text-lg">
                  {product.title}
                </a>
                <div className="flex items-center gap-3">
                  {product.variants[1]?.price.amount &&
                  Number(product.variants[1]?.price.amount) > 0 ? (
                    <span className="text-sm font-thin text-gray-500 line-through">
                      {formattedPriceFn(Number(product.variants[1]?.price.amount))}
                    </span>
                  ) : null}
                  {product.variants[0]?.price.amount &&
                  Number(product.variants[0]?.price.amount) > 0 ? (
                    <span className="text-lg text-red-600">
                      {formattedPriceFn(Number(product.variants[0]?.price.amount))}
                    </span>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full ${
              currentSlide === index ? 'bg-primary' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
