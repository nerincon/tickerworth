import { GET_COMPANY_LOGO } from '../actions/types'

export default function companyLogo (state = {}, action) {
  switch (action.type) {
    case GET_COMPANY_LOGO:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
