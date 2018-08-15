import { combineReducers } from 'redux'
import financials from './CompanyKeyFinReducer'
import img from './companyLogoReducer'
import compname from './companyNameReducer'
import compstats from './CompanyKeyStatsReducer'

// if more reducers are created I can bundle them up here
export default combineReducers({
  financials, img, compname, compstats
})
