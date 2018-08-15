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
            <h1 key={stat['cash']}>{stat['cash']}</h1>
          )
        })}
      </div>
    )
  }
}

export default connect(({compstats}) => compstats, {getCompanyStats})(withRouter(CompanyStats))
