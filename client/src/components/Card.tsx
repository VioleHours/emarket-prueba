import React from "react";
import useProductStore, { Product } from "../store/ProductStore";

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const {
    showDescription,
    setShowDescription,
    activeProductId,
    setActiveProductId,
  } = useProductStore();

  const toggleDescription = () => {
    setShowDescription(!showDescription);
    setActiveProductId(product.id);
  };

  const closeDescription = () => {
    setShowDescription(false);
    setActiveProductId(null);
  };

  return (
    <div className="relative w-full p-4">
      <div
        className="bg-white rounded-lg overflow-hidden shadow-xl h-[45.3rem] xl:h-[35rem] cursor-pointer"
        onClick={toggleDescription}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[35rem] p-4 xl:h-[25rem]"
        />
        <div className="p-4">
          <h2 className="text-xl xl:text-sm font-semibold mb-2">{product.title}</h2>
          <p className="text-gray-700">Price: ${product.price}</p>
          <p className="text-violet-300">Click to see description</p>
        </div>
      </div>
      {showDescription && activeProductId === product.id && (
        <div
          className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={closeDescription}
        >
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 ">{product.title}</h2>
            <p className="text-gray-700">
              <b>Description:</b> {product.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
