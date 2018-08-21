import { GET_CHART_CD } from '../actions/types'

export default function chartCD (state = {}, action) {
  switch (action.type) {
    case GET_CHART_CD:
      return {
        ...state,
        cdchart: action.payload
      }
    default:
      return state
  }
}
