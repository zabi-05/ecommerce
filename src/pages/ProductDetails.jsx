// pages/ProductDetail.js
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data';

const ProductDetail = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <div className="product-images">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <button 
          className="btn btn-primary"
          onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail