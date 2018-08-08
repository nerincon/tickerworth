import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios';

class App extends Component {


  getApi = () => {
    axios.get('http://localhost:5000/api', {
    })
      .then(({data}) => {
        console.log('got here!')
        console.log(data)
      })
      .catch(err => console.log(err));
  };


  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.getApi}>Get API (Test)</button>
      </div>
    )
  }
}

export default App
