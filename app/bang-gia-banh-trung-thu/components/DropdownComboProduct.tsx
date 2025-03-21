import { getProducts } from '../../../lib/saleor';
import ProductCombo from '../../../components/ProductCombo';
import { defaultSort, sortingCombo } from '../../../lib/constants';
import Dropdown from './Dropdown';

const DropdownComboProduct = async ({ searchParams }) => {
  const sort = searchParams.q;
  const { sortKey, reverse } = sortingCombo.find((item) => item.slug === sort) || defaultSort;

  const products = await getProducts({
    sortKey,
    reverse,
    productTypes: 'UHJvZHVjdFR5cGU6Mjc=',
  });

  return (
    <div>
      <Dropdown sort={sortingCombo} />
      <ProductCombo title={false} ComboProduct={products} />
    </div>
  );
};

export default DropdownComboProduct;
