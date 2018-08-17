import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCompanyLogo } from './actions/index'
import { Image } from 'semantic-ui-react'
import './SideBar.css'

class CompanyLogo extends Component {
  render () {
    return (
      <div>
        <Image id='compimg' src={this.props.url} size='small' circular />
      </div>
    )
  }
}

export default connect(({img}) => img, {getCompanyLogo})(withRouter(CompanyLogo))
