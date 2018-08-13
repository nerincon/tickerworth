import { GET_COMPANY_NAME } from '../actions/types'

export default function companyName (state = {}, action) {
  switch (action.type) {
    case GET_COMPANY_NAME:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
