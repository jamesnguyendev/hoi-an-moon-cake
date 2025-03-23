import ProductShowcase from 'components/ProductShowcase';
import { defaultSort, sorting } from 'lib/constants';
import { getProductCount, getProducts } from 'lib/saleor';
import { Metadata } from 'next';
import DropdownShop from './components/DropdownShop';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Shop | Hội An Mooncake',
    description: 'Sản phẩm Hội An Mooncake | Thương hiệu bánh trung thu',
  };
};

export default async function Page({ searchParams }) {
  const sort = searchParams['slug-shop'];

  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const countTotalProduct = await getProductCount(process.env.ID_MOONCAKE);
  const products = await getProducts({ sortKey, reverse, productTypes: process.env.ID_MOONCAKE });

  return (
    <div className="pt-26">
      <span className="container mt-3 flex items-center gap-1 text-sm">
        Shop
        <svg
          className="mx-1 h-3 w-3 text-second rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        Sản phẩm
      </span>
      <div className="container mt-4 flex items-center justify-between">
        <span className="line-clamp-1">Hiển thị tất cả {countTotalProduct} kết quả</span>
        <div className="">
          <DropdownShop />
        </div>
      </div>
      <ProductShowcase products={products} />
    </div>
  );
}
