import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as currentUserActions from '../../actions/currentUser'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errorMessage: null
    }
    this._onSubmit = this._onSubmit.bind(this)
    this._onChangeInput = this._onChangeInput.bind(this)
  }

  _onSubmit(event) {
    event.preventDefault()
    this.props.signIn(
      this.state.email,
      this.state.password
    )
    // fetch(
    //   'http://api.raaf.hansgamarra.com/users/sign_in',
    //   {
    //     method: 'post',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //       email: this.state.email,
    //       password: this.state.password,
    //     })
    //   }
    // ).then((response) => {
    //   console.log(response)
    //   if (response.status === 401) {
    //     throw new Error('Authentication Error')
    //   } else {
    //     return response.json()
    //   }
    // }).then((json) => {
    //   console.log('Response:', json)
    //   alert('Sign in successful!')
    //   this.setState({
    //     errorMessage: null
    //   })
    //   this.props.setCurrentUser(json.data.attributes)
    // }).catch((error) => {
    //   this.setState({
    //     errorMessage: error.message
    //   })
    // })
  }

  _onChangeInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this._onSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          value={this.state.email}
          onChange={this._onChangeInput}/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={this.state.password}
          onChange={this._onChangeInput}/>
        {this.renderSubmitBtn()}
        {this.renderError()}
        <br/>
        {JSON.stringify(this.props.currentUser)}
      </form>
    )
  }

  renderSubmitBtn() {
    const buttonStyle = { backgroundColor: 'blue', color: 'white' }

    return (
      <button type="submit" style={buttonStyle}>
        Login
      </button>
    )
  }

  renderError() {
    if (this.state.errorMessage) {
      // There is an error
      return (
        <div style={{ backgroundColor: 'red', color: '#FAA' }}>
          {this.state.errorMessage}
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: userAttributes => dispatch(currentUserActions.set(userAttributes)),
    signIn: (email, password) => currentUserActions.signIn(email, password)(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
