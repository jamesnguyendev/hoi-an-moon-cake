import { ProductOrderField } from './saleor/generated/graphql';

export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey?: ProductOrderField;
  reverse?: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Thứ tự mặc định',
  slug: null,
  sortKey: ProductOrderField.Rank,
  reverse: false,
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  {
    title: 'Thứ tự theo mức độ phổ biến',
    slug: 'populate-desc',
    sortKey: ProductOrderField.Rank,
    reverse: false,
  }, // asc
  {
    title: ' Thứ tự theo điểm đánh giá',
    slug: 'rating-desc',
    sortKey: ProductOrderField.Rating,
    reverse: true,
  },
  {
    title: 'Mới nhất',
    slug: 'newest-desc',
    sortKey: ProductOrderField.CreatedAt,
    reverse: true,
  },
  {
    title: 'Thứ tự theo giá: thấp đến cao',
    slug: 'price-asc',
    sortKey: ProductOrderField.MinimalPrice,
    reverse: false,
  }, // asc
  {
    title: 'Thứ tự theo giá: cao xuống thấp',
    slug: 'price-desc',
    sortKey: ProductOrderField.MinimalPrice,
    reverse: true,
  },
];
export const sortingCombo: SortFilterItem[] = [
  defaultSort,
  {
    title: 'Thứ tự theo mức độ phổ biến',
    slug: 'combo-populate-desc',
    sortKey: ProductOrderField.Rank,
    reverse: false,
  }, // asc
  {
    title: ' Thứ tự theo điểm đánh giá',
    slug: 'combo-rating-desc',
    sortKey: ProductOrderField.Rating,
    reverse: true,
  },
  {
    title: 'Mới nhất',
    slug: 'combo-newest-desc',
    sortKey: ProductOrderField.CreatedAt,
    reverse: true,
  },
  {
    title: 'Thứ tự theo giá: thấp đến cao',
    slug: 'combo-price-asc',
    sortKey: ProductOrderField.Price,
    reverse: false,
  },
  {
    title: 'Thứ tự theo giá: cao xuống thấp',
    slug: 'combo-price-desc',
    sortKey: ProductOrderField.Price,
    reverse: true,
  },
];
export const TAGS = {
  collections: 'collections',
  products: 'products',
};

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
