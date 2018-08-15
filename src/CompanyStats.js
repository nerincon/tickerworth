import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCompanyStats } from './actions'

class CompanyStats extends Component {
  render () {
    return (
      <div>
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <p key={stat['cash']}>{stat['cash']}</p>
          )
        })}
      </div>
    )
  }
}

export default connect(({compstats}) => compstats, {getCompanyStats})(withRouter(CompanyStats))
