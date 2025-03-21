import { CheckoutComplete } from '../../lib/saleor';

export default async function Page({ searchParams }) {
  const param = searchParams['checkout'];

  await CheckoutComplete(param);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 py-[12rem]">
      <div className="py mx-4 w-full max-w-2xl transform rounded-xl bg-white p-12 text-center shadow-lg transition-all hover:shadow-xl">
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-12 w-12 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>

        <h1 className="mb-6 text-4xl font-extrabold text-green-600">Đặt hàng thành công!</h1>

        <p className="mb-8 text-xl text-gray-700">Cảm ơn bạn đã đặt hàng.</p>
        <div className="mt-12">
          <a
            href="/shop"
            className="inline-block rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 hover:bg-green-700"
          >
            Tiếp tục mua sắm
          </a>
        </div>
      </div>
    </div>
  );
}
