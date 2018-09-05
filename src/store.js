import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk'
const initialState = {}
const middleware = [thunk,logger,ReduxPromise]
const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middleware)
);


export default store 

