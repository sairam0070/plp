import React from 'react';
import { ProductProvider } from './context/ProductsContext';
// import './App.css';
import SearchBar from './components/SearchBar';
import ProductsGrid from './components/productsgrid';
import Pagination from './components/Pagination';
import SideBar from './components/SideBar';
// import styles from './styles/sidebar.module.css';
import './App.css';

function App() {
  return (
    <ProductProvider>
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>Product Listing</h1>
        <div className="filter">

        <SearchBar />
        </div>
        <div className="content">
          <SideBar />
          <div className="product-listing">
            <ProductsGrid />
            <Pagination />
          </div>
        </div>
      </div>
    </ProductProvider>
  );
}

export default App;
