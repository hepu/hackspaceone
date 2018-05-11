import {
  CURRENT_USER_SET,
  CURRENT_USER_REMOVE,
  CURRENT_USER_UPDATE
} from './actionTypes'

// ActionCreators devuelven actions
// Actions = Objeto JS que contiene: type y payload

export function set(user) {
  return {
    type: CURRENT_USER_SET,
    payload: {
      ...user
    }
  }
}

export function remove() {
  return {
    type: CURRENT_USER_REMOVE
  }
}

export function update(user) {
  return {
    type: CURRENT_USER_UPDATE,
    payload: {
      ...user
    }
  }
}
