// pages/ProductListing.js
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data';

const ProductListing = () => {
  const [sortBy, setSortBy] = useState('price');
  const [filterCategory, setFilterCategory] = useState('all');

  const filteredProducts = products
    .filter(p => filterCategory === 'all' || p.category === filterCategory)
    .sort((a, b) => sortBy === 'price' ? a.price - b.price : a.name.localeCompare(b.name));

  return (
    <div className="product-listing">
      <div className="filters">
       
        {/* <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
        <select 
  onChange={(e) => setFilterCategory(e.target.value)}
  className="filter-select"
>
  {categories.map(category => (
    <option key={category.value} value={category.value}>
      {category.label}
    </option>
  ))}
</select> */}
      </div>
      <div className="grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListing