import { createStore } from 'redux'
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
import globalReducer from '../reducers'

// Initial states
import currentUserInitialState from '../reducers/currentUser/initialState'

const initialState = {
  currentUser: currentUserInitialState
}

export default createStore(globalReducer, initialState)

// const createStoreWithMiddleware = applyMiddleware(
//   thunk
// )(createStore)
//
// export default createStoreWithMiddleware(globalReducer, initialState)
