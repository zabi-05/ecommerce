import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import EasyPaisaPayment from './EasyPaisaPayment';

const CheckoutPage = () => {
  const { cart, dispatch } = useCart();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
  });

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.address || !form.email || !form.phone) {
      addToast('Please fill in all fields.', 'error');
      return;
    }
    dispatch({ type: 'CLEAR_CART' });
    addToast('Order placed successfully!', 'success');
    navigate('/confirmation', { state: { orderTotal: total } });
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-content">
        <form onSubmit={handleSubmit} className="checkout-form">
          <h2>Shipping Information</h2>
          <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
          <input name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} type="email" required />
          <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} type="tel" required />
          <button type="submit" className="btn btn-primary">Proceed to Payment</button>
        </form>
        
        <div className="checkout-summary">
          <h2>Order Summary</h2>
          <div className="order-items">
            {cart.map(item => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="order-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>Size: {item.size} | Color: {item.color}</p>
                  <p>Qty: {item.quantity}</p>
                </div>
                <div className="item-price">
                  PKR {(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
          <div className="order-total">
            <h3>Total: PKR {total.toLocaleString()}</h3>
          </div>
        </div>
      </div>
      
      <EasyPaisaPayment total={total} />
    </div>
  );
};

export default CheckoutPage;
