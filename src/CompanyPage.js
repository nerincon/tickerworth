import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CompanyStats from './CompanyStats'
import CompanyFinancials from './CompanyFinancials'
import MyNav from './MyNav'
import SidebarFoo from './SideBarFoo'
import './CompanyPage.css'
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
      <div id='wrapper'>
        <MyNav />
        <SidebarFoo />
        <div id='info'>
          <CompanyStats />
          <CompanyFinancials />
        </div>
      </div>
    )
  }
}

export default connect(({financials}) => financials, {getCompanyName, getCompanyLogo, getCompanyStats, getFinancialRatios})(withRouter(CompanyPage))
