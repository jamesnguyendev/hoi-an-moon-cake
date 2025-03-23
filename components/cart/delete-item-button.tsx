import LoadingDots from 'components/loading-dots';
import { useRouter } from 'next/navigation';

import clsx from 'clsx';
import type { CartItem } from 'lib/types';
import { useTransition } from 'react';
import { removeItem } from './actions';

export default function DeleteItemButton({ item }: { item: CartItem }) {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  return (
    <div>
      <button
        aria-label="Remove cart item"
        onClick={() => {
          startTransition(async () => {
            const error = await removeItem(item.id);

            if (error) {
              throw new Error(error.toString());
            }
            router.refresh();
            // window.location.reload();
          });
        }}
        disabled={isPending}
        className={clsx(
          'ease flex items-center justify-center text-red-500 transition-all duration-200',
          {
            'cursor-not-allowed px-0': isPending,
          },
        )}
      >
        {isPending ? (
          <LoadingDots className="bg-second" />
        ) : (
          <span className="flex cursor-pointer items-center text-sm font-medium text-red-500 hover:underline">
            Xóa
          </span>
        )}
      </button>
    </div>
  );
}
