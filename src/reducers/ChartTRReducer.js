import { GET_CHART_TR } from '../actions/types'

export default function chartTR (state = {}, action) {
  switch (action.type) {
    case GET_CHART_TR:
      return {
        ...state,
        trchart: action.payload
      }
    default:
      return state
  }
}
