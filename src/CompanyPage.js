import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getFinancialRatios } from './actions/index'

class CompanyPage extends Component {
  componentDidMount () {
    var wholepath = this.props.history.location.pathname
    var splitpath = wholepath.split('/')
    var symbol = splitpath.pop()
    this.goToCompanyPage(symbol)
  }

  goToCompanyPage (symbol, history) {
    this.props.getFinancialRatios(symbol, this.props.history)
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <h1>Company Page</h1>
        {this.props.financials && this.props.financials.map((fin) => {
          return (
            <h1 key={fin.grossProfit}>{fin.grossProfit}</h1>
          )
        })}
      </div>
    )
  }
}

export default connect(({financials}) => financials, {getFinancialRatios})(withRouter(CompanyPage))
