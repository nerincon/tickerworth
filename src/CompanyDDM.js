import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCompanyDDM } from './actions/index'

class CompanyDDM extends Component {
  render () {
    return (
      <div>
        {this.props.ddm && this.props.ddm.map((d, idx) => {
          return (
            <p>Dividend Discount Model: {d}</p>
          )
        })}
      </div>
    )
  }
}

export default connect(({ddm}) => ddm, {getCompanyDDM})(withRouter(CompanyDDM))
