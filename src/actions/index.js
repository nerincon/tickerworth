import axios from 'axios'

import { GET_KEY_FIN_RATIOS, GET_COMPANY_LOGO, GET_COMPANY_NAME, GET_COMPANY_STATS, GET_CHART_TR, GET_CHART_CR, GET_CHART_GP, GET_CHART_OE, GET_CHART_OI, GET_CHART_NI, GET_COMPANY_NEWS, GET_COMPANY_MAIN, GET_COMPANY_MC, GET_CHART_CA, GET_CHART_TA, GET_CHART_TL, GET_CHART_CC, GET_CHART_CD, GET_CHART_TC, GET_CHART_TD, GET_CHART_SE, GET_CHART_CF, GET_CHART_OGL, GET_COMPANY_DDM, GET_COMPANY_PRICE } from './types'

console.log(process.env.NODE_ENV)
const url = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://backendapitickerworth.herokuapp.com'

const axiosInstance = axios.create({
  baseURL: url
})

export const getFinancialRatios = (symbol, history) => dispatch => {
  axiosInstance.get('/fin/' + symbol).then(res => {
    dispatch({type: GET_KEY_FIN_RATIOS, payload: res.data})
    if (window.location.href.indexOf('comp/') !== -1) {
      history.push(`${symbol}`)
    } else {
      history.push(`comp/${symbol}`)
    }
  })
}

export const getCompanyLogo = (symbol) => dispatch => {
  axiosInstance.get('/logo/' + symbol).then(res => {
    dispatch({type: GET_COMPANY_LOGO, payload: res.data})
  })
}

export const getCompanyName = (symbol) => dispatch => {
  axiosInstance.get('/name/' + symbol).then(res => {
    dispatch({type: GET_COMPANY_NAME, payload: res.data})
  })
}

export const getCompanyStats = (symbol) => dispatch => {
  axiosInstance.get('/stats/' + symbol).then(res => {
    dispatch({type: GET_COMPANY_STATS, payload: res.data})
  })
}

export const getTRChartData = (symbol) => dispatch => {
  axiosInstance.get('/trchart/' + symbol).then(res => {
    dispatch({type: GET_CHART_TR, payload: res.data})
  })
}

export const getCRChartData = (symbol) => dispatch => {
  axiosInstance.get('/crchart/' + symbol).then(res => {
    dispatch({type: GET_CHART_CR, payload: res.data})
  })
}

export const getGPChartData = (symbol) => dispatch => {
  axiosInstance.get('/gpchart/' + symbol).then(res => {
    dispatch({type: GET_CHART_GP, payload: res.data})
  })
}

export const getOEChartData = (symbol) => dispatch => {
  axiosInstance.get('/oechart/' + symbol).then(res => {
    dispatch({type: GET_CHART_OE, payload: res.data})
  })
}

export const getOIChartData = (symbol) => dispatch => {
  axiosInstance.get('/oichart/' + symbol).then(res => {
    dispatch({type: GET_CHART_OI, payload: res.data})
  })
}

export const getNIChartData = (symbol) => dispatch => {
  axiosInstance.get('/nichart/' + symbol).then(res => {
    dispatch({type: GET_CHART_NI, payload: res.data})
  })
}

export const getCAChartData = (symbol) => dispatch => {
  axiosInstance.get('/cachart/' + symbol).then(res => {
    dispatch({type: GET_CHART_CA, payload: res.data})
  })
}

export const getTAChartData = (symbol) => dispatch => {
  axiosInstance.get('/tachart/' + symbol).then(res => {
    dispatch({type: GET_CHART_TA, payload: res.data})
  })
}

export const getTLChartData = (symbol) => dispatch => {
  axiosInstance.get('/tlchart/' + symbol).then(res => {
    dispatch({type: GET_CHART_TL, payload: res.data})
  })
}

export const getCCChartData = (symbol) => dispatch => {
  axiosInstance.get('/ccchart/' + symbol).then(res => {
    dispatch({type: GET_CHART_CC, payload: res.data})
  })
}

export const getCDChartData = (symbol) => dispatch => {
  axiosInstance.get('/cdchart/' + symbol).then(res => {
    dispatch({type: GET_CHART_CD, payload: res.data})
  })
}

export const getTCChartData = (symbol) => dispatch => {
  axiosInstance.get('/tcchart/' + symbol).then(res => {
    dispatch({type: GET_CHART_TC, payload: res.data})
  })
}

export const getTDChartData = (symbol) => dispatch => {
  axiosInstance.get('/tdchart/' + symbol).then(res => {
    dispatch({type: GET_CHART_TD, payload: res.data})
  })
}

export const getSEChartData = (symbol) => dispatch => {
  axiosInstance.get('/sechart/' + symbol).then(res => {
    dispatch({type: GET_CHART_SE, payload: res.data})
  })
}

export const getCFChartData = (symbol) => dispatch => {
  axiosInstance.get('/cfchart/' + symbol).then(res => {
    dispatch({type: GET_CHART_CF, payload: res.data})
  })
}

export const getOGLChartData = (symbol) => dispatch => {
  axiosInstance.get('/oglchart/' + symbol).then(res => {
    dispatch({type: GET_CHART_OGL, payload: res.data})
  })
}

export const getCompanyNews = (symbol) => dispatch => {
  axiosInstance.get('/news/' + symbol).then(res => {
    dispatch({type: GET_COMPANY_NEWS, payload: res.data})
  })
}

export const getCompanyMainInfo = (symbol) => dispatch => {
  axiosInstance.get('/main/' + symbol).then(res => {
    dispatch({type: GET_COMPANY_MAIN, payload: res.data})
  })
}

export const getCompanyMC = (symbol) => dispatch => {
  axiosInstance.get('/mcarlo/' + symbol).then(res => {
    dispatch({type: GET_COMPANY_MC, payload: res.data})
  })
}

export const getCompanyDDM = (symbol) => dispatch => {
  axiosInstance.get('/ddm/' + symbol).then(res => {
    dispatch({type: GET_COMPANY_DDM, payload: res.data})
  })
}

export const getCompanyPrice = (symbol) => dispatch => {
  axiosInstance.get('/price/' + symbol).then(res => {
    dispatch({type: GET_COMPANY_PRICE, payload: res.data})
  })
}
