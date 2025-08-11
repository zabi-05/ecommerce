import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data';

const ProductListing = () => {
  const [sortBy, setSortBy] = useState('price');
  const [filterCategory, setFilterCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filteredProducts = products
    .filter(p => filterCategory === 'all' || p.category === filterCategory)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortBy === 'price' ? a.price - b.price : a.name.localeCompare(b.name)
    );

  return (
    <div className="product-listing">
      <div className="filters">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />


        <select onChange={(e) => setFilterCategory(e.target.value)}>
          {categories.map(category => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
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
