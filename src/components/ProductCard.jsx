import { Link } from 'react-router-dom';

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
        <p>${product.price}</p>
        <Link to={`/products/${product.id}`} className="btn btn-primary">
          View Details
        </Link>
      </div>
    </div>
  );
};
 export default ProductCard