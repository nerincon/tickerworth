import { GET_CHART_TL } from '../actions/types'

export default function chartTL (state = {}, action) {
  switch (action.type) {
    case GET_CHART_TL:
      return {
        ...state,
        tlchart: action.payload
      }
    default:
      return state
  }
}
