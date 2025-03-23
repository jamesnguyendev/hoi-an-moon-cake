import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { defaultSort, sorting } from '../../../lib/constants';
import { getProducts } from '../../../lib/saleor';

export const runtime = 'edge';

export async function generateMetadata({
  params,
}: {
  params: { collection: string };
}): Promise<Metadata> {
  const sort = params['slug-shop'];

  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, productTypes: process.env.ID_MOONCAKE });
  if (!products) return notFound();

  const productTitles = products
    .slice(0, 3) // Lấy tối đa 3 sản phẩm
    .map((product) => product?.seo?.title || product?.title) // Ưu tiên seo.title, nếu không có thì lấy title
    .filter(Boolean) // Loại bỏ giá trị `null` hoặc `undefined`
    .join(', '); // Ghép tiêu đề lại

  // Lấy mô tả từ danh sách sản phẩm (tối đa 3 sản phẩm)
  const productDescriptions = products
    .slice(0, 3)
    .map((product) => product?.seo?.description || product?.description)
    .filter(Boolean)
    .join(' | '); // Ghép mô tả bằng `|` để dễ đọc

  return {
    title: productTitles || 'Sản phẩm nổi bật',
    description: productDescriptions || 'Khám phá các sản phẩm chất lượng.',
  };
}

export default async function ({ params }) {
  const sort = params['slug-shop'];
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({ sortKey, reverse, productTypes: process.env.ID_MOONCAKE });

  return <div></div>;
}
