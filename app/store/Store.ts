import { ProductOrderField } from 'lib/saleor/generated/graphql';
import { create } from 'zustand';

type SortOption = {
  title: string;
  slug: string | null;
  sortKey: ProductOrderField;
  reverse: boolean;
};


interface ModalState {
  isOpen: boolean;
  selectedSort: SortOption | null;
  setIsOpen: (open: boolean) => void;
  setSort: (sort: SortOption) => void;
  resetSort: () => void;
}

interface CartState {
  cart: any;
  fetchCart: () => Promise<void>;
  addItem: (variantId: string) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  selectedSort: null,
  setIsOpen: (open) => set({ isOpen: open }),
  setSort: (sort) => set({ selectedSort: sort }),
  resetSort: () => set({ selectedSort: null }),
}));
