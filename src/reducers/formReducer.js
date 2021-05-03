import _ from 'lodash'
import {
  FETCH_MOVIE,
  CREATE_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    case CREATE_MOVIE:
      return { ...state, [action.payload.id]: action.payload }
    case EDIT_MOVIE:
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_MOVIE:
      return _.omit(state, action.payload)
    default:
      return state
  }
}