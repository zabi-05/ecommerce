import ProductListing from "./ProductListening";
import SectionHeader from "../components/SectionHeader";
import Button from "../components/Button";
import Price from "../components/Price";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
          <div className="hero-pattern"></div>
        </div>
        
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">New Collection 2025</span>
          </div>
          
          <h1 className="hero-title">
            <span className="title-line">Elevate Your</span>
            <span className="title-line highlight">Style Game</span>
            <span className="title-line">with 69 Collection</span>
          </h1>
          
          <p className="hero-description">
            Discover premium men's fashion that speaks to the modern gentleman. 
            From boardroom to weekend, we've got your style covered.
          </p>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Premium Items</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Customer Support</span>
            </div>
          </div>
          
          <div className="hero-cta">
            <Button as="a" href="#products" size="large" className="cta-primary">
              <span>Shop Collection</span>
              <span className="cta-icon">→</span>
            </Button>
            <Button as="a" href="#about" variant="secondary" size="large" className="cta-secondary">
              <span>Watch Lookbook</span>
              <span className="cta-icon">▶</span>
            </Button>
          </div>
          
          <div className="hero-features">
            <div className="feature-item">
              <span className="feature-icon">🚚</span>
              <span>Free Shipping</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">↩️</span>
              <span>Easy Returns</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="hero-image-container">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80"
              alt="Men's Fashion Collection"
          className="hero-image"
        />
            <div className="image-overlay"></div>
          </div>
          
          <div className="floating-cards">
           
            <div className="floating-card card-2">
              <div className="card-content">
                <span className="card-label">New Arrival</span>
                <h4>Leather Jacket</h4>
                <Price price={9999} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="products-section">
        <SectionHeader 
          title="Men's Collection"
          subtitle="Curated selection of premium men's clothing for every occasion"
        />
      <ProductListing />
      </section>
    </div>
  );
};

export default HomePage;
