import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import moviesReducer from './reducers/movies.reducer'
const store = createStore( moviesReducer
    // , composeWithDevTools(applyMiddleware(thunk,
    // all the middlewares
    
    // )
    )

export default store;
