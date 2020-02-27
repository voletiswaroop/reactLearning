import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class home extends Component {
  render() {
    return (
      <div className="main-header">
        <a className="site-logo" href="/">SGV</a>
        <div className="navigation-menu">
          <Link to='/reports'>Reports</Link>
          <Link to='/dictionary'>Dictionary</Link>
          <Link to='/ecommerce'>Ecommerce</Link>
          <Link to='/empdetails'>EmpDetails</Link>
        </div>
      </div>
    )
  }
}
