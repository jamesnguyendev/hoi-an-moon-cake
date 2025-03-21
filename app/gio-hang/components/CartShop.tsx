'use client';

import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import DeleteItemButton from '../../../components/cart/delete-item-button';
import EditItemQuantityButton from '../../../components/cart/edit-item-quantity-button';
import { DEFAULT_OPTION } from '../../../lib/constants';
import { Cart } from '../../../lib/types';
import { createUrl } from '../../../lib/utils';

type MerchandiseSearchParams = {
  [key: string]: string;
};

const CartShop = ({ cart }: { cart: Cart | null | undefined }) => {
  function formattedNumber(number: any) {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    })
      .format(Number(number))
      .replace(/\./g, ',');
  }
  return (
    <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
      {!cart || cart.lines.length === 0 ? (
        <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
          <ShoppingCartIcon className="h-16" />
          <p className="mt-6 text-center text-2xl font-bold">Giỏ hàng của bạn đang trống.</p>
        </div>
      ) : (
        <div className="mb-6 space-y-6">
          {cart.lines.map((item, i) => {
            const merchandiseSearchParams = {} as MerchandiseSearchParams;

            item.merchandise.selectedOptions.forEach(({ name, value }) => {
              if (value !== DEFAULT_OPTION) {
                merchandiseSearchParams[name.toLowerCase()] = value;
              }
            });

            const merchandiseUrl = createUrl(
              `/product/${item.merchandise.product.handle}`,
              new URLSearchParams(merchandiseSearchParams),
            );

            return (
              <div
                key={i}
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6"
              >
                <div className="flex-wrap space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                  <Link href={merchandiseUrl} className="shrink-0 md:order-1">
                    <Image
                      src={item.merchandise.product.featuredImage.url}
                      alt={
                        item.merchandise.product.featuredImage.altText ||
                        item.merchandise.product.title
                      }
                      width={200}
                      height={300}
                      quality={100}
                      className="w-full min-w-full object-contain transition-opacity duration-300 hover:opacity-85 md:w-[8rem] md:object-cover"
                    />
                  </Link>

                  <label htmlFor="counter-input" className="sr-only">
                    Choose quantity:
                  </label>
                  <div className="mt-5 flex items-center justify-between md:order-3 md:justify-end">
                    <div className="flex items-center justify-center p-2">
                      <div className="flex items-center space-x-2 rounded-lg border border-gray-200 bg-white p-2">
                        <EditItemQuantityButton item={item} type="minus" />
                        <div className="">{item.quantity}</div>
                        <EditItemQuantityButton item={item} type="plus" />
                      </div>
                    </div>
                    <div className="text-end md:order-4 md:w-32">
                      <p className="text-base font-bold text-gray-900  ">
                        {formattedNumber(item.cost.totalAmount.amount)}
                      </p>
                    </div>
                  </div>

                  <div className="w-full min-w-0 flex-1  space-y-4 md:order-2 md:max-w-md">
                    <Link
                      href={merchandiseUrl}
                      className="  text-xl font-semibold text-primary hover:underline  "
                    >
                      {item.merchandise.product.title}
                    </Link>
                    <div className="mt-2 flex items-center gap-4">
                      <DeleteItemButton item={item} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CartShop;
