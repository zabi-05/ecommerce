import ProductListing from "./ProductListening";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1600&q=80"
          alt="Fashion Banner"
          className="hero-image"
        />
        <h1>Welcome to 69 Collection</h1>
        <p>Discover the latest trends in men's, women's, and kids' fashion.</p>
      </section>

      <ProductListing />
    </div>
  );
};

export default HomePage;
