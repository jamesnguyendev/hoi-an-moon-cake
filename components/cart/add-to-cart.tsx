import { ProductVariant } from 'lib/types';
import AddToCartClient from './AddToCartClient';

export function AddToCart({
  variants,
  availableForSale,
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
}) {
  return <AddToCartClient variants={variants} availableForSale={availableForSale} />;
}

export default AddToCart;
