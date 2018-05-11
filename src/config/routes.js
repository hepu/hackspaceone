import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { Provider } from 'react-redux';
import Store from './store';

// Scenes
import App from '../App';
import Login from '../scenes/Login'

const routes = (
  <Provider store={Store}>
    <Router>
      <div>
        <Route path="/" component={App} exact/>
        <Route path="/login" component={Login} exact/>
      </div>
    </Router>
  </Provider>
)

export default routes
