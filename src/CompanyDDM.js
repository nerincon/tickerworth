import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCompanyDDM } from './actions/index'
import './CompanyDDM.css'

class CompanyDDM extends Component {
  render () {
    return (
      <div id='val'>
        <h4>Valuation Using Dividend Discount Model</h4>
        <h2>$ {this.props.ddm}</h2>
      </div>
    )
  }
}

export default connect(({ddm}) => ddm, {getCompanyDDM})(withRouter(CompanyDDM))
