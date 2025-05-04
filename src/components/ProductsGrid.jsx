import React from 'react';
import ProductCard from './productcard';
import styles from '../styles/productsgrid.module.css';
import { useProductContext } from '../context/ProductsContext';

const ProductsGrid = () => {
  const { currentPosts } = useProductContext();

  return (
    <div className={styles.grid}>
      {currentPosts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
