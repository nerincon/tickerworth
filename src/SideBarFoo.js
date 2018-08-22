import React, { Component } from 'react'
import './SideBar.css'
import CompanyName from './CompanyName'
import CompanyLogo from './CompanyLogo'
import CompanyPrice from './CompanyPrice'

class SidebarFoo extends Component {
  render () {
    return (
      <div id='mainsidemenu'>
        <div id='compname'>
          <CompanyName />
        </div>
        <div id='complogo'>
          <CompanyLogo />
        </div>
        <div id='price'>
          <CompanyPrice />
        </div>
      </div>
    )
  }
}

export default SidebarFoo
