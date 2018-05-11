import { combineReducers } from 'redux'

// Reducers
import currentUserReducer from './currentUser'

// Combine reducers
export default combineReducers({
  currentUser: currentUserReducer,
})
