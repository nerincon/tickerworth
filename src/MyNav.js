import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class MyNav extends Component {
  render () {
    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item><Link style={{color: 'green', fontSize: '1.4rem'}} to='/'>Tickerworth</Link></Menu.Item>
          <Menu.Item><a href='https://github.com/nerincon/tickerworth' target='_blank' rel='noopener noreferrer'>Github - Frontend</a></Menu.Item>
          <Menu.Item><a href='https://github.com/nerincon/tickerworth-backend' target='_blank' rel='noopener noreferrer'>Github - Backend</a></Menu.Item>
        </Container>
      </Menu>

    )
  }
}

export default MyNav
