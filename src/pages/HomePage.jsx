// pages/HomePage.js
import ProductListing from './ProductListening';

const HomePage = () => {

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to Our Store</h1>
        <p>Discover amazing products at great prices</p>
      </section>
      
      <ProductListing/>
    </div>
  );
};
export default HomePage