import { getProducts } from '../../../lib/saleor';
import ProductSlider from './ProductSlider';

const ProductRelate = async ({ id }: { id: string | undefined }) => {
  const relatedProducts = await getProducts({ productTypes: id });

  if (!relatedProducts.length) return null;

  return (
    <section className="container mb-8">
      <div className="my-6 flex flex-col gap-4">
        <div className="text-xl font-semibold text-primary">Sản phẩm liên quan</div>
        <div className="relative h-1 w-full bg-gray-300">
          <div className="absolute start-0 h-1 w-20 bg-amber-400"></div>
        </div>

        <ProductSlider products={relatedProducts} />
      </div>
    </section>
  );
};

export default ProductRelate;
