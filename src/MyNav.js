import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'

class MyNav extends Component {
  render () {
    return (
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item style={{color: 'green', fontSize: '1.4rem'}}>Tickerworth</Menu.Item>
          <Menu.Item><a href='https://github.com/nerincon/tickerworth' target='_blank' rel='noopener noreferrer'>Github - Frontend</a></Menu.Item>
          <Menu.Item><a href='https://github.com/nerincon/tickerworth-backend' target='_blank' rel='noopener noreferrer'>Github - Backend</a></Menu.Item>
        </Container>
      </Menu>

    )
  }
}

export default MyNav
