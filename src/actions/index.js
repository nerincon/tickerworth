import axios from 'axios'

import { GET_KEY_RATIOS } from './types'

export const getFinancialRatios = (symbol, history) => dispatch => {
  axios.get('http://localhost:5000/fin/' + symbol).then(res => {
    dispatch({type: GET_KEY_RATIOS, payload: res.data})
    if (window.location.href.indexOf('fin/') !== -1) {
      history.push(`${symbol}`)
    } else {
      history.push(`fin/${symbol}`)
    }
  })
}
