import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getFinancialRatios } from './actions'
import { Table } from 'semantic-ui-react'
import './CompanyFinancials.css'

class CompanyFinancials extends Component {
  render () {
    console.log(this.props.financials)
    return (
      <div id='wrapper'>
        <Table basic='very'>
          <Table.Body>
            <Table.Row>
              <Table.Cell className='descheader'>Report Date</Table.Cell>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <Table.Cell id='dates' key={fin.reportdate}>{fin.reportdate || 'N/A'}</Table.Cell>
                )
              })}
            </Table.Row>
            <Table.Row>
              <Table.Cell className='descheader'>Gross Profit</Table.Cell>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <Table.Cell key={fin.grossprofit}>{fin.grossprofit || 'N/A'}</Table.Cell>
                )
              })}
            </Table.Row>
            <Table.Row>
              <Table.Cell className='descheader'>Cost of Revenue</Table.Cell>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <Table.Cell key={fin.costofrevenue}>{fin.costofrevenue || 'N/A'}</Table.Cell>
                )
              })}
            </Table.Row>
            <Table.Row>
              <Table.Cell className='descheader'>Operating Revenue</Table.Cell>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <Table.Cell key={fin.operatingrevenue}>{fin.operatingrevenue || 'N/A'}</Table.Cell>
                )
              })}
            </Table.Row>
            <Table.Row>
              <Table.Cell className='descheader'>Total Revenue</Table.Cell>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <Table.Cell key={fin.totalrevenue}>{fin.totalrevenue || 'N/A'}</Table.Cell>
                )
              })}
            </Table.Row>
            <Table.Row>
              <Table.Cell className='descheader'>Operating Income</Table.Cell>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <Table.Cell key={fin.operatingincome}>{fin.operatingincome || 'N/A'}</Table.Cell>
                )
              })}
            </Table.Row>
            <Table.Row>
              <Table.Cell className='descheader'>Net Income</Table.Cell>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <Table.Cell key={fin.netincome}>{fin.netincome || 'N/A'}</Table.Cell>
                )
              })}
            </Table.Row>
            <Table.Row>
              <Table.Cell className='descheader'>Research and Development</Table.Cell>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <Table.Cell key={fin.researchanddevelopement}>{fin.researchanddevelopement || 'N/A'}</Table.Cell>
                )
              })}
            </Table.Row>
            <Table.Row>
              <Table.Cell className='descheader'>Operating Expense</Table.Cell>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <Table.Cell key={fin.operatingexpense}>{fin.operatingexpense || 'N/A'}</Table.Cell>
                )
              })}
            </Table.Row>
            <Table.Row>
              <Table.Cell className='descheader'>Total Assets</Table.Cell>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <Table.Cell key={fin.totalassets}>{fin.totalassets || 'N/A'}</Table.Cell>
                )
              })}
            </Table.Row>
            <Table.Row>
              <Table.Cell className='descheader'>Total Liabilities</Table.Cell>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <Table.Cell key={fin.totalliabilities}>{fin.totalliabilities || 'N/A'}</Table.Cell>
                )
              })}
            </Table.Row>
            <Table.Row>
              <Table.Cell className='descheader'>Current Cash</Table.Cell>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <Table.Cell key={fin.currentcash}>{fin.currentcash || 'N/A'}</Table.Cell>
                )
              })}
            </Table.Row>
            <Table.Row>
              <Table.Cell className='descheader'>Current Debt</Table.Cell>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <Table.Cell key={fin.currentdebt}>{fin.currentdebt || 'N/A'}</Table.Cell>
                )
              })}
            </Table.Row>
            <Table.Row>
              <Table.Cell className='descheader'>Total Cash</Table.Cell>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <Table.Cell key={fin.totalcash}>{fin.totalcash || 'N/A'}</Table.Cell>
                )
              })}
            </Table.Row>
            <Table.Row>
              <Table.Cell className='descheader'>Total Debt</Table.Cell>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <Table.Cell key={fin.totaldebt}>{fin.totaldebt || 'N/A'}</Table.Cell>
                )
              })}
            </Table.Row>
            <Table.Row>
              <Table.Cell className='descheader'>Shareholder Equity</Table.Cell>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <Table.Cell key={fin.shareholderequity}>{fin.shareholderequity || 'N/A'}</Table.Cell>
                )
              })}
            </Table.Row>
            <Table.Row>
              <Table.Cell className='descheader'>Cash Change</Table.Cell>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <Table.Cell key={fin.cashchange}>{fin.cashchange || 'N/A'}</Table.Cell>
                )
              })}
            </Table.Row>
            <Table.Row>
              <Table.Cell className='descheader'>CashFlow</Table.Cell>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <Table.Cell key={fin.cashflow}>{fin.cashflow || 'N/A'}</Table.Cell>
                )
              })}
            </Table.Row>
            <Table.Row>
              <Table.Cell className='descheader'>Operating Gains and Loses</Table.Cell>
              {this.props.financials && this.props.financials.map((fin, idx) => {
                return (
                  <Table.Cell key={fin.operatinggainsandloses}>{fin.operatinggainsandloses || 'N/A'}</Table.Cell>
                )
              })}
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default connect(({financials}) => financials, {getFinancialRatios})(withRouter(CompanyFinancials))
