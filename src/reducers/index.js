import { combineReducers } from 'redux'
import financials from './keyRatiosReducer'

// if more reducers are created I can bundle them up here
export default combineReducers({
  financials
})
