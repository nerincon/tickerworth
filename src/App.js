import React, { Component } from 'react'
import MainSearchPage from './MainSearchPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import CompanyPage from './CompanyPage'
import { Provider } from 'react-redux'
import store from './store.js'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path='/' component={MainSearchPage} />
            <Route path='/comp/:symbol' component={CompanyPage} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App

// getApi = () => {
//   axios.get('http://localhost:5000/api', {
//   })
//     .then(({data}) => {
//       console.log('got here!')
//       console.log(data)
//     })
//     .catch(err => console.log(err));
// };
