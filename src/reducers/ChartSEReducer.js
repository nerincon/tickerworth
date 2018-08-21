import { GET_CHART_SE } from '../actions/types'

export default function chartSE (state = {}, action) {
  switch (action.type) {
    case GET_CHART_SE:
      return {
        ...state,
        sechart: action.payload
      }
    default:
      return state
  }
}
