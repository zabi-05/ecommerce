import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import EasyPaisaPayment from './EasyPaisaPayment';

const CheckoutPage = () => {
  const { cart, dispatch } = useCart();
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
      alert('Please fill in all fields.');
      return;
    }
    dispatch({ type: 'CLEAR_CART' });
    navigate('/confirmation', { state: { orderTotal: total } });
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
