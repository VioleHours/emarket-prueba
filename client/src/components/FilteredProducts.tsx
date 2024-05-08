import React from "react";
import { Product } from "../store/ProductStore";
import Card from "./Card";
import useFiltersStore from "../store/FiltersStore";
import '../App.css';

interface FilteredProductsProps {
  products: Product[];
}

const FilteredProducts: React.FC<FilteredProductsProps> = ({ products }) => {
  const { sortOrder, setSortOrder, selectedCategory, setSelectedCategory, searchTerm, setSearchTerm} = useFiltersStore();

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value !== "all" ? event.target.value : null);
  };

  const handleSortChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSortOrder(event.target.value as "asc" | "desc");
  };

  const handleResetFilter = () => {
    setSelectedCategory(null);
    setSearchTerm("");
    setSortOrder("default");
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const sortProducts = (
    products: Product[],
    sortOrder: "asc" | "desc" | "default"
  ): Product[] => {
    return products.slice().sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else if (sortOrder === 'desc') {
        return b.price - a.price;
      } else {
          return a.price;
      }
    });
  };

  const filterProductsByName = (products: Product[]): Product[] => {
    return searchTerm
      ? products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : products;
  };

  const filterProductsByCategory = (products: Product[]): Product[] => {
    return selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products;
  };

  const filteredByCategory = filterProductsByCategory(products);
  const filteredByName = filterProductsByName(filteredByCategory);
  const filteredAndSorted = sortProducts(filteredByName, sortOrder);

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div>
      <div className="filters">
        <select
          value={selectedCategory || "all"}
          onChange={handleCategoryChange}
          className="p-2 my-2 mx-auto md:mx-0 w-full md:w-auto max-w-60 border border-violet-300 rounded-md"
        >
          <option value="all">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className="p-2 my-2 mx-auto md:mx-0 w-full md:w-auto max-w-60 border border-violet-300 rounded-md"
        >
          <option value="asc">Sort by price ascending</option>
          <option value="desc">Sort by price descending</option>
          <option value="default">Reset filter</option>
        </select>
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 my-2 mx-auto md:mx-0 w-full md:w-auto max-w-60 border border-violet-300 rounded-md"
        />
        <button
          onClick={handleResetFilter}
          className="p-2 my-2 mx-auto md:mx-0 w-full md:w-auto max-w-60 border border-violet-300 rounded-md"
        >
          Reset filters
        </button>
      </div>
      {filteredAndSorted.length === 0 ? (
        <div className="text-red-500 text-center">No products found with that name or in that category.</div>
      ) : (
        <div className="gridOption">
          {filteredAndSorted.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FilteredProducts;
