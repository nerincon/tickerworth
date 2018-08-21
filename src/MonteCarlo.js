import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import Plot from 'react-plotly.js'
import _ from 'lodash'
import { getCompanyMC } from './actions'

class MonteCarloChart extends Component {
  render () {
    const groupArr = _.valuesIn(...this.props.mcchart[0])
    console.log(groupArr)
    return (
      <div style={{display: 'inline-block', paddingLeft: '2rem'}}>
        <h1>test</h1>
        { this.props.mcchart && this.props.mcchart.map((item, idx) => {
          return (
            <p>{item['0']}</p>
          )
        })}
      </div>
    )
  }
}

export default connect(({mcchart}) => mcchart, {getCompanyMC})(withRouter(MonteCarloChart))
