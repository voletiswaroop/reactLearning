import React from 'react';
import './productDetails.css';
import axios from 'axios'
import Slider from 'react-slick';

export default class productDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productDetails: [],
      productImg: []
    }
  }
  componentDidMount() {
    axios.all([
      axios.get(`https://anatta-demo-app.herokuapp.com/api/images`),
      axios.get(`https://anatta-demo-app.herokuapp.com/api/products/8`)
    ]).then(axios.spread((productImg, productDetails) => {
      this.setState({
        productImg: productImg.data,
        productDetails: productDetails.data
      })
    }));
  }
  render() {
    let productInitialImages = this.state.productImg && this.state.productImg.slice(0, 1).map((item, index) => {
      return (<img src={item.url} key={index} />)
    })
    let productImages = this.state.productImg && this.state.productImg.map((item, index) => {
      return (<img src={item.url} key={index} />)
    })
    let sliderSettings = {
      dots: false,
      autoplay: false,
      infinite: false,
      variableWidth: true,
      swipeToSlide: true,
      slidesToShow: 7,
      slidesToScroll: 7
    };
    return (
      <section className="product-details-wrapper" >
        <div className="product-details">
          <div className="product-name-price">
            <p className="product-name">{this.state.productDetails.name}</p>
            <p className="product-price">${this.state.productDetails.price} USD</p>
          </div>
          <div className="product-category-reviews">
            <p className="product-category">OCA LOW</p>
            <p className="product-reviews">154 Reviews</p>
          </div>
          <div className="product-options">
            <div className="category">
              <p className="selected-tab">MEN</p>
              <p>WOMEN</p>
            </div>
            <div className="product-colors">
              <p>SELECT COLOR</p>
              <ul className="color-palette">
                <li style={{ backgroundColor: "#f7f7f7" }}></li>
                <li style={{ backgroundColor: "#072348" }}></li>
                <li style={{ backgroundColor: "#000" }}></li>
                <li style={{ backgroundColor: "#b5222e" }}></li>
                <li className="selected" style={{ backgroundColor: "#ffcf60" }}></li>
                <li style={{ backgroundColor: "#4e4e4e" }}></li>
                <li style={{ backgroundColor: "#129f7d" }}></li>
                <li style={{ backgroundColor: "#c69f97" }}></li>
                <li style={{ backgroundColor: "#c8c8c8" }}></li>
                <li style={{ backgroundColor: "#215297" }}></li>
                <li style={{ backgroundColor: "#b3926e" }}></li>
              </ul>
            </div>
            <div className="size-chart-details">
              <div className="size-chart-wrapper">
                <p>SELECT SIZE</p>
                <p>Size &amp; Fit Guide</p>
              </div>
              <ul className="product-size">
                <li>5</li>
                <li>5.5</li>
                <li className="out-of-stock">6</li>
                <li>6.5</li>
                <li>7</li>
                <li className="out-of-stock">7.5</li>
                <li className="selected">8</li>
                <li className="out-of-stock">8.5</li>
                <li className="out-of-stock">9</li>
                <li className="out-of-stock">9.5</li>
                <li>10</li>
                <li>10.5</li>
                <li className="out-of-stock">11</li>
                <li>11.5</li>
                <li>12</li>
                <li className="out-of-stock">12.5</li>
                <li>13</li>
              </ul>
            </div>
            <button type="submit" value="add to cart" className="addtocart">ADD TO BAG</button>
          </div>
          <p className="shipping">Worldwide Shipping  +  Free Returns</p>
        </div>
        <div className="product-gallery">
          {productInitialImages}
          <div className="product-gallery-list">
            <Slider {...sliderSettings} > {productImages} </Slider>
          </div>
        </div>
      </section>
    )
  }
}