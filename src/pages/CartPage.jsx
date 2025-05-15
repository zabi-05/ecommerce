// pages/CartPage.js
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart, dispatch } = useCart();

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <div className="quantity-controls">
                    <button 
                      onClick={() => dispatch({ 
                        type: 'UPDATE_QUANTITY', 
                        payload: { id: item.id, quantity: item.quantity - 1 } 
                      })}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => dispatch({ 
                        type: 'UPDATE_QUANTITY', 
                        payload: { id: item.id, quantity: item.quantity + 1 } 
                      })}
                    >
                      +
                    </button>
                  </div>
                  <button 
                    className="remove-btn"
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2>Total: ${total.toFixed(2)}</h2>
            <button className="btn btn-primary"><Link to="/checkout">Proceed to Checkout</Link></button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
