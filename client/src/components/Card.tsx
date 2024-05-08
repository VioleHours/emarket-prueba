import { Product } from "../store/ProductStore";


interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>Precio: ${product.price}</p>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
    </div>
  );
};

export default Card;