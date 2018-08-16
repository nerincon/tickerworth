import { GET_CHART_OE } from '../actions/types'

export default function chartOE (state = {}, action) {
  switch (action.type) {
    case GET_CHART_OE:
      return {
        ...state,
        oechart: action.payload
      }
    default:
      return state
  }
}
