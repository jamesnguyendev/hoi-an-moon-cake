'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

const SliderCombo = ({ images }: { images: any[] }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
      });
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
    }
  };

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
    }
  };

  return (
    <div className="relative w-full">
      <button
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800 p-2 text-white shadow-md"
        onClick={() => scroll('left')}
      >
        ◀
      </button>

      <div ref={scrollRef} className="flex gap-5 overflow-x-hidden">
        {images.map((item: any, index: number) => (
          <Image
            key={index}
            src={item?.url as string}
            alt=""
            width={100}
            height={600}
            quality={100}
            objectFit="contain"
            className="w-full max-w-full cursor-pointer"
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>
      <button
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-gray-800 p-2 text-white shadow-md"
        onClick={() => scroll('right')}
      >
        ▶
      </button>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-5"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-5 top-5 text-3xl text-white"
            onClick={() => setSelectedImage(null)}
          >
            ✖
          </button>
          <button
            className="absolute left-5 text-3xl text-white"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
          >
            ◀
          </button>
          <Image
            src={images[selectedImage].url}
            alt=""
            width={800}
            height={600}
            quality={100}
            objectFit="contain"
            className="z-50"
          />
          <button
            className="absolute right-5 text-3xl text-white"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            ▶
          </button>
        </div>
      )}
    </div>
  );
};

export default SliderCombo;
