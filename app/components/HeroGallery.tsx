"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const HeroGallery = () => {
  const slides = [
    "/images/hop-banh-trung-thu-hoi-an-mooncake-8.jpg",
    "/images/hop-qua-banh-trung-thu-hoianmooncake-6.jpg",
    "/images/hop-qua-banh-trung-thu-hoianmooncake-5.jpg",
    "/images/hop-qua-banh-trung-thu-hoianmooncake-2.jpg",
    "/images/hop-banh-trung-thu-hoi-an-mooncake-7.jpg",
    "/images/hop-qua-banh-trung-thu-hoianmooncake-1.jpg",
    "/images/hop-banh-trung-thu-hoi-an-mooncake-8 (1).jpg",
    "/images/hop-qua-banh-trung-thu-hoianmooncake-4.jpg",
  ];

  const [itemsPerPage, setItemsPerPage] = useState(4);
  const step = 2; // Số slide nhảy mỗi lần

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet
      } else {
        setItemsPerPage(4); // Desktop
      }
    };

    updateItemsPerPage(); // Gọi lần đầu tiên
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalSlides = Math.ceil(slides.length / itemsPerPage);
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + step >= totalSlides ? 0 : prev + step));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="container mt-10 mb-5">
      <div className="text-primary text-center text-3xl font-semibold">
        <h3>GALLERY</h3>
        <div className="overflow-hidden relative w-full mt-5">
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="flex min-w-full justify-center gap-4"
              >
                {slides
                  .slice(
                    slideIndex * itemsPerPage,
                    (slideIndex + 1) * itemsPerPage,
                  )
                  .map((s, index) => (
                    <Image
                      key={index}
                      src={s}
                      alt={`Slide ${index}`}
                      width={250}
                      height={250}
                      quality={100}
                      className="object-cover max-sm:w-full rounded-lg shadow-lg"
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroGallery;
