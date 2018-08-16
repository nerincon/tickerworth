import { combineReducers } from 'redux'
import financials from './CompanyKeyFinReducer'
import img from './companyLogoReducer'
import compname from './companyNameReducer'
import compstats from './CompanyKeyStatsReducer'
import trchart from './ChartTRReducer'
import crchart from './ChartCRReducer'
import gpchart from './ChartGPReducer'
import oechart from './ChartOEReducer'
import oichart from './ChartOIReducer'
import nichart from './ChartNIReducer'

// if more reducers are created I can bundle them up here
export default combineReducers({
  financials, img, compname, compstats, trchart, crchart, gpchart, oechart, oichart, nichart
})
