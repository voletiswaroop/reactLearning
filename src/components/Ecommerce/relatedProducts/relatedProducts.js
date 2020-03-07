import React from 'react';
import './relatedProducts.css';
import axios from 'axios'
import Slider from 'react-slick';

export default class relatedProducts extends React.Component {
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
      axios.get(`https://anatta-demo-app.herokuapp.com/api/products`)
    ]).then(axios.spread((productImg, productDetails) => {
      this.setState({
        productImg: productImg.data,
        productDetails: productDetails.data
      })
    }));
  }
  render() {
    let productDetailsList = this.state.productDetails && this.state.productDetails
    let productsDetails, sliderSettings, loadProducts;
    productDetailsList.map(item => {
      return (
        <div>
          {productsDetails = this.state.productImg && this.state.productImg.slice(0, productDetailsList.length).map((img, index) => {
            return (
              <div key={index}>
                <img key={index} src={img.url} className="product-img" alt="product-img" />
                <p className="related-product-name">{item.name}</p>
                <p className="related-product-price">${item.price}</p>
              </div>
            )
          })}
        </div>
      )
    })
    if (window.innerWidth > 768) {
      console.log('hi');

      sliderSettings = {
        dots: false,
        autoplay: false,
        infinite: true,
        variableWidth: true,
        swipeToSlide: true,
      };
      loadProducts = <Slider {...sliderSettings} > {productsDetails}</Slider>
    } else {
      loadProducts = productsDetails
    }
    return (
      <section className="related-products-wrapper">
        <p className="title">You’ll Also Like</p>
        <div className="related-products">
          <div className="related-products-details">
            {loadProducts}
          </div>
        </div>
      </section>
    )
  }
}