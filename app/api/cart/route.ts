import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { addItem } from '../../../components/cart/actions';
import { getCart } from '../../../lib/saleor';

export async function POST(req: Request) {
  try {
    const { variantId } = await req.json();
    if (!variantId) {
      return NextResponse.json({ error: 'Missing product variant ID' }, { status: 400 });
    }

    const error = await addItem(variantId);
    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

export async function GET() {
  const cartId = cookies().get('cartId')?.value || null;
  const cart = cartId ? await getCart(cartId) : null;
  return NextResponse.json({ cart });
}
