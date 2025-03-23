'use client';

import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ProductSlider = ({ products }: { products: any[] }) => {
  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const formattedPriceFn = (price: number) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    })
      .format(price)
      .replace(/\./g, ',');
  };

  return (
    <Carousel responsive={responsive} showDots arrows={false}>
      {products.map((product, index) => (
        <div key={index} className="mr-3">
          <Image
            src={product.images[0]?.url as string}
            alt={product.title}
            width={300}
            height={200}
            quality={100}
            className="w-full rounded-lg object-cover shadow-lg"
          />
          <div className="my-4 flex flex-col items-center justify-center text-center">
            <a href={`/product/${product.handle}`} className="line-clamp-1 text-lg">
              {product.title}x
            </a>
            <div className="flex items-center gap-3 max-lg:flex-col">
              {product.variants[1]?.price.amount &&
              Number(product.variants[1]?.price.amount) > 0 ? (
                <span className="text-sm font-thin text-gray-500 line-through">
                  {formattedPriceFn(Number(product.variants[1]?.price.amount))}
                </span>
              ) : (
                <span className="text-sm font-thin text-gray-500 line-through">0 đ</span>
              )}
              {product.variants[0]?.price.amount &&
              Number(product.variants[0]?.price.amount) > 0 ? (
                <span className="text-lg text-red-600">
                  {formattedPriceFn(Number(product.variants[0]?.price.amount))}
                </span>
              ) : (
                '0'
              )}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ProductSlider;
