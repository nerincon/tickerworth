import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getFinancialRatios } from './actions'

class CompanyFinancials extends Component {
  render () {
    return (
      <div>
        {this.props.findata_db && this.props.findata_db.map((fin) => {
          return (
            <p key={fin['grossprofit']}>{Object.keys(fin)}</p>
          )
        })}
        <Table color='green'>

          <Table.Body>
            {this.props.findata_db && this.props.findata_db.map((fin, idx) => {
              return (
                <Table.Row>
                  <Table.Cell key={Object.keys(fin) + idx}>{Object.keys(fin)}</Table.Cell>
                </Table.Row>
              )
            })}
            {/* <Table.Row>
              <Table.Cell>Apples</Table.Cell>
              <Table.Cell>200</Table.Cell>
              <Table.Cell>0g</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Orange</Table.Cell>
              <Table.Cell>310</Table.Cell>
              <Table.Cell>0g</Table.Cell>
            </Table.Row> */}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default connect(({financials}) => financials, {getFinancialRatios})(withRouter(CompanyFinancials))
