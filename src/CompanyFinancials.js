import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getFinancialRatios } from './actions'
import './CompanyFinancials.css'

class CompanyFinancials extends Component {
  render () {
    console.log(this.props.financials)
    return (
      <div>
        <table id='tablet'>
          <tbody>
            <tr className='cleanrow' id='dates'>
              <th id='report'>Report Date</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td key={idx}>{fin.reportdate || 'N/A'}</td>
                )
              })}
            </tr>
            <tr className='cleanrow'>
              <th>Gross Profit</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td key={idx}>{fin.grossprofit || 'N/A'}</td>
                )
              })}
            </tr>
            <tr className='cleanrow'>
              <th>Cost of Revenue</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td key={idx}>{fin.costofrevenue || 'N/A'}</td>
                )
              })}
            </tr>
            <tr className='cleanrow'>
              <th>Operating Revenue</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td key={idx}>{fin.operatingrevenue || 'N/A'}</td>
                )
              })}
            </tr>
            <tr className='cleanrow'>
              <th>Total Revenue</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td key={idx}>{fin.totalrevenue || 'N/A'}</td>
                )
              })}
            </tr>
            <tr className='cleanrow'>
              <th>Operating Income</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td key={idx}>{fin.operatingincome || 'N/A'}</td>
                )
              })}
            </tr>
            <tr className='cleanrow'>
              <th>Net Income</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td key={idx}>{fin.netincome || 'N/A'}</td>
                )
              })}
            </tr>
            <tr className='cleanrow'>
              <th>Research and Development</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td key={idx}>{fin.researchanddevelopement || 'N/A'}</td>
                )
              })}
            </tr>
            <tr className='cleanrow'>
              <th>Operating Expense</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td key={idx}>{fin.operatingexpense || 'N/A'}</td>
                )
              })}
            </tr>
            <tr className='cleanrow'>
              <th>Total Assets</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td key={idx}>{fin.totalassets || 'N/A'}</td>
                )
              })}
            </tr>
            <tr className='cleanrow'>
              <th>Total Liabilities</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td key={idx}>{fin.totalliabilities || 'N/A'}</td>
                )
              })}
            </tr>
            <tr className='cleanrow'>
              <th>Current Cash</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td key={idx}>{fin.currentcash || 'N/A'}</td>
                )
              })}
            </tr>
            <tr className='cleanrow'>
              <th>Current Debt</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td key={idx}>{fin.currentdebt || 'N/A'}</td>
                )
              })}
            </tr>
            <tr className='cleanrow'>
              <th>Total Cash</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td key={idx}>{fin.totalcash || 'N/A'}</td>
                )
              })}
            </tr>
            <tr className='cleanrow'>
              <th>Total Debt</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td key={idx}>{fin.totaldebt || 'N/A'}</td>
                )
              })}
            </tr>
            <tr className='cleanrow'>
              <th>Shareholder Equity</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td key={idx}>{fin.shareholderequity || 'N/A'}</td>
                )
              })}
            </tr>
            <tr className='cleanrow'>
              <th>Cash Change</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td key={idx}>{fin.cashchange || 'N/A'}</td>
                )
              })}
            </tr>
            <tr className='cleanrow'>
              <th>CashFlow</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td key={idx}>{fin.cashflow || 'N/A'}</td>
                )
              })}
            </tr>
            <tr className='cleanrow'>
              <th>Operating Gains and Loses</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td key={idx}>{fin.operatinggainsandloses || 'N/A'}</td>
                )
              })}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(({financials}) => financials, {getFinancialRatios})(withRouter(CompanyFinancials))
