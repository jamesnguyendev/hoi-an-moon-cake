'use client';

import Link from 'next/link';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className="pt-26  bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="text-primary-600 mb-4 text-7xl font-extrabold tracking-tight lg:text-9xl">
            500
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl ">
            Có gì đó đang sai. Vui lòng thử lại.
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 ">
            Xin lỗi, chúng tôi không tìm lỗi. Bạn sẽ tìm thấy nhiều thứ để khám phá trên trang chủ{' '}
          </p>
          <Link
            href="/"
            className="bg-primary-600 hover:bg-primary-800 focus:ring-primary-300 my-4 inline-flex rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </section>
  );
}
