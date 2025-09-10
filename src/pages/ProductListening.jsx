import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data';

const ProductListing = () => {
  const [search, setSearch] = useState('');

  const filteredProducts = products
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => a.price - b.price);

  return (
    <div className="product-listing">
      <div className="search-section">
        <input
          type="text"
          placeholder="Search men's clothing..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
