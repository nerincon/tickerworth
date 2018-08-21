import { GET_CHART_CA } from '../actions/types'

export default function chartCA (state = {}, action) {
  switch (action.type) {
    case GET_CHART_CA:
      return {
        ...state,
        cachart: action.payload
      }
    default:
      return state
  }
}
