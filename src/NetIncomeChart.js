import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {BarChart} from 'react-easy-chart'
import { getNIChartData } from './actions'

class NetIncomeChart extends Component {
  state = {
    showToolTip: false
  }

  mouseOverHandler (d, e) {
    this.setState({
      showToolTip: true,
      top: `${e.screenY - 10}px`,
      left: `${e.screenX + 10}px`,
      y: d.y,
      x: d.x})
  }

  mouseMoveHandler (e) {
    if (this.state.showToolTip) {
      this.setState({top: `${e.y - 10}px`, left: `${e.x + 10}px`})
    }
  }

  mouseOutHandler () {
    this.setState({showToolTip: false})
  }
  render () {
    return (
      <div style={{display: 'inline-block', paddingLeft: '2rem'}}>
        {this.props.nichart
          ? <div style={{display: 'inline-block', boxShadow: '2px 4px 3px rgba(0,0,0,0.3)', padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '10px'}}>
            <h4 style={{color: 'green', fontFamily: 'Montserrat', textTransform: 'uppercase'}}>Net Income</h4>
            {this.state.showToolTip ? <p style={{position: 'absolute', fontSize: '0.7rem', fontWeight: 'bold', letterSpacing: '0.04em', textTransform: 'uppercase'}}>Value: ${this.state.y}</p> : ''}
            <BarChart
              axes
              grid
              colorBars
              height={200}
              width={350}
              margin={{top: 30, right: 0, bottom: 30, left: 100}}
              data={this.props.nichart}
              mouseOverHandler={this.mouseOverHandler.bind(this)}
              mouseOutHandler={this.mouseOutHandler.bind(this)}
              mouseMoveHandler={this.mouseMoveHandler.bind(this)}
            /><p style={{fontSize: '0.7rem', marginLeft: '21rem'}}>report date</p></div> : ''}
      </div>
    )
  }
}

export default connect(({nichart}) => nichart, {getNIChartData})(withRouter(NetIncomeChart))
