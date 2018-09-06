import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCompanyMainInfo } from './actions'
import { Table } from 'semantic-ui-react'
import './CompanyMain.css'

class CompanyMain extends Component {
  render () {
    return (
      <div>
        {this.props.maininfo && this.props.maininfo.map((item, idx) => {
          return (
            <div id='upper'>
              <Table basic='very'>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell className='descheader'>Website :</Table.Cell>
                    <Table.Cell key={item.website}><a href={item.website} target='_blank'>{item.website}</a></Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className='descheader'>Industry :</Table.Cell>
                    <Table.Cell key={item.industry}>{item.industry}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className='descheader'>Sector :</Table.Cell>
                    <Table.Cell key={item.sector}>{item.sector}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className='descheader'>Exchange :</Table.Cell>
                    <Table.Cell key={item.exchange}>{item.exchange}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className='descheader'>CEO :</Table.Cell>
                    <Table.Cell key={item.ceo}>{item.ceo}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className='descheader' id='wide'>Company Description:</Table.Cell>
                    <Table.Cell key={item.description}>{item.description}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          )
        })}
      </div>
    )
  }
}

export default connect(({maininfo}) => maininfo, {getCompanyMainInfo})(withRouter(CompanyMain))
