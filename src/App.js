import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css'
import Home from './components/home'
import HeaderComp from './components/Ecommerce/Header/header'
import Breadcrumb from './components/Ecommerce/Breadcrumb/Breadcrumb'
import ProductDetails from './components/Ecommerce/productDetails/productDetails'
import RelatedProducts from './components/Ecommerce/relatedProducts/relatedProducts'
import FooterComp from './components/Ecommerce/Footer/footer'
import Reports from './components/Reports/reports'
import Dictionary from './components/DictionaryManagement/dictionary'
import EmpDetails from './components/empDetails/empDetails'
import StopWatch from './components/stopWatch/stopWatch'
function App() {
  return (
    <div className="product-page">
      <Router>
        <Route render={() => (<Home />)} />
        <Route exact path='/' render={() => (<StopWatch />)} />
        <Route exact path='/reports' render={() => (<Reports />)} />
        <Route exact path='/dictionary' render={() => (<Dictionary />)} />
        <Route exact path='/empdetails' render={() => (<EmpDetails />)} />
        <Route exact path='/ecommerce' render={() => (<React.Fragment><HeaderComp /><Breadcrumb /><ProductDetails /><RelatedProducts /><FooterComp /></React.Fragment>)} />
        <Route exact path='/stopwatch' render={() => (<StopWatch />)} />
      </Router>
    </div>
  );
}

export default App;
