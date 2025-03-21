import ProductShowcase from '../../../components/ProductShowcase';
import { defaultSort, sorting } from '../../../lib/constants';
import { getProducts } from '../../../lib/saleor';
import Dropdown from './Dropdown';

const DropdownProduct = async ({ searchParams }) => {
  const sort = searchParams.q;
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({
    sortKey,
    reverse,
    productTypes: process.env.ID_MOONCAKE,
  });

  return (
    <div>
      <Dropdown sort={sorting} />
      <ProductShowcase products={products} />
    </div>
  );
};

export default DropdownProduct;
