import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa");
        }
        return response.json() as Promise<Product[]>;
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error al consumir la API:", error);
      });
  }, []);

  return (
    <>
      <div>
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
