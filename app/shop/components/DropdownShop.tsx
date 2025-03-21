'use client';

import { useState } from 'react';
import { sorting } from '../../../lib/constants';

const DropdownShop = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text- start flex items-center rounded-lg border-2 border-[#00246D]
        py-2.5  text-sm font-medium text-primary max-lg:px-3 lg:px-16"
        type="button"
      >
        <span className="line-clamp-1">Thứ tự mặc định</span>
        <svg
          className="ms-3 h-2.5 w-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full divide-y divide-gray-100 rounded-lg border-2 border-[#00246D] bg-white shadow-sm">
          <ul className="py-2 text-sm text-gray-700 ">
            {sorting.map((item, index) => (
              <li key={index}>
                <a href={`/shop/` + item.slug || '#'} className="block px-4 py-2 hover:bg-gray-100">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownShop;
