import { AddToCart } from 'components/cart/add-to-cart';
import Image from 'next/image';
import BreadcrumProduct from './BreadcrumProduct';

const MooncakeProduct = ({ product }: { product?: any }) => {
  const formattedPrice = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })
    .format(Number(product.variants[0]?.price.amount))
    .replace(/\./g, ',');

  return (
    <div>
      <BreadcrumProduct title={product.title} />
      <section className="container mt-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Image
            src={product.images[0]?.url as string}
            alt=""
            width={800}
            height={600}
            quality={100}
            objectFit="contain"
            className="w-full"
          />
          <div className="flex flex-col gap-4">
            <h1 className="border-y border-gray-200 py-4 text-2xl font-semibold text-primary">
              {product.title}
            </h1>
            <span className="text-xl font-bold text-red-600">
              {formattedPrice || 'Chưa có giá'}
            </span>
            <div className="flex flex-col gap-2 border-b  border-gray-200 pb-7 text-sm">
              <p className="font-bold">
                Loại bánh:
                <span className="font-normal"> {product?.typeCake}</span>
              </p>
              <p className="font-bold">
                Hương vị:
                <span className="font-normal"> {product?.taste}</span>
              </p>
              <p className="font-bold">
                Trứng muối: <span className="font-normal">{product?.egg}</span>
              </p>
              <p className="font-bold">
                Trọng lượng: <span className="font-normal">{product?.gram}</span>
              </p>
              <p className="font-bold">
                Hạn sử dụng: <span className="font-normal">{product?.expire}</span>
              </p>
            </div>
            <AddToCart variants={product?.variants} availableForSale={product?.availableForSale} />
            <span className="mt-4 flex gap-3  border-y border-gray-200 py-5 text-sm">
              Danh mục:
              <span className="text-second">{product.category}</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MooncakeProduct;
