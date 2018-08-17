import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {BarChart} from 'react-easy-chart'
import { getNIChartData } from './actions'

class NetIncomeChart extends Component {
  render () {
    return (
      <div style={{display: 'inline-block', paddingLeft: '2rem'}}>
        {this.props.nichart
          ? <div style={{display: 'inline-block', boxShadow: '2px 4px 3px rgba(0,0,0,0.3)', padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '10px'}}>
            <h4 style={{color: 'green', fontFamily: 'Montserrat', textTransform: 'uppercase'}}>Net Income</h4><BarChart
              axes
              grid
              colorBars
              height={200}
              width={350}
              yDomainRange={[0, 100000000000]}
              margin={{top: 30, right: 0, bottom: 30, left: 100}}
              data={this.props.nichart}
            /><p style={{fontSize: '0.7rem', marginLeft: '21rem'}}>report date</p></div> : ''}
      </div>
    )
  }
}

export default connect(({nichart}) => nichart, {getNIChartData})(withRouter(NetIncomeChart))
