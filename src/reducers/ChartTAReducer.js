import { GET_CHART_TA } from '../actions/types'

export default function chartTA (state = {}, action) {
  switch (action.type) {
    case GET_CHART_TA:
      return {
        ...state,
        tachart: action.payload
      }
    default:
      return state
  }
}
