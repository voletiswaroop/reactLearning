import React from 'react';
import './reports.css';
import axios from 'axios'

export default class Reports extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reportResult: ''
    }
  }
  componentDidMount() {

    axios.get(`https://api.myjson.com/bins/sl76w`)
      .then(data => {
        this.setState({
          reportResult: data.data,
        })
      })
  }
  render() {

    return (
      <React.Fragment>
        <p>Test case percentage </p>
        {this.state.reportResult && this.state.reportResult.slice(-5).map((item, index) => {
          return (
            <div className="test-details" key={index}>
              <div className="test-results" key={index}>
                <div className="test-result" style={{ height: item.total_test_case === item.pass ? '100%' : item.pass / item.total_test_case * 100 + '%' }}>{}</div>
              </div>
              <p>Result {index + 1}</p>
            </div>
          )
        })}
        <p>Detailed report of test cases</p>
        <div className="test-detailed-report">
          <p>Excustion </p>
          <p>Pass Tcs</p>
          <p>Fail Tcs</p>
          <p>Pass percentage</p>
        </div>
        {this.state.reportResult && this.state.reportResult.slice(-5).map((item, index) => {
          return (
            <div className="test-detailed-report" key={index}>
              <p>Result {index + 1}</p>
              <p>{item.total_test_case}</p>
              <p>{item.pass}</p>
              <p>{item.fail}</p>
              <p>{item.total_test_case === item.pass ? '100%' : Math.round(item.pass / item.total_test_case * 100) + '%'}</p>
            </div>
          )
        })}
      </React.Fragment>
    )
  }
}