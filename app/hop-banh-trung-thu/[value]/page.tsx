import ProductCombo from '../../../components/ProductCombo';
import { defaultSort, sortingCombo } from '../../../lib/constants';
import { getProducts } from '../../../lib/saleor';

const Page = async ({ params }) => {
  const sort = params['value'];
  const { sortKey, reverse } = sortingCombo.find((item) => item.slug === sort) || defaultSort;

  const ComboProduct = await getProducts({
    sortKey,
    reverse,
    productTypes: process.env.ID_COMBO_MOONCAKE,
  });

  return (
    <div>
      <ProductCombo ComboProduct={ComboProduct} />
    </div>
  );
};

export default Page;
