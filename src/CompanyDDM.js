import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCompanyDDM } from './actions/index'
import './CompanyDDM.css'

class CompanyDDM extends Component {
  render () {
    return (
      <div>
        <div>
          <p>Note: If value is $0, then the valuation is N/A. The following could make it be $0.
          </p>
          <ul>
            <li>1. Company has less than 5 years of historical dividend records</li>
            <li>2. Company has multiple dividend splits within a 5 year time frame</li>
            <li>3. The dividend growth rate is higher than the expected rate of return</li>
          </ul>
        </div>
        <div id='val'>
          <h4>Valuation Using The Dividend Discount Model</h4>
          <h2>$ {this.props.ddm}</h2>
        </div>
      </div>
    )
  }
}

export default connect(({ddm}) => ddm, {getCompanyDDM})(withRouter(CompanyDDM))
