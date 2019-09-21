import React from 'react';
import './relatedProducts.css';
import axios from 'axios'

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
    let productsImg = this.state.productImg && this.state.productImg.slice(0, 4).map((item, index) => {
      return (
        <img key={index} src={item.url} alt="product-img" />
      )
    })
    let products = productDetailsList.slice(0, 4).map((item, index) => {
      return (
        <div key={index}>
          <div className="related-product-name">{item.name}</div>
          <div className="related-product-price">${item.price}</div>
        </div>
      )
    })

    return (
      <section className="related-products-wrapper">
        <p className="title">You’ll Also Like</p>
        <div className="related-products">
          <div className="product-img">
            {productsImg}
          </div>
          <div className="related-product-details">
            {products}
          </div>
        </div>
      </section>
    )
  }
}