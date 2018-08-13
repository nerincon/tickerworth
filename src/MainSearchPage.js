import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Autocomplete from 'react-autocomplete'
import { CategorizedRequest, setCompanies, getCompanies } from './utils'
import { getFinancialRatios } from './actions/index'
import { Button } from 'semantic-ui-react'
import './MainSearchPage.css'
import MyNav from './MyNav';


class MainSearchPage extends Component {
  state = {
    value: '',
    listings: [],
    loading: false
  }

  async componentDidMount () {
    if (!getCompanies() || !getCompanies().length) {
      await window.fetch('data/companies_dev.json')
      .then(function (response) {
        console.log(response)
        return response.json()
    })
    .then(companyListing => {
      this.setState({companyListing}, () => {
          setCompanies(this.state.companyListing)
      })
    })
    .catch(() => console.error('Uh-oh - fetching initial inventory.json failed!'))
  }
    else {
      console.log('Company listings set!')
  }
}

// componentWillUpdate = ((nextProps, nextState) =>  {
//   console.log('ComponentWillUpdate: listings: ', nextState.listings)
//   // console.log(this.state)
// })

handleclick = ((e) => {
  // window.getFinancialRatios = this.props.getFinancialRatios
  if(this.state.listings.length > 1 || this.state.listings.length === 0) {
    console.log('No company picked!')
  } 
  else {
    var symbol = this.state.listings[0].symbol
    this.props.getFinancialRatios(symbol, this.props.history)
  }
})


  render () {
    var requestTimer = null
    return (
      <div>
        <MyNav />
        <div id='mainsearch'>
        <h1 id='header'>Company Search</h1>
          <Autocomplete
            value={this.state.value}
            inputProps={{ id: 'companies-autocomplete' }}
            items={this.state.listings}
            getItemValue={(item) => item.name}
            // onSelect={(value, state) => this.setState({ value, listings: [state] })}
            onChange={(event, value) => {
              this.setState({ value, loading: true, listings: [] })
              clearTimeout(requestTimer)
              requestTimer = CategorizedRequest(value, (items) => {
                this.setState({ listings: items, loading: false })
              })
            }}
            renderItem={(item, isHighlighted) => (
              <div
                className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
                key={item.symbol}
              >{item.name}</div>
            )}
            renderMenu={(items, value) => (
              <div className='menu' id='list'>
                {value === '' ? (
                  <div className='item'></div>
                ) : this.state.loading ? (
                  <div className='item'>Loading...</div>
                ) : items.length === 0 ? (
                  <div className='item'>No matches for {value}</div>
                ) : items}
              </div>
            )}
            onSelect={(value, item) => {
              console.log(item.symbol)
              this.setState({ value, listings: [item] })
            }}
            isItemSelectable={(item) => !item.header}
          />
          <Button basic color='green' id='go' onClick={this.handleclick} >Search</Button>
        </div>
      </div>
    )
  }
}
export default connect(({financials}) => financials, {getFinancialRatios})(withRouter(MainSearchPage))