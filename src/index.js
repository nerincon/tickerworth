import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import MainSearchPage from './MainSearchPage'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<MainSearchPage />, document.getElementById('root'))
registerServiceWorker()
