import { GET_CHART_CC } from '../actions/types'

export default function chartCC (state = {}, action) {
  switch (action.type) {
    case GET_CHART_CC:
      return {
        ...state,
        ccchart: action.payload
      }
    default:
      return state
  }
}
