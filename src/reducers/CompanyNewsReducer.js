import { GET_COMPANY_NEWS } from '../actions/types'

export default function companyNews (state = {}, action) {
  switch (action.type) {
    case GET_COMPANY_NEWS:
      return {
        ...state,
        compnews: action.payload
      }
    default:
      return state
  }
}
