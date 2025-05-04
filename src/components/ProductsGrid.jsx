import React from 'react';
import ProductCard from '../components/ProductCard';
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
