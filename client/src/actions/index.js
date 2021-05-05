import movies from '../apis/movies'
import history from '../history'
import {
  FETCH_MOVIES,
  FETCH_TITLES,
  FETCH_DESCRIPTIONS,
  FETCH_PRICES,
  FETCH_QUANTITIES,
  FETCH_MOVIE,
  CREATE_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
} from './types'



export const fetchMovies = () => async dispatch => {
  const response = await movies.get('/movies')

  dispatch({ type: FETCH_MOVIES, payload: response.data })
}

export const fetchMovie = id => async dispatch => {
  const response = await movies.get(`/movies/${id}`)

  dispatch({ type: FETCH_MOVIE, payload: response.data })
}

export const createMovie = formValues => async dispatch => {
  const response = await movies.post('/movies', { ...formValues})

  dispatch({ type: CREATE_MOVIE, payload: response.data })
  history.push('/')
}

export const editMovie = (id, formValues) => async dispatch => {
  const response = await movies.patch(`/movies/${id}`, formValues)

dispatch({ type: EDIT_MOVIE, payload: response.data })
history.push('/')
}

export const deleteMovie = id => async dispatch => {
  await movies.delete(`/movies/${id}`)

  dispatch({ type: DELETE_MOVIE, payload: id })
  history.push('/')
}

export const fetchTitles = () => async dispatch => {
  const response = await movies.get('/movies')

  dispatch({ type: FETCH_TITLES, payload: response.data })
}

export const fetchDescriptions = () => async dispatch => {
  const response = await movies.get('/movies')

  dispatch({ type: FETCH_DESCRIPTIONS, payload: response.data })
}

export const fetchPrices = () => async dispatch => {
  const response = await movies.get('/movies')

  dispatch({ type: FETCH_PRICES, payload: response.data })
}

export const fetchQuantities = () => async dispatch => {
  const response = await movies.get('/movies')

  dispatch({ type: FETCH_QUANTITIES, payload: response.data })
}