import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CompanyLogo from './CompanyLogo'
import CompanyName from './CompanyName'
import { getFinancialRatios, getCompanyLogo, getCompanyName } from './actions/index'

// https://storage.googleapis.com/iex/api/logos/AAP.png ---> company logo found here (AAP needs to be replaced with company symbol)

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
  }

  render () {
    return (
      <div>
        <CompanyName />
        <CompanyLogo />
        {this.props.financials && this.props.financials.map((fin) => {
          return (
            <h1 key={fin.grossProfit}>{fin.grossProfit}</h1>
          )
        })}
      </div>
    )
  }
}

export default connect(({financials}) => financials, {getCompanyName, getCompanyLogo, getFinancialRatios})(withRouter(CompanyPage))
