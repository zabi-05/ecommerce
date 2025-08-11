// src/components/Footer.js
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Your trusted online garment store offering stylish and quality clothing.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/cart">View Cart</Link></li>
            <li><Link to="/checkout">Checkout</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Email: support@garmentsstore.com</li>
            <li>Phone: +92 300 1234567</li>
            <li>Address: 123 Fashion Ave, Retail City</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Garments Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
