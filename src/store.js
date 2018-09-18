import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'
import logger from 'redux-logger';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk'

// setup initial state
const initialState = {}

export const history = createHistory()
const enhancers = []

const middleware = [thunk,logger,ReduxPromise,routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__
  
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )
const store = createStore(
    connectRouter(history)(reducers),
    initialState,
    composedEnhancers
);


export default store 

