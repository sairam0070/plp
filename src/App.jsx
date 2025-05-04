import React from 'react';
import { ProductProvider } from './context/ProductsContext';
import SearchBar from './components/SearchBar';


import Pagination from './components/Pagination';
import SideBar from './components/SideBar';
import './App.css';
import ProductsGrid from './components/ProductsGrid';

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
            <ProductsGrid/>
            <Pagination />
          </div>
        </div>
      </div>
    </ProductProvider>
  );
}

export default App;
