import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Scenes
import App from '../App';
import Login from '../scenes/Login'

const routes = (
  <Router>
    <div>
      <Route path="/" component={App} exact/>
      <Route path="/login" component={Login} exact/>
    </div>
  </Router>
)

export default routes
