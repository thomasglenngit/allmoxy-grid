import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import movieReducer from './movieReducer'

export default combineReducers({ //const rootReducer
  form: formReducer,
  movies: movieReducer,
})