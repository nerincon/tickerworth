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
        <table style={{ width: '100%' }}>
          <tbody>
            <tr>
              <th>Report Date</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td>{fin.reportdate || 'N/A'}</td>
                )
              })}
            </tr>
            <tr>
              <th>Gross Profit</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td>{fin.grossprofit || 'N/A'}</td>
                )
              })}
            </tr>
            <tr>
              <th>Cost of Revenue</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td>{fin.costofrevenue || 'N/A'}</td>
                )
              })}
            </tr>
            <tr>
              <th>Operating Revenue</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td>{fin.operatingrevenue || 'N/A'}</td>
                )
              })}
            </tr>
            <tr>
              <th>Total Revenue</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td>{fin.totalrevenue || 'N/A'}</td>
                )
              })}
            </tr>
            <tr>
              <th>Operating Income</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td>{fin.operatingincome || 'N/A'}</td>
                )
              })}
            </tr>
            <tr>
              <th>Net Income</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td>{fin.netincome || 'N/A'}</td>
                )
              })}
            </tr>
            <tr>
              <th>Research and Development</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td>{fin.researchanddevelopement || 'N/A'}</td>
                )
              })}
            </tr>
            <tr>
              <th>Operating Expense</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td>{fin.operatingexpense || 'N/A'}</td>
                )
              })}
            </tr>
            <tr>
              <th>Total Assets</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td>{fin.totalassets || 'N/A'}</td>
                )
              })}
            </tr>
            <tr>
              <th>Total Liabilities</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td>{fin.totalliabilities || 'N/A'}</td>
                )
              })}
            </tr>
            <tr>
              <th>Current Cash</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td>{fin.currentcash || 'N/A'}</td>
                )
              })}
            </tr>
            <tr>
              <th>Current Debt</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td>{fin.currentdebt || 'N/A'}</td>
                )
              })}
            </tr>
            <tr>
              <th>Total Cash</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td>{fin.totalcash || 'N/A'}</td>
                )
              })}
            </tr>
            <tr>
              <th>Total Debt</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td>{fin.totaldebt || 'N/A'}</td>
                )
              })}
            </tr>
            <tr>
              <th>Shareholder Equity</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td>{fin.shareholderequity || 'N/A'}</td>
                )
              })}
            </tr>
            <tr>
              <th>Cash Change</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td>{fin.cashchange || 'N/A'}</td>
                )
              })}
            </tr>
            <tr>
              <th>CashFlow</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td>{fin.cashflow || 'N/A'}</td>
                )
              })}
            </tr>
            <tr>
              <th>Operating Gains and Loses</th>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <td>{fin.operatinggainsandloses || 'N/A'}</td>
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
