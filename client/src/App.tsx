import React, { useEffect } from "react";
import { useProductStore } from "./store/ProductStore";
import "./App.css";
import { fetchProducts } from "./api/Api";
import FilterComponent from "./components/FilteredProducts";

const App: React.FC = () => {
  const { setProducts, sortedProducts, setSortedProducts } = useProductStore();

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setSortedProducts(data);
      })
      .catch((error) => {
        console.error("Error al consumir la API:", error);
      });
  }, []);


  return (
    <>
      <div className="bg-red-200 w-full h-full p-4">
        <FilterComponent products={sortedProducts}/>
      </div>
    </>
  );
};

export default App;
