import React, { Component } from 'react'
import './empDetails.css'
import axios from 'axios'

export default class empDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      empDetails: '',
      empAddress: ''
    }
    this.getAddress = this.getAddress.bind(this)
  }
  componentDidMount() {
    axios.get('https://api.myjson.com/bins/1b93sc').then(data => {
      this.setState({
        empDetails: data.data.data
      })
    })
  }
  getAddress(event) {
    this.setState({
      empAddress: event.currentTarget.getAttribute('empid')
    })
  }
  render() {
    let empDetailsData = this.state.empDetails && JSON.parse(JSON.stringify(this.state.empDetails)).map((item, index) => {
      return (
        <li key={index} empid={index} onClick={this.getAddress}><span>{item.id}</span><span>{item.employee_name}</span><span>{item.employee_age}</span><span>{item.sex}</span></li>
      )
    })
    let empAddressData = this.state.empDetails && JSON.parse(JSON.stringify(this.state.empDetails)).map((item, index) => {
      return (
        <div key={index} empid={index}>{item.address}</div>
      )
    })
    return (
      <div className="empdetails-wrapper">
        <div className="empdetails">
          <p>Displaying Empolyee address on click of empplyee details</p>
          <ul>
            <li><span>Emp Number</span><span>Emp Name</span><span>Emp Age</span><span>Emp Gender</span></li>
            {empDetailsData}
          </ul>
        </div>
        <div className="empaddress">
          {this.state.empAddress ? empAddressData[this.state.empAddress] : ''}
        </div>
      </div>
    )
  }
}