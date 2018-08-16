import { GET_CHART_NI } from '../actions/types'

export default function chartNI (state = {}, action) {
  switch (action.type) {
    case GET_CHART_NI:
      return {
        ...state,
        nichart: action.payload
      }
    default:
      return state
  }
}
