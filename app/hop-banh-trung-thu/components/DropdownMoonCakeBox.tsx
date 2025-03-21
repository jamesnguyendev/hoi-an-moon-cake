'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { sortingCombo} from '../../../lib/constants';
import { useModalStore } from '../../store/Store';

const DropdownMoonCakeBox = () => {
  const { isOpen, setIsOpen } = useModalStore();
  const fileName = usePathname();
  const url = fileName.split('/')[1];

  return (
    <div className="container relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex min-w-full items-center justify-between rounded-lg border border-gray-300 px-12 py-2.5 text-center text-sm font-medium text-primary"
        type="button"
      >
        Thứ tự mặc định
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
        <div className="container absolute left-0 right-0 z-10 mt-2  w-full">
          <ul className="divide-y divide-gray-100 rounded-lg border border-gray-300 bg-white  py-2 text-sm text-gray-700 shadow-sm">
            {sortingCombo.map((item, index) => (
              <li key={index}>
                <Link
                  className="block cursor-pointer px-4 py-2 hover:bg-gray-100"
                  href={`/${url}/${item.slug}`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMoonCakeBox;
