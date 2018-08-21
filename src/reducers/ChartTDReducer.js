import { GET_CHART_TD } from '../actions/types'

export default function chartTD (state = {}, action) {
  switch (action.type) {
    case GET_CHART_TD:
      return {
        ...state,
        tdchart: action.payload
      }
    default:
      return state
  }
}
