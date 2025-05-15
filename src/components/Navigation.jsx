// components/Navigation.js
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navigation = () => {
  const { cart } = useCart();
  const cartItemsCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <nav className="main-nav">
      <div className="nav-brand">
        <Link to="/">E-Commerce</Link>
      </div>
      
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            Home
          </NavLink>
        </li>
       
        <li>
          <NavLink 
            to="/cart"
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            Cart ({cartItemsCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;