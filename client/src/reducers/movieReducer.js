import _ from 'lodash'
import {
  FETCH_MOVIES,
  FETCH_MOVIE,
  FETCH_TITLES,
  FETCH_DESCRIPTIONS,
  FETCH_PRICES,
  FETCH_QUANTITIES,
  CREATE_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
} from '../actions/types'

// const INITIAL_STATE = {
  // fetchMovies: false,
  // fetchMovie: false,
  // editMovie: false,
  // createMovie: false,
  // deleteMovie: false,
  // fetchTitles: false,
  // fetchPrices: false,
  // fetchQuantities: false,
// }


export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    case FETCH_TITLES:
      return { ...state, ..._.mapKeys(action.payload, 'title') }
    case FETCH_DESCRIPTIONS:
      return { ...state, ..._.mapKeys(action.payload, 'description') }
    case FETCH_PRICES:
      return { ...state, ..._.mapKeys(action.payload, 'price') }
    case FETCH_QUANTITIES:
      return { ...state, ..._.mapKeys(action.payload, 'quantity') }
    case FETCH_MOVIE:
      return { ...state, [action.payload.id]: action.payload }
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