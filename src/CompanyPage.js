import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CompanyStats from './CompanyStats'
import GrossProfitChart from './GrossProfitChart'
import TotalRevenueChart from './TotalRevenueChart'
import CostOfRevenueChart from './CostOfRevenueChart'
import OperatingExpensesChart from './OperatingExpensesChart'
import OperatingIncomeChart from './OperatingIncomeChart'
import NetIncomeChart from './NetIncomeChart'
import CompanyFinancials from './CompanyFinancials'
import CompanyNews from './CompanyNews'
import MyNav from './MyNav'
import SidebarFoo from './SideBarFoo'
import './CompanyPage.css'
import { Menu } from 'semantic-ui-react'
import { getFinancialRatios, getCompanyNews, getCompanyLogo, getCompanyName, getCompanyStats, getTRChartData, getCRChartData, getGPChartData, getOEChartData, getOIChartData, getNIChartData } from './actions/index'

class CompanyPage extends Component {
  state = { activeItem: 'Income Statement', backgroundColor: 'green', }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name})

  componentDidMount () {
    var wholepath = this.props.history.location.pathname
    var splitpath = wholepath.split('/')
    var symbol = splitpath.pop()
    this.goToCompanyPage(symbol)
  }

  goToCompanyPage (symbol) {
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
    this.props.getCompanyNews(symbol)
  }

  render () {
    const { activeItem } = this.state
    return (
      <div id='wrapper'>
        <MyNav />
        <SidebarFoo />
        <Menu pointing secondary id='menu'>
        <Menu.Item style={{backgroundColor: this.state.activeItem === 'Income Statement' ? this.state.backgroundColor : 'orange'}} id='transition1' className='tab' name='Income Statement' active={activeItem === 'Income Statement'} onClick={this.handleItemClick} />
        <Menu.Item style={{backgroundColor: this.state.activeItem === 'Chart Details' ? this.state.backgroundColor : 'orange'}} id='transition2' className='tab' name='Chart Details' active={activeItem === 'Chart Details'} onClick={this.handleItemClick} />
        <Menu.Item style={{backgroundColor: this.state.activeItem === 'Key Ratios' ? this.state.backgroundColor : 'orange'}} id='transition3' className='tab' name='Key Ratios' active={activeItem === 'Key Ratios'} onClick={this.handleItemClick} />
        <Menu.Item style={{backgroundColor: this.state.activeItem === 'News' ? this.state.backgroundColor : 'orange'}} id='transition4' className='tab' name='News' active={activeItem === 'News'} onClick={this.handleItemClick} />
        </Menu>
        <div id='info'>
          { this.state.activeItem === 'Income Statement' ? (
            <div>
            <TotalRevenueChart />
            <CostOfRevenueChart />
            <GrossProfitChart />
            <OperatingExpensesChart />
            <OperatingIncomeChart />
            <NetIncomeChart /></div>) : this.state.activeItem === 'Chart Details' ? 
            <CompanyFinancials /> : this.state.activeItem === 'Key Ratios' ? <CompanyStats /> : <CompanyNews />}
        </div>
      </div>
    )
  }
}

export default connect(({financials}) => financials, {getCompanyName, getCompanyNews, getCompanyLogo, getCompanyStats, getFinancialRatios, getTRChartData, getCRChartData, getGPChartData, getOEChartData, getOIChartData, getNIChartData})(withRouter(CompanyPage))
