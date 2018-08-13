import axios from 'axios'

import { GET_KEY_RATIOS, GET_COMPANY_LOGO, GET_COMPANY_NAME } from './types'

export const getFinancialRatios = (symbol, history) => dispatch => {
  axios.get('http://localhost:5000/fin/' + symbol).then(res => {
    dispatch({type: GET_KEY_RATIOS, payload: res.data})
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
