import { GET_COMPANY_MC } from '../actions/types'

export default function monteCarlo (state = {}, action) {
  switch (action.type) {
    case GET_COMPANY_MC:
      return {
        ...state,
        mcchart: action.payload
      }
    default:
      return state
  }
}
