import initialState from './initialState'
import * as actionTypes from '../../actions/currentUser/actionTypes'

export default function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CURRENT_USER_SET:
      return {
        ...action.payload
      }
    default:
      return { ...state }
  }
}
