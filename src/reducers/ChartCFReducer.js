import { GET_CHART_CF } from '../actions/types'

export default function chartCF (state = {}, action) {
  switch (action.type) {
    case GET_CHART_CF:
      return {
        ...state,
        cfchart: action.payload
      }
    default:
      return state
  }
}
