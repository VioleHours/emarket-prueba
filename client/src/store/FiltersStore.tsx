import { create } from "zustand";

interface FiltersStore {
  sortOrder: "asc" | "desc" | "default";
  setSortOrder: (order: "asc" | "desc" | "default") => void;
  selectedCategory: string | null;
  setSelectedCategory: (selectedCategory: string | null) => void;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}

const useFiltersStore = create<FiltersStore>((set) => ({
  sortOrder: "default",
  setSortOrder: (order) => set({ sortOrder: order }),
  selectedCategory: "",
  setSelectedCategory: (selectedCategory) =>
    set({ selectedCategory: selectedCategory }),
  searchTerm: "",
  setSearchTerm: (searchTerm) => set({ searchTerm: searchTerm }),
}));

export default useFiltersStore;
