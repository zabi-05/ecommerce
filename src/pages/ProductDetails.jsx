import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data';
import { useState } from 'react';

const ProductDetails = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  if (!product) return <div>Product not found</div>;

  const addToCart = () => {
    if (!size || !color) {
      alert('Please select size and color');
      return;
    }
    dispatch({ type: 'ADD_ITEM', payload: { ...product, size, color } });
  };

  return (
    <div className="product-detail">
      <div className="product-images">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>

        <label>
          Size:
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">Select Size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </label>

        <label>
          Color:
          <select value={color} onChange={(e) => setColor(e.target.value)}>
            <option value="">Select Color</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
          </select>
        </label>

        <button className="btn btn-primary" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
