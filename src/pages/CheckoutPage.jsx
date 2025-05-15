// pages/CheckoutPage.js
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CheckoutPage = () => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
  });
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process checkout logic here
    dispatch({ type: 'CLEAR_CART' });
    navigate('/confirmation', { state: { orderDetails: shippingInfo } });
  };

  return (
    <div className="checkout-page">
      <div className="shipping-form">
        <h1>Checkout</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input 
              type="text" 
              required 
              value={shippingInfo.name}
              onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
            />
          </label>
          {/* Add other form fields similarly */}
          <button type="submit" className="btn btn-primary">Place Order</button>
        </form>
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        {cart.map(item => (
          <div key={item.id} className="order-item">
            <span>{item.name}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="total">
          <h3>Total:</h3>
          <h3>${cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
};
export default CheckoutPage