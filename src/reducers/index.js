import { combineReducers } from 'redux'
import financials from './CompanyKeyFinReducer'
import compnews from './CompanyNewsReducer'
import img from './companyLogoReducer'
import compname from './companyNameReducer'
import compstats from './CompanyKeyStatsReducer'
import trchart from './ChartTRReducer'
import crchart from './ChartCRReducer'
import gpchart from './ChartGPReducer'
import oechart from './ChartOEReducer'
import oichart from './ChartOIReducer'
import nichart from './ChartNIReducer'

export default combineReducers({
  financials, compnews, img, compname, compstats, trchart, crchart, gpchart, oechart, oichart, nichart
})
