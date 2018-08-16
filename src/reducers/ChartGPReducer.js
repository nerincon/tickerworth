import { GET_CHART_GP } from '../actions/types'

export default function chartGP (state = {}, action) {
  switch (action.type) {
    case GET_CHART_GP:
      return {
        ...state,
        gpchart: action.payload
      }
    default:
      return state
  }
}
