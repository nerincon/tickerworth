import { combineReducers } from 'redux'
import financials from './keyRatiosReducer'
import img from './companyLogoReducer'
import compname from './companyNameReducer'

// if more reducers are created I can bundle them up here
export default combineReducers({
  financials, img, compname
})
