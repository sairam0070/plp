import React from 'react';
import { useProductContext } from '../context/ProductsContext';
import styles from '../styles/pagination.module.css';

const Pagination = () => {
  const { currentPage, totalPages, setCurrentPage } = useProductContext();

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <button
          key={page}
          className={currentPage === page ? styles.active : ''}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
