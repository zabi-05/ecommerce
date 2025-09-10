// src/components/Navigation.js
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navigation = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="main-nav">
      <div className="nav-brand">
        <Link to="/">
         <b>69 Collection</b>
        </Link>
      </div>
      
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/cart" 
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            🛒 Cart ({totalItems})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
