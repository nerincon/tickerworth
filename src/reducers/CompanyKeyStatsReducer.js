import { GET_COMPANY_STATS } from '../actions/types'

export default function financialRatios (state = {}, action) {
  switch (action.type) {
    case GET_COMPANY_STATS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
