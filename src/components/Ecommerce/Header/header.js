import React from 'react';
import './header.css'
import logo from './images/logo.png'
import login from './images/login.png'
import cart from './images/cart.png'

export default class Header extends React.Component {
  render() {
    return (
      <header className="header-wrapper">
        <div className="header-top">FREE US SHIPPING &amp; RETURN</div>
        <div className="navigation">
          <div className='navlines'>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="navigation-items">
            <li>MEN</li>
            <li>WOMEN</li>
          </ul>
          <img className="logo" src={logo} alt="logo" />
          <ul className="site-info">
            <li>ABOUT</li>
            <li><img src={login} alt="login" /></li>
            <li className="cart"><img src={cart} alt="cart" /></li>
          </ul>
        </div>
      </header>
    )
  }
}