import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'
import { Provider } from 'react-redux';




ReactDOM.render(
    <Provider store={store}>
  
        <div>
            <App/>
        </div>
    
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
