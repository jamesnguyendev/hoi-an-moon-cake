'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Cookies from 'js-cookie';
import { ProductVariant } from 'lib/types';
import { useEffect, useState, useTransition } from 'react';
import LoadingDots from '../../components/loading-dots';

export function AddToCartClient({
  variants,
  availableForSale,
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const [searchParams, setSearchParams] = useState(new URLSearchParams());

  useEffect(() => {
    setSearchParams(new URLSearchParams(window.location.search));
  }, []);

  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;

  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase()),
    ),
  );

  const selectedVariantId = variant?.id || defaultVariantId;

  const title = !availableForSale
    ? 'Out of stock'
    : !selectedVariantId
    ? 'Please select options'
    : undefined;

  return (
    <button
      aria-label="Add item to cart"
      disabled={isPending || !availableForSale || !selectedVariantId}
      title={title}
      onClick={() => {
        if (!availableForSale || !selectedVariantId) return;

        if (!Cookies.get('billingInfo')) {
          window.location.href = '/form-checkout-info';
          return;
        }

        startTransition(async () => {
          const res = await fetch('/api/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ variantId: selectedVariantId }),
          });

          if (res.ok) {
            alert('Đã thêm vào giỏ hàng');
          }

          if (!res.ok) {
            const { error } = await res.json();
            throw new Error(error);
          }
        });
      }}
      className={clsx(
        'relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90',
        {
          'cursor-not-allowed opacity-60 hover:opacity-60': !availableForSale || !selectedVariantId,
          'cursor-not-allowed': isPending,
        },
      )}
    >
      <div className="absolute left-0 ml-4">
        {!isPending ? <PlusIcon className="h-5" /> : <LoadingDots className="mb-3 bg-white" />}
      </div>
      <span>{availableForSale ? 'Thêm vào giỏ hàng' : 'Hết hàng'}</span>
    </button>
  );
}

export default AddToCartClient;
