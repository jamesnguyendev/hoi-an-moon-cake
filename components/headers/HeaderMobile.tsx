'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false); // Đóng menu khi click vào item

  return (
    <div className="block xl:hidden">
      <div className="relative">
        {/* Nút mở menu */}
        <button onClick={toggleMenu} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10 cursor-pointer hover:opacity-80"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-50 flex flex-col bg-white transition-opacity">
            <div className="flex w-full items-center justify-between pe-7 ps-3">
              <a href={'/'} onClick={closeMenu}>
                <Image
                  alt="Logo mooncake"
                  src={'/images/logo.png'}
                  width={75}
                  height={75}
                  quality={100}
                />
              </a>
              <button onClick={closeMenu} className="text-3xl font-bold">
                ✖
              </button>
            </div>

            <div
              className="flex flex-col font-thin capitalize text-black *:cursor-pointer *:border-t *:border-gray-200 *:px-5 *:py-3 
              *:last:border-b "
            >
              <a
                href={'/'}
                onClick={closeMenu}
                className="duration-500 hover:bg-[#f9cb4b] hover:text-white"
              >
                Trang chủ
              </a>
              <a
                href={'/gioi-thieu'}
                onClick={closeMenu}
                className="duration-500 hover:bg-[#f9cb4b] hover:text-white"
              >
                giới thiệu
              </a>
              <a
                href={'/shop'}
                onClick={closeMenu}
                className="duration-500 hover:bg-[#f9cb4b] hover:text-white"
              >
                sản phẩm
              </a>
              <a
                href={'/catalogue'}
                onClick={closeMenu}
                className="duration-500 hover:bg-[#f9cb4b] hover:text-white"
              >
                catelogue
              </a>
              <a
                href={'/hop-banh-trung-thu'}
                onClick={closeMenu}
                className="duration-500 hover:bg-[#f9cb4b] hover:text-white"
              >
                hộp bánh
              </a>
              <a
                href={'/bang-gia-banh-trung-thu'}
                onClick={closeMenu}
                className="duration-500 hover:bg-[#f9cb4b] hover:text-white"
              >
                bảng giá
              </a>
              <a
                href={'/lien-he'}
                onClick={closeMenu}
                className="duration-500 hover:bg-[#f9cb4b] hover:text-white"
              >
                liên hệ
              </a>
              <a
                href={'/chinh-sach-kinh-doanh'}
                onClick={closeMenu}
                className="duration-500 hover:bg-[#f9cb4b] hover:text-white"
              >
                chính sách
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
