import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { products } from '../data';
import { useState } from 'react';
import Price from '../components/Price';
import Button from '../components/Button';

const ProductDetails = () => {
  const { id } = useParams();
  const { dispatch } = useCart();
  const { addToast } = useToast();
  const product = products.find(p => p.id === parseInt(id));
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="not-found-content">
          <h1>Product Not Found</h1>
          <p>The product you're looking for doesn't exist or has been removed.</p>
          <a href="/" className="btn btn-primary">Back to Home</a>
        </div>
      </div>
    );
  }

  const addToCart = () => {
    if (!size || !color) {
      addToast('Please select size and color', 'error');
      return;
    }
    dispatch({ 
      type: 'ADD_ITEM', 
      payload: { 
        ...product, 
        size, 
        color, 
        quantity: parseInt(quantity) 
      } 
    });
    addToast('Item added to cart successfully!', 'success');
  };

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
  const colors = [
    { name: 'Black', value: 'black', hex: '#000000' },
    { name: 'White', value: 'white', hex: '#ffffff' },
    { name: 'Navy', value: 'navy', hex: '#1e3a8a' },
    { name: 'Gray', value: 'gray', hex: '#6b7280' },
    { name: 'Brown', value: 'brown', hex: '#92400e' },
    { name: 'Blue', value: 'blue', hex: '#3b82f6' }
  ];

  return (
    <div className="product-detail-container">
    <div className="product-detail">
      <div className="product-images">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
          <div className="product-header">
        <h1>{product.name}</h1>
            <div className="product-rating">
              <div className="stars">★★★★★</div>
              <span className="rating-text">(4.8) • 127 reviews</span>
            </div>
          </div>
          
          <div className="price-section">
            <Price price={product.price} className="price" />
            <p className="price-note">Free shipping on orders over PKR 2,500</p>
          </div>
          
        <p className="description">{product.description}</p>

          <div className="product-options">
            <div className="option-group">
              <label className="option-label">Size</label>
              <div className="size-options">
                {sizes.map(sizeOption => (
                  <button
                    key={sizeOption}
                    className={`size-option ${size === sizeOption ? 'selected' : ''}`}
                    onClick={() => setSize(sizeOption)}
                  >
                    {sizeOption}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <label className="option-label">Color</label>
              <div className="color-options">
                {colors.map(colorOption => (
                  <button
                    key={colorOption.value}
                    className={`color-option ${color === colorOption.value ? 'selected' : ''}`}
                    onClick={() => setColor(colorOption.value)}
                    style={{ backgroundColor: colorOption.hex }}
                    title={colorOption.name}
                  >
                    {color === colorOption.value && <span className="checkmark">✓</span>}
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <label className="option-label">Quantity</label>
              <div className="quantity-selector">
                <button 
                  className="quantity-btn" 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span className="quantity-display">{quantity}</span>
                <button 
                  className="quantity-btn" 
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
        </button>
              </div>
            </div>
          </div>

          <div className="product-actions">
            <Button variant="primary" size="large" onClick={addToCart}>
              Add to Cart
            </Button>
            <Button variant="secondary" size="large">
              Add to Wishlist
            </Button>
          </div>

          <div className="product-features">
            <div className="feature">
              <strong>✓ Free Shipping</strong>
              <span>On orders over $50</span>
            </div>
            <div className="feature">
              <strong>✓ Easy Returns</strong>
              <span>30-day return policy</span>
            </div>
            <div className="feature">
              <strong>✓ Secure Payment</strong>
              <span>100% secure checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
