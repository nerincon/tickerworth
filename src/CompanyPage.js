import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CompanyLogo from './CompanyLogo'
import CompanyName from './CompanyName'
import CompanyStats from './CompanyStats'
import { getFinancialRatios, getCompanyLogo, getCompanyName, getCompanyStats } from './actions/index'

class CompanyPage extends Component {
  componentDidMount () {
    var wholepath = this.props.history.location.pathname
    var splitpath = wholepath.split('/')
    var symbol = splitpath.pop()
    this.goToCompanyPage(symbol)
  }

  goToCompanyPage (symbol, history) {
    this.props.getFinancialRatios(symbol, this.props.history)
    this.props.getCompanyLogo(symbol)
    this.props.getCompanyName(symbol)
    this.props.getCompanyStats(symbol)
  }

  render () {
    return (
      <div>
        <CompanyName />
        <CompanyLogo />
        <CompanyStats />
        {this.props.findata_db && this.props.findata_db.map((fin) => {
          return (
            <h1 key={fin['grossprofit']}>{fin['grossprofit']}</h1>
          )
        })}
      </div>
    )
  }
}

export default connect(({financials}) => financials, {getCompanyName, getCompanyLogo, getCompanyStats, getFinancialRatios})(withRouter(CompanyPage))
