import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCompanyLogo } from './actions/index'
import { Image } from 'semantic-ui-react'

class CompanyLogo extends Component {
  render () {
    return (
      <div>
        <Image src={this.props.url} size='small' circular />
      </div>
    )
  }
}

export default connect(({img}) => img, {getCompanyLogo})(withRouter(CompanyLogo))
