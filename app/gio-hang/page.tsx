import { cookies } from 'next/headers';
import { getCart } from '../../lib/saleor';
import CartShop from './components/CartShop';
import OrderSummary from './components/OrderSummary';

export async function generateMetadata() {
  return {
    title: `Giỏ hàng | Hội An Mooncake`,
    description: 'Xem giỏ hàng chi tiết của bạn',
  };
}

const Page = async () => {
  const cookielatest = cookies();
  const cartId = cookielatest.get('cartId')?.value || null;
  let cart: any;
  if (cartId) {
    cart = await getCart(cartId);
  }
  return (
    <section className="bg-white py-3 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 py-24 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">Giỏ hàng</h2>

        <div className="sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <CartShop cart={cart} />
          <OrderSummary cart={cart} />
        </div>
      </div>
    </section>
  );
};

export default Page;
