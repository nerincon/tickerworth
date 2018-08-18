import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getCompanyNews } from './actions'
import { Button } from 'semantic-ui-react'
import './CompanyNews.css'

class CompanyNews extends Component {
  render () {
    return (
      <div style={{marginTop: '2rem'}}>
        {this.props.compnews && this.props.compnews.map((news, idx) => {
          return (
            <div key={news.headline} className='row'>
              <div key={news.headline} className='col'>
                <div style={{marginBottom: '2rem'}}>
                  <h5 style={{marginBottom: '0', textTransform: 'uppercase'}}>Headline</h5>
                  <p key={news.headline}>{news.headline}</p>
                </div>
                <div style={{marginBottom: '2rem'}}>
                  <h5 style={{marginBottom: '0', textTransform: 'uppercase'}}>Date</h5>
                  <p key={news.newsdate}>{news.newsdate}</p>
                </div>
                <div style={{marginBottom: '2rem'}}>
                  <h5 style={{marginBottom: '0', textTransform: 'uppercase'}}>Source</h5>
                  <p key={news.source}>{news.source}</p>
                </div>
                <div style={{marginBottom: '2rem'}}>
                  <h5 style={{marginBottom: '0', textTransform: 'uppercase'}}>Summary</h5>
                  <p key={news.summary}>{news.summary}</p>
                </div>
                <div style={{marginTop: '2rem'}}>
                  <Button size='mini' positive><a style={{color: 'white'}} target='_blank' key={news.url} href={news.url}>Go to News Article</a></Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default connect(({compnews}) => compnews, {getCompanyNews})(withRouter(CompanyNews))
