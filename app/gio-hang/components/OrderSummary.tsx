import { CreditCardIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Cart } from '../../../lib/types';

const OrderSummary = ({ cart }: { cart: Cart | null | undefined }) => {
  function formattedNumber(number: any) {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    })
      .format(Number(number))
      .replace(/\./g, ',');
  }
  return (
    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
        {!cart || cart.lines.length === 0 ? (
          <div className="mt-10 flex w-full flex-col items-center justify-center overflow-hidden">
            <CreditCardIcon className="h-16" />
            <p className="mt-6 text-center text-2xl font-bold">Chưa Thanh Toán.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <p className="text-xl font-semibold text-gray-900 ">Tổng đơn hàng</p>

            <div className="space-y-4">
              <div className="space-y-2">
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500  ">Giá gốc:</dt>
                  <dd className="text-base font-medium text-gray-900  ">
                    {formattedNumber(cart.cost.totalAmount.amount)}
                  </dd>
                </dl>

                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500  ">Giảm giá:</dt>
                  <dd className="text-base font-medium text-green-600">0 đ</dd>
                </dl>

                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500  ">Thuế:</dt>
                  <dd className="text-base font-medium text-gray-900  ">0 đ</dd>
                </dl>
              </div>

              <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2  ">
                <dt className="text-base font-bold text-gray-900  ">Tổng:</dt>
                <dd className="text-base font-bold text-gray-900  ">
                  {formattedNumber(cart.cost.totalAmount.amount)}
                </dd>
              </dl>
            </div>
            <Link
              href={cart.checkoutUrl}
              className="hover:bg-primary-800 focus:ring-primary-300 flex w-full items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4"
            >
              Thanh toán
            </Link>

            <div className="flex items-center justify-center gap-2">
              <span className="text-sm font-normal text-gray-500  ">Hoặc</span>
              <a
                href="/shop"
                title=""
                className="text-primary-700 inline-flex items-center gap-2 text-sm font-medium underline hover:no-underline  "
              >
                Tiếp tục mua sắm
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
