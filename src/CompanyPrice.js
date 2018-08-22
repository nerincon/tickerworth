import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCompanyPrice } from './actions'

class CompanyPrice extends Component {
  render () {
    return (
      <div id='price'>
        <h3>Current SHare Price</h3>
        <h2>$ {this.props.price}</h2>
      </div>
    )
  }
}

export default connect(({price}) => price, {getCompanyPrice})(withRouter(CompanyPrice))
