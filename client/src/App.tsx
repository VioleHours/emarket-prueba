import React, { useEffect } from "react";
import { useProductStore } from "./store/ProductStore";
import Card from "./components/Card";
import { fetchProducts } from "./api/Api";

function App() {
  const { products, setProducts } = useProductStore();

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error al consumir la API:", error);
      });
  }, []);

  return (
    <>
      <div className="bg-red-500 w-full h-full">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
