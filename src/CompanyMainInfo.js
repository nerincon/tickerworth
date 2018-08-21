import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCompanyMainInfo } from './actions'
import { Button } from 'semantic-ui-react'
import './CompanyMain.css'

class CompanyMain extends Component {
  render () {
    return (
      <div style={{marginTop: '2rem'}}>
        {this.props.maininfo && this.props.maininfo.map((item, idx) => {
          return (
            <div key={'main'}>
              <div key={idx} id='web' style={{padding: '2.6rem', backgroundColor: '#21ba45', marginRight: '59rem', borderRadius: '50%'}}>
                <Button size='large' positive><a style={{color: 'white', padding: '2rem', fontFamily: 'Montserrat'}} target='_blank' key={item.website} href={item.website}>WEBSITE</a></Button>
              </div>
              <div key={item.industry + idx} id='industry'>
                <h3>Industry</h3>
                <h4 key={item.industry}>{item.industry}</h4>
              </div>
              <div key={item.sector + idx} id='sector'>
                <h3>Sector</h3>
                <h4 key={item.sector}>{item.sector}</h4>
              </div>
              <div key={item.exchange + idx} id='exchange'>
                <h3>Exchange</h3>
                <h4 key={item.exchange}>{item.exchange}</h4>
              </div>
              <div key={item.ceo + idx} id='ceo'>
                <h3>ceo</h3>
                <h4 key={item.ceo}>{item.ceo}</h4>
              </div>
              <div key={item.description + idx} id='description'>
                <h3>Company Description</h3>
                <p key={item.description}>{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default connect(({maininfo}) => maininfo, {getCompanyMainInfo})(withRouter(CompanyMain))
