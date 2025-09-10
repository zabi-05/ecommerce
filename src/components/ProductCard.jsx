// src/components/ProductCard.js
import { Link } from "react-router-dom";
import Price from "./Price";
import Button from "./Button";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card fade-in">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />
      <div className="product-info">
        <h3>{product.name}</h3>
        <Price price={product.price} className="product-price" />
        <Button as={Link} to={`/products/${product.id}`} variant="primary">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
