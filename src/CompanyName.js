import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCompanyName } from './actions/index'

class CompanyName extends Component {
  render () {
    return (
      <div id='top-container'>
        <h1>{this.props.compname}</h1>
      </div>
    )
  }
}

export default connect(({compname}) => compname, {getCompanyName})(withRouter(CompanyName))
