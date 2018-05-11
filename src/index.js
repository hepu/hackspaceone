import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import Routes from './config/routes'

ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
