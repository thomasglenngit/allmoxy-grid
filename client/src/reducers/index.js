import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import movieReducer from './movieReducer'

export default combineReducers({ //const rootReducer
  form: formReducer,
  movies: movieReducer,
})

// const rootReducer = (state, action) => {
//   if (action.type === 'FETCH_TITLES' || 'FETCH_DESCRIPTIONS ' || 'FETCH_PRICES ' || 'FETCH_QUANTITIES') {
//     state = undefined
//   } 
//   else {
//     state = {state}
//   }
  
//   return appReducer(state, action)
// }

// export default rootReducer