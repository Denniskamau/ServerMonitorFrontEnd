import { combineReducers } from 'redux';
import {reducer as formReducer } from 'redux-form'
// calling the default reducer to create a link
import defaultReducer from './default-reducer';
import userReducer from './userReducer'
import WebsiteReducer from './websiteReducer'

const rootReducers = combineReducers({
    // add reducer files references here
    default: defaultReducer,
    form :formReducer,
    user: userReducer,
    website:WebsiteReducer

});


// const store = createStore(rootReducers)

export default rootReducers;