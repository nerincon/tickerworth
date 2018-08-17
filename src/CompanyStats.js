import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCompanyStats } from './actions'
import './CompanyStats.css'

class CompanyStats extends Component {
  render () {
    return (
      <div>
        <div style={{position: 'absolute'}}>
          <p style={{paddingTop: '3rem', fontSize: '0.8rem', display: 'inline-block', paddingLeft: '5rem'}}>*trailing twelve months</p>
          <p style={{paddingTop: '3rem', fontSize: '0.8rem', display: 'inline-block', paddingLeft: '2rem'}}>**delayed</p>
          <p style={{paddingTop: '3rem', fontSize: '0.8rem', display: 'inline-block', paddingLeft: '2rem'}}>***most recent quarter</p>
        </div>
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Market Cap**</h4>
              <p key={stat['marketcap']}>{stat['marketcap']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Shares Outstanding</h4>
              <p key={stat['sharesoutstanding']}>{stat['sharesoutstanding']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Revenue*</h4>
              <p key={stat['revenue']}>{stat['revenue']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Gross Profit*</h4>
              <p key={stat['grossprofit']}>{stat['grossprofit']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>EBITDA*</h4>
              <p key={stat['ebitda']}>{stat['ebitda']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Cash*</h4>
              <p key={stat['cash']}>{stat['cash']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Debt*</h4>
              <p key={stat['debt']}>{stat['debt']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Beta</h4>
              <p key={stat['beta']}>{stat['beta']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>52 Week High</h4>
              <p key={stat['week52high']}>{stat['week52high']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>52 Week Low</h4>
              <p key={stat['week52low']}>{stat['week52low']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>52 Week Change</h4>
              <p key={stat['week52change']}>{stat['week52change']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Dividend Rate</h4>
              <p key={stat['dividendrate']}>{stat['dividendrate']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Dividend Yield</h4>
              <p key={stat['dividendyield']}>{stat['dividendyield'] || 'N/A'}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Latest EPS Date</h4>
              <p key={stat['latestepsdate']}>{stat['latestepsdate'] || 'N/A'}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Latest EPS***</h4>
              <p key={stat['latesteps']}>{stat['latesteps'] || 'N/A'}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Concensus EPS***</h4>
              <p key={stat['concensuseps']}>{stat['concensuseps'] || 'N/A'}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>TTM EPS*</h4>
              <p key={stat['ttmeps']}>{stat['ttmeps'] || 'N/A'}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Return on Equity*</h4>
              <p key={stat['returnonequity']}>{stat['returnonequity'] || 'N/A'}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Revenue per Share*</h4>
              <p key={stat['revenuepershare']}>{stat['revenuepershare'] || 'N/A'}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>PE Ratio High</h4>
              <p key={stat['peratiohigh']}>{stat['peratiohigh'] || 'N/A'}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>PE Ratio Low</h4>
              <p key={stat['peratiolow']}>{stat['peratiolow'] || 'N/A'}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Return on Assets*</h4>
              <p key={stat['returnonassets']}>{stat['returnonassets'] || 'N/A'}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Return on Capital*</h4>
              <p key={stat['returnoncapital']}>{stat['returnoncapital'] || 'N/A'}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Profit Margin</h4>
              <p key={stat['profitmargin']}>{stat['profitmargin'] || 'N/A'}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Price to Sales</h4>
              <p key={stat['pricetosales']}>{stat['pricetosales'] || 'N/A'}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Price to Book</h4>
              <p key={stat['pricetobook']}>{stat['pricetobook'] || 'N/A'}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default connect(({compstats}) => compstats, {getCompanyStats})(withRouter(CompanyStats))
