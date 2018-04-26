import React, { Component } from 'react'

export default class Login extends Component {
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
    fetch(
      'http://private-828b1-raaf.apiary-mock.com/users/sign_in',
      {
        method: 'post',
        data: {
          email: this.state.email,
          password: this.state.password,
        }
      }
    ).then((response) => {
      console.log(response)
      if (response.status === 401) {
        throw 'Authentication Error'
      } else {
        this.setState({
          errorMessage: null
        })
        return response.json()
      }
    }).then((json) => {
      alert('Sign in successful!')
    }).catch((error) => {
      this.setState({
        errorMessage: error
      })
    })
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
