import { GET_CHART_OI } from '../actions/types'

export default function chartOI (state = {}, action) {
  switch (action.type) {
    case GET_CHART_OI:
      return {
        ...state,
        oichart: action.payload
      }
    default:
      return state
  }
}
