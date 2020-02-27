import React from 'react';
import './App.css'
import HeaderComp from './components/Header/header'
import Breadcrumb from './components/Breadcrumb/Breadcrumb'
import ProductDetails from './components/productDetails/productDetails'
import RelatedProducts from './components/relatedProducts/relatedProducts'
import FooterComp from './components/Footer/footer'
import Reports from './components/Reports/reports'
import Dictionary from './components/DictionaryManagement/dictionary'
import EmpDetails from './components/empDetails/empDetails'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/home'
function App() {
  return (
    <div className="product-page">
      <Router>
        <Route render={() => (<Home />)} />
        <Route exact path='/reports' render={() => (<Reports />)} />
        <Route exact path='/dictionary' render={() => (<Dictionary />)} />
        <Route exact path='/empdetails' render={() => (<EmpDetails />)} />
        <Route exact path='/ecommerce' render={() => (<React.Fragment><HeaderComp /><Breadcrumb /><ProductDetails /><RelatedProducts /><FooterComp /></React.Fragment>)} />
      </Router>
    </div>
  );
}

export default App;
