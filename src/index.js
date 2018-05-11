import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './config/store';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import Routes from './config/routes'

const App = class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Routes/>
      </Provider>
    )
  }
}

ReactDOM.render(App
, document.getElementById('root'));
registerServiceWorker();
