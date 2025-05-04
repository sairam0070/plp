import React from 'react';
import { useProductContext } from '../context/ProductsContext';
import styles from '../styles/searchbar.module.css';

const SearchBar = () => {
  const { setSearchTerm } = useProductContext();

  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className={styles.searchInput}
    />
  );
};

export default SearchBar;
