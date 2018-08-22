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
import CurrentAssetsChart from './CurrentAssetsChart'
import TotalAssetsChart from './TotalAssetsChart'
import TotalLiabilitiesChart from './TotalLiabilitiesChart'
import CurrentCashChart from './CurrentCashChart'
import CurrentDebtChart from './CurrentDebtChart'
import TotalCashChart from './TotalCashChart'
import TotalDebtChart from './TotalDebtChart'
import ShareholderEquityChart from './ShareholderEquityChart'
import CashFlowChart from './CashFlowChart'
import OperatingGainsandLosesChart from './OperatingGainsandLosesChart'
import CompanyFinancials from './CompanyFinancials'
import CompanyNews from './CompanyNews'
import CompanyMain from './CompanyMainInfo'
import MonteCarloChart from './MonteCarlo'
import CompanyDDM from './CompanyDDM'
import MyNav from './MyNav'
import SidebarFoo from './SideBarFoo'
import './CompanyPage.css'
import { Menu } from 'semantic-ui-react'
import { getCompanyMainInfo, getFinancialRatios, getCompanyNews, getCompanyLogo, getCompanyName, getCompanyStats, getTRChartData, getCRChartData, getGPChartData, getOEChartData, getOIChartData, getNIChartData, getCompanyMC, getCAChartData, getTAChartData, getTLChartData, getCCChartData, getCDChartData, getTCChartData, getTDChartData, getSEChartData, getCFChartData, getOGLChartData, getCompanyDDM } from './actions/index'

class CompanyPage extends Component {
  state = { activeItem: 'Main', backgroundColor: 'green', }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name})

  componentDidMount () {
    var wholepath = this.props.history.location.pathname
    var splitpath = wholepath.split('/')
    var symbol = splitpath.pop()
    this.goToCompanyPage(symbol)
  }

  goToCompanyPage (symbol) {
    this.props.getCompanyMC(symbol)
    this.props.getCompanyDDM(symbol)
    this.props.getCompanyMainInfo(symbol)
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
    this.props.getCAChartData(symbol)
    this.props.getTAChartData(symbol)
    this.props.getTLChartData(symbol)
    this.props.getCCChartData(symbol)
    this.props.getCDChartData(symbol)
    this.props.getTCChartData(symbol)
    this.props.getTDChartData(symbol)
    this.props.getSEChartData(symbol)
    this.props.getCFChartData(symbol)
    this.props.getOGLChartData(symbol)
    this.props.getCompanyNews(symbol)
  }

  render () {
    const { activeItem } = this.state
    return (
      <div id='wrapper'>
        <MyNav />
        <SidebarFoo />
        <Menu pointing secondary id='menu'>
        <Menu.Item style={{backgroundColor: this.state.activeItem === 'Main' ? this.state.backgroundColor : 'orange'}} id='transition1' className='tab' name='Main' active={activeItem === 'Main'} onClick={this.handleItemClick} />
        <Menu.Item style={{backgroundColor: this.state.activeItem === 'Income Statement' ? this.state.backgroundColor : 'orange'}} id='transition2' className='tab' name='Income Statement' active={activeItem === 'Income Statement'} onClick={this.handleItemClick} />
        <Menu.Item style={{backgroundColor: this.state.activeItem === 'Chart Details' ? this.state.backgroundColor : 'orange'}} id='transition3' className='tab' name='Chart Details' active={activeItem === 'Chart Details'} onClick={this.handleItemClick} />
        <Menu.Item style={{backgroundColor: this.state.activeItem === 'Key Ratios' ? this.state.backgroundColor : 'orange'}} id='transition4' className='tab' name='Key Ratios' active={activeItem === 'Key Ratios'} onClick={this.handleItemClick} />
        <Menu.Item style={{backgroundColor: this.state.activeItem === 'News' ? this.state.backgroundColor : 'orange'}} id='transition5' className='tab' name='News' active={activeItem === 'News'} onClick={this.handleItemClick} />
        <Menu.Item style={{backgroundColor: this.state.activeItem === 'Fin Ratios' ? this.state.backgroundColor : 'orange'}} id='transition6' className='tab' name='Fin Ratios' active={activeItem === 'Fin Ratios'} onClick={this.handleItemClick} />
        <Menu.Item style={{backgroundColor: this.state.activeItem === 'Valuation' ? this.state.backgroundColor : 'orange'}} id='transition7' className='tab' name='Valuation' active={activeItem === 'Valuation'} onClick={this.handleItemClick} />
        </Menu>
        <div id='info'>
          { this.state.activeItem === 'Main' ?
            <CompanyMain /> : this.state.activeItem === 'Income Statement' ? (
            <div>
            <TotalRevenueChart />
            <CostOfRevenueChart />
            <GrossProfitChart />
            <OperatingExpensesChart />
            <OperatingIncomeChart />
            <NetIncomeChart />
            <CurrentAssetsChart />
            <TotalAssetsChart />
            <TotalLiabilitiesChart />
            <CurrentCashChart />
            <CurrentDebtChart />
            <TotalCashChart />
            <TotalDebtChart />
            <ShareholderEquityChart />
            <CashFlowChart />
            <OperatingGainsandLosesChart /></div>) : this.state.activeItem === 'Chart Details' ? 
            <CompanyFinancials /> : this.state.activeItem === 'Key Ratios' ? <CompanyStats /> : this.state.activeItem === 'Valuation' ? <div><MonteCarloChart /><CompanyDDM /></div> : <CompanyNews />}
        </div>
      </div>
    )
  }
}

export default connect(({financials}) => financials, {getCompanyMainInfo, getCompanyName, getCompanyNews, getCompanyLogo, getCompanyStats, getFinancialRatios, getTRChartData, getCRChartData, getGPChartData, getOEChartData, getOIChartData, getNIChartData, getCompanyMC, getCAChartData, getTAChartData, getTLChartData, getCCChartData, getCDChartData, getTCChartData, getTDChartData, getSEChartData, getCFChartData, getOGLChartData, getCompanyDDM })(withRouter(CompanyPage))
