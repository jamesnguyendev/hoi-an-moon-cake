import AddToCart from 'components/cart/add-to-cart';
import Image from 'next/image';
import BreadcrumProduct from './BreadcrumProduct';
import SliderCombo from './SliderCombo';

const ComboMooncakeProduct = ({ product }: { product?: any }) => {
  function formattedPrice(price: any) {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    })
      .format(Number(price))
      .replace(/\./g, ',');
  }

  return (
    <div>
      <BreadcrumProduct title={product.title} breadcrum={'Combo Bánh Trung Thu'} />
      <section className="container mt-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <Image
              src={product.images[0]?.url as string}
              alt=""
              width={800}
              height={600}
              quality={100}
              objectFit="contain"
              className="w-full"
            />
            {product.images.length > 0 && <SliderCombo images={product.images} />}
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="border-y border-gray-200 py-4 text-2xl font-semibold text-primary">
              {product.title}
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-md font-thin text-gray-500 line-through">
                {product.variants[1]?.price.amount &&
                Number(product.variants[1]?.price.amount) > 0 ? (
                  <span className="text-md font-thin text-gray-500 line-through">
                    {formattedPrice(Number(product.variants[1]?.price.amount))}
                  </span>
                ) : null}
              </span>
              <span className="text-xl font-bold text-red-500">
                {formattedPrice(product.variants[0]?.price.amount) || 'Chưa có giá'}
              </span>
            </div>
            <div className="flex flex-col gap-2 border-b  border-gray-200 pb-7 text-sm">
              <p className="mb-3 text-black">
                Combo gồm: {product.variants.length < 3 && 'Chưa có thông tin combo'}
              </p>
              {product?.variants?.slice(2).map((item: any, index: number) => (
                <span key={index} className="mx-10 list-item">
                  {item.title}
                </span>
              ))}
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

export default ComboMooncakeProduct;
