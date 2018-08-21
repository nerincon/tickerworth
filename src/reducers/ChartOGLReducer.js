import { GET_CHART_OGL } from '../actions/types'

export default function chartOGL (state = {}, action) {
  switch (action.type) {
    case GET_CHART_OGL:
      return {
        ...state,
        oglchart: action.payload
      }
    default:
      return state
  }
}
