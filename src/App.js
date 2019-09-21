import React from 'react';
import './App.css'
import HeaderComp from './components/Header/header'
import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import ProductDetails from './components/productDetails/productDetails'
import RelatedProducts from './components/relatedProducts/relatedProducts'
import FooterComp from './components/Footer/footer'

function App() {
  return (
    <div className="product-page">
      <HeaderComp />
      <Breadcrumb />
      <ProductDetails />
      <RelatedProducts />
      <FooterComp />
    </div>
  );
}

export default App;
