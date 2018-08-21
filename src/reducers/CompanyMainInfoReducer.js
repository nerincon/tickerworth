import { GET_COMPANY_MAIN } from '../actions/types'

export default function companyNews (state = {}, action) {
  switch (action.type) {
    case GET_COMPANY_MAIN:
      return {
        ...state,
        maininfo: action.payload
      }
    default:
      return state
  }
}
