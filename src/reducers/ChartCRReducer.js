import { GET_CHART_CR } from '../actions/types'

export default function chartCR (state = {}, action) {
  switch (action.type) {
    case GET_CHART_CR:
      return {
        ...state,
        crchart: action.payload
      }
    default:
      return state
  }
}
