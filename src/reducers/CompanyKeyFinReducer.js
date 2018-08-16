import { GET_KEY_FIN_RATIOS } from '../actions/types'

export default function financialRatios (state = {}, action) {
  switch (action.type) {
    case GET_KEY_FIN_RATIOS:
      return {
        ...state,
        financials: action.payload
      }
    default:
      return state
  }
}
