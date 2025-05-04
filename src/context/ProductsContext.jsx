import React, { createContext, useContext, useState ,useEffect} from 'react';
import data from '../data/products'; // Assuming your product data has category and price properties

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]); 
  const [searchTerm, setSearchTerm] = useState('');

  const postsPerPage = 6;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const filteredProducts = data.filter((product) => {
    const withinPriceRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
    const matchesSearchTerm = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    return withinPriceRange && matchesCategory && matchesSearchTerm
  });

  const currentPosts = filteredProducts.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(filteredProducts.length / postsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryFilter, priceRange, searchTerm]);
  

  return (
    <ProductContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        postsPerPage,
        currentPosts,
        totalPages,
        categoryFilter,
        setCategoryFilter,
        priceRange,
        setPriceRange,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
