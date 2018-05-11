import initialState from './initialState'
import {
  CURRENT_USER_SET,
  CURRENT_USER_REMOVE,
  CURRENT_USER_UPDATE
} from '../../actions/currentUser/actionTypes'

export default function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    case CURRENT_USER_SET:
      return {
        ...action.payload
      }
      break
    default:
      return { ...state }
  }
}
