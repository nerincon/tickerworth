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
import SidebarFoo from './SideBarFoo'
import './CompanyPage.css'
import { Menu } from 'semantic-ui-react'
import { getCompanyMainInfo, getFinancialRatios, getCompanyNews, getCompanyLogo, getCompanyPrice, getCompanyName, getCompanyStats, getTRChartData, getCRChartData, getGPChartData, getOEChartData, getOIChartData, getNIChartData, getCompanyMC, getCAChartData, getTAChartData, getTLChartData, getCCChartData, getCDChartData, getTCChartData, getTDChartData, getSEChartData, getCFChartData, getOGLChartData, getCompanyDDM } from './actions/index'

class CompanyPage extends Component {
  state = { activeItem: 'Main' }

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
    this.props.getCompanyPrice(symbol)
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
        <SidebarFoo />
        <Menu pointing secondary id='menu'>
        <Menu.Item id='transition1' className='tab' name='Main' active={activeItem === 'Main'} onClick={this.handleItemClick} />
        <Menu.Item id='transition2' className='tab' name='Fin Charts' active={activeItem === 'Fin Charts'} onClick={this.handleItemClick} />
        <Menu.Item id='transition3' className='tab' name='Fin Table' active={activeItem === 'Fin Table'} onClick={this.handleItemClick} />
        <Menu.Item id='transition4' className='tab' name='Key Ratios' active={activeItem === 'Key Ratios'} onClick={this.handleItemClick} />
        <Menu.Item id='transition5' className='tab' name='News' active={activeItem === 'News'} onClick={this.handleItemClick} />
        <Menu.Item id='transition6' className='tab' name='Valuation' active={activeItem === 'Valuation'} onClick={this.handleItemClick} />
        <Menu.Item id='transition7' className='tab' name='MC Simulation' active={activeItem === 'MC Simulation'} onClick={this.handleItemClick} />
        </Menu>
        <div id='info'>
          { this.state.activeItem === 'Main' ?
            <CompanyMain /> : this.state.activeItem === 'Fin Charts' ? (
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
            <OperatingGainsandLosesChart /></div>) : this.state.activeItem === 'Fin Table' ? 
            <CompanyFinancials /> : this.state.activeItem === 'Key Ratios' ? <CompanyStats /> : this.state.activeItem === 'News' ? <CompanyNews /> : this.state.activeItem === 'Valuation'
            ? <CompanyDDM /> : <MonteCarloChart />}
        </div>
      </div>
    )
  }
}

export default connect(({financials}) => financials, {getCompanyMainInfo, getCompanyName, getCompanyNews, getCompanyPrice, getCompanyLogo, getCompanyStats, getFinancialRatios, getTRChartData, getCRChartData, getGPChartData, getOEChartData, getOIChartData, getNIChartData, getCompanyMC, getCAChartData, getTAChartData, getTLChartData, getCCChartData, getCDChartData, getTCChartData, getTDChartData, getSEChartData, getCFChartData, getOGLChartData, getCompanyDDM })(withRouter(CompanyPage))
