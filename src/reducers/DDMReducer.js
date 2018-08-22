import { GET_COMPANY_DDM } from '../actions/types'

export default function chartDDM (state = {}, action) {
  switch (action.type) {
    case GET_COMPANY_DDM:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
