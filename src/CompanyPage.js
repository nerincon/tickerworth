import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import CompanyStats from './CompanyStats'
import GrossProfitChart from './GrossProfitChart'
import TotalRevenueChart from './TotalRevenueChart'
import CostOfRevenueChart from './CostOfRevenueChart'
import OperatingExpensesChart from './OperatingExpensesChart'
import OperatingIncomeChart from './OperatingIncomeChart'
import NetIncomeChart from './NetIncomeChart'
import CompanyFinancials from './CompanyFinancials'
import MyNav from './MyNav'
import SidebarFoo from './SideBarFoo'
import './CompanyPage.css'
import { getFinancialRatios, getCompanyLogo, getCompanyName, getCompanyStats, getTRChartData, getCRChartData, getGPChartData, getOEChartData, getOIChartData, getNIChartData } from './actions/index'

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
    this.props.getTRChartData(symbol)
    this.props.getCRChartData(symbol)
    this.props.getGPChartData(symbol)
    this.props.getOEChartData(symbol)
    this.props.getOIChartData(symbol)
    this.props.getNIChartData(symbol)
  }

  render () {
    return (
      <div id='wrapper'>
        <MyNav />
        <SidebarFoo />
        <div id='info'>
          {/* <CompanyStats /> */}
          <TotalRevenueChart />
          <CostOfRevenueChart />
          <GrossProfitChart />
          <OperatingExpensesChart />
          <OperatingIncomeChart />
          <NetIncomeChart />
          <CompanyFinancials />
        </div>
      </div>
    )
  }
}

export default connect(({financials}) => financials, {getCompanyName, getCompanyLogo, getCompanyStats, getFinancialRatios, getTRChartData, getCRChartData, getGPChartData, getOEChartData, getOIChartData, getNIChartData})(withRouter(CompanyPage))
