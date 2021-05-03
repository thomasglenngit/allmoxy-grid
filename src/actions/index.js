import movies from '../apis/movies'
import history from '../history'
import {
  FETCH_MOVIES,
  FETCH_MOVIE,
  CREATE_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
} from './types'

export const fetchMovies = () => async dispatch => {
  const response = await movies.get('/movies')

  dispatch({ type: FETCH_MOVIES, payload: response.data })
}

export const fetchMovie = (id) => async dispatch => {
  const response = await movies.get(`/movies/${id}`)

  dispatch({ type: FETCH_MOVIE, payload: response.data })
}

export const createMovie = formValues => async (dispatch, getState ) => {
  const response = await movies.post('/movies', { ...formValues})

  dispatch({ type: CREATE_MOVIE, payload: response.data })
  history.pushState('/')
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