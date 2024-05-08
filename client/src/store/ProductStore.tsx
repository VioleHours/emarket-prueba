import create from "zustand";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
  sortedProducts: Product[];
  setSortedProducts: (sortedProducts: Product[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  sortedProducts: [],
  setSortedProducts: (sortedProducts) => set({ sortedProducts }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  error: null,
  setError: (error) => set({ error }),
}));
