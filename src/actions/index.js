import axios from 'axios'

import { GET_KEY_FIN_RATIOS, GET_COMPANY_LOGO, GET_COMPANY_NAME, GET_COMPANY_STATS, GET_CHART_TR, GET_CHART_CR, GET_CHART_GP, GET_CHART_OE, GET_CHART_OI, GET_CHART_NI, GET_COMPANY_NEWS } from './types'

export const getFinancialRatios = (symbol, history) => dispatch => {
  axios.get('http://localhost:5000/fin/' + symbol).then(res => {
    dispatch({type: GET_KEY_FIN_RATIOS, payload: res.data})
    if (window.location.href.indexOf('comp/') !== -1) {
      history.push(`${symbol}`)
    } else {
      history.push(`comp/${symbol}`)
    }
  })
}

export const getCompanyLogo = (symbol) => dispatch => {
  axios.get('http://localhost:5000/logo/' + symbol).then(res => {
    dispatch({type: GET_COMPANY_LOGO, payload: res.data})
  })
}

export const getCompanyName = (symbol) => dispatch => {
  axios.get('http://localhost:5000/name/' + symbol).then(res => {
    dispatch({type: GET_COMPANY_NAME, payload: res.data})
  })
}

export const getCompanyStats = (symbol) => dispatch => {
  axios.get('http://localhost:5000/stats/' + symbol).then(res => {
    dispatch({type: GET_COMPANY_STATS, payload: res.data})
  })
}

export const getTRChartData = (symbol) => dispatch => {
  axios.get('http://localhost:5000/trchart/' + symbol).then(res => {
    dispatch({type: GET_CHART_TR, payload: res.data})
  })
}

export const getCRChartData = (symbol) => dispatch => {
  axios.get('http://localhost:5000/crchart/' + symbol).then(res => {
    dispatch({type: GET_CHART_CR, payload: res.data})
  })
}

export const getGPChartData = (symbol) => dispatch => {
  axios.get('http://localhost:5000/gpchart/' + symbol).then(res => {
    dispatch({type: GET_CHART_GP, payload: res.data})
  })
}

export const getOEChartData = (symbol) => dispatch => {
  axios.get('http://localhost:5000/oechart/' + symbol).then(res => {
    dispatch({type: GET_CHART_OE, payload: res.data})
  })
}

export const getOIChartData = (symbol) => dispatch => {
  axios.get('http://localhost:5000/oichart/' + symbol).then(res => {
    dispatch({type: GET_CHART_OI, payload: res.data})
  })
}

export const getNIChartData = (symbol) => dispatch => {
  axios.get('http://localhost:5000/nichart/' + symbol).then(res => {
    dispatch({type: GET_CHART_NI, payload: res.data})
  })
}

export const getCompanyNews = (symbol) => dispatch => {
  axios.get('http://localhost:5000/news/' + symbol).then(res => {
    dispatch({type: GET_COMPANY_NEWS, payload: res.data})
  })
}
