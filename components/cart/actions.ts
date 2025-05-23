'use server';

import { cookies } from 'next/headers';
import { addToCart, createCart, getCart, removeFromCart, updateCart } from '../../lib/saleor';

export const addItem = async (variantId: string | undefined): Promise<String | undefined> => {
  const latestCookies = cookies();
  let cartId = latestCookies.get('cartId')?.value || '';
  let billingInfo = cookies().get('billingInfo')?.value || '';

  let cart: any;

  if (cartId) {
    cart = await getCart(cartId);
  }

  if (!cartId || !cart) {
    cart = await createCart(billingInfo);
    cartId = cart.id;
    cookies().set('cartId', cartId);
  }

  if (!variantId) {
    return 'Missing product variant ID';
  }
  try {
    await addToCart(cartId, [{ merchandiseId: variantId, quantity: 1 }]);
  } catch (e) {
    return 'Error adding item to cart';
  }
};

export const removeItem = async (lineId: string): Promise<String | undefined> => {
  const latestCookies = cookies();
  const cartId = latestCookies.get('cartId')?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }
  try {
    await removeFromCart(cartId, [lineId]);
  } catch (e) {
    return 'Error removing item from cart';
  }
};

export const updateItemQuantity = async ({
  lineId,
  variantId,
  quantity,
}: {
  lineId: string;
  variantId: string;
  quantity: number;
}): Promise<String | undefined> => {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }
  try {
    await updateCart(cartId, [
      {
        id: lineId,
        merchandiseId: variantId,
        quantity,
      },
    ]);
  } catch (e) {
    return 'Error updating item quantity';
  }
};
