import React from 'react';
import { useProductContext } from '../context/ProductsContext';
import styles from '../styles/sidebar.module.css';

const SideBar = () => {
  const { categoryFilter, setCategoryFilter, priceRange, setPriceRange } = useProductContext();

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value.split(',').map(Number);
    setPriceRange(value);
  };

  return (
    <div className={styles.sidebar}>
      <h3>Filters</h3>

      <div>
        <label>Category:</label>
        <select value={categoryFilter} onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
        </select>
      </div>

      <div>
        <label>Price Range:</label>
        <select value={priceRange.join(',')} onChange={handlePriceChange}>
          <option value="0,100">Under $100</option>
          <option value="100,500">$100 - $500</option>
          <option value="500,1000">$500 - $1000</option>
          <option value="1000,10000">$1000 and above</option>
        </select>
      </div>
    </div>
  );
};

export default SideBar;
