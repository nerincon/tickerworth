import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCompanyStats } from './actions'
import './CompanyStats.css'

class CompanyStats extends Component {
  render () {
    return (
      <div>
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Market Cap</h4>
              <p key={stat['marketcap']}>{stat['marketcap']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Revenue</h4>
              <p key={stat['revenue']}>{stat['revenue']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Revenue</h4>
              <p key={stat['revenue']}>{stat['revenue']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Revenue</h4>
              <p key={stat['revenue']}>{stat['revenue']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Revenue</h4>
              <p key={stat['revenue']}>{stat['revenue']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Revenue</h4>
              <p key={stat['revenue']}>{stat['revenue']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Revenue</h4>
              <p key={stat['revenue']}>{stat['revenue']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Revenue</h4>
              <p key={stat['revenue']}>{stat['revenue']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Revenue</h4>
              <p key={stat['revenue']}>{stat['revenue']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Revenue</h4>
              <p key={stat['revenue']}>{stat['revenue']}</p>
            </div>
          )
        })}
        {this.props.statsdata_db && this.props.statsdata_db.map((stat) => {
          return (
            <div className='bubble'>
              <h4>Revenue</h4>
              <p key={stat['revenue']}>{stat['revenue']}</p>
            </div>
          )
        })}

      </div>
    )
  }
}

export default connect(({compstats}) => compstats, {getCompanyStats})(withRouter(CompanyStats))
