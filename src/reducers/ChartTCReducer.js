import { GET_CHART_TC } from '../actions/types'

export default function chartTC (state = {}, action) {
  switch (action.type) {
    case GET_CHART_TC:
      return {
        ...state,
        tcchart: action.payload
      }
    default:
      return state
  }
}
