import { GET_COMPANY_PRICE } from '../actions/types'

export default function companyPrice (state = {}, action) {
  switch (action.type) {
    case GET_COMPANY_PRICE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
