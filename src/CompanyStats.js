import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCompanyStats } from './actions'
import { Table } from 'semantic-ui-react'
import './CompanyStats.css'

class CompanyStats extends Component {
  render () {
    return (
      <div>
        <p style={{fontSize: '0.6rem', display: 'inline-block'}}>*trailing twelve months</p>
        <p style={{fontSize: '0.6rem', display: 'inline-block', paddingLeft: '2rem'}}>**delayed</p>
        <p style={{fontSize: '0.6rem', display: 'inline-block', paddingLeft: '2rem'}}>***most recent quarter</p>
        <div id='chart'>
          <Table basic='very'>
            <Table.Body>
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>Market Cap**</Table.Cell>
                    <Table.Cell key={stat['marketcap']}>{stat['marketcap']}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>Shares Outstanding</Table.Cell>
                    <Table.Cell key={stat['sharesoutstanding']}>{stat['sharesoutstanding']}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>Revenue*</Table.Cell>
                    <Table.Cell key={stat['revenue']}>{stat['revenue']}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>Gross Profit*</Table.Cell>
                    <Table.Cell key={stat['grossprofit']}>{stat['grossprofit']}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>EBITDA*</Table.Cell>
                    <Table.Cell key={stat['ebitda']}>{stat['ebitda']}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>Cash*</Table.Cell>
                    <Table.Cell key={stat['cash']}>{stat['cash']}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>Debt*</Table.Cell>
                    <Table.Cell key={stat['debt']}>{stat['debt']}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>Beta</Table.Cell>
                    <Table.Cell key={stat['beta']}>{stat['beta']}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>52 Week High</Table.Cell>
                    <Table.Cell key={stat['week52high']}>{stat['week52high']}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>52 Week Low</Table.Cell>
                    <Table.Cell key={stat['week52low']}>{stat['week52low']}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>52 Week Change</Table.Cell>
                    <Table.Cell key={stat['week52change']}>{stat['week52change']}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>Dividend Rate</Table.Cell>
                    <Table.Cell key={stat['dividendrate']}>{stat['dividendrate']}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>Dividend Yield</Table.Cell>
                    <Table.Cell key={stat['dividendyield']}>{stat['dividendyield'] || 'N/A'}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>Latest EPS Date</Table.Cell>
                    <Table.Cell key={stat['latestepsdate']}>{stat['latestepsdate'] || 'N/A'}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>Latest EPS***</Table.Cell>
                    <Table.Cell key={stat['latesteps']}>{stat['latesteps'] || 'N/A'}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>Concensus EPS***</Table.Cell>
                    <Table.Cell key={stat['concensuseps']}>{stat['concensuseps'] || 'N/A'}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>TTM EPS*</Table.Cell>
                    <Table.Cell key={stat['ttmeps']}>{stat['ttmeps'] || 'N/A'}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>Return on Equity*</Table.Cell>
                    <Table.Cell key={stat['returnonequity']}>{stat['returnonequity'] || 'N/A'}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>Revenue per Share*</Table.Cell>
                    <Table.Cell key={stat['revenuepershare']}>{stat['revenuepershare'] || 'N/A'}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>PE Ratio High</Table.Cell>
                    <Table.Cell key={stat['peratiohigh']}>{stat['peratiohigh'] || 'N/A'}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>PE Ratio Low</Table.Cell>
                    <Table.Cell key={stat['peratiolow']}>{stat['peratiolow'] || 'N/A'}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>Return on Assets*</Table.Cell>
                    <Table.Cell key={stat['returnonassets']}>{stat['returnonassets'] || 'N/A'}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>Return on Capital*</Table.Cell>
                    <Table.Cell key={stat['returnoncapital']}>{stat['returnoncapital'] || 'N/A'}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>Profit Margin</Table.Cell>
                    <Table.Cell key={stat['profitmargin']}>{stat['profitmargin'] || 'N/A'}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>Price to Sales</Table.Cell>
                    <Table.Cell key={stat['pricetosales']}>{stat['pricetosales'] || 'N/A'}</Table.Cell>
                  </Table.Row>
                )
              })}
              {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
                return (
                  <Table.Row>
                    <Table.Cell className='headers'>Price to Book</Table.Cell>
                    <Table.Cell key={stat['pricetobook']}>{stat['pricetobook'] || 'N/A'}</Table.Cell>
                  </Table.Row>
                )
              })}
            </Table.Body>
          </Table>
        </div>
      </div>
    )
  }
}

export default connect(({compstats}) => compstats, {getCompanyStats})(withRouter(CompanyStats))
