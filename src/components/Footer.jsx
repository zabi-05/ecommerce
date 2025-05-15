// components/Footer.js
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Your trusted online shopping destination offering quality products at competitive prices.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/products">Shop Now</Link></li>
            <li><Link to="/cart">View Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Email: support@ecommerce.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Address: 123 Shopping St, Retail City</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} E-Commerce Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;