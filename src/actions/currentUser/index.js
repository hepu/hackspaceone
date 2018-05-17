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

export function signIn(email, password) {
  return (dispatch) => {
    fetch(
      'http://api.raaf.hansgamarra.com/users/sign_in',
      {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      }
    ).then((response) => {
      console.log(response)
      if (response.status === 401) {
        throw new Error('Authentication Error')
      } else {
        return response.json()
      }
    }).then((json) => {
      console.log('Response:', json)
      alert('Sign in successful!')
      dispatch(set(json.data.attributes))
    }).catch((error) => {
      // TODO: Dispatch error
    })
  }
}
