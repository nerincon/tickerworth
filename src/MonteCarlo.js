import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Plot from 'react-plotly.js'
// import _ from 'lodash'
import { getCompanyMC } from './actions'

class MonteCarloChart extends Component {
  render () {
    // const groupArr = _.valuesIn(...this.props.mcchart[0])
    // console.log(groupArr)
    window.DATA = this.props.mcchart
    const test = this.props.mcchart[0][0]
    console.log(test)
    var mylist = []
    this.props.mcchart.map((item, idx) => {
      mylist = Object.keys(item).concat(mylist)
    })
    // var valuesList = this.props.mcchart.map((item, idx) => {
    //   return Object.values(item)[0][0]
    // })

    var predictionsForDayZero = this.props.mcchart[0][0]
    var mydata = predictionsForDayZero.map((prediction, indexOfPrediction) => {
      var yList = this.props.mcchart.map((item) => {
        return Object.values(item)[0][indexOfPrediction]
      })
      return {x: mylist, y: yList}
    })
    console.log(mydata)

    /**
 *
 * someVar = [{
 *   x: mylist.revserse(),
 *   y: theYValuesForTheFirstPrediction,
 * }, {
 *   x: mylist.reverse(),
 *   y: theYValuesForTheSecondPrediction,
 * }, ....]
 *
 */

    return (
      // <div style={{display: 'inline-block', paddingLeft: '2rem'}}>
      //   <h1>test</h1>
      //   { this.props.mcchart && this.props.mcchart.map((item, idx) => {
      //     return (
      //       <p>{item['0']}</p>
      //     )
      //   })}
      // </div>
      <Plot
        data={mydata}
        layout={{width: 600, height: 400, title: 'MonteCarlo Simulation'}}
      />
    )
  }
}

export default connect(({mcchart}) => mcchart, {getCompanyMC})(withRouter(MonteCarloChart))
