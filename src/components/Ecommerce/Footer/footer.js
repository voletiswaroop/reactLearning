import React from 'react';
import './footer.css'
import instaIcon from './images/instagram.png'
import fbIcon from './images/fb.png'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-wrapper">
        <section className="footer-top">
          <ul>
            <li className="payment">Secure Payment</li>
            <li className="free-shipping">Express Shipping</li>
            <li className="returns">Free Returns</li>
          </ul>
        </section>
        <section className="footer-bottom">
          <div className="footer-menu desktop">
            <ul>
              <li className="list-title">MEN</li>
              <li className="list-item">OCA Low</li>
              <li className="list-item">OCA High </li>
              <li className="list-item">CATIBA Low</li>
              <li className="list-item">CATIBA High</li>
            </ul>
            <ul>
              <li className="list-title">WOMEN</li>
              <li className="list-item">OCA Low</li>
              <li className="list-item">OCA High </li>
              <li className="list-item">CATIBA Low</li>
              <li className="list-item">CATIBA High</li>
            </ul>
            <ul>
              <li className="list-title">SUPPORT</li>
              <li className="list-item">FAQ</li>
              <li className="list-item">Returns</li>
              <li className="list-item">Live Chat</li>
            </ul>
            <ul>
              <li className="list-title">ABOUT</li>
              <li className="list-item">Mission</li>
              <li className="list-item">Vision </li>
              <li className="list-item">Future</li>
            </ul>
            <ul>
              <li className="list-title">POP UP STORES</li>
              <li className="list-item">Find near you</li>
              <li className="list-item">Register </li>
              <li className="search"> <input type="text" placeholder="Find your sneakers here" /></li>
            </ul>
            <ul className="news-letter">
              <li className="list-title">NEWSLETTER</li>
              <li className="list-item">
                <input className="subscribe" type="text" placeholder="Enter email" />
                <button className="subscribe-btn" type="submit">JOIN US</button>
              </li>
              <li className="list-icon"><img alt="img" src={instaIcon} /></li>
              <li className="list-icon"><img alt="img" src={fbIcon} /></li>
            </ul>
          </div>
          <div className="footer-menu mobile">
            <ul className="news-letter">
              <li className="list-title">NEWSLETTER</li>
              <li className="list-item">
                <input className="subscribe" type="text" placeholder="Enter email" />
                <button className="subscribe-btn" type="submit">JOIN US</button>
              </li>
              <li className="list-icon"><img alt="img" src={instaIcon} /></li>
              <li className="list-icon"><img alt="img" src={fbIcon} /></li>
            </ul>
            <ul>
              <li className="list-title">SHOP</li>
              <li className="list-item">CATIBA</li>
              <li className="list-item">OCA</li>
            </ul>
            <ul>
              <li className="list-title">ABOUT</li>
              <li></li>
              <li className="list-title">BLOG</li>
            </ul>
            <ul>
              <li className="list-title">SUPPORT</li>
              <li className="list-item">FAQ</li>
              <li className="list-item">Returns</li>
              <li className="list-item">Live Chat</li>
            </ul>
            <ul>
              <li className="list-title">POP UP STORES</li>
            </ul>
          </div>
        </section>
        <p className="copy-rights-info">Copyright &copy; 2019 CARIUMA. All Rights Reserved. <a href="/tc">Terms of Use</a> | <a href="privacy">Privacy Policy</a></p>
      </footer >
    )
  }
}