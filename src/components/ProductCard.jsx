import React from 'react';
import styles from '../styles/productcard.module.css';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.title} className={styles.image} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
